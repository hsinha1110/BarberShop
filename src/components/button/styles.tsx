import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/Colors';

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary_white,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
    alignSelf: 'center',
  },
  text: {
    color: Colors.primary_black,
    fontSize: 22,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
export default styles;
