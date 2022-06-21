import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Button,
  Incubator,
  Checkbox,
  Icon,
  Assets,
  TouchableOpacity,
} from 'react-native-ui-lib';
import { ScaledSheet, moderateScale, scale } from 'react-native-size-matters';
import SubtaskSelectorStyles from '../styles/SubtaskSelector';
import SubtaskSelectorInputField from './SubtaskSelectorInputField';
const { TextField } = Incubator;

const SubtaskSelector = ({
  subtaskList = [],
  addSubtask,
  editList,
  inputAccessoryViewID = '',
  removeList,
}) => {
  const textChange = (e, idx) => {
    editList(e, idx);
  };
  return (
    <View>
      <View>
        {subtaskList.map(({ task }, idx) => (
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
                value={task}
                idx={idx}
                onChange={editList}
                setFocus={idx === subtaskList.length - 1}
              />
              <TouchableOpacity
                style={SubtaskSelectorStyles.removeIcon}
                onPress={() => removeList(idx)}
              >
                <Icon source={Assets.icons.x} size={20} tintColor="#BFD5FA" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
      <View>
        <Button
          backgroundColor="#5199FF"
          borderRadius={5}
          size={Button.sizes.large}
          label="Add Subtask"
          onPress={addSubtask}
          labelStyle={SubtaskSelectorStyles.mainButtonLabel}
          style={SubtaskSelectorStyles.mainButton}
          iconSource={(iconStyle) => (
            <View style={SubtaskSelectorStyles.mainButtonIcon}>
              <Icon
                source={Assets.icons.plusSign}
                size={scale(10)}
                tintColor="#fff"
              />
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default SubtaskSelector;
