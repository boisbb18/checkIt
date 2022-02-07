import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  typeWrapper: {},
  headerContainer: {
    paddingTop: '24@msr',
    paddingBottom: '16@msr',
  },
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
  timePickerContainer: {
    paddingTop: '8@msr',
  },
});

export default styles;
