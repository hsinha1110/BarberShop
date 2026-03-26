import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import CustomText from '../text/CustomText';
import styles from './styles';
import { Times } from '../../constants/Data';

const TimeSlots = ({ onSelectTime }) => {
  const [selected, setSelected] = useState(null);

  const handleSelect = time => {
    setSelected(time);
    onSelectTime && onSelectTime(time);
  };

  return (
    <View>
      <CustomText style={styles.heading}>CHOOSE YOUR TIME</CustomText>

      <FlatList
        data={Times}
        numColumns={3}
        keyExtractor={item => item}
        contentContainerStyle={{ marginTop: 10 }}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => {
          const isSelected = selected === item;

          return (
            <TouchableOpacity
              style={[styles.timeBox, isSelected && styles.selectedTime]}
              onPress={() => handleSelect(item)}
            >
              <CustomText
                style={[styles.timeText, isSelected && styles.selectedText]}
              >
                {item}
              </CustomText>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default TimeSlots;
