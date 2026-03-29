import { View, Image, FlatList, Alert } from 'react-native';
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
import { ProfileDataItem } from '../../../types';

const ProfileScreen: React.FC = () => {
  const [userName, setUserName] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');

  const handleLogout = async (): Promise<void> => {
    try {
      await auth().signOut();
    } catch (error) {
      console.log('Logout error', error);
    }
  };

  useEffect(() => {
    const getUserData = async (): Promise<void> => {
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

  const confirmDelete = (): void => {
    Alert.alert(
      'Delete Account',
      'This will permanently delete your account.',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: deleteAccount },
      ],
    );
  };

  const deleteAccount = async (): Promise<void> => {
    const uid = auth().currentUser?.uid;

    if (!uid) return;

    try {
      await firestore().collection('users').doc(uid).delete();

      const snapshot = await firestore()
        .collection('Bookings')
        .where('userId', '==', uid)
        .get();

      const batch = firestore().batch();

      snapshot.docs.forEach(doc => {
        batch.delete(doc.ref);
      });

      await batch.commit();

      await auth().currentUser?.delete();
    } catch (error) {
      console.log('Delete account error', error);
    }
  };

  const renderItem = ({ item }: { item: ProfileDataItem }) => {
    let value = '';

    if (item.title === 'Name') value = userName;
    if (item.title === 'Email') value = userEmail;

    return (
      <ProfileItem
        icon={item.icon}
        title={item.title}
        value={value}
        onPress={
          item.title === 'Logout'
            ? handleLogout
            : item.title === 'Delete Account'
            ? confirmDelete
            : undefined
        }
      />
    );
  };

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
        renderItem={renderItem}
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
