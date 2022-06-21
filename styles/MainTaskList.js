import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  mainScroll: {},
  scrollContainer: {
    flexDirection: 'column',
    padding: 0,
    margin: 0,
    justifyContent: 'flex-start',
    width: '100%',
    paddingBottom: 100,
  },
  mainView: {
    flexDirection: 'column',
    height: '100%',
    padding: 0,
    marginTop: '-15@msr',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#FFFFFF',
  },
  mainContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor: '#FFFFFF',
    height: '100%',
    paddingHorizontal: '16@msr',
  },
  mainListTitle: {
    marginVertical: '16@msr',
  },
  emptyListImage: {
    marginTop: '30@msr',
    marginBottom: '8@msr',
  },
  emptyListSubtitle: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: -0.32,
    textAlign: 'center',
    color: '#2B396C',
  },
  subtitleContainer: {
    marginTop: 8,
  },
  listItemContainer: {
    width: '100%',
  },

  expandableSection: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    marginBottom: '12@msr',
  },

  expandableTitle: {
    fontFamily: 'SFPro-Semibold',
    fontSize: 20,
    lineHeight: 25,
    letterSpacing: 0.38,
    color: '#2B396C',
  },
  expandableIcon: {
    marginLeft: '12@msr',
  },

  scheduledTaskTitleContainer: {
    marginVertical: '12@msr',
  },

  plannedTaskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    flex: 1,
    width: '100%',
  },

  taskTimeContainer: {
    width: '60@msr',
    marginRight: '4@msr',
  },

  taskTime: {
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: -0.32,
    fontFamily: 'SFPro',
    color: '#2B396C',
  },
});

export default styles;
