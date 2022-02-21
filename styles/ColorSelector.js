import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  headerContainer: {
    paddingTop: '24@msr',
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paletteColor: {
    flex: 1,
  },
  // paletteContainer: {
  //   width: '30%',
  //   backgroundColor: 'red',
  // },
});

export default styles;
