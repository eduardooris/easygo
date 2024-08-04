import { StyleSheet, View, Platform, TouchableOpacity } from "react-native";
import React from "react";
import { DesignSystem } from "../../util/Style/DesignSystem";
import { MaterialIcons } from "@expo/vector-icons";
import { Text } from "../Text/Text";

interface ContainerProps {
  title?: string;
  icon?: keyof typeof MaterialIcons.glyphMap;
  navigation?: any;
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
  navigation,
  title,
  icon = "arrow-back-ios",
  children,
}) => {
  return (
    <View style={styles.container}>
      {navigation ? (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.header}
        >
          <MaterialIcons
            name={icon}
            size={DesignSystem.icons.medium}
            color={DesignSystem.colors.tertiary}
          />
          <Text typography="large">{title}</Text>
        </TouchableOpacity>
      ) : (
        title && <Text typography="large">{title}</Text>
      )}
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DesignSystem.colors.primary,
    paddingTop: Platform.OS === "ios" ? 60 || 0 : 0,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginLeft: 15,
  },
  title: {
    marginLeft: 10,
  },
  content: {
    flex: 1,
  },
});

export default Container;
