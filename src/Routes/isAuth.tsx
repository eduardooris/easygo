import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../Pages/Auth/View/Login";
import Init from "../Pages/_init";
import SplashScreen from "../Pages/Splash";

type RootStackParamList = {
  Splash: undefined;
  Init: undefined;
  Login: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

const AuthScreen = () => {
  return (
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
    </Navigator>
  );
};

export default AuthScreen;
