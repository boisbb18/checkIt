import React from 'react';
import { Text, View } from 'react-native-ui-lib';
import { ScaledSheet } from 'react-native-size-matters';

const NewTaskTitleText = ({ text = '' }) => (
  <View style={styles.titleWrapper}>
    <Text style={styles.textfieldTitle}>{text}</Text>
  </View>
);

const styles = ScaledSheet.create({
  titleWrapper: {
    marginVertical: '15@msr',
  },
  textfieldTitle: {
    fontSize: '17@msr',
    opacity: 0.6,
    // paddingVertical: '10@msr',
    paddingTop: '10@msr',
  },
});

export default NewTaskTitleText;
