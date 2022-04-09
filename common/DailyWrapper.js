import React, { useState, useEffect, useCallback } from 'react';
import { View, Image, Text, DateTimePicker } from 'react-native-ui-lib';
import { ScaledSheet } from 'react-native-size-matters';
import WeeklySection from './WeeklySelection';
import dayjs from 'dayjs';
import { acc } from 'react-native-reanimated';

const DailyWrapper = ({
  frequencyTime,
  onFrequencyTimeChange,
  endFrequencyDate,
  onEndFrequencyDate,
  weekDays,
  onSelectWeekdays,
  frequencyDays = [],
  selectedFrequency,
}) => {
  const handleTimeChange = (date) => {
    onFrequencyTimeChange(date);
  };

  const selectedDaysObj = frequencyDays.length
    ? frequencyDays.reduce((acc, el) => ({ ...acc, [el.weekDay]: true }), {})
    : {};

  return (
    <View style={styles.wrapperContainer}>
      <Text style={styles.title}>Repeat: </Text>
      {selectedFrequency === 2 && (
        <View
          style={{
            marginVertical: 8,
          }}
        >
          <Text style={[styles.subtitle, styles.subtitleMargin]}>
            Repeat on selected day:{' '}
          </Text>
          <WeeklySection
            weekDays={weekDays}
            selectedDays={frequencyDays}
            onSelectWeekdays={onSelectWeekdays}
            selectedDaysObj={selectedDaysObj}
          />
        </View>
      )}
      <View style={styles.timeWrapper}>
        <Text style={styles.subtitle}>Everyday at</Text>
        <DateTimePicker
          mode="time"
          onChange={handleTimeChange}
          value={frequencyTime}
          minuteInterval={5}
          timeFormat="h:mm a"
          labelStyle={styles.labelContainer}
          fieldStyle={styles.textfieldContainer}
          containerStyle={styles.textfieldInputContainer}
          style={styles.mainTextWrapper}
        />
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  wrapperContainer: {
    marginTop: '16@msr',
    flexDirection: 'column',
  },
  title: {
    fontSize: '16@msr',
    fontFamily: 'SFPro',
    lineHeight: '21@msr',
    color: '#2B396C',
    letterSpacing: -0.32,
  },
  timeWrapper: {
    flexDirection: 'row',
    marginTop: '8@msr',
    marginBottom: 0,
    paddingBottom: 0,
    alignItems: 'flex-start',
    height: 26,
  },
  subtitle: {
    fontSize: '16@msr',
    fontFamily: 'SFPro',
    lineHeight: '21@msr',
    color: '#2B396C',
    letterSpacing: -0.32,
    marginRight: '4@msr',
  },
  textfieldContainer: {
    fontSize: '16@msr',
    lineHeight: '21@msr',
    marginBottom: 0,
    paddingBottom: 0,
  },
  textfieldInputContainer: {},
  labelContainer: {},
  mainTextWrapper: {
    padding: 0,
    width: '100@msr',
    borderBottomWidth: 0,

    lineHeight: '21@msr',
    fontSize: '16@msr',
    fontFamily: 'SFPro-Medium',
    letterSpacing: 0.38,
    color: '#2B396C',
    textAlign: 'center',
    marginBottom: 0,
    paddingBottom: 0,
    paddingTop: 0,
    marginTop: 0,
  },
  subtitleMargin: {
    marginBottom: '8@msr',
  },
});

export default DailyWrapper;
