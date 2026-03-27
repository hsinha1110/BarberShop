import React, { useState } from 'react';
import { View, Pressable, Image } from 'react-native';
import styles from './styles';

import CustomText from '../../../components/text/CustomText';
import CustomInput from '../../../components/input/CustomInput';
import CustomButton from '../../../components/button/CustomButton';

import { Images } from '../../../constants/Images';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

import { isValidEmail } from '../../../utils/ValidationUtil';
import { goBack } from '../../../utils/NavigationUtil';

const SignupScreen: React.FC = () => {
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const [nameError, setNameError] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>('');

  const validate = (): boolean => {
    let valid = true;

    setNameError('');
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');

    if (!fullName.trim()) {
      setNameError('Full name is required');
      valid = false;
    } else if (fullName.trim().length < 2) {
      setNameError('Enter valid full name');
      valid = false;
    }

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
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      valid = false;
    }

    if (!confirmPassword.trim()) {
      setConfirmPasswordError('Confirm password is required');
      valid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      valid = false;
    }

    return valid;
  };

  const handleSignUp = async (): Promise<void> => {
    if (!validate()) return;

    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        email.trim(),
        password,
      );

      const user = userCredential.user;

      await firestore().collection('users').doc(user.uid).set({
        uid: user.uid,
        fullName: fullName.trim(),
        email: email.trim(),
        provider: 'email',
        createdAt: new Date(),
      });

      console.log('User created successfully');
    } catch (error: any) {
      console.log('Signup error:', error);

      if (error.code === 'auth/email-already-in-use') {
        setEmailError('Email already exists');
      } else if (error.code === 'auth/invalid-email') {
        setEmailError('Invalid email');
      } else if (error.code === 'auth/weak-password') {
        setPasswordError('Password too weak');
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainStyle}>
        <CustomText style={styles.signUpTextStyle}>Hello....!</CustomText>

        <CustomInput
          placeholder="Name"
          leftIcon="person-outline"
          value={fullName}
          error={nameError}
          onChangeText={(text: string) => {
            setFullName(text);
            if (nameError) setNameError('');
          }}
          containerStyle={styles.inputStyle}
        />

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

        <CustomInput
          placeholder="Confirm Password"
          secureTextEntry
          leftIcon="lock-closed-outline"
          value={confirmPassword}
          error={confirmPasswordError}
          onChangeText={(text: string) => {
            setConfirmPassword(text);
            if (confirmPasswordError) setConfirmPasswordError('');
          }}
          containerStyle={styles.inputStyle}
        />

        <CustomButton
          title="Signup"
          onPress={handleSignUp}
          style={styles.btnStyle}
          textStyle={styles.btnTitle}
        />

        <View style={styles.signUpStyle}>
          <CustomText style={styles.alreadyUserTitle}>
            Already have an account ?
          </CustomText>

          <Pressable onPress={goBack}>
            <CustomText style={styles.loginTitle}>Login</CustomText>
          </Pressable>
        </View>
      </View>

      <Image source={Images.redcircle} style={styles.leftCircle} />
      <Image source={Images.yellowcircle} style={styles.rightCircle} />
    </View>
  );
};

export default SignupScreen;
