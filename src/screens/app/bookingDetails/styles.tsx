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
    backgroundColor: Colors.jungle_green,
  },

  headerArea: {
    paddingHorizontal: moderateScale(20),
    paddingBottom: moderateScale(20),
  },

  useContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  userImage: {
    width: moderateScale(80),
    height: moderateScale(80),
    borderRadius: moderateScale(40),
  },

  userInfo: {
    marginLeft: moderateScale(15),
  },

  title: {
    fontSize: scale(22),
    color: Colors.white,
    fontWeight: '700',
  },

  subTitle: {
    fontSize: scale(14),
    color: '#ddd',
    marginTop: moderateVerticalScale(5),
  },

  slotTitle: {
    fontSize: scale(18),
    color: Colors.white,
    fontWeight: '600',
    marginVertical: moderateVerticalScale(20),
  },

  divider: {
    marginVertical: 5,
  },

  bottomArea: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: moderateScale(20),
  },
});
