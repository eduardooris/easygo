import { ScrollView, View } from "react-native";
import Container from "../../components/Container/Container";
import { Text } from "../../components/Text/Text";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { useForm } from "../../Hooks/useForm";
import { createParty } from "../../services/party";
import { useStatusController } from "../../util/StatusController/useStatusController";
import Success from "../../components/Status/success";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Loading from "../../components/Status/loading";

interface formPros {
  name: string;
  description: string;
  location: string;
  date: Date;
}

export default function AddParty(
  props: NativeStackScreenProps<any, "AddParty">
) {
  const [form, setForm] = useForm<formPros>({
    name: "",
    description: "",
    location: "",
    date: new Date(),
  });
  const { success, error, loading, handleError, handleLoading, handleSuccess } =
    useStatusController();

  const addParty = async () => {
    try {
      handleLoading();
      const response = await createParty(form);
      if (response instanceof Error) {
        handleError();
        return;
      }

      handleSuccess();
    } catch (error) {
      handleError();
      throw error;
    }
  };

  if (success) {
    return <Success finished={() => props.navigation.goBack()} />;
  }

  return (
    <Container
      title="Nova lista"
      icon="arrow-back-ios"
      navigation={props.navigation}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 30,
        }}
      >
        <Text typography="large">Crie uma lista de convites</Text>
        <Input
          placeholder="Nome"
          value={form.name}
          onChangeText={(e) => setForm({ name: e })}
        />
        <Input
          placeholder="Descrição"
          value={form.description}
          onChangeText={(e) => setForm({ description: e })}
        />
        <Input
          placeholder="Localização"
          value={form.location}
          onChangeText={(e) => setForm({ location: e })}
        />

        <Button size="medium" type="solid" loading={true} onPress={addParty}>
          Criar
        </Button>
      </ScrollView>
    </Container>
  );
}
