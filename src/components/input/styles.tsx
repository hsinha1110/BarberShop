import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/Colors';
import { moderateScale, scale } from 'react-native-size-matters';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  label: {
    marginBottom: 6,
    color: Colors.black,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: moderateScale(20),
    backgroundColor: Colors.secondary_blue,
    paddingHorizontal: moderateScale(10),
  },
  focused: {
    borderColor: Colors.black,
  },
  errorBorder: {
    borderColor: Colors.error,
  },
  leftIcon: {
    marginRight: moderateScale(8),
  },
  input: {
    flex: 1,
    height: moderateScale(48),
    fontSize: scale(12),
    color: Colors.white,
    paddingVertical: moderateScale(10),
    includeFontPadding: false,
    textAlignVertical: 'center',
    fontWeight: 'bold',
  },
  multiline: {
    height: 'auto',
    paddingVertical: moderateScale(10),
    textAlignVertical: 'top',
  },
  eyeIcon: {
    paddingLeft: moderateScale(8),
  },
  errorText: {
    marginTop: moderateScale(10),
    color: Colors.error,
  },
});
export default styles;
