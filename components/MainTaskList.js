import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import {
  Text,
  View,
  Assets,
  Icon,
  Image,
  ExpandableSection,
  TouchableOpacity,
} from 'react-native-ui-lib';
import { ScaledSheet, moderateScale } from 'react-native-size-matters';
import MaintTaskListStyles from '../styles/MainTaskList';
import TaskForTodayTitle from './TaskForTodayTitle';
import TaskItem from '../common/TaskItem';
import dayjs from 'dayjs';

const MainTaskList = ({
  events = {},
  showAllDayTasks,
  onShowAllDayTasks,
  onTaskCheckboxClicked,
  onOpenEditModal,
}) => {
  const emptyList = () => (
    <View>
      <View style={MaintTaskListStyles.emptyListImage}>
        <Image source={Assets.svgs.emptyList} />
      </View>
      <View style={MaintTaskListStyles.subtitleContainer}>
        <Text style={MaintTaskListStyles.emptyListSubtitle}>
          Add new tasks, please click +
        </Text>
      </View>
    </View>
  );

  const getChevron = () => {
    return showAllDayTasks ? Assets.icons.chevronDown : Assets.icons.chevronUp;
  };

  const getExpandableSection = () => (
    <View style={MaintTaskListStyles.expandableSection}>
      <Text style={MaintTaskListStyles.expandableTitle}>All Day Tasks</Text>
      <Image
        style={MaintTaskListStyles.expandableIcon}
        source={getChevron()}
        tintColor="#2B396C"
      />
    </View>
  );

  const getTime = ({ selectedDate, duration }) => {
    const eventTime = new Date(selectedDate);
    const timeStart = dayjs(eventTime).format('hh:mm a');

    const hh = dayjs(eventTime).hour();
    const mm = dayjs(eventTime).minute();
    const timeEnd = dayjs(eventTime)
      .hour(hh)
      .minute(mm + duration)
      .format('hh:mm a');

    return (
      <View style={MaintTaskListStyles.taskTimeContainer}>
        <Text
          style={MaintTaskListStyles.taskTime}
        >{`${timeStart} ${timeEnd}`}</Text>
      </View>
    );
  };

  const showAllDayEvents = () => (
    <View style={MaintTaskListStyles.listItemContainer}>
      <ExpandableSection
        top={false}
        expanded={showAllDayTasks}
        sectionHeader={getExpandableSection()}
        onPress={onShowAllDayTasks}
      >
        {events.alldayEvents.map((event) => (
          <View style={{ marginBottom: 8 }} key={event.key}>
            <TaskItem event={event} key={event.key} />
          </View>
        ))}
      </ExpandableSection>
    </View>
  );

  const showPlannedEvents = () => (
    <View style={MaintTaskListStyles.listItemContainer}>
      <View style={MaintTaskListStyles.scheduledTaskTitleContainer}>
        <Text style={MaintTaskListStyles.expandableTitle}>Scheduled Tasks</Text>
      </View>
      {events.plannedEvents.map((event, idx) => (
        <View style={MaintTaskListStyles.plannedTaskContainer} key={event.key}>
          {getTime(event)}
          <TaskItem
            event={event}
            key={event.key}
            onTaskClicked={taskClicked}
            onCheckboxClicked={checkboxClicked}
          />
        </View>
      ))}
    </View>
  );
  const totalTasks =
    !events?.alldayEvents?.length && !events?.plannedEvents?.length
      ? 0
      : events?.alldayEvents?.length + events?.plannedEvents?.length;

  const taskClicked = (task = {}) => {
    console.log('Task clicked');
    onOpenEditModal(task);
  };

  const checkboxClicked = (task, isCompleted) => {
    onTaskCheckboxClicked(task, isCompleted);
  };

  return (
    <View style={MaintTaskListStyles.mainView}>
      <ScrollView
        style={MaintTaskListStyles.mainScroll}
        contentContainerStyle={MaintTaskListStyles.scrollContainer}
        nestedScrollEnabled={true}
      >
        <View style={MaintTaskListStyles.mainContainer}>
          <View style={MaintTaskListStyles.mainListTitle}>
            <TaskForTodayTitle numTasks={totalTasks} />
          </View>
          {!events.alldayEvents?.length && !events.plannedEvents?.length
            ? emptyList()
            : showAllDayEvents()}
          {events?.plannedEvents?.length ? showPlannedEvents() : null}
        </View>
      </ScrollView>
    </View>
  );
};

export default MainTaskList;
