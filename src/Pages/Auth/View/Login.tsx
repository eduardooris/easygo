import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Container from "../../../components/Container/Container";
import { Text } from "../../../components/Text/Text";
import { useViewModel } from "../ViewModel/Login";
import { Input } from "../../../components/Input/Input";
import { Button } from "../../../components/Button/Button";

export default function Login({ navigation }: any) {
  const { signIn, form, onChangeText, loading, error } =
    useViewModel(navigation);
  return (
    <Container>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}
      >
        <View />
        <View />
        <View />
        <View>
          <View style={{ alignItems: "center" }}>
            <Text typography="large">Easy Go</Text>
          </View>
          <View>
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
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <Button onPress={signIn} type="solid" size="large" loading={loading}>
            Login
          </Button>
        </View>
      </ScrollView>
    </Container>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 100,
    paddingHorizontal: 20,
  },
});
