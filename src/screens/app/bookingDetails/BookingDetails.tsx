import React from 'react';
import { View, Image } from 'react-native';
import Header from '../../../components/header/Header';
import styles from './styles';
import { Images } from '../../../constants/Images';
import CustomText from '../../../components/text/CustomText';
import HorizontalCalendar from '../../../components/horizontalCalendar/HorizontalCalendar';
import { Colors } from '../../../constants/Colors';
import Divider from '../../../components/divider/Divider';
import TimeSlots from '../../../components/timeSlots/TimeSlots';
import CustomButton from '../../../components/button/CustomButton';

const BookingDetails = () => {
  const handleDateSelect = (date: string) => {
    console.log('Selected Date:', date);
  };
  const handleBookNow = () => {};
  return (
    <View style={styles.container}>
      {/* GREEN HEADER AREA */}
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
      {/* Divider */}
      <Divider
        width="100%"
        height={3}
        color={Colors.white}
        style={styles.divider}
      />
      {/* WHITE BOTTOM AREA */}
      <View style={styles.bottomArea}>
        <TimeSlots />

        <CustomButton
          title="BOOK NOW"
          onPress={() => console.log('Clicked')}
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
