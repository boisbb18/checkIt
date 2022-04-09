import React, { useState } from 'react';
import { View, Text, ColorPalette } from 'react-native-ui-lib';
import NewTaskTitleText from '../common/NewTaskTitleText';
import { moderateScale } from 'react-native-size-matters';
import OptionSelectors from '../common/OptionSelectors';
import FrequencySelectorStyles from '../styles/FrequencySelector';
import DailyWrapper from '../common/DailyWrapper';

const FrequencySelector = ({
  frequencyList = [],
  frequencyTime,
  onFrequencyTimeChange,
  endFrequencyDate,
  onEndFrequencyDate,
  onListChange,
  selectedFrequency,
  weekDays,
  onSelectWeekdays,
  frequencyDays,
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
      {selectedIdx > 0 && (
        <View
          style={{
            marginBottom: 0,
            paddingBottom: 0,
          }}
        >
          <DailyWrapper
            frequencyTime={frequencyTime}
            onFrequencyTimeChange={onFrequencyTimeChange}
            endFrequencyDate={endFrequencyDate}
            onEndFrequencyDate={onEndFrequencyDate}
            selectedFrequency={selectedIdx}
            weekDays={weekDays}
            onSelectWeekdays={onSelectWeekdays}
            frequencyDays={frequencyDays}
          />
        </View>
      )}
    </View>
  );
};

export default FrequencySelector;
