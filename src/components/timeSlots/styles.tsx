import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/Colors';

const styles = StyleSheet.create({
  heading: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },

  timeBox: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.primary_black,
    paddingVertical: 16,
    borderRadius: 10,
    width: '30%',
    alignItems: 'center',
    marginBottom: 12,
  },

  timeText: {
    fontSize: 14,
    color: Colors.black,
    fontWeight: 'bold',
  },

  selectedTime: {
    backgroundColor: Colors.jungle_green,
  },

  selectedText: {
    color: Colors.white,
  },
});
export default styles;
