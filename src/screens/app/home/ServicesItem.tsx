import React from 'react';
import { View, Image, Pressable } from 'react-native';
import { navigate } from '../../../utils/NavigationUtil';
import { Routes } from '../../../constants/Routes';
import CustomText from '../../../components/text/CustomText';
import { Props } from '../../../types';
import styles from './ServicesItemStyles';

const ServiceItem: React.FC<Props> = ({ item }) => {
  return (
    <Pressable
      onPress={() => {
        navigate(
          Routes.APP_STACK as never,
          {
            screen: Routes.BOOKING_DETAILS,
            params: { item },
          } as never,
        );
      }}
      style={styles.card}
    >
      <View style={styles.imageWrapper}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.image} />
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <CustomText style={styles.title}>{item.title}</CustomText>

        <CustomText style={styles.desc}>{item.description}</CustomText>
      </View>
    </Pressable>
  );
};

export default ServiceItem;
