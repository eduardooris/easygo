import React from "react";
import LottieView from "lottie-react-native";
import Container from "../../components/Container/Container";
export default function SplashScreen({ navigation }: any) {
  return (
    <Container>
      <LottieView
        source={require("../../Animations/splash.json")}
        style={{ width: "100%", height: "100%" }}
        resizeMode="contain"
        speed={2}
        autoPlay
        loop={false}
        onAnimationFinish={() => navigation.navigate("Init")}
      />
    </Container>
  );
}
