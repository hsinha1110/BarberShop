import { StyleSheet } from 'react-native';
import { Colors } from '../../../constants/Colors';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: Colors.primary_blue,
  },
  imgStyle: {
    height: moderateScale(500),
    width: '100%',
    justifyContent: 'center',
  },
  loginTextStyle: {
    fontSize: scale(24),
    color: 'white',
    fontWeight: 'bold',
    bottom: moderateScale(30),
  },
  forgotTextStyle: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },
  mainStyle: {
    paddingHorizontal: moderateScale(20),
    bottom: moderateScale(100),
  },
  bottomView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: moderateVerticalScale(72),
    justifyContent: 'center',
    marginBottom: moderateVerticalScale(40),
  },
  inputStyle: {
    marginBottom: moderateVerticalScale(20),
  },
  btnStyle: {
    backgroundColor: Colors.primary_orange,
    width: '30%',
    borderRadius: moderateScale(40),
    marginTop: moderateScale(100),
  },
  btnTitle: {
    fontSize: scale(16),
  },
  newUserTitle: {
    color: Colors.white,
  },

  adminStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: moderateVerticalScale(20),
  },
  signUpStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateVerticalScale(20),
  },
  signUpTitle: {
    color: Colors.primary_prink,
    fontWeight: 'bold',
  },
});
