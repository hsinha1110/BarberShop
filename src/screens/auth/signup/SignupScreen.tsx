import React from 'react';
import { View, Pressable, Image } from 'react-native';
import styles from './styles';
import CustomText from '../../../components/text/CustomText';
import CustomInput from '../../../components/input/CustomInput';
import CustomButton from '../../../components/button/CustomButton';
import { navigate } from '../../../utils/NavigationUtil';
import { Routes } from '../../../constants/Routes';
import { Images } from '../../../constants/Images';

const handleLogin = () => {
  navigate(Routes.AUTH_STACK, { screen: Routes.LOGIN });
};

const SignupScreen = () => {
  return (
    <View style={styles.container}>
      {/* TOP CIRCLES */}

      {/* FORM */}
      <View style={styles.mainStyle}>
        <CustomText style={styles.signUpTextStyle}>Hello....!</CustomText>

        <CustomInput
          placeholder="Name"
          leftIcon="person-outline"
          containerStyle={styles.inputStyle}
        />

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

        <CustomButton
          title="Signup"
          onPress={() => {}}
          style={styles.btnStyle}
          textStyle={styles.btnTitle}
        />

        <View style={styles.signUpStyle}>
          <CustomText style={styles.alreadyUserTitle}>
            Already have an account ? {''}
          </CustomText>

          <Pressable onPress={handleLogin}>
            <CustomText style={styles.loginTitle}>Login</CustomText>
          </Pressable>
        </View>
      </View>

      {/* BOTTOM SHAPES */}
      <Image source={Images.redcircle} style={styles.leftCircle} />

      <Image source={Images.yellowcircle} style={styles.rightCircle} />
    </View>
  );
};

export default SignupScreen;
