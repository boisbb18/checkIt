import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  typeWrapper: {},
  dateButtonContainer: {
    paddingTop: '16@msr',
  },
  dateButton: {
    height: '56@msr',
  },
  dateButtonLabel: {
    fontWeight: '400',
    fontSize: '17@msr',
    lineHeight: '22@msr',
  },
  dateButtonIcon: {
    marginRight: '11@msr',
    height: '22@msr',
    width: '22@msr',
  },
  datePicker: {
    width: '100%',
  },
});

export default styles;
