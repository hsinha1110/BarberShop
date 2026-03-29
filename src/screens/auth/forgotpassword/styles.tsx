import { StyleSheet } from 'react-native';
import { Colors } from '../../../constants/Colors';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import { FONTS } from '../../../constants/Fonts';

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
  forgotTextStyle: {
    fontSize: scale(28),
    color: 'white',
    bottom: moderateScale(10),
    fontFamily: FONTS.PACIFICO_REGULAR,
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
    marginBottom: moderateVerticalScale(10),
  },
  btnStyle: {
    backgroundColor: Colors.primary_orange,
    width: '60%',
    borderRadius: moderateScale(40),
    marginTop: moderateScale(70),
  },
  btnTitle: {
    fontSize: scale(16),
  },
});
