import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  headerContainer: {
    paddingTop: '24@msr',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '16@msr',
  },
  colorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F8FF',
  },
  paletteColor: {
    flex: 1,
    backgroundColor: '#F3F8FF',
    paddingVertical: '4@msr',
    // paddingHorizontal: '20@msr',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#BFD5FA',
  },
});

export default styles;
