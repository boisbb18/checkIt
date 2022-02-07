import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  bodyWrapper: {
    paddingHorizontal: '15@msr',
    paddingVertical: '10@msr',
    height: '100%',
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
