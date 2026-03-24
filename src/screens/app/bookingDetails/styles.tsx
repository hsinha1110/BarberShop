import { StyleSheet } from 'react-native';
import { Colors } from '../../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.jungle_green,
  },

  headerArea: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },

  useContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  userImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },

  userInfo: {
    marginLeft: 15,
  },

  title: {
    fontSize: 22,
    color: Colors.white,
    fontWeight: '700',
  },

  subTitle: {
    fontSize: 14,
    color: '#ddd',
    marginTop: 5,
  },

  slotTitle: {
    fontSize: 18,
    color: Colors.white,
    fontWeight: '600',
    marginVertical: 20,
  },

  divider: {
    marginVertical: 5,
  },

  bottomArea: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 20,
  },
});
