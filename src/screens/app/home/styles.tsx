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
    paddingTop: moderateScale(55),
    paddingBottom: moderateScale(20),
    paddingHorizontal: moderateScale(15),
  },

  greeting: {
    color: Colors.white,
    textTransform: 'uppercase',
    fontSize: scale(14),
  },

  name: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: scale(22),
  },

  subtitle: {
    color: Colors.white,
    marginTop: moderateVerticalScale(5),
    fontSize: moderateVerticalScale(12),
  },

  divider: {
    marginVertical: moderateVerticalScale(6),
  },

  dividerStyle: {
    marginTop: moderateVerticalScale(10),
  },

  body: {
    flex: 1,
  },

  card: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    padding: moderateScale(10),
    marginVertical: moderateVerticalScale(6),

    // Android
    elevation: 3,

    // iOS
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
    borderRadius: 10,
  },

  image: {
    width: moderateScale(30),
    height: moderateScale(30),
    tintColor: Colors.white,
  },

  title: {
    fontWeight: 'bold',
    fontSize: scale(15),
    textTransform: 'uppercase',
    marginBottom: moderateScale(4),
  },

  desc: {
    color: Colors.primary_black,
    lineHeight: moderateScale(16),
  },

  servicesTitle: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: scale(16),
  },
  containerStyle: {
    padding: moderateScale(15),
    paddingBottom: moderateScale(100),
  },
});

export default styles;
