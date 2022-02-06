import React, { useState, useEffect, useCallback } from 'react'
import { Text, View } from 'react-native-ui-lib'
import { ScrollView } from 'react-native'
import MainButon from '../common/buttons/MainButton'
import TaskTitleField from './TaskTitleField'
import NewTaskTime from './NewTaskTime'
import DateTimeSelector from './DateTimeSelector'
import NewTaskPlannerContainerStyles from '../styles/NewTaskPlannerContainer'
import dayjs from 'dayjs'

const inputAccessoryViewID = 'abcd'
const roundDate = () => {
  let coeff = 1000 * 60 * 5
  let date = new Date() //or use any other date
  return new Date(Math.round(date.getTime() / coeff) * coeff)
}

const NewTaskPlannerContainer = ({
  taskIcon,
  taskName,
  onTaskNameChange,
  modalVisible,
  titleSelected = false,
}) => {
  const [showTime, setShowTime] = useState(true)
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedDuration, setSelectedDuration] = useState(15)

  useEffect(() => {
    setSelectedDate(roundDate())
  }, [titleSelected])

  const getItems = useCallback(() => {
    var x = 5 //minutes interval
    var times = [] // time array

    var tt = 0 // start time
    var ap = ['AM', 'PM'] // AM-PM
    console.log('FUnction is called in Main')
    //loop to increment the time and push results in array
    for (var i = 0; tt < 24 * 60; i++) {
      var hh = Math.floor(tt / 60) // getting hours of day in 0-24 format
      var mm = tt % 60 // getting minutes of the hour in 0-55 format
      let hour = hh % 12 > 0 ? hh % 12 : 12
      let val = `${hour}:${('0' + mm).slice(-2)} ${ap[Math.floor(hh / 12)]}`
      tt = tt + x
      let newTime = dayjs()
        .hour(hh)
        .minute(mm + selectedDuration)
        .format('h:mm A')
      times[i] = { label: `${val} - ${newTime}`, value: `${hh}-${mm}` }
    }
    return times
  }, [selectedDuration])

  const handleShowTime = () => {
    setShowTime(!showTime)
  }

  const handleDateChange = (newDate) => {
    const hh = dayjs(selectedDate).hour()
    const mm = dayjs(selectedDate).minute()
    const updatedDate = dayjs(newDate).hour(hh).minute(mm)
    setSelectedDate(new Date(updatedDate))
  }

  const handleTimeChange = (newTime) => {
    newTime = newTime.split('-')
    const hh = parseInt(newTime[0])
    const mm = parseInt(newTime[1])
    let newDate = dayjs(selectedDate).hour(hh).minute(mm)
    setSelectedDate(new Date(newDate))
  }

  return (
    <ScrollView style={NewTaskPlannerContainerStyles.bodyWrapper}>
      <View>
        <TaskTitleField
          modalVisible={modalVisible}
          taskIcon={taskIcon}
          taskName={taskName}
          onTaskNameChange={onTaskNameChange}
          inputAccessoryViewID={inputAccessoryViewID}
        />
      </View>
      <View>
        {/* <NewTaskTime
          titleSelected={titleSelected}
          showTime={showTime}
          onShowTime={handleShowTime}
        /> */}
        <DateTimeSelector
          selectedDate={selectedDate}
          onDateChange={handleDateChange}
          timeList={getItems()}
          onTimeChange={handleTimeChange}
        />
      </View>
    </ScrollView>
  )
}

export default NewTaskPlannerContainer
