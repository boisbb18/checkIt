import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  modalView: {
    height: '100%',
    marginTop: 80,
    paddingTop: '25@msr',
    position: 'relative',
    borderTopLeftRadius: '20@msr',
    borderTopRightRadius: '20@msr',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: '#FFF',
    paddingBottom: 50,
  },

  modalViewTopBarContainer: {
    backgroundColor: '#32ade6',
    position: 'absolute',
    top: 0,
    width: '100%',
    borderTopLeftRadius: '20@msr',
    borderTopRightRadius: '20@msr',
  },

  modalViewTopBarTitle: {
    fontSize: '24@msr',
    fontWeight: '500',
    color: '#FFF',
  },

  modalBodyContainer: {
    paddingHorizontal: '16@msr',
  },

  modalTextInputWrapper: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'flex-end',
    marginVertical: '15@msr',
    justifyContent: 'space-between',
    paddingVertical: '30@msr',
  },

  modalBodyContainerSubtitle: {
    fontSize: '17@msr',
    opacity: 0.6,
    paddingVertical: '10@msr',
  },

  modalTextInputIcon: {
    height: '48@msr',
    width: '48@msr',
    borderRadius: '18@msr',
    backgroundColor: '#32ade6',
    alignItems: 'center',
    justifyContent: 'center',
  },

  modalTextInputFieldContainer: {
    borderBottomWidth: 1,
    borderColor: 'grey',
    paddingBottom: 4,
    flex: 1,
    height: '48@msr',
    fontSize: '20@msr',
    fontWeight: 'bold',
    color: 'blue',
  },

  modalTextInputContainer: {
    flex: 1,
    padding: '10@msr',
    height: '48@msr',
    color: 'green',
    fontWeight: 'bold',
  },
});

export default styles;
