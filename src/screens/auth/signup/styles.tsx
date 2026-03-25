import { StyleSheet } from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import { Colors } from '../../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2736A3',
  },

  topDesign: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 200,
  },

  topBg: {
    width: '100%',
    height: '100%',
  },

  mainStyle: {
    marginTop: 180,
    paddingHorizontal: 25,
  },

  signUpTextStyle: {
    fontSize: scale(24),
    color: 'white',
    fontWeight: 'bold',
    bottom: moderateScale(30),
  },

  inputStyle: {
    marginBottom: 12,
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
    width: 160,
    height: 160,
  },

  rightCircle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 160,
    height: 160,
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
    width: '50%',
    borderRadius: 40,
    marginTop: moderateScale(100),
  },
  btnTitle: {
    fontSize: scale(16),
  },
});
