import { View, ImageBackground } from 'react-native';
import React from 'react';
import styles from './styles';
import { Images } from '../../../constants/Images';
import CustomButton from '../../../components/button/CustomButton';
import CustomText from '../../../components/text/CustomText';
import { navigate } from '../../../utils/NavigationUtil';
import { Routes } from '../../../constants/Routes';
import { Colors } from '../../../constants/Colors';

const SplashScreen = () => {
  const handleBookNow = () => {
    navigate(Routes.AUTH_STACK, { screen: Routes.LOGIN });
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={Images.barber}
          resizeMode="cover"
          style={styles.image}
        />
      </View>

      <View style={styles.contentContainer}>
        <CustomText variant="h6" style={styles.titleStyle}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </CustomText>

        <CustomButton
          title="BOOK NOW"
          onPress={() => handleBookNow()}
          style={{
            backgroundColor: Colors.white,
            marginTop: 20,
            width: '50%',
          }}
          textStyle={{ color: Colors.black }}
        />
      </View>
    </View>
  );
};

export default SplashScreen;
