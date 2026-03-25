import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Colors } from '../../../constants/Colors';
import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  divider: {
    marginVertical: RFValue(6),
  },

  dividerStyle: {
    marginTop: RFValue(5),
  },
  title: {
    color: Colors.white,
    fontWeight: 'bold',
    marginVertical: RFValue(5),
    fontSize: RFValue(18),
    marginTop: moderateScale(50),
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
