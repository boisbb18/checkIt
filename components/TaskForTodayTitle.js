import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native-ui-lib';
import { ScaledSheet, scale, moderateScale } from 'react-native-size-matters';

const TaskForTodayTitle = ({ numTasks = 0 }) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>
        Tasks for Today <Text style={styles.numTasks}>({numTasks})</Text>
      </Text>
    </View>
  );
};

export default TaskForTodayTitle;

const styles = ScaledSheet.create({
  titleContainer: {},
  titleText: {
    color: '#2B396C',
    fontSize: 20,
    lineHeight: 25,
    letterSpacing: 0.38,
    fontFamily: 'SFPro-Bold',
  },
  numTasks: {
    color: '#AAB0C4',
  },
});
