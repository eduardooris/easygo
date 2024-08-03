import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../Pages/Auth/View/Login";
import Init from "../Pages/_init";
import SplashScreen from "../Pages/Splash";
import Home from "../Pages/Home";
import AddParty from "../Pages/AddParty";
import DetailParty from "../Pages/DetailParty";
import Scanner from "../Pages/Scanner";
export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  CreateTag: undefined;
  Splash: undefined;
  Init: undefined;
  AddParty: undefined;
  DetailParty: undefined;
  Scanner: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export default function Router() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Splash">
        <Screen
          name="Splash"
          options={{
            headerShown: false,
          }}
          component={SplashScreen}
        />
        <Screen
          name="Init"
          options={{
            headerShown: false,
          }}
          component={Init}
        />
        <Screen
          name="Login"
          options={{
            headerShown: false,
          }}
          component={Login}
        />
        <Screen
          name="Home"
          options={{
            headerShown: false,
          }}
          component={Home}
        />
        <Screen
          name="AddParty"
          options={{
            headerShown: false,
          }}
          component={AddParty}
        />
        <Screen
          name="DetailParty"
          options={{
            headerShown: false,
          }}
          component={DetailParty}
        />
        <Screen
          name="Scanner"
          component={Scanner}
          options={{
            headerShown: false,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
