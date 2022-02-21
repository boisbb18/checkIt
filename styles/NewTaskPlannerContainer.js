import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  bodyWrapper: {
    paddingHorizontal: '15@msr',
    // paddingBottom: 80,
    // marginTop: '16@msr',
    // // paddingVertical: '10@msr',
    // paddingBottom: '24@msr',
    // height: '100%',
    // flexDirection: 'column',
    // paddingBottom: '40@msr',
    // backgroundColor: 'red',
  },
  titleWrapper: {
    marginTop: '32@msr',
    padding: 0,
  },
  bottomPadding: {
    paddingHorizontal: '24@msr',
    marginBottom: '40@msr',
    backgroundColor: 'red',
  },
  descriptionView: {
    marginBottom: '24@msr',
    paddingBottom: '24@msr',
  },
  createButtonContainer: {
    width: '100%',
  },
  frequencyView: {
    paddingTop: '24@msr',
  },
  subtaskView: {
    marginTop: '24@msr',
    marginBottom: '24@msr',
  },
  modalView: {
    height: '30%',
    // marginTop: 80,
    width: '100%',
    paddingVertical: '25@msr',
    position: 'absolute',
    left: 0,
    bottom: 0,
    borderTopLeftRadius: '10@msr',
    borderTopRightRadius: '10@msr',
    shadowColor: '#000',
    backgroundColor: 'red',
    flexDirection: 'column',
  },
});

export default styles;
