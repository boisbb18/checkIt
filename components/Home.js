import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import HomeStyles from '../styles/Home';
import { View, Modal, Text, Button, Assets, Icon } from 'react-native-ui-lib';
import AddIconButton from '../common/AddIconButton';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { moderateScale } from 'react-native-size-matters';
import { auth, db } from '../firebase';
import { getAuth, signInAnonymously } from 'firebase/auth';
import NewTaskModal from './NewTaskModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getDatabase, ref, set } from 'firebase/database';
import TopBar from './TopBar';
import TopBarEx from './TobBarEx';

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(async () => {
    await getAuth();
  }, []);

  const getAuth = async () => {
    try {
      const user_uid = await AsyncStorage.getItem('@user_uid');
      if (!user_uid) {
        handleSignup();
      } else {
        setUserId(JSON.parse(user_uid));
      }
    } catch (e) {
      console.log('Get Auth --> ', e);
    }
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

  const testNaviationBar = () => (
    <View style={HomeStyles.customContainer}>
      <View style={HomeStyles.buttonIcon}>
        <Icon name="calendar" size={moderateScale(24)} color="#868AA7" />
        <Text style={HomeStyles.buttonText}>Calendar</Text>
      </View>
      <View style={HomeStyles.buttonTopLayer}>
        <View style={HomeStyles.addButton}>
          <AddIconButton openModal={openModal} closeModal={closeModal} />
        </View>
      </View>
      <View style={HomeStyles.buttonIcon}>
        <Icon name="inbox" size={moderateScale(24)} color="#868AA7" />
        <Text style={HomeStyles.buttonText}>Reminder</Text>
      </View>
    </View>
  );

  return (
    <View style={HomeStyles.allTasksWrapper}>
      <NewTaskModal
        modalVisible={modalVisible}
        closeModal={closeModal}
        userId={userId}
      />
      <TopBar />
      <View style={HomeStyles.navigationContainer}>{mainNavigationBar()}</View>
    </View>
  );
};

export default Home;
