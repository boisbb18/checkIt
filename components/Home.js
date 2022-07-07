import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import HomeStyles from '../styles/Home';
import { View, Modal, Text, Button, Assets, Icon } from 'react-native-ui-lib';
import AddIconButton from '../common/AddIconButton';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { moderateScale } from 'react-native-size-matters';
import { auth, db } from '../firebase';
import { getAuth, signInAnonymously } from 'firebase/auth';
import { getAllEvents, updateTaskEvent } from '../services/firebaseService';
import NewTaskModal from './NewTaskModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getDatabase, ref, set } from 'firebase/database';
import TopBar from './TopBar';
import HeaderContainer from './HeaderContainer';
import MainTaskList from './MainTaskList';
import EditTaskModal from './EditTaskModal';
import dayjs from 'dayjs';

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [userId, setUserId] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState('');
  const [allTasks, setAllTasks] = useState({});
  const [calendarSelectedDate, setCalendarSelectedDate] = useState(new Date());
  const [allEventKeys, setAllEventKeys] = useState({});
  const [showAllDayTasks, setShowAllDayTasks] = useState(true);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editModalContent, setEditModalContent] = useState({});
  const [markedDates, setMarkedDates] = useState({});

  useEffect(async () => {
    setSelectedDay(dayjs(calendarSelectedDate).format('MM/DD/YYYY'));
    await getAuth();
  }, [calendarSelectedDate]);

  const getAuth = async () => {
    try {
      const user_uid = await AsyncStorage.getItem('@user_uid');
      if (!user_uid) {
        handleSignup();
      } else {
        setUserId(JSON.parse(user_uid));
        await getTasks(JSON.parse(user_uid));
      }
    } catch (e) {
      console.log('Get Auth --> ', e);
    }
  };

  const getTasks = async (uid) => {
    const userUid = uid || userId;
    const events = await getAllEvents(userUid);
    const eventsTasks = { ...allTasks };
    // const eventsTasks = {};
    const eventKeys = { ...allEventKeys };
    const copyMarkedDates = {};
    Object.entries(events).forEach(([key, data]) => {
      const dataDate = dayjs(data.selectedDate).format('MM/DD/YYYY');
      if (allEventKeys[key]) return;
      if (!eventsTasks[dataDate]) {
        eventsTasks[dataDate] = { alldayEvents: [], plannedEvents: [] };
      }
      if (!copyMarkedDates[dataDate]) {
        copyMarkedDates[dataDate] = {
          date: dataDate,
          dots: [],
        };
      }
      // if (copyMarkedDates[dataDate].dots.length < 3) {
      copyMarkedDates[dataDate].dots.push(data.paletteColor);
      // }
      eventKeys[key] = true;
      data = { ...data, key };
      if (data.isAllDay) {
        eventsTasks[dataDate].alldayEvents.push(data);
      } else {
        eventsTasks[dataDate].plannedEvents.push(data);

        eventsTasks[dataDate].plannedEvents.sort((a, b) => {
          const dateA = new Date(a.selectedDate);
          const dateB = new Date(b.selectedDate);
          return dateA - dateB;
        });
      }
    });
    if (Object.values(copyMarkedDates).length) {
      setMarkedDates(copyMarkedDates);
    }
    // console.log('Object Values -----> ', Object.values(copyMarkedDates));
    setAllTasks(eventsTasks);
    setAllEventKeys(eventKeys);
  };

  const addNewTaskToList = (event = {}) => {
    const dataDate = dayjs(event.selectedDate).format('MM/DD/YYYY');
    const allEvents = { ...allTasks[dataDate] };

    if (!Object.keys(event).length) {
      return;
    }
    if (!allEvents || !Object.keys(allEvents).length) {
      allEvents.alldayEvents = [];
      allEvents.plannedEvents = [];
    }
    if (event.isAllDay) {
      const id = allEvents.alldayEvents
        ?.map(({ key } = {}) => key)
        ?.indexOf(event.key);

      if (id === -1) allEvents.alldayEvents.push(event);
      else {
        allEvents.alldayEvents[id] = { ...event };
      }
    } else {
      const id = allEvents.plannedEvents
        ?.map(({ key } = {}) => key)
        ?.indexOf(event.key);

      if (id === -1) allEvents.plannedEvents.push(event);
      else {
        allEvents.plannedEvents[id] = { ...event };
      }

      allEvents.plannedEvents.sort((a, b) => {
        const dateA = new Date(a.selectedDate);
        const dateB = new Date(b.selectedDate);
        return dateA - dateB;
      });
    }

    setAllTasks({ ...allTasks, [dataDate]: allEvents });
  };

  const openModal = () => {
    setModalVisible(!modalVisible);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleSignup = () => {
    signInAnonymously(auth)
      .then(async ({ user }) => {
        const user_uid = JSON.stringify(user.uid);
        await AsyncStorage.setItem('@user_uid', user_uid);
      })
      .catch((error) => console.log('Error ----> ', error));
  };

  const updateMonth = (date) => {
    setCurrentDate(date);
  };

  const onCalendarDateChange = (date) => {
    setCalendarSelectedDate(date);
    updateMonth(date);
    setSelectedDay(dayjs(calendarSelectedDate).format('MM/DD/YYYY'));
  };

  const onShowAllDayTasks = () => {
    setShowAllDayTasks(!showAllDayTasks);
  };

  const onTaskCheckboxClicked = (event, isCompleted) => {
    const updatedEvent = { ...event, isCompleted };
    updateTaskEvent(userId, { ...updatedEvent });
    addNewTaskToList(updatedEvent);
  };

  const onCloseEditModal = () => {
    setEditModalVisible(false);
  };

  const onOpenEditModal = (task) => {
    console.log('Task ------> ', task);
    setEditModalVisible(true);
  };

  const mainNavigationBar = () => (
    <View style={HomeStyles.buttonsContainer}>
      <View style={HomeStyles.buttonWrapper} enableShadow={true}>
        <View style={HomeStyles.buttonIcon}>
          <Icon
            source={Assets.icons.calendar}
            size={moderateScale(22)}
            tintColor="#2B396C"
          />
          <Text style={HomeStyles.buttonText}>Calendar</Text>
        </View>
        <View style={HomeStyles.buttonIcon}>
          <Icon
            source={Assets.icons.inbox}
            size={moderateScale(22)}
            tintColor="#2B396C"
          />
          <Text style={HomeStyles.buttonText}>Reminder</Text>
        </View>
      </View>
      <View style={HomeStyles.buttonTopLayer}>
        <View style={HomeStyles.addButton}>
          <AddIconButton openModal={openModal} closeModal={closeModal} />
        </View>
      </View>
    </View>
  );

  return (
    <View style={HomeStyles.allTasksWrapper}>
      <NewTaskModal
        modalVisible={modalVisible}
        closeModal={closeModal}
        userId={userId}
        onNewTaskAdded={addNewTaskToList}
      />
      <EditTaskModal
        editModalVisible={editModalVisible}
        onCloseEditModal={onCloseEditModal}
      />
      <TopBar currentDateMonth={currentDate} />
      <View
        style={{
          flex: 1,
        }}
      >
        <HeaderContainer
          onMonthUpdate={updateMonth}
          onDateChange={onCalendarDateChange}
          selectedDate={calendarSelectedDate}
          markedDates={markedDates}
        />
        <MainTaskList
          events={allTasks[selectedDay]}
          showAllDayTasks={showAllDayTasks}
          onShowAllDayTasks={onShowAllDayTasks}
          onTaskCheckboxClicked={onTaskCheckboxClicked}
          onOpenEditModal={onOpenEditModal}
        />
      </View>
      <View style={HomeStyles.navigationContainer}>{mainNavigationBar()}</View>
    </View>
  );
};

export default Home;
