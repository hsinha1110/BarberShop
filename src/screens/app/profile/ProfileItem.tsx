import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomText from '../../../components/text/CustomText';
import { Colors } from '../../../constants/Colors';
import { moderateScale } from 'react-native-size-matters';

const ProfileItem = ({ icon, title, value, onPress }: any) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.left}>
        <Ionicons name={icon} size={24} color={Colors.white} />
        <View>
          <CustomText style={styles.title}>{title}</CustomText>
          {value ? <CustomText style={styles.value}>{value}</CustomText> : null}
        </View>
      </View>
      <Ionicons name="chevron-forward" size={24} color={Colors.white} />
    </Pressable>
  );
};

export default ProfileItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.jungle_green,
    paddingVertical: moderateScale(18),
    paddingHorizontal: moderateScale(15),
    borderRadius: moderateScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: moderateScale(14),
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(12),
  },

  title: {
    color: Colors.white,
    fontSize: moderateScale(16),
  },

  value: {
    color: Colors.white,
    fontSize: moderateScale(11),
    marginTop: moderateScale(3),
  },
});
