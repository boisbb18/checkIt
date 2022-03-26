import React, { useEffect, useRef } from 'react';
import { Text, View, Incubator } from 'react-native-ui-lib';
import { moderateScale } from 'react-native-size-matters';
import { useState } from 'react/cjs/react.development';
import TitlteSelectorStyles from '../styles/TitleSelector';
import TaskTitleFieldStyle from '../styles/TaskTitleField';
const { TextField } = Incubator;

const TitleSelector = ({
  taskName = 'Hello World',
  onTaskChange,
  inputAccessoryViewID = '',
  modalVisible,
} = {}) => {
  const input = React.createRef();
  useEffect(() => {
    if (modalVisible) {
      input.current?.focus();
    }
  }, [modalVisible]);
  // console.log('Input Accessory ----> ', textRef);
  return (
    <View>
      <View style={{}}>
        <TextField
          ref={input}
          label="What is the task?"
          multiline
          labelStyle={TitlteSelectorStyles.labelContainer}
          value={taskName}
          placeholderTextColor="rgba(43, 57, 108, 0.3)"
          onChangeText={(text) => onTaskChange(text)}
          placeholder="Go grocery shopping"
          fieldStyle={TitlteSelectorStyles.textfieldContainer}
          containerStyle={TitlteSelectorStyles.textfieldInputContainer}
          inputAccessoryViewID={inputAccessoryViewID}
          style={TitlteSelectorStyles.mainTextWrapper}
        />
      </View>
    </View>
  );
};

export default TitleSelector;
