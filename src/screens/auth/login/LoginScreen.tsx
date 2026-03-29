import React, { useState } from 'react';
import { View, ImageBackground, Pressable } from 'react-native';
import styles from './styles';

import { Images } from '../../../constants/Images';
import CustomText from '../../../components/text/CustomText';
import CustomInput from '../../../components/input/CustomInput';
import CustomButton from '../../../components/button/CustomButton';

import { navigate } from '../../../utils/NavigationUtil';
import { Routes } from '../../../constants/Routes';

import auth from '@react-native-firebase/auth';
import { isValidEmail } from '../../../utils/ValidationUtil';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const validate = (): boolean => {
    let valid = true;

    setEmailError('');
    setPasswordError('');

    if (!email.trim()) {
      setEmailError('Email is required');
      valid = false;
    } else if (!isValidEmail(email)) {
      setEmailError('Enter valid email');
      valid = false;
    }

    if (!password.trim()) {
      setPasswordError('Password is required');
      valid = false;
    }

    return valid;
  };

  const handleLogin = async (): Promise<void> => {
    if (!validate()) return;

    try {
      const userCredential = await auth().signInWithEmailAndPassword(
        email.trim(),
        password,
      );

      console.log('Login success', userCredential.user);

      navigate(Routes.APP_STACK, { screen: Routes.HOME });
    } catch (error: any) {
      console.log('Login error:', error);

      if (error.code === 'auth/user-not-found') {
        setEmailError('User not found');
      } else if (error.code === 'auth/wrong-password') {
        setPasswordError('Wrong password');
      } else if (error.code === 'auth/invalid-email') {
        setEmailError('Invalid email');
      }
    }
  };

  const handleSignUp = (): void => {
    navigate(Routes.AUTH_STACK, { screen: Routes.SIGN_UP });
  };

  const handleForgot = (): void => {
    navigate(Routes.AUTH_STACK, { screen: Routes.FORGOT });
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
          <CustomText style={styles.loginTextStyle}>Welcome Back</CustomText>

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

          <CustomInput
            placeholder="Password"
            secureTextEntry
            leftIcon="lock-closed-outline"
            value={password}
            error={passwordError}
            onChangeText={(text: string) => {
              setPassword(text);
              if (passwordError) setPasswordError('');
            }}
            containerStyle={styles.inputStyle}
          />

          <Pressable onPress={handleForgot}>
            <CustomText style={styles.forgotTextStyle}>
              Forgot Password?
            </CustomText>
          </Pressable>

          <CustomButton
            title="Login"
            onPress={handleLogin}
            style={styles.btnStyle}
            textStyle={styles.btnTitle}
          />

          <View style={styles.signUpStyle}>
            <CustomText style={styles.newUserTitle}>New User </CustomText>

            <Pressable onPress={handleSignUp}>
              <CustomText style={styles.signUpTitle}>SignUp?</CustomText>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
