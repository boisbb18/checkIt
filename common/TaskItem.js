import React from 'react';
import {
  Text,
  View,
  Button,
  Icon,
  Assets,
  Checkbox,
  TouchableOpacity,
} from 'react-native-ui-lib';
import { ScaledSheet, moderateScale } from 'react-native-size-matters';

const TaskItem = ({
  event = {},
  showMenuButton = false,
  onTaskClicked = null,
  onCheckboxClicked = () => {},
}) => {
  const completedTasks =
    event?.subtaskList?.filter((task) => task.isCompleted) || [];

  const label = `${completedTasks.length}/${event?.subtaskList?.length || 0}`;
  const checkboxValueChange = (isCompleted) => {
    onCheckboxClicked(event, isCompleted);
  };

  const handleTaskClick = () => {
    // if (onTaskClicked) {
    onTaskClicked(event);
    // }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.contentContainer}>
        <View
          style={
            event.isCompleted
              ? styles.checkboxContainerChecked
              : styles.checkboxContainer
          }
        >
          <View style={event.isCompleted ? styles.checkboxWrapper : {}}>
            <Checkbox
              value={event.isCompleted}
              size={event.isCompleted ? 14 : 20}
              borderRadius={event.isCompleted ? 7 : 10}
              containerStyle={styles.checkbox}
              onValueChange={(e) => checkboxValueChange(e)}
              color={'#2b396c'}
              selectedIcon={Assets.icons.checkIcon}
              style={{ opacity: 0.6 }}
              iconColor={'#fff'}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.contentDescription}
          onPress={handleTaskClick}
        >
          {event.taskName !== '' ? (
            <Text
              style={
                event.isCompleted ? styles.taskNameChecked : styles.taskName
              }
            >
              {event.taskName}
            </Text>
          ) : null}
          {event.description !== '' ? (
            <Text
              style={
                event.isCompleted
                  ? styles.descriptionChecked
                  : styles.description
              }
              numberOfLines={1}
            >
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
        </TouchableOpacity>
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
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
  },
  completedCheckbox: {},
  checkboxContainer: {
    paddingRight: '12@msr',
    marginTop: '5@msr',
  },
  checkboxContainerChecked: {
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
  taskNameChecked: {
    fontFamily: 'SFPro-Semibold',
    color: '#2B396C',
    opacity: 0.6,
    fontSize: 20,
    lineHeight: 25,
    letterSpacing: 0.38,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  description: {
    fontSize: 16,
    letterSpacing: -0.32,
    fontFamily: 'SFPro',
    color: '#2B396C',
  },
  descriptionChecked: {
    fontSize: 16,
    opacity: 0.6,
    letterSpacing: -0.32,
    fontFamily: 'SFPro',
    color: '#2B396C',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
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

  checkboxWrapper: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#2B396C',
    opacity: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  checkboxChecked: {
    // backgroundColor: '#2b396c',
    width: 14,
    height: 14,
  },
});

export default TaskItem;
