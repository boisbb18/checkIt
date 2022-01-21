import React, { useEffect } from 'react';
import { Text, View, Incubator } from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/FontAwesome';
import { moderateScale } from 'react-native-size-matters';
import NewTaskTitleText from '../common/buttons/NewTaskTitleText';
import TaskTitleFieldStyle from '../styles/TaskTitleField';
const { TextField } = Incubator;

const TaskTitleField = ({
  modalVisible,
  taskIcon = '',
  taskName = '',
  onTaskNameChange,
  inputAccessoryViewID = '',
} = {}) => {
  const input = React.createRef();
  useEffect(() => {
    if (modalVisible) {
      input.current?.focus();
    }
  }, [modalVisible]);

  return (
    <View>
      <NewTaskTitleText text="What is the task?" />
      <View style={TaskTitleFieldStyle.textfieldWrapper}>
        <View style={TaskTitleFieldStyle.textfieldIcon}>
          <Icon name={taskIcon} size={moderateScale(24)} color="#fff" />
        </View>
        <TextField
          text70M
          ref={input}
          value={taskName}
          onChangeText={(text) => onTaskNameChange(text)}
          placeholder="Go grocery shopping"
          fieldStyle={TaskTitleFieldStyle.textfieldContainer}
          containerStyle={TaskTitleFieldStyle.textfieldInputContainer}
          inputAccessoryViewID={inputAccessoryViewID}
        />
      </View>
    </View>
  );
};

export default TaskTitleField;
