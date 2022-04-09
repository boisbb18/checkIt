import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Text, View, Modal, Assets } from 'react-native-ui-lib';
import {
  ScrollView,
  KeyboardAvoidingView,
  InputAccessoryView,
} from 'react-native';
import MainButon from '../common/MainButton';
import TaskTitleField from './TaskTitleField';
import DateTimeSelector from './DateTimeSelector';
import NewTaskPlannerContainerStyles from '../styles/NewTaskPlannerContainer';
import DurationSelector from './DurationSelector';
import DurationEditModal from './DurationEditModal';
import ColorSelector from './ColorSelector';
import FrequencySelector from './FrequencySelector';
import SubtaskSelector from './SubtaskSelector';
import DescriptionSelector from './DescriptionSelector';
import TitleSelector from './TitleSelector';
import dayjs from 'dayjs';

const inputAccessoryViewID = 'abcd';
const roundDate = () => {
  let coeff = 1000 * 60 * 5;
  let date = new Date(); //or use any other date
  return new Date(Math.round(date.getTime() / coeff) * coeff);
};

const recurringDate = () => {
  return new Date(new Date().setFullYear(new Date().getFullYear() + 1));
};

const defaultList = [
  { label: '15min', val: 15 },
  { label: '30min', val: 30 },
  { label: '45min', val: 45 },
  { label: '1hour', val: 60 },
];
const allColors = [
  '#FF3B30',
  '#FF9500',
  '#5AC8FA',
  '#AF52DE',
  '#AC8E68',
  '#007AFF',
];
const frequencyList = [
  { label: 'Once', val: 'once' },
  { label: 'Daily', val: 'daily' },
  { label: 'Weekly', val: 'weekly' },
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

const weekDays = [
  { weekDay: 'MO', title: 'M' },
  { weekDay: 'TU', title: 'T' },
  { weekDay: 'WE', title: 'W' },
  { weekDay: 'TH', title: 'T' },
  { weekDay: 'FR', title: 'F' },
  { weekDay: 'SA', title: 'S' },
  { weekDay: 'SU', title: 'S' },
];

const NewTaskPlannerContainer = ({
  taskIcon,
  taskName,
  onTaskNameChange,
  modalVisible,
  titleSelected = false,
  inputAccessoryViewId = 'abcd',
  isKeyboardVisible = false,
  onCreateNewTask,
}) => {
  const [showTime, setShowTime] = useState(true);
  const [taskType, setTaskType] = useState(0);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDuration, setSelectedDuration] = useState(15);
  const [showDurationEditModal, setShowDurationEditModal] = useState(false);
  const [durationList, setDurationList] = useState(defaultList);
  const [paletteColor, setPaletteColor] = useState('#FF3B30');
  const [selectedFrequency, setSelectedFrequency] = useState('once');
  const [frequencyTime, setFrequencyTime] = useState(new Date());
  const [endFrequencyDate, setEndFrequencyDate] = useState(new Date());
  const [frequencyDays, setFrequencyDays] = useState([]);
  const [subtaskList, setSubtaskList] = useState([]);
  const [description, setDescription] = useState('');
  const scrollViewRef = React.createRef();

  useEffect(() => {
    setSelectedDate(roundDate());
    setFrequencyTime(roundDate());
    setEndFrequencyDate(recurringDate());
    setCurrentDayOfTheWeek();
  }, [titleSelected]);

  const setCurrentDayOfTheWeek = () => {
    let currentDate = new Date();
    let dayOfTheWeek = currentDate.getDay();
    let currentDay =
      dayOfTheWeek === 0 ? weekDays.length - 1 : dayOfTheWeek - 1;
    setFrequencyDays([weekDays[currentDay]]);
  };

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

  const addSubtask = () => {
    let arr = [...subtaskList, { task: '', isCompleted: false }];
    setSubtaskList(arr);
    scrollToBottom();
  };

  const editSubtaskList = (val, idx) => {
    let arr = [...subtaskList];
    arr[idx].task = val;
    setSubtaskList(arr);
    scrollToBottom();
  };

  const scrollToBottom = () => {
    scrollViewRef.current?.scrollToEnd();
  };

  const selectWeekdays = (weekDay, title) => {
    let idx = frequencyDays.map(({ weekDay }) => weekDay).indexOf(weekDay);
    let newArr = [];
    if (idx > -1) {
      newArr = frequencyDays.filter((data, index) => idx !== index);
    } else {
      newArr = [...frequencyDays, { weekDay, title }];
    }
    setFrequencyDays(newArr);
  };

  const addNewTask = () => {
    /*
    taskType,
    selectedDate,
    selectedDuration,
    paletteColor,
    selectedFrequency,
    frequencyTime,
    endFrequencyDate,
    subtaskList,
    description,
    */
    onCreateNewTask({
      taskType,
      selectedDate,
      selectedDuration,
      paletteColor,
      selectedFrequency,
      subtaskList,
      frequencyTime,
      endFrequencyDate,
      description,
      frequencyDays,
    });
  };

  return (
    <KeyboardAvoidingView
      enabled
      keyboardVerticalOffset={100}
      behavior="padding"
    >
      <ScrollView
        ref={scrollViewRef}
        style={NewTaskPlannerContainerStyles.bodyWrapper}
        keyboardDismissMode="on-drag"
      >
        <DurationEditModal
          showModal={showDurationEditModal}
          onClose={handleDurationEditModalSelect}
          selectedDuration={selectedDuration}
          onSave={handleDurationListModify}
        />
        <View style={NewTaskPlannerContainerStyles.titleWrapper}>
          <TitleSelector
            modalVisible={modalVisible}
            taskName={taskName}
            onTaskChange={onTaskNameChange}
            inputAccessoryViewID={inputAccessoryViewId}
          />
        </View>
        <View style={[NewTaskPlannerContainerStyles.addedPadding]}>
          <DateTimeSelector
            taskType={taskType}
            onTaskTypeChange={(idx) => setTaskType(idx)}
            selectedDate={selectedDate}
            onDateChange={handleDateChange}
            timeList={timesList}
            onTimeChange={handleTimeChange}
          />
        </View>
        <View
          style={[
            NewTaskPlannerContainerStyles.frequencyView,
            NewTaskPlannerContainerStyles.addedPadding,
          ]}
        >
          <DurationSelector
            selectedDuration={selectedDuration}
            onDurationChange={(val) => setSelectedDuration(val)}
            onEditClick={openDurationEditModal}
            durationList={durationList}
            // onSave={}
          />
        </View>
        <View style={[NewTaskPlannerContainerStyles.addedPadding]}>
          <ColorSelector
            colors={allColors}
            paletteColor={paletteColor}
            onColorChange={(color) => setPaletteColor(color)}
          />
        </View>
        {taskType < 2 && (
          <View style={[NewTaskPlannerContainerStyles.addedPadding]}>
            <FrequencySelector
              frequencyTime={frequencyTime}
              onFrequencyTimeChange={setFrequencyTime}
              endFrequencyDate={endFrequencyDate}
              onEndFrequencyDate={setEndFrequencyDate}
              frequencyList={frequencyList}
              selectedFrequency={selectedFrequency}
              onListChange={(frequency) => setSelectedFrequency(frequency)}
              weekDays={weekDays}
              onSelectWeekdays={selectWeekdays}
              frequencyDays={frequencyDays}
            />
          </View>
        )}
        <View
          style={[
            NewTaskPlannerContainerStyles.subtaskView,
            NewTaskPlannerContainerStyles.addedPadding,
          ]}
        >
          <SubtaskSelector
            addSubtask={addSubtask}
            subtaskList={subtaskList}
            editList={editSubtaskList}
            inputAccessoryViewID={inputAccessoryViewId}
          />
        </View>
        <View
          style={[
            NewTaskPlannerContainerStyles.descriptionView,
            NewTaskPlannerContainerStyles.addedPadding,
          ]}
        >
          <DescriptionSelector
            description={description}
            onDescriptionChange={setDescription}
            inputAccessoryViewID={inputAccessoryViewId}
          />
        </View>
        {!isKeyboardVisible && (
          <View
            style={[
              NewTaskPlannerContainerStyles.createButton,
              NewTaskPlannerContainerStyles.addedPadding,
            ]}
          >
            <MainButon
              text={'Main Button'}
              onPress={addNewTask}
              disabled={taskName === ''}
              size="lrg"
            />
          </View>
        )}
        <InputAccessoryView nativeID={inputAccessoryViewID}>
          <View
            style={{
              paddingHorizontal: 15,
            }}
          >
            <MainButon
              text={'Create Task'}
              // onPress={() => console.log('Button clickeed')}
              onPress={addNewTask}
              disabled={taskName === ''}
            />
          </View>
        </InputAccessoryView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default NewTaskPlannerContainer;
