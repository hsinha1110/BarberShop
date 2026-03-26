import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, ActivityIndicator } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import styles from './styles';
import CustomText from '../../../components/text/CustomText';
import Divider from '../../../components/divider/Divider';
import { Colors } from '../../../constants/Colors';
import { Booking } from '../../../types';
import { Services } from '../../../constants/Data';

const BookingScreen = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const uid = auth().currentUser?.uid;
      if (!uid) return;

      const snapshot = await firestore()
        .collection('Bookings')
        .where('userId', '==', uid)
        .get();

      const list: Booking[] = snapshot.docs.map(doc => ({
        id: doc.id,
        ...(doc.data() as Omit<Booking, 'id'>),
      }));

      setBookings(list);
    } catch (error) {
      console.log('Fetch booking error', error);
    } finally {
      setLoading(false);
    }
  };

  // ⭐ service image find
  const getServiceImage = (name: string) => {
    const service = Services.find(s => s.title === name);
    return service?.image;
  };

  // ⭐ Loader
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={Colors.jungle_green} />
        <CustomText style={{ marginTop: 10 }}>Loading bookings...</CustomText>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <CustomText style={styles.title}>My Bookings</CustomText>
      </View>
      <Divider
        width="100%"
        height={5}
        color={Colors.jungle_green}
        style={styles.divider}
      />
      <FlatList
        data={bookings}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 15 }}
        ListEmptyComponent={() => (
          <CustomText style={{ textAlign: 'center', marginTop: 40 }}>
            No bookings yet
          </CustomText>
        )}
        ItemSeparatorComponent={() => (
          <Divider
            width="100%"
            height={5}
            color={Colors.jungle_green}
            style={{ marginVertical: 10 }}
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
        renderItem={({ item }) => {
          console.log('Booking Item:', item);

          return (
            <View style={styles.card}>
              {/* ⭐ Service Image */}
              <View style={styles.imageWrapper}>
                <View style={styles.imageContainer}>
                  <Image
                    source={getServiceImage(item.serviceName)}
                    style={styles.image}
                  />
                </View>
              </View>

              {/* Booking Info */}
              <View style={{ flex: 1 }}>
                <CustomText style={styles.name}>{item.serviceName}</CustomText>

                <CustomText style={styles.desc}>Date: {item.date}</CustomText>

                <CustomText style={styles.desc}>
                  Time: {item.timeSlot}
                </CustomText>

                <CustomText style={styles.desc}>₹{item.amount}</CustomText>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default BookingScreen;
