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
    borderWidth: 1,
    borderColor: '#BFD5FA',
  },
  dateButtonLabel: {
    fontWeight: '400',
    fontSize: '17@msr',
    lineHeight: '22@msr',
    color: '#2B396C',
    letterSpacing: -0.41,
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
  segmentStyle: {
    fontSize: 20,
    lineHeight: 25,
  },
  segmentContainerStyle: {
    height: '44@msr',
    borderColor: '#fff',
    // borderColor: 'red',
    backgroundColor: '#ecf4ff',
  },
});

export default styles;
