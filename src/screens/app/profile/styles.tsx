import { StyleSheet } from 'react-native';
import { Colors } from '../../../constants/Colors';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  divider: {
    marginVertical: scale(6),
  },

  dividerStyle: {
    marginTop: moderateVerticalScale(5),
  },
  title: {
    color: Colors.white,
    fontWeight: 'bold',
    marginVertical: moderateVerticalScale(5),
    fontSize: scale(18),
    marginTop: moderateVerticalScale(50),
    marginHorizontal: moderateScale(10),
    textTransform: 'uppercase',
  },
  userContainer: {
    marginTop: moderateScale(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  userImage: {
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: moderateScale(50),
  },
});
export default styles;
