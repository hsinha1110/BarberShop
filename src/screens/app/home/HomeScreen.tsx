import { FlatList, View, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import CustomText from '../../../components/text/CustomText';
import { Colors } from '../../../constants/Colors';
import Divider from '../../../components/divider/Divider';
import { Services } from '../../../constants/Data';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import ServiceItem from './ServicesItem';

const HomeScreen = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const getUserData = async () => {
      try {
        const uid = auth().currentUser?.uid;
        const userDoc = await firestore().collection('users').doc(uid).get();
        if (userDoc.exists()) {
          setUserName(userDoc.data()?.fullName || '');
        }
      } catch (error) {
        console.log('User fetch error', error);
      }
    };
    getUserData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <CustomText variant="h2" style={styles.name}>
          {userName || 'User'}
        </CustomText>

        <Divider
          width="70%"
          height={3}
          color={Colors.white}
          style={styles.divider}
        />

        <CustomText variant="h6" style={styles.subtitle}>
          Fresh fades, clean cuts,{'\n'}Your Style, just one tap away
        </CustomText>
      </View>
      <Divider
        width="100%"
        height={5}
        color={Colors.jungle_green}
        style={styles.divider}
      />
      {/* BODY */}
      <View style={styles.body}>
        <FlatList
          style={{ flex: 1 }}
          data={Services}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ padding: 15, paddingBottom: 100 }}
          ListHeaderComponent={() => (
            <CustomText variant="h4" style={styles.servicesTitle}>
              Services
            </CustomText>
          )}
          ItemSeparatorComponent={() => (
            <Divider
              width="100%"
              height={5}
              color={Colors.jungle_green}
              style={styles.dividerStyle}
            />
          )}
          ListFooterComponent={() => (
            <Divider
              width="100%"
              height={5}
              color={Colors.jungle_green}
              style={styles.dividerStyle}
            />
          )}
          renderItem={({ item }) => <ServiceItem item={item} />}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
