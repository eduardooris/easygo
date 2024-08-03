import { ActivityIndicator, View } from "react-native";
import { useEffect } from "react";
import { getStoredToken } from "../../services/tokenService";
import { useDispatch } from "react-redux";
import Container from "../../components/Container/Container";
import { DesignSystem } from "../../util/Style/DesignSystem";
export default function Init(props: any) {
  const { navigation } = props;
  const dispatch = useDispatch();

  const _verifyToken = async () => {
    const response = await getStoredToken("accessToken");
    if (response) {
      //   const response = await getProfile();
      //   dispatch({ type: "SET_PROFILE", payload: response });
      navigation.navigate("Home");
    } else {
      navigation.navigate("Login");
    }
  };

  useEffect(() => {
    _verifyToken();
  }, []);

  return (
    <Container>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator
          color={DesignSystem.colors.secondary}
          size={DesignSystem.icons.large}
        />
      </View>
    </Container>
  );
}
