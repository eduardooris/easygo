import React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import AuthScreen from "./isAuth";
import Screens from "./Screens";

export default function Router() {
  const { isAuth } = useSelector((state: any) => {
    return {
      isAuth: state.dados.isAuth,
    };
  });
  return (
    <NavigationContainer>
      {isAuth ? <Screens /> : <AuthScreen />}
    </NavigationContainer>
  );
}
