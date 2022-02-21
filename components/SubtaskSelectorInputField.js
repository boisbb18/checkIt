import React, { useState, useEffect } from 'react';
import { Text, View, Button, Incubator, Checkbox } from 'react-native-ui-lib';
import SubtaskSelectorStyles from '../styles/SubtaskSelector';
const { TextField } = Incubator;

const SubtaskSelectorInputField = ({
  value,
  onChange,
  idx,
  setFocus = false,
  inputAccessoryViewID = '',
}) => {
  const input = React.createRef();
  useEffect(() => {
    if (setFocus && input.current) {
      input.current?.focus();
    }
  }, [setFocus]);
  return (
    <TextField
      text70M
      ref={input}
      multiline={true}
      editable={true}
      scrollEnabled={false}
      value={value}
      onChangeText={(text) => onChange(text, idx)}
      placeholder="Add Task"
      numberOfLines={5}
      fieldStyle={SubtaskSelectorStyles.textfieldContainer}
      containerStyle={SubtaskSelectorStyles.textfieldInputContainer}
      inputAccessoryViewID={inputAccessoryViewID}
    />
  );
};

export default SubtaskSelectorInputField;
