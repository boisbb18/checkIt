import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native-ui-lib';
import NewTaskTitleText from '../common/NewTaskTitleText';
import OptionSelectors from '../common/OptionSelectors';
import { moderateScale } from 'react-native-size-matters';
import DurationSelectorStyles from '../styles/DurationSelector';

const DurationSelector = ({
  selectedDuration = 15,
  durationList = [],
  onDurationChange,
  onEditClick,
}) => {
  const selectedIdx = durationList
    .map(({ val }) => val)
    .indexOf(selectedDuration);

  const editClickHandle = () => {
    onEditClick();
  };

  return (
    <View>
      <View style={DurationSelectorStyles.headerContainer}>
        <View style={DurationSelectorStyles.titleContainer}>
          <NewTaskTitleText text="How long?" />
        </View>
        <TouchableOpacity
          style={DurationSelectorStyles.editContainer}
          onPress={editClickHandle}
        >
          <Text style={DurationSelectorStyles.headerEditButton}>More</Text>
        </TouchableOpacity>
      </View>
      <View style={DurationSelectorStyles.optionListContainer}>
        <OptionSelectors
          onChange={onDurationChange}
          selectedIdx={selectedIdx}
          buttonList={durationList}
        />
      </View>
    </View>
  );
};

export default DurationSelector;
