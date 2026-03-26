import React from 'react';
import { View, Image } from 'react-native';
import styles from './BookingItemStyles';
import { Services } from '../../../constants/Data';
import { Booking } from '../../../types';
import CustomText from '../../../components/text/CustomText';

interface Props {
  item: Booking;
}

const BookingItem: React.FC<Props> = ({ item }) => {
  const getServiceImage = (name: string) => {
    const service = Services.find(s => s.title === name);
    return service?.image;
  };

  return (
    <View style={styles.card}>
      {/* Image */}
      <View style={styles.imageWrapper}>
        <View style={styles.imageContainer}>
          <Image
            source={getServiceImage(item.serviceName)}
            style={styles.image}
          />
        </View>
      </View>

      {/* Info */}
      <View style={{ flex: 1 }}>
        <CustomText style={styles.name}>{item.serviceName}</CustomText>

        <CustomText style={styles.desc}>Date: {item.date}</CustomText>

        <CustomText style={styles.desc}>Time: {item.timeSlot}</CustomText>

        <CustomText style={styles.desc}>₹{item.amount}</CustomText>
      </View>
    </View>
  );
};

export default BookingItem;
