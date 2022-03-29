import React from 'react';
import { Button } from 'react-native-ui-lib';
import { ScaledSheet, scale, moderateScale } from 'react-native-size-matters';

const MainButton = ({ text, onPress, disabled = false, size = 'med' } = {}) => {
  return (
    <Button
      label={text}
      borderRadius={5}
      style={{ ...styles.buttonStyle, ...styles[size] }}
      onPress={onPress}
      labelStyle={styles.labelStyle}
      backgroundColor="#34c759"
      disabled={disabled}
      enableShadow
    />
  );
};

export default MainButton;

const styles = ScaledSheet.create({
  buttonStyle: {
    // height: moderateScale(45),
    backgroundColor: '#5199FF',
  },
  labelStyle: {
    fontSize: 16,
    fontFamily: 'SFPro',
    lineHeight: 21,
    letterSpacing: -0.32,
    fontWeight: '400',
  },
  med: {
    height: moderateScale(48),
  },
  lrg: {
    height: moderateScale(60),
  },
});
