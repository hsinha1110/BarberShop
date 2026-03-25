import { StyleSheet } from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import { Colors } from '../../../constants/Colors';
import { FONTS } from '../../../constants/Fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2736A3',
  },

  topDesign: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: moderateScale(200),
  },

  topBg: {
    width: '100%',
    height: '100%',
  },

  mainStyle: {
    marginTop: moderateScale(180),
    paddingHorizontal: 25,
  },

  signUpTextStyle: {
    fontSize: scale(28),
    color: 'white',
    fontWeight: 'bold',
    fontFamily: FONTS.PACIFICO_REGULAR,
    bottom: moderateScale(10),
  },

  inputStyle: {
    marginBottom: moderateVerticalScale(10),
  },

  alreadyUserTitle: {
    color: Colors.white,
  },

  signUpTitle: {
    color: Colors.primary_orange,
  },

  leftCircle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: moderateScale(160),
    height: moderateScale(160),
  },

  rightCircle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: moderateScale(160),
    height: moderateScale(160),
  },
  loginTitle: {
    color: Colors.primary_prink,
    fontWeight: 'bold',
  },
  signUpStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: moderateVerticalScale(20),
  },
  btnStyle: {
    backgroundColor: Colors.primary_orange,
    width: '30%',
    borderRadius: moderateScale(40),
    marginTop: moderateScale(20),
  },
  btnTitle: {
    fontSize: scale(16),
  },
});
