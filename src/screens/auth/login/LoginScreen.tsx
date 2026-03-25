import React from 'react';
import { View, ImageBackground, Text, Pressable, Image } from 'react-native';
import styles from './styles';
import { Images } from '../../../constants/Images';
import CustomText from '../../../components/text/CustomText';
import CustomInput from '../../../components/input/CustomInput';
import CustomButton from '../../../components/button/CustomButton';
import { moderateVerticalScale } from 'react-native-size-matters';
import { navigate } from '../../../utils/NavigationUtil';
import { Routes } from '../../../constants/Routes';

const handleSignUp = () => {
  navigate(Routes.AUTH_STACK, { screen: Routes.SIGN_UP });
};

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      {/* TOP DESIGN */}

      <View>
        <ImageBackground
          source={Images.bg}
          style={styles.imgStyle}
          resizeMode="cover"
        ></ImageBackground>
        <View style={styles.mainStyle}>
          <CustomText style={styles.loginTextStyle}>Welcome Back</CustomText>

          <CustomInput
            placeholder="Email"
            keyboardType="email-address"
            leftIcon="mail-outline"
            containerStyle={styles.inputStyle}
          />

          <CustomInput
            placeholder="Password"
            secureTextEntry
            leftIcon="lock-closed-outline"
            containerStyle={styles.inputStyle}
          />
          <CustomText style={styles.forgotTextStyle}>
            Forgot Password?
          </CustomText>

          <CustomButton
            title="Login"
            onPress={() => {}}
            style={styles.btnStyle}
            textStyle={styles.btnTitle}
          />

          <View style={styles.signUpStyle}>
            <CustomText style={styles.newUserTitle}>New User </CustomText>
            <Pressable onPress={() => handleSignUp()}>
              <CustomText style={styles.signUpTitle}>SignUp?</CustomText>
            </Pressable>
          </View>

          <View style={styles.adminStyle}>
            <Pressable onPress={() => handleSignUp()}>
              <CustomText style={styles.signUpTitle}>Admin Panel</CustomText>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
