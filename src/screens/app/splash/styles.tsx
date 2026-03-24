import { StyleSheet } from 'react-native';
import { Colors } from '../../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imageContainer: {
    flex: 0.99,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
  },

  contentContainer: {
    flex: 0.4,
    backgroundColor: Colors.jungle_green,
    justifyContent: 'center',
  },
  titleStyle: {
    marginBottom: 30,
    textAlign: 'center',
    color: Colors.white,
  },
});

export default styles;
