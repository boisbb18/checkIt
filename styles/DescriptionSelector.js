import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  headerContainer: {
    paddingTop: '24@msr',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    marginTop: '16@msr',
  },
  textfieldContainer: {
    // borderBottomWidth: 1,
    fontSize: '16@msr',
    fontWeight: '400',
    // fontWeight: 'bold',
    lineHeight: '21@msr',
    color: 'rgba(43, 57, 108, 0.6)',
    letterSpacing: -0.32,
    // backgroundColor: '#F2F2F7',
  },
  textfieldInputContainer: {
    flex: 1,
    padding: '16@msr',
    borderRadius: '8@msr',
    minHeight: '150@msr',
    borderWidth: 1,
    borderColor: 'rgba(116, 116, 128, 0.08)',
    backgroundColor: '#F2F2F7',
  },
});

export default styles;
