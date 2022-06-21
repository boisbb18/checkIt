import React from 'react';
import {
  Text,
  View,
  Button,
  Icon,
  Assets,
  Checkbox,
} from 'react-native-ui-lib';
import { ScaledSheet, moderateScale } from 'react-native-size-matters';

const TaskItem = ({ event = {}, showMenuButton = false }) => {
  const completedTasks =
    event?.subtaskList?.filter((task) => task.isCompleted) || [];

  const label = `${completedTasks.length}/${event?.subtaskList?.length || 0}`;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.contentContainer}>
        <View style={styles.checkboxContainer}>
          <Checkbox
            value={false}
            size={20}
            borderRadius={10}
            containerStyle={styles.checkbox}
          />
        </View>
        <View style={styles.contentDescription}>
          {event.taskName !== '' ? (
            <Text style={styles.taskName}>{event.taskName}</Text>
          ) : null}
          {event.description !== '' ? (
            <Text style={styles.description} numberOfLines={1}>
              {event.description}
            </Text>
          ) : null}
          {event?.subtaskList?.length ? (
            <View style={styles.subtaskContainer}>
              <Checkbox
                value={completedTasks.length === event?.subtaskList?.length}
                size={10}
                borderRadius={1}
                style={styles.subtaskCheckbox}
                label={label}
                labelStyle={styles.subtaskLabel}
              />
            </View>
          ) : null}
        </View>
      </View>
      {showMenuButton ? (
        <View></View>
      ) : (
        <View
          style={{
            ...styles.borderBackground,
            backgroundColor: event?.paletteColor,
          }}
        ></View>
      )}
    </View>
  );
};

const styles = ScaledSheet.create({
  mainContainer: {
    padding: '20@msr',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D6E6FF',
    // width: '100%',
    flex: 1,
    backgroundColor: 'rgba(243, 248, 255, 0.3)',
  },
  borderBackground: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: 6,
    backgroundColor: 'red',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  checkbox: {
    borderColor: '#2B396C',
    borderWidth: 1,
  },
  checkboxContainer: {
    paddingRight: '12@msr',
    marginTop: '5@msr',
  },
  taskName: {
    fontFamily: 'SFPro-Semibold',
    color: '#2B396C',
    fontSize: 20,
    lineHeight: 25,
    letterSpacing: 0.38,
  },
  description: {
    fontSize: 16,
    letterSpacing: -0.32,
    fontFamily: 'SFPro',
    color: '#2B396C',
  },
  contentDescription: {
    flexDirection: 'column',
    padding: 0,
    margin: 0,
    justifyContent: 'flex-start',
    flex: 1,
  },
  subtaskCheckbox: {
    borderColor: '#2B396C',
    borderWidth: 1,
  },
  subtaskLabel: {
    fontSize: 11,
    lineHeight: 13,
    letterSpacing: 0.07,
    color: '#2B396C',
    marginLeft: 5,
  },
  subtaskContainer: {
    marginTop: '9@msr',
  },
});

export default TaskItem;
