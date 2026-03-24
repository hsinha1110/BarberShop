import React from 'react';
import { View, DimensionValue, ViewStyle } from 'react-native';

type DividerProps = {
  width?: DimensionValue;
  height?: number;
  color?: string;
  marginTop?: number;
  marginBottom?: number;
  marginHorizontal?: number;
  style?: ViewStyle;
};

const Divider: React.FC<DividerProps> = ({
  width = '100%',
  height = 1,
  color = '#000',
  marginTop = 8,
  marginBottom = 0,
  marginHorizontal = 0,
  style,
}) => {
  return (
    <View
      style={[
        {
          width,
          height,
          backgroundColor: color,
          marginTop,
          marginBottom,
          marginHorizontal,
        },
        style,
      ]}
    />
  );
};

export default Divider;
