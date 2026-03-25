import React, { FC, useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';
import { Colors } from '../../constants/Colors';
import CustomText from '../text/CustomText';
import { moderateScale } from 'react-native-size-matters';
import styles from './styles';

interface Props {
  label?: string;
  value?: string;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  containerStyle?: ViewStyle | ViewStyle[];
  inputStyle?: TextStyle | TextStyle[];
  error?: string;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'number-pad' | 'phone-pad';
  multiline?: boolean;
  numberOfLines?: number;
  editable?: boolean;
  leftIcon?: string;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters'; // **make optional**
}

const CustomInput: FC<Props> = ({
  label,
  value,
  placeholder,
  onChangeText,
  containerStyle,
  inputStyle,
  error,
  secureTextEntry = false,
  keyboardType = 'default',
  multiline = false,
  numberOfLines = 1,
  editable = true,
  leftIcon,
  autoCapitalize = 'none', 
}) => {
  const [focused, setFocused] = useState(false);
  const [hidePassword, setHidePassword] = useState(secureTextEntry);
  return (
    <View style={containerStyle}>
      {label && (
        <CustomText variant="h6" style={styles.label}>
          {label}
        </CustomText>
      )}
      <View
        style={[
          styles.inputContainer,
          focused && styles.focused,
          error && styles.errorBorder,
        ]}
      >
        {leftIcon && (
          <Ionicons
            name={leftIcon}
            size={20}
            color={focused ? Colors.white : Colors.white}
            style={styles.leftIcon}
          />
        )}
        <TextInput
          value={value}
          selectionColor={Colors.white} 
          placeholder={placeholder}
          placeholderTextColor={Colors.white}
          onChangeText={onChangeText}
          secureTextEntry={hidePassword}
          keyboardType={keyboardType}
          multiline={multiline}
          numberOfLines={numberOfLines}
          editable={editable}
          autoCapitalize={autoCapitalize}
          style={[styles.input, multiline && styles.multiline, inputStyle]}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />

        {secureTextEntry && (
          <TouchableOpacity
            onPress={() => setHidePassword(!hidePassword)}
            style={styles.eyeIcon}
          >
            <Ionicons
              name={hidePassword ? 'eye-off-outline' : 'eye-outline'}
              size={20}
              color={Colors.white}
            />
          </TouchableOpacity>
        )}
      </View>

      {error && (
        <CustomText variant="h8" style={styles.errorText}>
          {error}
        </CustomText>
      )}
    </View>
  );
};

export default CustomInput;
