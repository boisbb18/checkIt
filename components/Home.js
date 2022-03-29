import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import HomeStyles from '../styles/Home';
import { View, Modal, Text, Button, Assets, Icon } from 'react-native-ui-lib';
import AddIconButton from '../common/AddIconButton';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { moderateScale } from 'react-native-size-matters';
import NewTaskModal from './NewTaskModal';

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(!modalVisible);
  };

  const closeModal = () => {
    setModalVisible(false);
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
      <NewTaskModal modalVisible={modalVisible} closeModal={closeModal} />
      {mainNavigationBar()}
    </View>
  );
};

export default Home;
