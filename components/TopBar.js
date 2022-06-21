import React, { useState } from 'react';
import { Text, View, Assets, Icon } from 'react-native-ui-lib';
import { ScaledSheet, moderateScale } from 'react-native-size-matters';
// import {
//   ExpandableCalendar,
//   TimelineEventProps,
//   TimelineList,
//   CalendarProvider,
//   TimelineProps,
//   CalendarUtils,
// } from 'react-native-calendars';
import TopBarStyles from '../styles/TopBar';
import TopBarEx from './TobBarEx';
import dayjs from 'dayjs';

const TopBar = ({ currentDateMonth }) => {
  const [events, setEvents] = useState([]);

  const getMonth = () => {
    return dayjs(currentDateMonth).format('MMMM YYYY');
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
    </View>
  );
};

export default TopBar;
