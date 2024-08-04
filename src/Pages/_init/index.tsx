import { ActivityIndicator, View } from "react-native";
import { useEffect } from "react";
import { getStoredToken } from "../../services/tokenService";
import { useDispatch } from "react-redux";
import Container from "../../components/Container/Container";
import { DesignSystem } from "../../util/Style/DesignSystem";
import { getProfile } from "../../services/auth";
export default function Init(props: any) {
  const { navigation } = props;
  const dispatch = useDispatch();

  const _verifyToken = async () => {
    const token = await getStoredToken("accessToken");
    if (token) {
      const response = await getProfile();
      dispatch({ type: "SET_USER", payload: response });
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
          color={DesignSystem.colors.tertiary}
          size={DesignSystem.icons.large}
        />
      </View>
    </Container>
  );
}
