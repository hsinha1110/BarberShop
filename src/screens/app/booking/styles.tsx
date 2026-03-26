import { StyleSheet } from 'react-native';
import { Colors } from '../../../constants/Colors';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  header: {
    backgroundColor: Colors.jungle_green,
    paddingTop: moderateScale(50),
    paddingBottom: moderateScale(20),
    paddingHorizontal: moderateScale(10),
  },

  title: {
    color: Colors.white,
    fontSize: scale(18),
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  card: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    padding: moderateScale(10),
    marginVertical: moderateVerticalScale(6),

    elevation: 3,

    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },

  imageWrapper: {
    borderWidth: moderateScale(2),
    borderColor: Colors.jungle_green,
    borderRadius: moderateScale(12),
    padding: moderateScale(4),
    marginRight: moderateScale(12),
    backgroundColor: Colors.white,
  },

  imageContainer: {
    backgroundColor: Colors.jungle_green,
    height: moderateScale(70),
    width: moderateScale(70),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(10),
  },

  image: {
    width: moderateScale(30),
    height: moderateScale(30),
    tintColor: Colors.white,
  },

  name: {
    fontWeight: 'bold',
    fontSize: scale(15),
    textTransform: 'uppercase',
    marginBottom: moderateScale(4),
  },

  desc: {
    color: Colors.primary_black,
    lineHeight: moderateScale(16),
  },
  dividerStyle: {
    marginTop: moderateVerticalScale(10),
  },
  divider: {
    marginVertical: moderateVerticalScale(6),
  },
});

export default styles;
