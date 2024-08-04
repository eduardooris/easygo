import { useEffect, useState } from "react";
import { login } from "../../../services/auth";
import { getStoredToken } from "../../../services/tokenService";
import { useDispatch } from "react-redux";
import { useStatusController } from "../../../util/StatusController/useStatusController";

export const useViewModel = ({ navigate }: any) => {
  const [form, setForm] = useState<{ username: string; password: string }>({
    username: "eduardooris",
    password: "eduardo2309",
  });
  const { loading, error, handleError, handleLoading } = useStatusController();
  const dispatch = useDispatch();
  const onChangeText = (object: any) => {
    setForm({ ...form, ...object });
  };

  const signIn = async () => {
    try {
      handleLoading();
      const response = await login(form);
      if (response) {
        dispatch({ type: "SET_USER", payload: response });
        navigate("Home");
      }
    } catch (error) {
      handleError();
      throw error;
    }
  };

  const createRegister = async () => {};

  return { signIn, onChangeText, form, createRegister, loading, error };
};
