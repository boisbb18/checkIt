import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  modalBodyContainer: {
    // paddingHorizontal: '15@msr',
  },
  headerWrapper: {
    paddingTop: '24@msr',
    paddingBottom: '16@msr',
  },
  textfieldWrapper: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingBottom: '5@msr',
  },

  textfieldTitle: {
    fontSize: '17@msr',
    opacity: 0.6,
    paddingTop: '10@msr',
  },

  textfieldIcon: {
    height: '48@msr',
    width: '48@msr',
    borderRadius: '18@msr',
    backgroundColor: '#32ade6',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textfieldContainer: {
    // borderBottomWidth: 1,
    // borderColor: 'grey',
    // paddingBottom: 5,
    flex: 1,

    lineHeight: '25@msr',
    fontSize: '20@msr',
  },

  textfieldInputContainer: {
    flex: 1,
  },

  mainTextWrapper: {
    lineHeight: '25@msr',
    fontSize: '20@msr',
    fontFamily: 'SFPro',
    letterSpacing: 0.38,
  },

  labelContainer: {
    marginBottom: '8@msr',
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: 0.38,
  },
});

export default styles;
