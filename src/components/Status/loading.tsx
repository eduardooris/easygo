import { View } from "react-native";
import Container from "../Container/Container";
import { ActivityIndicator } from "react-native";
import { DesignSystem } from "../../util/Style/DesignSystem";

export default function Loading() {
  return (
    <Container>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator
          size={DesignSystem.icons.large}
          color={DesignSystem.colors.tertiary}
        />
      </View>
    </Container>
  );
}
