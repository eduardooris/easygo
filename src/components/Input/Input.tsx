import React from "react";

import Icon from "react-native-vector-icons/FontAwesome";
import { Input as TextInput } from "react-native-elements";
import { DesignSystem } from "../../util/Style/DesignSystem";
import { StyleSheet } from "react-native";

interface InputProps {
  placeholder: string;
  value: string;
  icon?: string;
  secureTextEntry?: boolean;
  onChangeText: (text: string) => void;
}

export const Input = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  icon,
}: InputProps) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      autoCapitalize="none"
      style={style.input}
      secureTextEntry={secureTextEntry}
      rightIcon={
        <Icon
          name={icon ? icon : ""}
          size={24}
          color={DesignSystem.colors.secondary}
        />
      }
    />
  );
};

const style = StyleSheet.create({
  input: {
    color: "#FFF",
    fontSize: DesignSystem.typography.medium,
  },
});
