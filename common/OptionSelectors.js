import React from 'react';
import { Text, View, Button, Icon, Assets } from 'react-native-ui-lib';
import { ScaledSheet, moderateScale } from 'react-native-size-matters';

const OptionSelectors = ({
  buttonList = [],
  onChange,
  selectedIdx,
  size = 'medium',
  isDuration = true,
}) => {
  return (
    <View style={styles.selectorContainer}>
      {buttonList.map(({ label, val }, idx) => (
        <View
          key={val}
          style={{
            flex: 1,
            paddingLeft: idx !== 0 ? moderateScale(11) : 0,
          }}
        >
          <Button
            label={label}
            borderRadius={10}
            outline={idx !== selectedIdx}
            labelStyle={
              idx !== selectedIdx ? styles.labelStyle : styles.selectedLabel
            }
            style={
              idx !== selectedIdx ? styles.buttonStyle : styles.selectedButton
            }
            onPress={() => onChange(val)}
            size={size}
            iconSource={() => {
              if (!isDuration) return null;
              return (
                <View style={styles.buttonIcon}>
                  <Icon
                    source={Assets.icons.time}
                    size={moderateScale(15)}
                    tintColor={idx !== selectedIdx ? '#2B396C' : '#fff'}
                  />
                </View>
              );
            }}
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
    width: '100%',
  },
  labelStyle: {
    fontWeight: '400',
    fontSize: '13@msr',
    lineHeight: '18@msr',
    color: '#2B396C',
    letterSpacing: -0.08,
  },
  selectedLabel: {
    fontWeight: '400',
    fontSize: '13@msr',
    lineHeight: '18@msr',
    color: '#FFFFFF',
    letterSpacing: -0.08,
  },
  buttonStyle: {
    height: '44@msr',
    flex: 1,
    backgroundColor: 'rgba(116, 116, 128, 0.08)',
    borderWidth: 1,
    borderColor: 'rgba(116, 116, 128, 0.08)',
  },
  selectedButton: {
    height: '44@msr',
    flex: 1,
    backgroundColor: '#3387ff',
    // borderWidth: 1,
    // borderLeftColor: '#DAE8FF',
  },
  buttonIcon: {
    marginRight: '4@msr',
    height: '16@msr',
    width: '16@msr',
  },
});

export default OptionSelectors;
