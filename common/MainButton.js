import React from 'react';
import { Button } from 'react-native-ui-lib';
import { ScaledSheet, scale, moderateScale } from 'react-native-size-matters';

const MainButton = ({ text, onPress, disabled = false } = {}) => {
  return (
    <Button
      label={text}
      borderRadius={7}
      style={styles.buttonStyle}
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
    height: moderateScale(45),
  },
  labelStyle: {
    fontSize: moderateScale(17),
    fontWeight: '700',
  },
});
