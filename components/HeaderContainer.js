import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Assets,
  Icon,
  TouchableOpacity,
} from 'react-native-ui-lib';
import { ScaledSheet, moderateScale } from 'react-native-size-matters';
import CalendarStrip from 'react-native-calendar-strip';
import HeaderContainerStyles from '../styles/HeaderContainer';
import dayjs from 'dayjs';

const HeaderContainer = ({
  onMonthUpdate,
  selectedDate = new Date(),
  onDateChange,
  markedDates = {},
}) => {
  const getWeekDay = (date) => {
    return dayjs(date).format('ddd');
  };

  const getDay = (date) => {
    return dayjs(date).format('D');
  };

  const getNumStyle = (date) => {
    const todayDate = new Date();
    const now = dayjs(todayDate).format('MM/DD/YYYY');
    const calendarDate = dayjs(date).format('MM/DD/YYYY');

    return now === calendarDate
      ? HeaderContainerStyles.customNum
      : HeaderContainerStyles.dateNum;
  };

  const isDateSelected = (date1, date2) => {
    const calendarDate1 = dayjs(date1).format('MM/DD/YYYY');
    const calendarDate2 = dayjs(date2).format('MM/DD/YYYY');

    return calendarDate1 === calendarDate2;
  };

  const onDateSelected = (date) => {
    onDateChange(date);
  };

  const onWeekChange = (start, end) => {
    // onMonthUpdate(end);
  };

  const getMarkedDates = (date) => {
    const selectedDate = dayjs(date).format('MM/DD/YYYY');
    return markedDates[selectedDate] ? markedDates[selectedDate].dots : [];
  };

  const onWeekScrollStart = (start, end) => {
    onMonthUpdate(end);
  };

  return (
    <View style={HeaderContainerStyles.mainContainer}>
      <CalendarStrip
        style={{
          height: 80,
        }}
        innerStyle={{
          flex: 1,
        }}
        iconLeft={null}
        iconRight={null}
        scrollable={true}
        scrollerPaging={true}
        showMonth={false}
        onWeekChanged={onWeekScrollStart}
        selectedDate={new Date()}
        onWeekScrollStart={onWeekScrollStart}
        dateNumberStyle={HeaderContainerStyles.dateNum}
        dateNameStyle={HeaderContainerStyles.dateName}
        // markedDates={markedDates}
        dayComponentHeight={70}
        dayComponent={({ date, markedDates }, idx) => {
          return (
            <TouchableOpacity
              style={HeaderContainerStyles.dayRow}
              onPress={() => onDateSelected(date)}
            >
              <View style={{}}>
                <Text style={HeaderContainerStyles.dateName}>
                  {getWeekDay(date)}
                </Text>
              </View>
              <View
                style={[
                  HeaderContainerStyles.dateNumContainer,
                  !isDateSelected(selectedDate, date)
                    ? {}
                    : isDateSelected(selectedDate, new Date())
                    ? HeaderContainerStyles.dateTodaySelected
                    : HeaderContainerStyles.dateNumSelected,
                ]}
              >
                <Text
                  style={[
                    HeaderContainerStyles.dateNum,
                    !isDateSelected(date, new Date())
                      ? {}
                      : isDateSelected(date, selectedDate)
                      ? HeaderContainerStyles.selecedDateNum
                      : HeaderContainerStyles.todayDateNum,
                  ]}
                >
                  {getDay(date)}
                </Text>
                {!isDateSelected(selectedDate, date) ? (
                  <View style={HeaderContainerStyles.dotsContainer}>
                    {getMarkedDates(date).map((color, idx) => (
                      <View
                        key={`${date}_${color}_${idx}`}
                        style={[
                          HeaderContainerStyles.markedDate,
                          { backgroundColor: color },
                        ]}
                      />
                    ))}
                  </View>
                ) : null}
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default HeaderContainer;
