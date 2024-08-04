import { View, FlatList, Image, ActivityIndicator } from "react-native";
import Container from "../../components/Container/Container";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useCallback, useEffect, useState } from "react";
import { InviteType } from "../../types/InviteType";
import { CardPost } from "../../components/CardPost/CardPost";
import { Text } from "../../components/Text/Text";
import { captalize } from "../../util/Mascaras/captalize";
import { MaterialIcons } from "@expo/vector-icons";
import { DesignSystem } from "../../util/Style/DesignSystem";
import { Button } from "../../components/Button/Button";
import LottieView from "lottie-react-native";
import { approveInvite, getInvites, rejectInvite } from "../../services/invite";
import { Avatar } from "../../components/Avatar";
import Success from "../../components/Status/success";
import Loading from "../../components/Status/loading";
import { CopyText } from "../../util/CopyText/CopyText";
import { PartyType } from "../../types/Party";
export default function DetailParty(
  props: NativeStackScreenProps<any, "DetailParty">
) {
  const [party, setParty] = useState<PartyType>();
  const [invites, setInvites] = useState<InviteType[]>([]);
  const [sucess, setSucess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    getListInvites();
    if (!props.route.params) {
      props.navigation.goBack();
    }
    setParty(props.route.params as PartyType);
  }, []);

  const getListInvites = async () => {
    try {
      setLoading(true);
      const response = await getInvites(props.route.params?._id);
      if (response instanceof Error) {
        return;
      }
      setInvites(response);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const approvedInvite = async (id: string) => {
    try {
      setLoading(true);
      const response = await approveInvite(id);
      if (response instanceof Error) {
        return;
      }
      await getListInvites();
      setLoading(false);
      setSucess(true);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const rejectedInvite = async (id: string) => {
    try {
      setLoading(true);
      const response = await rejectInvite(id);
      if (response instanceof Error) {
        return;
      }
      await getListInvites();
      setLoading(false);
      setSucess(true);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const renderItem = useCallback(
    ({ item }: { item: InviteType }): JSX.Element => {
      return (
        <CardPost>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              flex: 1,
              padding: 12,
              justifyContent: "space-between",
            }}
          >
            <View
              style={{ justifyContent: "space-between", flexDirection: "row" }}
            >
              <Avatar uri={item.guestPhoto} size="md" />
              <View style={{ marginLeft: 12 }}>
                <Text typography="small">Convidado:</Text>
                <Text typography="large">
                  {captalize(`${item.guestName} ${item.guestSurname}`)}
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              {item.isApproved && (
                <MaterialIcons
                  name="content-copy"
                  onPress={() => CopyText(`qrcode/${item.qrCode}`)}
                  color={DesignSystem.colors.white}
                  size={DesignSystem.icons.small}
                />
              )}
              <MaterialIcons
                name="person-outline"
                style={{ marginLeft: 10 }}
                color={DesignSystem.colors.white}
                size={DesignSystem.icons.small}
              />
            </View>
          </View>
          {!item.isApproved && (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                marginVertical: 10,
              }}
            >
              <Button
                type="outline"
                size="medium"
                onPress={() => rejectedInvite(item._id as string)}
              >
                Negar
              </Button>
              <Button
                type="solid"
                size="medium"
                onPress={() => approvedInvite(item._id as string)}
              >
                Autorizar
              </Button>
            </View>
          )}
        </CardPost>
      );
    },
    []
  );

  if (sucess) {
    return <Success finished={() => setSucess(false)} />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <Container
      title={captalize(party?.name || "")}
      icon="arrow-back-ios"
      navigation={props.navigation}
    >
      <FlatList
        data={invites}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: "center", marginTop: 20 }}
        keyExtractor={(it, index) => it._id?.toString() || index.toString()}
        ListEmptyComponent={<Text typography="large">Nenhum convidados</Text>}
      />
    </Container>
  );
}
