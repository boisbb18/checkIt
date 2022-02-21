import React, { useState, useEffect, useCallback } from 'react';
import { View } from 'react-native-ui-lib';
import { ScaledSheet } from 'react-native-size-matters';
import dayjs from 'dayjs';
import { Picker } from '@react-native-picker/picker';

// const { WheelPicker } = Incubator

const CustomTimePicker = ({ timeList = [], selectedTime, onTimeChange }) => {
  const onChange = (item, idx) => {
    onTimeChange(item);
  };

  return (
    <View>
      <View>
        <Picker selectedValue={selectedTime} onValueChange={onChange}>
          {timeList.map(({ label, value }) => (
            <Picker.Item label={label} value={value} key={label} />
          ))}
        </Picker>
      </View>
    </View>
  );
};

export default CustomTimePicker;
