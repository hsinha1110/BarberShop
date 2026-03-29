import React, { useState } from 'react';
import { View, ImageBackground,Alert } from 'react-native';
import styles from './styles';
import { Images } from '../../../constants/Images';
import CustomText from '../../../components/text/CustomText';
import CustomInput from '../../../components/input/CustomInput';
import CustomButton from '../../../components/button/CustomButton';
import { navigate } from '../../../utils/NavigationUtil';
import { Routes } from '../../../constants/Routes';
import auth from '@react-native-firebase/auth';
import { isValidEmail } from '../../../utils/ValidationUtil';

const ForgotPasswordScreen: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');

  const validate = (): boolean => {
    let valid = true;
    setEmailError('');

    if (!email.trim()) {
      setEmailError('Email is required');
      valid = false;
    } else if (!isValidEmail(email)) {
      setEmailError('Enter valid email');
      valid = false;
    }

    return valid;
  };

  const handleResetPassword = async (): Promise<void> => {
    if (!validate()) return;

    try {
      await auth().sendPasswordResetEmail(email.trim());

      Alert.alert(
        'Reset Email Sent',
        'Check your email to reset your password.',
        [
          {
            text: 'OK',
            onPress: () =>
              navigate(Routes.AUTH_STACK, { screen: Routes.LOGIN }),
          },
        ],
      );
    } catch (error: any) {
      console.log('Reset error:', error);

      if (error.code === 'auth/user-not-found') {
        setEmailError('User not found');
      } else if (error.code === 'auth/invalid-email') {
        setEmailError('Invalid email');
      } else {
        Alert.alert('Error', 'Something went wrong');
      }
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <ImageBackground
          source={Images.bg}
          style={styles.imgStyle}
          resizeMode="cover"
        />

        <View style={styles.mainStyle}>
          <CustomText style={styles.forgotTextStyle}>
            Forgot Password
          </CustomText>

          <CustomInput
            placeholder="Email"
            keyboardType="email-address"
            leftIcon="mail-outline"
            value={email}
            error={emailError}
            onChangeText={(text: string) => {
              setEmail(text);
              if (emailError) setEmailError('');
            }}
            containerStyle={styles.inputStyle}
          />

          <CustomButton
            title="Reset Password"
            onPress={handleResetPassword}
            style={styles.btnStyle}
            textStyle={styles.btnTitle}
          />
        </View>
      </View>
    </View>
  );
};

export default ForgotPasswordScreen;
