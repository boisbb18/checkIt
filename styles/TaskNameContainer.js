import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  listItemWrapper: {
    borderRadius: '18@msr',
    backgroundColor: '#32ade6',
    alignItems: 'center',
    paddingHorizontal: '5@msr',
    marginBottom: '15@msr',
    height: '48@msr',
    shadowColor: '#32ade6',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },

  listItemIcon: {
    // height: '48@msr',
    width: '48@msr',
    flexDirection: 'column',
    alignItems: 'center',
    // flex: 1,
    height: '100%',
  },
});

export default styles;
