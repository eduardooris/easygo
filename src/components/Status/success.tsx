import LottieView from "lottie-react-native";
import Container from "../Container/Container";
import { StyleSheet, View } from "react-native";

export default function Success({ finished }: { finished: () => void }) {
  return (
    <Container>
      <View style={styles.container}>
        <LottieView
          source={require("../../Animations/success.json")}
          autoPlay
          style={{ width: 200, height: 200 }}
          loop={false}
          onAnimationFinish={finished}
        />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
