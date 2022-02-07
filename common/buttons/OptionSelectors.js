import React from 'react';
import { Text, View, Button } from 'react-native-ui-lib';
import { ScaledSheet, moderateScale } from 'react-native-size-matters';

const OptionSelectors = ({ buttonList = [], onChange, selectedIdx }) => {
  return (
    <View style={styles.selectorContainer}>
      {buttonList.map(({ label, val }, idx) => (
        <View
          key={val}
          style={{
            flex: 1,
            paddingLeft: idx !== 0 ? moderateScale(11) : 0,
            // flexWrap: 'wrap',
          }}
        >
          <Button
            label={label}
            borderRadius={10}
            outline={idx !== selectedIdx}
            labelStyle={styles.labelStyle}
            style={styles.buttonStyle}
            onPress={() => onChange(val)}
          />
        </View>
      ))}
    </View>
  );
};

const styles = ScaledSheet.create({
  selectorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
  labelStyle: {
    fontWeight: '400',
    fontSize: '13@msr',
    lineHeight: '18@msr',
  },
  buttonStyle: {
    height: '44@msr',
    flex: 1,
  },
});

export default OptionSelectors;
