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
    fontSize: '17@msr',
    fontWeight: '400',
    // fontWeight: 'bold',
    lineHeight: '22@msr',
    color: 'blue',
  },
  textfieldInputContainer: {
    flex: 1,
    padding: '16@msr',
    borderRadius: '5@msr',
    minHeight: '150@msr',
    borderWidth: 1,
    borderColor: '#EEEEEF',
  },
});

export default styles;
