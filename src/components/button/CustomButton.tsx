import React from 'react';
import { Text, Pressable } from 'react-native';
import styles from './styles';
import { PrimaryButtonProps } from '../../types';

const CustomButton: React.FC<PrimaryButtonProps> = ({
  title,
  onPress,
  style,
  textStyle,
}) => {
  return (
    <Pressable style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </Pressable>
  );
};

export default CustomButton;
