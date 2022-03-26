import React from 'react';
import { Button, Assets, Icon, View, Text } from 'react-native-ui-lib';
import { ScaledSheet, scale, moderateScale } from 'react-native-size-matters';

const AddIconButton = ({ openModal } = {}) => {
  return (
    <Button
      enableShadow={true}
      onPress={openModal}
      round
      iconSource={(iconStyle) => (
        <Icon
          source={Assets.icons.plusSign}
          size={scale(20)}
          tintColor="#FFF"
        />
      )}
      style={styles.buttonStyle}
      backgroundColor="#5199FF"
    />
  );
};
export default AddIconButton;

const styles = ScaledSheet.create({
  buttonStyle: {
    height: '64@msr',
    width: '64@msr',
    borderWidth: 6,
    borderColor: '#fff',
  },
});
