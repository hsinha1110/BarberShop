import { View, Image, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import CustomText from '../../../components/text/CustomText';
import { Colors } from '../../../constants/Colors';
import Divider from '../../../components/divider/Divider';
import { Images } from '../../../constants/Images';
import { profileData } from '../../../constants/Data';
import ProfileItem from './ProfileItem';
import { moderateScale } from 'react-native-size-matters';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const ProfileScreen = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const handleLogout = async () => {
    try {
      await auth().signOut();
    } catch (error) {
      console.log('Logout error', error);
    }
  };

  useEffect(() => {
    const getUserData = async () => {
      try {
        const uid = auth().currentUser?.uid;
        if (!uid) return;
        const userDoc = await firestore().collection('users').doc(uid).get();
        if (userDoc.exists()) {
          const data = userDoc.data();
          setUserName(data?.fullName || '');
          setUserEmail(data?.email || '');
        }
      } catch (error) {
        console.log('User fetch error', error);
      }
    };
    getUserData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ height: 100, backgroundColor: Colors.jungle_green }}>
        <CustomText style={styles.title}>Profile</CustomText>
      </View>

      <Divider
        width="100%"
        height={5}
        color={Colors.jungle_green}
        style={styles.dividerStyle}
      />
      <View style={styles.userContainer}>
        <Image source={Images.barber1} style={styles.userImage} />
      </View>
      
      <FlatList
        data={profileData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          let value = '';

          if (item.title === 'Name') value = userName;
          if (item.title === 'Email') value = userEmail;

          return (
            <ProfileItem
              icon={item.icon}
              title={item.title}
              value={value}
              onPress={item.title === 'Logout' ? handleLogout : undefined}
            />
          );
        }}
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
