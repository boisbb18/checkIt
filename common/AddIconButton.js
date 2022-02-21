import React from 'react';
import { Button, Assets, Icon } from 'react-native-ui-lib';
import { ScaledSheet, scale, moderateScale } from 'react-native-size-matters';

const AddIconButton = ({ openModal } = {}) => {
  return (
    <Button
      onPress={openModal}
      round
      iconSource={(iconStyle) => (
        <Icon
          source={Assets.icons.plusSmall}
          size={scale(35)}
          tintColor="#FFF"
        />
      )}
      style={styles.buttonStyle}
      color="#FFF"
    />
  );
};
export default AddIconButton;

const styles = ScaledSheet.create({
  buttonStyle: {
    position: 'absolute',
    right: moderateScale(30),
    bottom: moderateScale(30),
  },
});
