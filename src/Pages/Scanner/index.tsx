import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import LottieView from "lottie-react-native";
import { DesignSystem } from "../../util/Style/DesignSystem";
import { authInvite, getInvite } from "../../services/invite";
import { InviteType } from "../../types/InviteType";
import { Button } from "../../components/Button/Button";
export default function Scanner() {
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [code, setCode] = useState<InviteType>();
  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = async ({
    type,
    data,
  }: {
    type: string;
    data: any;
  }) => {
    setScanned(true);
    const response = await getInvite(data);
    console.log(response);
    setCode(response);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const mudarStatus = async () => {
    try {
      if (!code) {
        throw new Error("Código não encontrado");
      }
      const response = await authInvite(code?.qrCode);
      console.log(response);
      setScanned(false);
    } catch (error) {
      console.error(error);
    }
  };

  if (scanned) {
    return (
      <View style={styles.container}>
        <Text style={{ color: "#FFF" }}>
          Nome: {code?.guestName} {code?.guestSurname}
        </Text>
        <Text style={{ color: "#FFF" }}>
          Autorizado? {code?.isApproved ? "Sim" : "Não"}
        </Text>
        <Button
          size="large"
          color="primary"
          onPress={mudarStatus}
          type={"solid"}
        >
          Aprovar entrada
        </Button>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <LottieView
        source={require("../../Animations/scanner.json")}
        autoPlay
        loop
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
          opacity: 0.5,
        }}
      />
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: DesignSystem.colors.secondary,
  },
});
