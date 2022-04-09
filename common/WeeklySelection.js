import React from 'react';
import { Text, View, Button, Icon, Assets } from 'react-native-ui-lib';
import { ScaledSheet, moderateScale } from 'react-native-size-matters';

const WeeklySection = ({
  weekDays = [],
  selectedDays = [],
  onSelectWeekdays,
  selectedDaysObj,
}) => {
  return (
    <View style={styles.selectorContainer}>
      {weekDays.map(({ weekDay, title }, idx) => (
        <View
          key={idx}
          style={{
            flex: 1,
            paddingLeft: idx !== 0 ? moderateScale(11) : 0,
          }}
        >
          <Button
            label={title}
            outline={!!selectedDaysObj[weekDay]}
            labelStyle={[
              styles.labelStyle,
              selectedDaysObj[weekDay]
                ? styles.selectedColor
                : styles.unselectedColor,
            ]}
            style={[
              styles.buttonStyle,
              selectedDaysObj[weekDay]
                ? styles.selectedButton
                : styles.unselectedButton,
            ]}
            onPress={() => onSelectWeekdays(weekDay, title)}
            size="xSmall"
            round={true}
          />
        </View>
      ))}
    </View>
  );
};

export default WeeklySection;

const styles = ScaledSheet.create({
  selectorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  labelStyle: {
    fontSize: '16@msr',
    lineHeight: '21@msr',
  },
  selectedColor: {
    color: '#FFF',
  },
  unselectedColor: {
    color: '#2B396C',
  },
  buttonStyle: {
    flex: 1,
  },

  selectedButton: {
    backgroundColor: '#3387ff',
  },
  unselectedButton: {
    backgroundColor: 'rgba(116, 116, 128, 0.08)',
    borderWidth: 1,
    borderColor: 'rgba(116, 116, 128, 0.08)',
  },
});
