import {useState} from 'react';
import {registerParams} from '../../../types/Auth';
import {register} from '../../../services/auth';
import {useNavigation} from '@react-navigation/native';

export const useViewModel = () => {
  const [form, setForm] = useState<registerParams>({
    username: '',
    email: '',
    password: '',
    name: '',
    surname: '',
  });
  const {navigate} = useNavigation();
  const onChangeText = (object: any) => {
    setForm({...form, ...object});
  };

  const createRegister = async () => {
    if (
      form.username.trim() === '' ||
      form.email.trim() === '' ||
      form.password.trim() === '' ||
      form.name.trim() === '' ||
      form.surname.trim() === ''
    )
      return;
    const response = await register(form);
    if (response) {
      navigate('Home' as never);
    }
  };
  return {createRegister, form, onChangeText};
};
