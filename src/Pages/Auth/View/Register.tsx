import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {useViewModel} from '../ViewModel/Register';
import Container from '../../../components/Container/Container';
import {Text} from '../../../components/Text/Text';
import {Input} from '../../../components/Input/Input';
import {Button} from '../../../components/Button/Button';
export default function Register() {
  const {createRegister, form, onChangeText} = useViewModel();
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
        <Text typography="large">Cadastrar-se</Text>
        <Input
          placeholder="Nome"
          onChangeText={e => onChangeText({name: e})}
          value={form.name}
        />
        <Input
          placeholder="Sobrenome"
          onChangeText={e => onChangeText({surname: e})}
          value={form.surname}
        />
        <Input
          placeholder="Usuário"
          icon=""
          onChangeText={e => onChangeText({username: e})}
          value={form.username}
        />
        <Input
          placeholder="E-mail"
          icon="lock"
          onChangeText={e => onChangeText({email: e})}
          secureTextEntry={true}
          value={form.email}
        />
        <Input
          placeholder="Senha"
          icon="lock"
          onChangeText={e => onChangeText({password: e})}
          secureTextEntry={true}
          value={form.password}
        />
        <View style={style.containerButton}>
          <Button size="medium" onPress={createRegister}>
            Registrar-se
          </Button>
        </View>
      </ScrollView>
    </Container>
  );
}

const style = StyleSheet.create({
  container: {paddingHorizontal: 20, flex: 1, marginTop: 50},
  containerButton: {
    alignItems: 'center',
  },
});
