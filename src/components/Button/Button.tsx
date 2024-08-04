import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { DesignSystem } from "../../util/Style/DesignSystem";
interface ButtonProps {
  onPress?: () => void;
  disabled?: boolean;
  size: "small" | "medium" | "large";
  type: "solid" | "outline" | "clean";
  color?: "primary" | "secondary" | "warning" | "sucess";
  loading?: boolean;
  children: React.ReactNode;
}

export const Button = ({
  onPress,
  disabled,
  size,
  children,
  color,
  type,
  loading,
}: ButtonProps) => {
  const styleType = disabled
    ? style.disabled[type]
    : style[color || "primary"][type] || style.primary;
  const styleSize = sizes[size] || sizeStyle.medium;
  return (
    <TouchableOpacity
      style={{ ...styleType, ...styleSize }}
      onPress={onPress}
      disabled={loading || disabled}
    >
      {loading ? (
        <ActivityIndicator
          color={DesignSystem.colors.secondary}
          size={DesignSystem.icons.small}
        />
      ) : (
        <Text allowFontScaling={false} style={{ color: "#FFF" }}>
          {children}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const baseWrapper = StyleSheet.create({
  button: {
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
});

const sizeStyle = StyleSheet.create({
  small: {
    width: 100,
    height: 50,
  },
  medium: {
    width: 150,
    height: 50,
  },
  large: {
    width: 200,
    height: 50,
  },
});

const primary = StyleSheet.create({
  solid: {
    ...baseWrapper.button,
    borderColor: DesignSystem.colors.tertiary,
    backgroundColor: DesignSystem.colors.tertiary,
  },
  outline: {
    ...baseWrapper.button,
    borderColor: DesignSystem.colors.tertiary,
  },
  clean: {
    ...baseWrapper.button,
    backgroundColor: "transparent",
  },
});

const secondary = StyleSheet.create({
  solid: {
    ...baseWrapper.button,
    backgroundColor: DesignSystem.colors.tertiary,
  },
  outline: {
    ...baseWrapper.button,
    borderColor: DesignSystem.colors.tertiary,
    borderWidth: 1,
  },
  clean: {
    ...baseWrapper.button,
    backgroundColor: "transparent",
  },
});

const sucess = StyleSheet.create({
  solid: {
    ...baseWrapper.button,
    backgroundColor: DesignSystem.colors.success,
  },
  outline: {
    ...baseWrapper.button,
    borderColor: DesignSystem.colors.success,
    borderWidth: 1,
  },
  clean: {
    ...baseWrapper.button,
    backgroundColor: "transparent",
  },
});

const warning = StyleSheet.create({
  solid: {
    ...baseWrapper.button,
    backgroundColor: DesignSystem.colors.warning,
  },
  outline: {
    ...baseWrapper.button,
    borderColor: DesignSystem.colors.warning,
    borderWidth: 1,
  },
  clean: {
    ...baseWrapper.button,
    backgroundColor: "transparent",
  },
});

const disabled = StyleSheet.create({
  solid: {
    backgroundColor: DesignSystem.colors.disabled,
    ...baseWrapper.button,
  },
  outline: {
    ...baseWrapper.button,
    borderColor: DesignSystem.colors.disabled,
    borderWidth: 1,
  },
  clean: {
    ...baseWrapper.button,
    backgroundColor: "transparent",
  },
});

const style = {
  primary,
  secondary,
  disabled,
  sucess,
  warning,
};

const sizes = {
  small: sizeStyle.small,
  medium: sizeStyle.medium,
  large: sizeStyle.large,
};
