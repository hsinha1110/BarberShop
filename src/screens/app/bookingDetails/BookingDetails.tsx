import React, { useEffect, useState } from 'react';
import { View, Image, Alert } from 'react-native';
import Header from '../../../components/header/Header';
import styles from './styles';
import { Images } from '../../../constants/Images';
import CustomText from '../../../components/text/CustomText';
import HorizontalCalendar from '../../../components/horizontalCalendar/HorizontalCalendar';
import { Colors } from '../../../constants/Colors';
import Divider from '../../../components/divider/Divider';
import TimeSlots from '../../../components/timeSlots/TimeSlots';
import CustomButton from '../../../components/button/CustomButton';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useStripe } from '@stripe/stripe-react-native';
import { navigate } from '../../../utils/NavigationUtil';
import { Routes } from '../../../constants/Routes';
import { useRoute } from '@react-navigation/native';
import { BookingDetailsRouteProp } from '../../../types';

const BookingDetails: React.FC = () => {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();

  const route = useRoute<BookingDetailsRouteProp>();
  const { item } = route.params;

  const [userName, setUserName] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const uid = auth().currentUser?.uid;

  useEffect(() => {
    const getUserData = async (): Promise<void> => {
      try {
        if (!uid) return;

        const userDoc = await firestore().collection('users').doc(uid).get();

        if (userDoc.exists()) {
          setUserName(userDoc.data()?.fullName || '');
        }
      } catch (error) {
        console.log(error);
      }
    };

    getUserData();
  }, [uid]);

  const handleDateSelect = (date: string): void => {
    setSelectedDate(date);
  };

  const handleTimeSelect = (time: string): void => {
    setSelectedTime(time);
  };

  // CALL STRIPE SERVER
  const fetchPaymentSheetParams = async () => {
    const response = await fetch('http://192.168.1.34:3000/payment-sheet', {
      method: 'POST',
    });

    const { paymentIntent, ephemeralKey, customer } = await response.json();

    return {
      paymentIntent,
      ephemeralKey,
      customer,
    };
  };

  // INIT STRIPE
  const initializePaymentSheet = async (): Promise<void> => {
    const { paymentIntent, ephemeralKey, customer } =
      await fetchPaymentSheetParams();

    const { error } = await initPaymentSheet({
      merchantDisplayName: 'Barber Shop',
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      returnURL: 'barbershop://stripe-redirect',
      allowsDelayedPaymentMethods: true,
    });

    if (error) {
      throw new Error(error.message);
    }
  };

  // OPEN PAYMENT
  const openPaymentSheet = async (): Promise<void> => {
    const { error } = await presentPaymentSheet();

    if (error) {
      Alert.alert('Payment Failed');
    } else {
      await saveBooking();
    }
  };

  // SAVE BOOKING
  const saveBooking = async (): Promise<void> => {
    await firestore().collection('Bookings').add({
      userId: uid,
      userName: userName,
      barberName: 'John Doe',
      serviceName: item.title,
      serviceImage: item.image,

      date: selectedDate,
      timeSlot: selectedTime,
      amount: 100,

      status: 'paid',
      createdAt: firestore.FieldValue.serverTimestamp(),
    });

    Alert.alert(
      'Booking Confirmed',
      'Your appointment has been booked successfully!',
      [
        {
          text: 'OK',
          onPress: () => navigate(Routes.APP_STACK, { screen: Routes.BOOKING }),
        },
      ],
    );
  };

  const handleBookNow = async (): Promise<void> => {
    if (!selectedDate || !selectedTime) {
      Alert.alert('Please select date and time');
      return;
    }

    try {
      await initializePaymentSheet();
      await openPaymentSheet();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerArea}>
        <Header />
        <View style={styles.useContainer}>
          <Image source={Images.barber1} style={styles.userImage} />
          <View style={styles.userInfo}>
            <CustomText style={styles.title}>JOHN DOE</CustomText>
            <CustomText style={styles.subTitle}>Barberman</CustomText>
          </View>
        </View>
        <CustomText style={styles.slotTitle}>CHOOSE YOUR SLOT</CustomText>
        <HorizontalCalendar onSelectDate={handleDateSelect} />
      </View>

      <Divider
        width="100%"
        height={3}
        color={Colors.white}
        style={styles.divider}
      />

      <View style={styles.bottomArea}>
        <TimeSlots onSelectTime={handleTimeSelect} />

        <CustomButton
          title="BOOK NOW"
          onPress={handleBookNow}
          style={{
            backgroundColor: Colors.jungle_green,
            marginTop: 20,
            width: '50%',
            justifyContent: 'center',
          }}
          textStyle={{ color: Colors.white }}
        />
      </View>
    </View>
  );
};

export default BookingDetails;
