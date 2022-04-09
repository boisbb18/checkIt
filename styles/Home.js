import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  allTasksWrapper: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    // paddingHorizontal: '10@msr',
  },
  navigationContainer: {
    paddingHorizontal: '10@msr',
    flex: 1,
  },
  customContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '92@msr',
    backgroundColor: '#F9F9FB',
    flexDirection: 'row',
    borderTopLeftRadius: '30@msr',
    borderTopRightRadius: '30@msr',
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '116@msr',
  },
  buttonWrapper: {
    backgroundColor: '#EBEBF5',
    height: '92@msr',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '100%',
    marginTop: '24@msr',
    borderTopLeftRadius: '30@msr',
    borderTopRightRadius: '30@msr',
  },
  addButtonWrapper: {
    height: '100%',
    backgroundColor: 'red',
  },
  addButton: {
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonTopLayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  buttonIcon: {
    marginTop: '18@msr',
    marginHorizontal: '66@msr',
    // height: '24@msr',
    width: '54@msr',
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonText: {
    marginTop: '4@msr',
    fontSize: '11@msr',
    lineHeight: '13@msr',
    color: '#2B396C',
  },
});

export default styles;
