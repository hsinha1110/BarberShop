import { StyleSheet } from 'react-native';
import { Colors } from '../../../constants/Colors';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  header: {
    backgroundColor: Colors.jungle_green,
    paddingTop: RFValue(50),
    paddingBottom: RFValue(20),
    paddingHorizontal: RFValue(15),
  },

  greeting: {
    color: Colors.white,
    textTransform: 'uppercase',
    fontSize: RFValue(14),
  },

  name: {
    color: Colors.white,
    fontWeight: 'bold',
    marginVertical: RFValue(5),
    fontSize: RFValue(22),
  },

  subtitle: {
    color: Colors.white,
    marginTop: RFValue(5),
    fontSize: RFValue(12),
  },

  divider: {
    marginVertical: RFValue(6),
  },

  dividerStyle: {
    marginTop: RFValue(10),
  },

  body: {
    flex: 1,
  },

  card: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    padding: RFValue(10),
    marginVertical: RFValue(6),

    // Android
    elevation: 3,

    // iOS
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },

  imageWrapper: {
    borderWidth: 2,
    borderColor: Colors.jungle_green,
    borderRadius: 12,
    padding: RFValue(4),
    marginRight: RFValue(12),
    backgroundColor: Colors.white,
  },

  imageContainer: {
    backgroundColor: Colors.jungle_green,
    height: RFValue(70),
    width: RFValue(70),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  image: {
    width: RFValue(30),
    height: RFValue(30),
    tintColor: Colors.white,
  },

  title: {
    fontWeight: 'bold',
    fontSize: RFValue(15),
    textTransform: 'uppercase',
    marginBottom: RFValue(4),
  },

  desc: {
    color: Colors.primary_black,
    lineHeight: RFValue(16),
  },

  servicesTitle: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: RFValue(16),
  },
});

export default styles;
