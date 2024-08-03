import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Container from "../../../components/Container/Container";
import { Text } from "../../../components/Text/Text";
import { useViewModel } from "../ViewModel/Login";
import { Input } from "../../../components/Input/Input";
import { Button } from "../../../components/Button/Button";

export default function Login({ navigation }: any) {
  const { signIn, form, onChangeText, createRegister } =
    useViewModel(navigation);
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
        <Text typography="large">Login</Text>
        <Input
          placeholder="Usuário"
          onChangeText={(e) => onChangeText({ username: e })}
          value={form.username}
        />
        <Input
          placeholder="Senha"
          icon="lock"
          onChangeText={(e) => onChangeText({ password: e })}
          secureTextEntry={true}
          value={form.password}
        />
        <View style={style.containerButton}>
          <Button type="solid" size="medium" onPress={signIn}>
            Fazer login
          </Button>
          <View style={{ marginTop: 10 }}>
            <Button type="solid" size="medium" onPress={createRegister}>
              Cadastrar-se
            </Button>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
}

const style = StyleSheet.create({
  container: { paddingHorizontal: 20, flex: 1, marginTop: 50 },
  containerButton: {
    alignItems: "center",
  },
});
