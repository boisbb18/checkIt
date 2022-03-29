import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  bodyWrapper: {},
  addedPadding: {
    paddingHorizontal: '15@msr',
  },
  titleWrapper: {
    marginTop: '40@msr',
    paddingTop: '32@msr',
    paddingHorizontal: '15@msr',
    paddingBottom: '32@msr',
    backgroundColor: '#F3F8FF',
  },
  bottomPadding: {
    paddingHorizontal: '24@msr',
    marginBottom: '40@msr',
    backgroundColor: 'red',
  },
  descriptionView: {
    marginBottom: '32@msr',
    // paddingBottom: '24@msr',
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
  createButton: {
    paddingBottom: '24@msr',
  },
});

export default styles;
