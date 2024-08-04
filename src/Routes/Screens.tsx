import { createNativeStackNavigator } from "@react-navigation/native-stack";
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

export default function Screens() {
  return (
    <Navigator initialRouteName="Home">
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
  );
}
