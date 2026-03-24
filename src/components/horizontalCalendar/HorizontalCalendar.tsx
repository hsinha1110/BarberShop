import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import moment, { Moment } from 'moment';
import styles from './styles';
import { Colors } from '../../constants/Colors';

type Props = {
  onSelectDate: (date: string) => void;
};

const HorizontalCalendar: React.FC<Props> = ({ onSelectDate }) => {
  const [dates, setDates] = useState<Moment[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>(
    moment().format('YYYY-MM-DD'),
  );

  useEffect(() => {
    const dateArray: Moment[] = [];

    for (let i = 0; i < 15; i++) {
      dateArray.push(moment().add(i, 'days'));
    }

    setDates(dateArray);
  }, []);

  const handleSelectDate = (date: string) => {
    setSelectedDate(date);
    onSelectDate(date);
  };

  const renderItem = ({ item }: { item: Moment }) => {
    const formatted = item.format('YYYY-MM-DD');
    const isSelected = formatted === selectedDate;

    return (
      <TouchableOpacity
        style={[styles.dateContainer, isSelected && styles.selected]}
        onPress={() => handleSelectDate(formatted)}
      >
        <Text style={[styles.day, isSelected && { color: Colors.black }]}>
          {item.format('ddd')}
        </Text>

        <Text style={[styles.date, isSelected && { color: Colors.black }]}>
          {item.format('D')}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        horizontal
        data={dates}
        keyExtractor={item => item.format('YYYY-MM-DD')}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  );
};

export default HorizontalCalendar;
