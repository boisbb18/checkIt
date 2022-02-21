import React, { useState, useEffect } from 'react';
import { Text, View, Button, Incubator, Checkbox } from 'react-native-ui-lib';
import { ScaledSheet, moderateScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome';
import SubtaskSelectorStyles from '../styles/SubtaskSelector';
import SubtaskSelectorInputField from './SubtaskSelectorInputField';
const { TextField } = Incubator;

const SubtaskSelector = ({
  subtaskList = [],
  addSubtask,
  editList,
  inputAccessoryViewID = '',
}) => {
  const textChange = (e, idx) => {
    editList(e, idx);
  };
  return (
    <View>
      <View>
        {subtaskList.map((val, idx) => (
          <View
            key={idx}
            style={
              idx === 0
                ? SubtaskSelectorStyles.firstContainer
                : idx === subtaskList.length - 1
                ? SubtaskSelectorStyles.lastItemContainer
                : SubtaskSelectorStyles.taskContainer
            }
          >
            <View
              style={
                idx !== subtaskList.length - 1
                  ? SubtaskSelectorStyles.taskBorderWrapper
                  : SubtaskSelectorStyles.elementWrapper
              }
            >
              <View style={SubtaskSelectorStyles.checkboxContainer}>
                <Checkbox value={false} size={24} borderRadius={0} />
              </View>
              <SubtaskSelectorInputField
                inputAccessoryViewID={inputAccessoryViewID}
                value={val}
                idx={idx}
                onChange={editList}
                setFocus={idx === subtaskList.length - 1}
              />
            </View>
          </View>
        ))}
      </View>
      {/* </KeyboardAvoidingView> */}
      <View>
        <Button
          outline
          text90
          borderRadius={4}
          size={Button.sizes.large}
          label="Add Subtask"
          onPress={addSubtask}
          labelStyle={SubtaskSelectorStyles.mainButtonLabel}
          style={SubtaskSelectorStyles.mainButton}
          iconSource={(iconStyle) => (
            <View style={SubtaskSelectorStyles.mainButtonIcon}>
              <Icon name="plus" size={moderateScale(10)} color="#32ade6" />
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default SubtaskSelector;
