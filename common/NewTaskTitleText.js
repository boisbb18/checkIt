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
    // marginVertical: '15@msr',
    // paddingTop: '24@msr',
    // paddingBottom: '16@msr',
  },
  textfieldTitle: {
    fontSize: '13@msr',
    opacity: 0.6,
    fontFamily: 'SFPro',
    lineHeight: '18@msr',
    letterSpacing: -0.078,
  },
});

export default NewTaskTitleText;
