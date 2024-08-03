import { FlatList, Pressable, StyleSheet, View } from "react-native";
import { Text } from "../../components/Text/Text";
import Container from "../../components/Container/Container";
import { useEffect, useState } from "react";
import { getParties } from "../../services/party";
import { PartyType } from "../../types/Party";
import { BlurView } from "expo-blur";
import { MaterialIcons } from "@expo/vector-icons";
import { DesignSystem } from "../../util/Style/DesignSystem";
import * as Notifications from "expo-notifications";
import { registerForPushNotificationsAsync } from "../../util/Token/registerForPushNotificationsAsync";
import { updateToken } from "../../services/updateToken";
import { useIsFocused } from "@react-navigation/native";
import { CardPost } from "../../components/CardPost/CardPost";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CopyText } from "../../util/CopyText/CopyText";
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function Home({
  navigation,
}: NativeStackScreenProps<any, "Home">) {
  const [parties, setParties] = useState<PartyType[]>([]);
  const isFocused = useIsFocused();
  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => {
      if (token) {
        updateToken(token);
      }
    });
  }, []);

  useEffect(() => {
    if (isFocused) {
      getListParties();
    }
  }, [isFocused]);

  const getListParties = async () => {
    const response = await getParties();
    if (response instanceof Error) {
      return;
    }
    setParties(response);
  };

  return (
    <Container>
      <FlatList
        data={parties}
        style={{ marginTop: 30 }}
        contentContainerStyle={{ alignItems: "center" }}
        renderItem={({ item }) => (
          <CardPost>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 15,
              }}
            >
              <View>
                <Text typography="large">{item.name}</Text>
                <Text typography="medium">{item.description}</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MaterialIcons
                  name="content-copy"
                  onPress={() => CopyText(`cadastro/${item._id}`)}
                  size={DesignSystem.icons.small}
                  color={DesignSystem.colors.white}
                />
                <MaterialIcons
                  onPress={() => navigation.navigate("DetailParty", item)}
                  name="arrow-forward-ios"
                  color={DesignSystem.colors.white}
                  size={DesignSystem.icons.small}
                  style={{ marginLeft: 10 }}
                />
              </View>
            </View>
          </CardPost>
        )}
        keyExtractor={(item, index) =>
          item?._id?.toString() || index.toString()
        }
      />
      <BlurView intensity={70} style={styles.blurContainer}>
        <MaterialIcons
          name="person"
          size={DesignSystem.icons.medium}
          color={DesignSystem.colors.white}
        />
        <MaterialIcons
          name="add"
          size={DesignSystem.icons.large}
          color={DesignSystem.colors.white}
          onPress={() => navigation.navigate("AddParty")}
        />
        <MaterialIcons
          name="qr-code-scanner"
          size={DesignSystem.icons.medium}
          color={DesignSystem.colors.white}
          onPress={() => navigation.navigate("Scanner")}
        />
      </BlurView>
    </Container>
  );
}

const styles = StyleSheet.create({
  blurContainer: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    height: 80,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 100,
    overflow: "hidden",
    flexDirection: "row",
  },
});
