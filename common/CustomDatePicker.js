import React, { useState, useEffect } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native-ui-lib';
import { ScaledSheet } from 'react-native-size-matters';
import DatePicker from 'react-native-neat-date-picker';
import dayjs from 'dayjs';

const CustomDatePicker = ({
  showCalendar = false,
  calendarDate,
  onCalendarPick,
  onCloseCalendar,
}) => {
  return (
    <View
      style={{
        backgroundColor: '#F3F8FF',
      }}
    >
      <DatePicker
        isVisible={showCalendar}
        mode={'single'}
        onCancel={onCloseCalendar}
        onConfirm={onCalendarPick}
        initialDate={calendarDate}
      />
    </View>
  );
};

const styles = ScaledSheet.create({});

export default CustomDatePicker;
