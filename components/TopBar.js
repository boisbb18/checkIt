import React, { useState } from 'react';
import { Text, View, Assets, Icon } from 'react-native-ui-lib';
import { ScaledSheet, moderateScale } from 'react-native-size-matters';
import {
  ExpandableCalendar,
  TimelineEventProps,
  TimelineList,
  CalendarProvider,
  TimelineProps,
  CalendarUtils,
} from 'react-native-calendars';
import TopBarStyles from '../styles/TopBar';
import TopBarEx from './TobBarEx';
import dayjs from 'dayjs';

const initialDate = '2020-04-09';
const RANGE = 365;
const INITIAL_TIME = { hour: 9, minutes: 0 };
const today = new Date();
const getDate = (offset = 0) =>
  CalendarUtils.getCalendarDateString(
    new Date().setDate(today.getDate() + offset)
  );

const EVENTS = [
  {
    start: `${getDate(-1)} 09:20:00`,
    end: `${getDate(-1)} 12:00:00`,
    title: 'Merge Request to React Native Calendars',
    summary: 'Merge Timeline Calendar to React Native Calendars',
  },
  {
    start: `${getDate()} 01:15:00`,
    end: `${getDate()} 02:30:00`,
    title: 'Meeting A',
    summary: 'Summary for meeting A',
    color: '#e6add8',
  },
  {
    start: `${getDate()} 01:30:00`,
    end: `${getDate()} 02:30:00`,
    title: 'Meeting B',
    summary: 'Summary for meeting B',
    color: '#e6add8',
  },
  {
    start: `${getDate()} 01:45:00`,
    end: `${getDate()} 02:45:00`,
    title: 'Meeting C',
    summary: 'Summary for meeting C',
    color: '#e6add8',
  },
  {
    start: `${getDate()} 02:40:00`,
    end: `${getDate()} 03:10:00`,
    title: 'Meeting D',
    summary: 'Summary for meeting D',
    color: '#e6add8',
  },
  {
    start: `${getDate()} 02:50:00`,
    end: `${getDate()} 03:20:00`,
    title: 'Meeting E',
    summary: 'Summary for meeting E',
    color: '#e6add8',
  },
  {
    start: `${getDate()} 04:30:00`,
    end: `${getDate()} 05:30:00`,
    title: 'Meeting F',
    summary: 'Summary for meeting F',
    color: '#e6add8',
  },
  {
    start: `${getDate(1)} 00:30:00`,
    end: `${getDate(1)} 01:30:00`,
    title: 'Visit Grand Mother',
    summary: 'Visit Grand Mother and bring some fruits.',
    color: '#ade6d8',
  },
  {
    start: `${getDate(1)} 02:30:00`,
    end: `${getDate(1)} 03:20:00`,
    title: 'Meeting with Prof. Behjet Zuhaira',
    summary: 'Meeting with Prof. Behjet at 130 in her office.',
    color: '#e6add8',
  },
  {
    start: `${getDate(1)} 04:10:00`,
    end: `${getDate(1)} 04:40:00`,
    title: 'Tea Time with Dr. Hasan',
    summary: 'Tea Time with Dr. Hasan, Talk about Project',
  },
  {
    start: `${getDate(1)} 01:05:00`,
    end: `${getDate(1)} 01:35:00`,
    title: 'Dr. Mariana Joseph',
    summary: '3412 Piedmont Rd NE, GA 3032',
  },
  {
    start: `${getDate(1)} 14:30:00`,
    end: `${getDate(1)} 16:30:00`,
    title: 'Meeting Some Friends in ARMED',
    summary: 'Arsalan, Hasnaat, Talha, Waleed, Bilal',
    color: '#d8ade6',
  },
  {
    start: `${getDate(2)} 01:40:00`,
    end: `${getDate(2)} 02:25:00`,
    title: 'Meet Sir Khurram Iqbal',
    summary: 'Computer Science Dept. Comsats Islamabad',
    color: '#e6bcad',
  },
  {
    start: `${getDate(2)} 04:10:00`,
    end: `${getDate(2)} 04:40:00`,
    title: 'Tea Time with Colleagues',
    summary: 'WeRplay',
  },
  {
    start: `${getDate(2)} 00:45:00`,
    end: `${getDate(2)} 01:45:00`,
    title: 'Lets Play Apex Legends',
    summary: 'with Boys at Work',
  },
  {
    start: `${getDate(2)} 11:30:00`,
    end: `${getDate(2)} 12:30:00`,
    title: 'Dr. Mariana Joseph',
    summary: '3412 Piedmont Rd NE, GA 3032',
  },
  {
    start: `${getDate(4)} 12:10:00`,
    end: `${getDate(4)} 13:45:00`,
    title: 'Merge Request to React Native Calendars',
    summary: 'Merge Timeline Calendar to React Native Calendars',
  },
];

const TopBar = ({}) => {
  const [currentDate, setCurrentDate] = useState(getDate());
  const [events, setEvents] = useState([]);

  const marked = {
    [`${getDate(-1)}`]: { marked: true },
    [`${getDate()}`]: { marked: true },
    [`${getDate(1)}`]: { marked: true },
    [`${getDate(2)}`]: { marked: true },
    [`${getDate(4)}`]: { marked: true },
  };

  const getMonth = () => {
    return dayjs(new Date()).format('MMMM YYYY');
  };

  const onDateChanged = (date) => {
    // console.warn('TimelineCalendarScreen onDateChanged: ', date, updateSource);
    // fetch and set data for date + week ahead
    // thi({currentDate: date});
    setCurrentDate(date);
  };

  const onMonthChange = (/* month, updateSource */) => {
    // console.warn('TimelineCalendarScreen onMonthChange: ', month, updateSource);
  };

  const timelineProps = {
    format24h: true,
    onBackgroundLongPress: () => {
      console.log('Background long press');
    },
    onBackgroundLongPressOut: () => console.log('Long Press out'),
    // scrollToFirst: true,
    // start: 0,
    // end: 24,
    unavailableHours: [
      { start: 0, end: 6 },
      { start: 22, end: 24 },
    ],
    overlapEventsSpacing: 8,
    rightEdgeSpacing: 24,
  };

  return (
    <View style={TopBarStyles.container}>
      <View style={TopBarStyles.titleContainer}>
        <Text style={TopBarStyles.dateTitle}>{getMonth()}</Text>
        <View style={TopBarStyles.iconContainer}>
          <View>
            <Icon
              source={Assets.icons.search}
              size={moderateScale(23)}
              tintColor="#2B396C"
            />
          </View>
          <View
            style={{
              marginLeft: 25,
            }}
          >
            <Icon
              source={Assets.icons.settings}
              size={moderateScale(23)}
              tintColor="#2B396C"
            />
          </View>
        </View>
      </View>
      {/* <View>
        <CalendarProvider
          date={currentDate}
          onDateChanged={onDateChanged}
          onMonthChange={onMonthChange}
          showTodayButton
          style={{
            backgroundColor: 'red',
            flex: 1,
          }}
          disabledOpacity={0.6}
        >
          <ExpandableCalendar
            firstDay={0}
            leftArrowImageSource={require('../assets/icons/settingsIcon.png')}
            rightArrowImageSource={require('../assets/icons/settingsIcon.png')}
            markedDates={{}}
            style={{
              backgroundColor: 'red',
            }}
            disableWeekScroll={true}
          />
          <TimelineList
            events={[]}
            timelineProps={timelineProps}
            showNowIndicator
            // scrollToNow
            scrollToFirst
            initialTime={INITIAL_TIME}
          />
        </CalendarProvider>
      </View> */}
      {/* <View
        style={{
          height: 400,
        }}
      >
        <TopBarEx />
      </View> */}
    </View>
  );
};

export default TopBar;
