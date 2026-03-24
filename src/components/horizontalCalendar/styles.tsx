import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/Colors';

const styles = StyleSheet.create({
  dateContainer: {
    width: 45,
    height: 70,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.primary_white,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  selected: {
    backgroundColor: Colors.white,
  },

  day: {
    fontSize: 13,
    color: Colors.white,
    fontWeight: '600',
  },

  date: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.white,
    marginTop: 5,
  },
  titleSlot: {
    fontWeight: 'bold',
    marginBottom: 15,
    color: Colors.white,
    fontSize: 18,
    textTransform: 'uppercase',
  },
});
export default styles;
