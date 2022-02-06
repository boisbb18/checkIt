import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Icon,
  Assets,
} from 'react-native-ui-lib';
import { Platform } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import NewTaskTitleText from '../common/buttons/NewTaskTitleText';
import DateTimePicker from '@react-native-community/datetimepicker';
import dayjs from 'dayjs';
import CustomDatePicker from '../common/buttons/CustomDatePicker';

function debounce(func, timeout = 10000) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

const NewTaskTime = ({ titleSelected, showTime, onShowTime }) => {
  const [showPicker, setShowPicker] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [calendarDate, setCalendarDate] = useState(new Date());
  const [saveTime, setSaveTime] = useState(true);

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
    // setShowPicker(true)
    // debouncedClose()
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
    setShowPicker(!showPicker);
    debouncedClose();
  };

  // const handleDatePicker = (event, selectedDate) => {
  //   setCalendarDate(selectedDate)
  // }

  const handleShowCalendar = () => {
    setShowCalendar(true);
  };

  const handleCloseCalendar = () => {
    setShowCalendar(false);
  };

  const handleCalendarDatePick = (date) => {
    setShowCalendar(false);
    let testDate = new Date(date);
    let newHours = selectedTime.getHours();
    let minutes = selectedTime.getMinutes();
    let newDate = dayjs(testDate).hour(newHours).minute(minutes);

    setCalendarDate(new Date(newDate));
    setSelectedTime(new Date(newDate));
  };

  const showTimeLabel = () => {
    let getMinutes = selectedTime.getMinutes();
    let choseTime = dayjs(selectedTime);
    let newDate = dayjs(selectedTime);

    return `${choseTime.format('h:mm A')} - ${newDate
      .minute(getMinutes + 30)
      .format('h:mm A')}`;
  };

  const showDateLabel = () => {
    let dateLabel = dayjs(calendarDate).format('MMM D, YYYY');
    return dateLabel;
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
          disabled={!showTime}
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
        <TouchableOpacity
          text90
          style={styles.dateWrapper}
          onPress={handleShowCalendar}
        >
          <Text
            style={
              showTime ? styles.calendarTextLabel : styles.dateDisableLabel
            }
          >
            on
          </Text>
          <Text style={showTime ? styles.dateLabel : styles.dateDisableLabel}>
            {showDateLabel()}
          </Text>
        </TouchableOpacity>
      </View>
      <CustomDatePicker
        showCalendar={showCalendar}
        calendarDate={calendarDate}
        onCalendarPick={handleCalendarDatePick}
        onCloseCalendar={handleCloseCalendar}
      />
      <TouchableOpacity text90 style={styles.dateWrapper} onPress={onShowTime}>
        {showTime ? (
          <Text style={styles.disabledLabel}>Remove Time</Text>
        ) : (
          <Text style={styles.dateLabel}>Add Time</Text>
        )}
      </TouchableOpacity>
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
  dateDisableLabel: {
    paddingLeft: '5@msr',
    fontSize: '17@msr',
    fontWeight: '500',
    opacity: 0.5,
  },

  calenderPicker: {
    alignItems: 'center',
    width: '100%',
    // backgroundColor: 'red',
    color: '#32ade6',
    fontSize: '17@msr',
    fontWeight: 'bold',
    marginLeft: '8@msr',
    shadowColor: '#fff',
    shadowRadius: 0,
    shadowOpacity: 1,
    shadowOffset: { height: 0, width: 0 },
    display: 'none',
    opacity: 0.3,
  },
  calendarBackground: {
    backgroundColor: '#fff',
    width: 200,
    // opacity: 0.4,
    // backgroundColor: 'red',
    shadowColor: '#fff',
    shadowRadius: 0,
    shadowOpacity: 1,
    shadowOffset: { height: 0, width: 0 },
    fontWeight: 'bold',
    color: 'red',
  },

  disabledLabel: {
    fontSize: '17@msr',
    opacity: 0.5,
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
});
