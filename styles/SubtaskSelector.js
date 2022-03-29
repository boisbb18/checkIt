import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  headerContainer: {
    paddingTop: '24@msr',
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionListContainer: {
    paddingTop: '16@msr',
  },
  mainButton: {
    height: '48@msr',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  mainButtonLabel: {
    fontWeight: '400',
    fontSize: '16@msr',
    lineHeight: '21@msr',
    marginLeft: '11@msr',
    letterSpacing: -0.32,
    fontFamily: 'SFPro',
  },
  mainButtonIcon: {
    height: '24@msr',
    width: '24@msr',
    borderRadius: '12@msr',
    borderWidth: 1,
    display: 'flex',
    borderColor: '#fff',
    borderStyle: 'solid',
    // flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // flex: 1,
    padding: 0,
    // textAlign: 'center',
  },

  firstContainer: {
    borderWidth: 1,
    borderColor: '#EEEEEF',
    borderBottomWidth: 0,
    padding: '16@msr',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },

  lastItemContainer: {
    borderWidth: 1,
    borderColor: '#EEEEEF',
    borderBottomWidth: 0,
    borderTopWidth: 0,
    paddingHorizontal: '16@msr',
  },

  taskContainer: {
    borderWidth: 1,
    borderColor: '#EEEEEF',
    borderBottomWidth: 0,
    borderTopWidth: 0,
    padding: '16@msr',
    paddingTop: 0,
  },
  taskBorderWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEF',
    flexDirection: 'row',
    alignItems: 'center',
  },

  elementWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  textfieldContainer: {
    // borderBottomWidth: 1,
    borderColor: '#EEEEEF',
    // paddingBottom: 4,
    flex: 1,
    fontSize: '17@msr',
    // fontWeight: 'bold',
    lineHeight: '22@msr',
    color: 'blue',
  },

  textfieldInputContainer: {
    flex: 1,
    padding: '10@msr',
    color: 'green',
    fontWeight: 'bold',
  },
  checkboxContainer: {
    marginRight: '8@msr',
  },
});

export default styles;
