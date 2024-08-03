import { useEffect, useState } from "react";
import { login } from "../../../services/auth";
import { getStoredToken } from "../../../services/tokenService";
import { useDispatch } from "react-redux";

export const useViewModel = ({ navigate }: any) => {
  const [form, setForm] = useState<{ username: string; password: string }>({
    username: "eduardooris",
    password: "eduardo2309",
  });
  const dispatch = useDispatch();
  const onChangeText = (object: any) => {
    setForm({ ...form, ...object });
  };

  const signIn = async () => {
    const response = await login(form);
    if (response) {
      navigate("Home");
    }
  };

  const createRegister = async () => {};

  return { signIn, onChangeText, form, createRegister };
};
