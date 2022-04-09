import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    backgroundColor: '#dae8ff',
    // position: 'absolute',
    // top: 0,
    // left: 0,
    paddingTop: '17@msr',
    paddingBottom: '17@msr',
    paddingHorizontal: '16@msr',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '41@msr',
  },
  dateTitle: {
    lineHeight: 41,
    fontSize: 34,
    letterSpacing: 0.37,
    fontFamily: 'SFPro-Semibold',
    fontWeight: '700',
    color: '#2B396C',
  },
  topTitleContainer: {
    flex: 1,
  },
  iconContainer: {
    flexDirection: 'row',
  },
});

export default styles;
