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
    borderBottomWidth: 1,
    borderColor: 'grey',
    paddingBottom: 4,
    flex: 1,
    height: '48@msr',
    fontSize: '20@msr',
    // fontWeight: 'bold',
    fontFamily: 'SFPro-Semibold',
    color: 'blue',
  },

  textfieldInputContainer: {
    flex: 1,
    padding: '10@msr',
    height: '48@msr',
    color: 'green',
    // fontWeight: 'bold',
    fontFamily: 'SFPro-Semibold',
  },
});

export default styles;
