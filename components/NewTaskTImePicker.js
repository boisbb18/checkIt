import React, { useState, useEffect } from 'react'
import { View, Modal, Text, Button } from 'react-native-ui-lib'
// import AddIconButton from '../common/buttons/AddIconButton';
// import NewTaskModal from './NewTaskModal';
import { ScaledSheet, scale, moderateScale } from 'react-native-size-matters'
// import dayjs from 'dayjs';
import MainButon from '../common/MainButton'
// import DateTimePicker from '@react-native-community/datetimepicker';

const NewTaskTimePicker = ({}) => {
  const [showPicker, setShowPicker] = useState(false)

  function hidePicker() {
    console.log('Picker should be hidden')
    setShowPicker(false)
  }

  // const closePicker = debounce(hidePicker, 10000);

  const onTimeChange = (event, selectedDate) => {
    console.log('Selected Date ')
    setTime(selectedDate)
    // setShowPicker(false);
    // closePicker()
  }

  const roundTimeQuarterHour = (time) => {
    var timeToReturn = new Date(time)

    timeToReturn.setMilliseconds(
      Math.round(timeToReturn.getMilliseconds() / 1000) * 1000
    )
    timeToReturn.setSeconds(Math.round(timeToReturn.getSeconds() / 60) * 60)
    timeToReturn.setMinutes(Math.round(timeToReturn.getMinutes() / 15) * 15)
    return timeToReturn
  }

  const showDate = () => {
    return 'Hello WOrld'
    // return dayjs('2021-12-12');
    // var d = new Date(2018, 8, 18)
    // var day = dayjs(d)
    // console.log('D -----> ', day)
    // return day
    // return dayjs(time).format('HH:mm A')
  }

  const openTimePicker = () => {
    console.log('TIme Picker should open')
    setShowPicker(true)
    console.log('TIme Picker should open')
  }

  useEffect(() => {
    setTime(roundTimeQuarterHour(time))
  }, [])

  return (
    <View>
      <View>
        <Text style={{}}></Text>
      </View>
      <View
        style={{
          backgroundColor: 'green',
        }}
      >
        {/* <Button
          backgroundColor="#3C9BF0"
          label="Hello World"
          size={Button.sizes.medium}
          borderRadius={3}
          text90
          labelStyle={{ fontWeight: '500' }}
          onPress={() => console.log('Button is called')}
        /> */}
        <MainButon
          text="Continue"
          onPress={() => console.log('It is called')}
        />
      </View>
      {/* {showPicker && (
        <View>
          <DateTimePicker
            mode="time"
            textColor="red"
            minuteInterval={5}
            value={time}
            is24Hour={true}
            style={styles.datePicker}
            onChange={onTimeChange}
            themeVariant="light"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          />
        </View>
      )} */}
    </View>
  )
}

export default NewTaskTimePicker

const styles = ScaledSheet.create({
  datePicker: {
    width: '100%',
    // height: 260,
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'flex-start',
  },
  textfieldContainer: {
    backgroundColor: 'blue',
    color: 'green',
  },
  textfieldInputContainer: {
    backgroundColor: 'red',
    // color: 'blue',
  },
})
