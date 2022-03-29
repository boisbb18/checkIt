import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  Button,
  Icon,
  Assets,
  // SegmentedControl
} from 'react-native-ui-lib';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { Platform } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import NewTaskTitleText from '../common/NewTaskTitleText';
import dayjs from 'dayjs';
import DateTimeSelectorStyles from '../styles/DateTimeSelector';
import CustomDatePicker from '../common/CustomDatePicker';
import CustomTimePicker from '../common/CustomTimePicker';
import SegmentedControl from '@react-native-segmented-control/segmented-control';

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
          values={['Planned', 'All Day', 'Any Time']}
          appearance="light"
          tintColor="#4090ff"
          selectedIndex={taskType}
          onChange={(event) =>
            handleIdxChange(event.nativeEvent.selectedSegmentIndex)
          }
          // backgroundColor="#F3F8FF"
          fontStyle={{
            color: '#2B396C',
            fontSize: 13,
            // fontFamily: 'SFPro',
            fontWeight: '400',
          }}
          activeFontStyle={{
            color: '#fff',
            fontSize: 13,
            // fontFamily: 'SFPro',
            fontWeight: '700',
          }}
          style={DateTimeSelectorStyles.segmentContainerStyle}
        />
      </View>
      <View style={DateTimeSelectorStyles.dateButtonContainer}>
        <Button
          backgroundColor="#F3F8FF"
          label={showDateLabel()}
          size={Button.sizes.large}
          borderRadius={10}
          text90
          labelStyle={DateTimeSelectorStyles.dateButtonLabel}
          onPress={handleDateButtonClick}
          style={DateTimeSelectorStyles.dateButton}
          iconSource={(iconStyle) => (
            <View style={DateTimeSelectorStyles.dateButtonIcon}>
              {/* <Icon name="calendar-o" size={moderateScale(21)} color="#2B396C" /> */}
              <Icon
                source={Assets.icons.calendar}
                size={moderateScale(21)}
                tintColor="#2B396C"
              />
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
