import React from 'react';
import {StyleSheet, Text as TextView} from 'react-native';
import {DesignSystem} from '../../util/Style/DesignSystem';

interface TextProps {
  children: React.ReactNode;
  typography: 'small' | 'medium' | 'large';
  align?: 'center' | 'left' | 'right';
}

export const Text = ({typography, align = 'left', children}: TextProps) => {
  return (
    <TextView
      allowFontScaling={false}
      style={[style.text, typographyStyle[typography], aligns[align]]}>
      {children}
    </TextView>
  );
};

const style = StyleSheet.create({
  text: {
    color: '#FFF',
  },
  small: {
    fontSize: DesignSystem.typography.small,
  },
  medium: {
    fontSize: DesignSystem.typography.medium,
  },
  large: {
    fontSize: DesignSystem.typography.large,
  },
  center: {
    textAlign: 'center',
  },
  left: {
    textAlign: 'left',
  },
  right: {
    textAlign: 'right',
  },
});

const aligns = {
  center: style.center,
  left: style.left,
  right: style.right,
};

const typographyStyle = {
  small: style.small,
  medium: style.medium,
  large: style.large,
};
