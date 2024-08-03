import { StyleSheet, View, Platform, StatusBar } from "react-native";
import React from "react";
import { DesignSystem } from "../../util/Style/DesignSystem";
interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DesignSystem.colors.primary,
    paddingTop: Platform.OS == "ios" ? "15%" : 0,
  },
});
