import React, { useState } from 'react';
import { View, Text, ColorPalette } from 'react-native-ui-lib';
import NewTaskTitleText from '../common/NewTaskTitleText';
import { moderateScale } from 'react-native-size-matters';
import ColorSelectorStyles from '../styles/ColorSelector';

const ColorSelector = ({ colors = [], paletteColor = '', onColorChange }) => {
  return (
    <View>
      <View style={ColorSelectorStyles.headerContainer}>
        <NewTaskTitleText text="What color?" />
      </View>
      <View style={ColorSelectorStyles.colorContainer}>
        <ColorPalette
          value={paletteColor}
          onValueChange={onColorChange}
          colors={colors}
          style={ColorSelectorStyles.paletteColor}
        />
      </View>
    </View>
  );
};

export default ColorSelector;
