import { FlatList, View, Image, ScrollView, Pressable } from 'react-native';
import React from 'react';
import styles from './styles';
import CustomText from '../../../components/text/CustomText';
import { Colors } from '../../../constants/Colors';
import Divider from '../../../components/divider/Divider';
import { Services } from '../../../constants/Data';
import { navigate } from '../../../utils/NavigationUtil';
import { Routes } from '../../../constants/Routes';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <CustomText variant="h4" style={styles.greeting}>
          Good Morning
        </CustomText>

        <CustomText variant="h2" style={styles.name}>
          Albert
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
          renderItem={({ item }) => (
            <Pressable
              onPress={() => {
                navigate(Routes.AUTH_STACK, {
                  screen: Routes.LOGIN,
                });
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
          )}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
