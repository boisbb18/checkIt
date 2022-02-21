import React, { useState } from 'react';
import { Text, View, Button, Checkbox, Incubator } from 'react-native-ui-lib';
import NewTaskTitleText from '../common/NewTaskTitleText';
import DescriptionSelectorStyles from '../styles/DescriptionSelector';
import { moderateScale } from 'react-native-size-matters';
const { TextField } = Incubator;

const DescriptionSelector = ({ onDescriptionChange, description }) => {
  const descriptionChange = (text) => {};
  return (
    <View>
      <View style={{}}>
        <NewTaskTitleText text="Any details?" />
      </View>
      <View style={DescriptionSelectorStyles.textContainer}>
        <TextField
          text70M
          multiline={true}
          editable={true}
          scrollEnabled={false}
          value={description}
          onChangeText={(text) => onDescriptionChange(text)}
          placeholder="Add notes, meeting links or phone numbers"
          numberOfLines={8}
          fieldStyle={DescriptionSelectorStyles.textfieldContainer}
          containerStyle={DescriptionSelectorStyles.textfieldInputContainer}
        />
      </View>
    </View>
  );
};

export default DescriptionSelector;
