import React, { useState, useEffect, useCallback } from 'react';
import { View, Image } from 'react-native-ui-lib';
import dayjs from 'dayjs';
import { Picker } from '@react-native-picker/picker';
import { ScaledSheet, scale, moderateScale } from 'react-native-size-matters';

const CustomTimePicker = ({ timeList = [], selectedTime, onTimeChange }) => {
  const onChange = (item, idx) => {
    onTimeChange(item);
  };
  return (
    <View>
      <View style={styles.pickerContainer}>
        <Picker selectedValue={selectedTime} onValueChange={onChange}>
          {timeList.map(({ label, value }) => (
            <Picker.Item
              label={label}
              value={value}
              key={label}
              // color="green"
              style={{
                backgroundColor: 'red',
                color: 'green',
              }}
            />
          ))}
        </Picker>
      </View>
    </View>
  );
};

export default CustomTimePicker;

const styles = ScaledSheet.create({
  pickerContainer: {
    backgroundColor: '#F3F8FF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#BFD5FA',
  },
});
