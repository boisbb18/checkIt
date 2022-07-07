import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  mainContainer: {
    backgroundColor: '#dae8ff',
    paddingBottom: 13,
  },
  dateName: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: -0.32,
    fontWeight: '400',
    color: '#3C3C43',
    opacity: 0.6,
    marginTop: 5,
    marginBottom: 0,
    // paddingTop: 10,
  },
  dateNum: {
    fontSize: 20,
    lineHeight: 25,
    fontFamily: 'SFPro',
    letterSpacing: 0.38,
    fontWeight: '500',
    color: '#2B396C',
  },

  selecedDateNum: {
    color: '#fff',
  },

  todayDateNum: {
    color: '#F75454',
  },

  dayRow: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
  },

  dateNumContainer: {
    height: 32,
    width: 32,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  dateNumSelected: {
    borderRadius: 16,
    backgroundColor: '#fff',
  },

  dateTodaySelected: {
    borderRadius: 16,
    backgroundColor: '#F75454',
  },

  customNum: {
    fontSize: 20,
    lineHeight: 25,
    fontFamily: 'SFPro',
    letterSpacing: 0.38,
    fontWeight: '500',
    // color: '#fff',
    // textAlign: 'center',
    color: '#F75454',
  },

  highlightCustomNum: {
    fontSize: 20,
    lineHeight: 25,
    fontFamily: 'SFPro',
    letterSpacing: 0.38,
    fontWeight: '500',
    color: '#fff',

    // alignItems: 'center',
    // justifyContent: 'center',
    // textAlign: 'center',
    // backgroundColor: '#F75454',
    backgroundColor: 'green',
    height: 32,
    width: 32,
    borderRadius: 20,
  },

  highlightedNum: {
    fontSize: 20,
    lineHeight: 25,
    fontFamily: 'SFPro',
    letterSpacing: 0.38,
    fontWeight: '500',
    color: '#2B396C',
    textAlign: 'center',
    color: 'red',

    // alignItems: 'center',
    // justifyContent: 'center',
    // textAlign: 'center',
    // height: 32,
    // width: 32,
    // borderRadius: 20,
    // borderRadius: 16,
  },

  highlightCirlce: {},
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  markedDate: {
    width: 6,
    height: 6,
    marginTop: 1,
    borderRadius: 5,
  },
});

export default styles;
