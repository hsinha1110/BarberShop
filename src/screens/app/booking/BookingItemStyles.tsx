import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { Colors } from '../../../constants/Colors';

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    padding: moderateScale(10),
    elevation: 3,
  },

  imageWrapper: {
    borderWidth: 2,
    borderColor: Colors.jungle_green,
    borderRadius: 12,
    padding: 4,
    marginRight: 12,
  },

  imageContainer: {
    backgroundColor: Colors.jungle_green,
    height: 70,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  image: {
    width: 30,
    height: 30,
    tintColor: Colors.white,
  },

  name: {
    fontWeight: 'bold',
    fontSize: 15,
    textTransform: 'uppercase',
  },

  desc: {
    color: Colors.primary_black,
  },
});

export default styles;
