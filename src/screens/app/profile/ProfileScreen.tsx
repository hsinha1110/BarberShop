import { View, Image, FlatList } from 'react-native';
import React from 'react';
import styles from './styles';
import CustomText from '../../../components/text/CustomText';
import { Colors } from '../../../constants/Colors';
import Divider from '../../../components/divider/Divider';
import { Images } from '../../../constants/Images';
import { profileData } from '../../../constants/Data';
import ProfileItem from './ProfileItem';
import { moderateScale } from 'react-native-size-matters';

const ProfileScreen = () => {
  const renderItem = ({ item }: any) => (
    <ProfileItem icon={item.icon} title={item.title} value={item.value} />
  );

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={{ height: 100, backgroundColor: Colors.jungle_green }}>
        <CustomText style={styles.title}>Profile</CustomText>
      </View>

      <Divider
        width="100%"
        height={5}
        color={Colors.jungle_green}
        style={styles.dividerStyle}
      />

      {/* PROFILE IMAGE */}
      <View style={styles.userContainer}>
        <Image source={Images.barber1} style={styles.userImage} />
      </View>

      {/* LIST */}
      <FlatList
        data={profileData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ProfileItem {...item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: moderateScale(20),
          paddingTop: moderateScale(30),
        }}
      />
    </View>
  );
};

export default ProfileScreen;
