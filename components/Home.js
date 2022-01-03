import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import HomeStyles from '../styles/Home';
import { View, Modal, Text, Button, Assets, Icon } from 'react-native-ui-lib';
// import {Assets, View, Icon, Text, Slider, Switch, GradientSlider} from 'react-native-ui-lib';

// import Icon from 'react-native-vector-icons/FontAwesome'
import AddIconButton from '../common/buttons/AddIconButton';
import NewTaskModal from './NewTaskModal';

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={HomeStyles.allTasksWrapper}>
      <NewTaskModal modalVisible={modalVisible} closeModal={openModal} />
      <AddIconButton openModal={openModal} />
    </View>
  );
};

export default Home;
