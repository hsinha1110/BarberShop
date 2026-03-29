import React, { useEffect, useState } from 'react';
import { FlatList, View, ScrollView, ListRenderItem } from 'react-native';

import styles from './styles';
import CustomText from '../../../components/text/CustomText';
import { Colors } from '../../../constants/Colors';
import Divider from '../../../components/divider/Divider';
import { Services } from '../../../constants/Data';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import ServiceItem from './ServicesItem';
import { Service } from '../../../types';

const HomeScreen: React.FC = () => {
  const [userName, setUserName] = useState<string>('');

  useEffect(() => {
    const getUserData = async (): Promise<void> => {
      try {
        const uid = auth().currentUser?.uid;
        if (!uid) return;

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

  const renderItem: ListRenderItem<Service> = ({ item }) => {
    return <ServiceItem item={item} />;
  };

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

      <View style={styles.body}>
        <FlatList
          style={{ flex: 1 }}
          data={Services}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.containerStyle}
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
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
