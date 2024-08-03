import LottieView from "lottie-react-native";
import Container from "../Container/Container";

export default function Success({ finished }: { finished: () => void }) {
  return (
    <Container>
      <LottieView
        source={require("../../Animations/success.json")}
        autoPlay
        loop={false}
        onAnimationFinish={finished}
      />
    </Container>
  );
}
