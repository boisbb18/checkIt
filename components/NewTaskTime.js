import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native-ui-lib';
import { Platform } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import NewTaskTitleText from '../common/buttons/NewTaskTitleText';
import DateTimePicker from '@react-native-community/datetimepicker';
import dayjs from 'dayjs';

function debounce(func, timeout = 10000) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

const NewTaskTime = ({ titleSelected }) => {
  const [showPicker, setShowPicker] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [calendarDate, setCalendarDate] = useState(new Date());

  const roundTimeQuarterHour = (time) => {
    var timeToReturn = new Date(time);

    timeToReturn.setMilliseconds(
      Math.round(timeToReturn.getMilliseconds() / 1000) * 1000
    );
    timeToReturn.setSeconds(Math.round(timeToReturn.getSeconds() / 60) * 60);
    timeToReturn.setMinutes(Math.round(timeToReturn.getMinutes() / 15) * 15);
    return timeToReturn;
  };

  useEffect(() => {
    setSelectedTime(roundTimeQuarterHour(selectedTime));
  }, [titleSelected]);

  function closePicker() {
    setShowPicker(false);
  }

  const debouncedClose = useCallback(debounce(closePicker), []);
  const onTimeChange = (event, selectedDate) => {
    setSelectedTime(selectedDate);
    debouncedClose();
  };

  const handleOpenTimePicker = () => {
    setShowPicker(true);
    debouncedClose();
  };

  const handleDatePicker = (event, selectedDate) => {
    setCalendarDate(selectedDate);
  };

  const handleShowCalendar = () => {
    setShowCalendar(true);
  };

  const showTimeLabel = () => {
    let getMinutes = selectedTime.getMinutes();
    let choseTime = dayjs(selectedTime);
    let newDate = dayjs(selectedTime);

    return `${choseTime.format('h:mm A')} - ${newDate
      .minute(getMinutes + 30)
      .format('h:mm A')}`;
  };

  return (
    <View>
      <NewTaskTitleText text="When?" />
      <View style={styles.timeWrapper}>
        <Button
          backgroundColor="#32ade6"
          label={showTimeLabel()}
          size={Button.sizes.medium}
          borderRadius={3}
          text90
          labelStyle={{ fontWeight: '500' }}
          onPress={handleOpenTimePicker}
          style={styles.timeButtonWrapper}
          labelStyle={styles.timeLabelWrapper}
          enableShadow={true}
        />
      </View>
      <View>
        {showPicker && (
          <View>
            <DateTimePicker
              mode="time"
              textColor="#32ade6"
              minuteInterval={5}
              value={selectedTime}
              is24Hour={true}
              style={styles.datePicker}
              onChange={onTimeChange}
              themeVariant="light"
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            />
          </View>
        )}
      </View>
      <View style={styles.calendarDateLabel}>
        {/* <TouchableOpacity
          text90
          style={styles.dateWrapper}
          onPress={handleShowCalendar}
        > */}
        <Text style={styles.calendarTextLabel}>on</Text>
        {/* <Text style={styles.dateLabel}>12/21/2022</Text> */}
        <DateTimePicker
          mode="date"
          textColor="#32ade6"
          value={calendarDate}
          is24Hour={true}
          style={styles.calenderPicker}
          onChange={handleDatePicker}
          themeVariant="dark"
          display="compact"
          neutralButtonLabel="clear"
        />
        {/* </TouchableOpacity> */}
      </View>
      {/* {showCalendar && (
        <DateTimePicker
          mode="date"
          textColor="#32ade6"
          value={calendarDate}
          is24Hour={true}
          style={styles.datePicker}
          onChange={handleDatePicker}
          themeVariant="light"
          display="compact"
        />
      )} */}
    </View>
  );
};

export default NewTaskTime;

const styles = ScaledSheet.create({
  datePicker: {
    width: '100%',
  },
  textfieldContainer: {
    backgroundColor: 'blue',
    color: 'green',
  },
  textfieldInputContainer: {
    backgroundColor: 'red',
  },
  timeWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  timeButtonWrapper: {
    height: '44@msr',
    width: '200@msr',
  },

  timeLabelWrapper: {
    fontWeight: '700',
    fontSize: 16,
  },

  calendarDateLabel: {
    flex: 1,
    alignItems: 'center',
    marginTop: '15@msr',
    marginBottom: '10@msr',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  calendarTextLabel: {
    fontSize: '17@msr',
  },

  dateWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  dateLabel: {
    color: '#32ade6',
    paddingLeft: '5@msr',
    fontSize: '17@msr',
    fontWeight: '500',
  },
  calenderPicker: {
    alignItems: 'center',
    width: '20%',
    backgroundColor: '#32ade6',
    color: '#32ade6',
    fontSize: '17@msr',
    fontWeight: '500',
    marginLeft: '8@msr',
  },
});
