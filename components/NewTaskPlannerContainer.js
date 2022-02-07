import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Text, View, Modal, Assets } from 'react-native-ui-lib';
import { ScrollView } from 'react-native';
import MainButon from '../common/buttons/MainButton';
import TaskTitleField from './TaskTitleField';
import DateTimeSelector from './DateTimeSelector';
import NewTaskPlannerContainerStyles from '../styles/NewTaskPlannerContainer';
import DurationSelector from './DurationSelector';
import DurationEditModal from './DurationEditModal';
import dayjs from 'dayjs';

const inputAccessoryViewID = 'abcd';
const roundDate = () => {
  let coeff = 1000 * 60 * 5;
  let date = new Date(); //or use any other date
  return new Date(Math.round(date.getTime() / coeff) * coeff);
};
const defaultList = [
  { label: '15min', val: 15 },
  { label: '30min', val: 30 },
  { label: '45min', val: 45 },
  { label: '1hour', val: 60 },
];
const getItems = (duration = 15) => {
  var x = 5; //minutes interval
  var times = []; // time array

  var tt = 0; // start time
  var ap = ['AM', 'PM']; // AM-PM
  //loop to increment the time and push results in array
  for (var i = 0; tt < 24 * 60; i++) {
    var hh = Math.floor(tt / 60); // getting hours of day in 0-24 format
    var mm = tt % 60; // getting minutes of the hour in 0-55 format
    let hour = hh % 12 > 0 ? hh % 12 : 12;
    let val = `${hour}:${('0' + mm).slice(-2)} ${ap[Math.floor(hh / 12)]}`;
    tt = tt + x;
    let newTime = dayjs()
      .hour(hh)
      .minute(mm + duration)
      .format('h:mm A');
    times[i] = { label: `${val} - ${newTime}`, value: `${hh}-${mm}` };
  }
  return times;
};

const NewTaskPlannerContainer = ({
  taskIcon,
  taskName,
  onTaskNameChange,
  modalVisible,
  titleSelected = false,
}) => {
  const [showTime, setShowTime] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDuration, setSelectedDuration] = useState(15);
  const [showDurationEditModal, setShowDurationEditModal] = useState(false);
  const [durationList, setDurationList] = useState(defaultList);

  useEffect(() => {
    setSelectedDate(roundDate());
  }, [titleSelected]);

  const handleShowTime = () => {
    setShowTime(!showTime);
  };

  const timesList = useMemo(() => {
    return getItems(selectedDuration);
  }, [selectedDuration]);

  const handleDateChange = (newDate) => {
    const hh = dayjs(selectedDate).hour();
    const mm = dayjs(selectedDate).minute();
    const updatedDate = dayjs(newDate).hour(hh).minute(mm);
    setSelectedDate(new Date(updatedDate));
  };

  const handleTimeChange = (newTime) => {
    newTime = newTime.split('-');
    const hh = parseInt(newTime[0]);
    const mm = parseInt(newTime[1]);
    let newDate = dayjs(selectedDate).hour(hh).minute(mm);
    setSelectedDate(new Date(newDate));
  };

  const handleDurationEditModalSelect = (newTime) => {
    setShowDurationEditModal(false);
  };

  const openDurationEditModal = () => {
    setShowDurationEditModal(true);
  };

  const handleDurationListModify = (newTime) => {
    let idx = durationList.map(({ val }) => val).indexOf(newTime);
    if (idx !== -1) {
      setSelectedDuration(newTime);
      return;
    }
    let index = durationList.length - 1;
    for (let i = 0; i < defaultList.length; i++) {
      if (newTime < defaultList[i].val) {
        index = i;
        break;
      }
    }
    let newHour = parseInt(newTime / 60);
    let newLabel =
      newHour <= 0
        ? `${newTime}min`
        : newTime % 60 > 0
        ? `${newHour}h ${newTime % 60}m`
        : `${newHour}hour${newHour > 1 ? 's' : ''}`;
    let newVal = newTime;
    let newObj = { label: newLabel, val: newVal };
    let newList = [...durationList];
    if (index === 0) {
      newList[index] = { ...newObj };
    } else if (index === defaultList.length - 1) {
      newList[index] = { ...newObj };
    } else {
      newList[index - 1] = { ...newObj };
    }
    setDurationList(newList);
    setSelectedDuration(newTime);
  };

  return (
    <ScrollView style={NewTaskPlannerContainerStyles.bodyWrapper}>
      <DurationEditModal
        showModal={showDurationEditModal}
        onClose={handleDurationEditModalSelect}
        selectedDuration={selectedDuration}
        onSave={handleDurationListModify}
      />

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
        <DateTimeSelector
          selectedDate={selectedDate}
          onDateChange={handleDateChange}
          timeList={timesList}
          onTimeChange={handleTimeChange}
        />
      </View>
      <View>
        <DurationSelector
          selectedDuration={selectedDuration}
          onDurationChange={(val) => setSelectedDuration(val)}
          onEditClick={openDurationEditModal}
          durationList={durationList}
          // onSave={}
        />
      </View>
    </ScrollView>
  );
};

export default NewTaskPlannerContainer;
