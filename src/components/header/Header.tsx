import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../constants/Colors';
import styles from './styles';

const Header = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Pressable style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-outline" size={20} color={Colors.white} />
      </Pressable>
    </SafeAreaView>
  );
};

export default Header;
