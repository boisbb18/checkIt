import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Button, SegmentedControl } from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Platform } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import NewTaskTitleText from '../common/NewTaskTitleText';
import dayjs from 'dayjs';
import DateTimeSelectorStyles from '../styles/DateTimeSelector';
import CustomDatePicker from '../common/CustomDatePicker';
import CustomTimePicker from '../common/CustomTimePicker';

const segments = [
  { label: 'Planned' },
  { label: 'All Day' },
  { label: 'Any Time' },
];

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const DateTimeSelector = ({
  taskType = 0,
  onTaskTypeChange,
  selectedDate = new Date(),
  onDateChange,
  timeList,
  onTimeChange,
}) => {
  const [segmentIdx, setSegmentIdx] = useState(0);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleIdxChange = useCallback((idx) => {
    onTaskTypeChange(idx);
  });

  const showDateLabel = () => {
    return `${days[dayjs(selectedDate).day()]}, ${dayjs(selectedDate).format(
      'D MMMM, YYYY'
    )}`;
  };

  const handleDateButtonClick = () => {
    setShowCalendar(!showCalendar);
  };

  const handleDateChange = (date) => {
    onDateChange(date);
    setShowCalendar(false);
  };

  const getSelectedTime = () => {
    return `${dayjs(selectedDate).hour()}-${dayjs(selectedDate).minute()}`;
  };

  return (
    <View>
      <View style={DateTimeSelectorStyles.headerContainer}>
        <NewTaskTitleText text="When?" />
      </View>
      <View>
        <SegmentedControl
          onChangeIndex={handleIdxChange}
          initialIndex={taskType}
          segments={segments}
        />
      </View>
      <View style={DateTimeSelectorStyles.dateButtonContainer}>
        <Button
          backgroundColor="#32ade6"
          label={showDateLabel()}
          size={Button.sizes.large}
          borderRadius={10}
          text90
          labelStyle={DateTimeSelectorStyles.dateButtonLabel}
          onPress={handleDateButtonClick}
          style={DateTimeSelectorStyles.dateButton}
          iconSource={(iconStyle) => (
            <View style={DateTimeSelectorStyles.dateButtonIcon}>
              <Icon name="calendar-o" size={moderateScale(21)} color="#fff" />
            </View>
          )}
        />
        <CustomDatePicker
          showCalendar={showCalendar}
          calendarDate={selectedDate}
          onCalendarPick={handleDateChange}
          onCloseCalendar={() => setShowCalendar(false)}
        />
      </View>
      {taskType === 0 && (
        <View style={DateTimeSelectorStyles.timePickerContainer}>
          <CustomTimePicker
            timeList={timeList}
            onTimeChange={onTimeChange}
            selectedTime={getSelectedTime()}
          />
        </View>
      )}
    </View>
  );
};

export default DateTimeSelector;
