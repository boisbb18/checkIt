import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  headerContainer: {
    paddingTop: '24@msr',
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleContainer: {
    position: 'absolute',
    left: 0,
  },
  editContainer: {
    position: 'absolute',
    right: 0,
  },
  headerEditButton: {
    fontWeight: '400',
    fontSize: '17@msr',
    color: '#3C3C43',
    opacity: 0.6,
  },
  optionListContainer: {
    paddingTop: '16@msr',
  },
});

export default styles;
