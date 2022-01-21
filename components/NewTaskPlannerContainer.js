import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native-ui-lib';
import { ScrollView } from 'react-native';
import MainButon from '../common/buttons/MainButton';
import TaskTitleField from './TaskTitleField';
import NewTaskTime from './NewTaskTime';
import NewTaskPlannerContainerStyles from '../styles/NewTaskPlannerContainer';

const inputAccessoryViewID = 'abcd';
const NewTaskPlannerContainer = ({
  taskIcon,
  taskName,
  onTaskNameChange,
  modalVisible,
  titleSelected = false,
}) => {
  return (
    <ScrollView style={NewTaskPlannerContainerStyles.bodyWrapper}>
      <View>
        <TaskTitleField
          modalVisible={modalVisible}
          taskIcon={taskIcon}
          taskName={taskName}
          onTaskNameChange={onTaskNameChange}
          inputAccessoryViewID={inputAccessoryViewID}
        />
      </View>
      <View>
        <NewTaskTime titleSelected={titleSelected} />
      </View>
    </ScrollView>
  );
};

export default NewTaskPlannerContainer;
