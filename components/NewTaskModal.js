import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  InputAccessoryView,
  Keyboard,
  // SafeAreaView,
} from 'react-native';
import {
  Modal,
  Text,
  Assets,
  View,
  Incubator,
  TouchableOpacity,
} from 'react-native-ui-lib';
import NewTaskModalStyle from '../styles/NewTaskModal';
import Icon from 'react-native-vector-icons/FontAwesome';
import { moderateScale } from 'react-native-size-matters';
import TaskNameContainer from './TaskNameContainer';
import TaskTitleContainer from './TaskTitleContainer';
import TitleSelector from './TitleSelector';
import NewTaskPlannerContainer from './NewTaskPlannerContainer';
import {
  saveNewTask,
  saveNewReminder,
  createReocurrence,
  addSingleEvents,
} from '../services/firebaseService';
import MainButon from '../common/MainButton';
const { TextField } = Incubator;

const inputAccessoryViewID = '123abc';
const NewTaskModal = ({
  userId,
  modalVisible,
  closeModal,
  onNewTaskAdded,
} = {}) => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [taskIcon, setTaskIcon] = useState('shopping-cart');
  const [titleSelected, setTitleSelected] = useState(false);
  // const [titleSelected]

  useEffect(() => {
    if (modalVisible) {
      setTaskName('');
      setTaskIcon('shopping-cart');
      setTitleSelected(false);
    }

    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, [modalVisible]);

  const handleTaskSelect = (taskRow) => {
    setTaskName(taskRow.text);
    setTaskIcon(taskRow.icon);
    setTitleSelected(true);
  };

  const handleTitleSelect = () => {
    setTitleSelected(true);
  };

  const createNewTask = async ({
    taskType,
    selectedDate,
    selectedDuration,
    paletteColor,
    selectedFrequency,
    frequencyTime,
    endFrequencyDate,
    subtaskList,
    description,
    frequencyDays,
  }) => {
    const isReminder = taskType === 2;
    const isAllDay = taskType === 1;
    const isOnce = selectedFrequency === 'once';
    subtaskList = subtaskList.filter((subTask) => subTask.task !== '');
    const newTaskObj = {
      taskName,
      selectedDate,
      duration: selectedDuration,
      paletteColor,
      description,
      isCompleted: false,
      subtaskList,
    };

    let newEvent = {};
    if (isReminder) {
      saveNewReminder(userId, newTaskObj);
      return;
    } else if (!isOnce) {
      newEvent = await createReocurrence(
        frequencyDays,
        selectedFrequency,
        userId,
        { ...newTaskObj, frequency: selectedFrequency, isAllDay },
        selectedDate
      );
    } else {
      newEvent = await addSingleEvents(userId, {
        ...newTaskObj,
        isAllDay,
        repeatedEventId: null,
      });
    }
    console.log('Event is called ----> ', newEvent);

    onNewTaskAdded({
      ...newEvent,
      isAllDay,
      repeatedEventId: null,
    });
  };

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={NewTaskModalStyle.modalView}>
        <Modal.TopBar
          title="Create New Task"
          onCancel={closeModal}
          onDone={closeModal}
          cancelIcon={null}
          doneIcon={null}
          // doneIcon={Assets.icons.x}
          doneLabel="Close"
          cancelLabel=""
          containerStyle={NewTaskModalStyle.modalViewTopBarContainer}
          titleStyle={NewTaskModalStyle.modalViewTopBarTitle}
          doneButtonProps={{
            fontSize: 16,
            fontFamily: 'SFPro',
            color: '#2B396C',
            lineHeight: 21,
          }}
        ></Modal.TopBar>
        <View>
          <View
            style={{
              paddingTop: 0,
              marginBottom: 8,
            }}
          >
            <NewTaskPlannerContainer
              modalVisible={modalVisible}
              taskIcon={taskIcon}
              taskName={taskName}
              onTaskNameChange={setTaskName}
              titleSelected={titleSelected}
              onCloseModal={closeModal}
              // inputAccessoryViewId={inputAccessoryViewID}
              isKeyboardVisible={isKeyboardVisible}
              onCreateNewTask={createNewTask}
            />
          </View>
          {/* <InputAccessoryView
            nativeID={inputAccessoryViewID}
            style={{ zIndex: 99 }}
          >
            <TouchableOpacity
              style={{
                paddingHorizontal: 15,
                zIndex: 110,
              }}
            >
              <MainButon
                text={'Create Task'}
                onPress={() => console.log('Button clickeed')}
              />
            </TouchableOpacity>
          </InputAccessoryView> */}
        </View>
      </View>
    </Modal>
  );
};

export default NewTaskModal;
