import React, { useState } from 'react';
import { View, Text, ColorPalette } from 'react-native-ui-lib';
import NewTaskTitleText from '../common/NewTaskTitleText';
import { moderateScale } from 'react-native-size-matters';
import OptionSelectors from '../common/OptionSelectors';
import FrequencySelectorStyles from '../styles/FrequencySelector';

const FrequencySelector = ({
  frequencyList = [],
  onListChange,
  selectedFrequency,
}) => {
  const selectedIdx = frequencyList
    .map(({ val }) => val)
    .indexOf(selectedFrequency);

  return (
    <View>
      <View style={FrequencySelectorStyles.headerContainer}>
        <NewTaskTitleText text="How often?" />
      </View>
      <View style={FrequencySelectorStyles.optionListContainer}>
        <OptionSelectors
          onChange={onListChange}
          selectedIdx={selectedIdx}
          buttonList={frequencyList}
        />
      </View>
    </View>
  );
};

export default FrequencySelector;
