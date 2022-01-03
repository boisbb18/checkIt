import React, { useState, useEffect } from 'react';
import { Modal, Text, Assets, View, Incubator } from 'react-native-ui-lib';
import { ScrollView } from 'react-native';
import NewTaskModalStyle from '../styles/NewTaskModal';
import Icon from 'react-native-vector-icons/FontAwesome';
import { moderateScale } from 'react-native-size-matters';
import TaskNameContainer from './TaskNameContainer';
const { TextField } = Incubator;

const NewTaskModal = ({ modalVisible, closeModal } = {}) => {
  const input = React.createRef();

  const [taskName, setTaskName] = useState('');
  const [taskIcon, setTaskIcon] = useState('shopping-cart');

  useEffect(() => {
    if (modalVisible) {
      setTaskName('');
      setTaskIcon('shopping-cart');
      input.current?.focus();
    }
  }, [modalVisible]);

  const handleTaskSelect = (taskRow) => {
    setTaskName(taskRow.text);
    setTaskIcon(taskRow.icon);
  };

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={NewTaskModalStyle.modalView}>
        <Modal.TopBar
          title="Create New Task"
          onCancel={closeModal}
          onDone={closeModal}
          cancelIcon={null}
          doneIcon={Assets.icons.x}
          doneLabel=""
          cancelLabel=""
          containerStyle={NewTaskModalStyle.modalViewTopBarContainer}
          titleStyle={NewTaskModalStyle.modalViewTopBarTitle}
        />
        <ScrollView style={NewTaskModalStyle.modalBodyContainer}>
          <Text style={NewTaskModalStyle.modalBodyContainerSubtitle}>
            What is the task?
          </Text>
          <View style={NewTaskModalStyle.modalTextInputWrapper}>
            <View style={NewTaskModalStyle.modalTextInputIcon}>
              <Icon name={taskIcon} size={moderateScale(24)} color="#fff" />
            </View>
            <TextField
              text70M
              ref={input}
              value={taskName}
              onChangeText={(text) => setTaskName(text)}
              placeholder="Go grocery shopping"
              fieldStyle={NewTaskModalStyle.modalTextInputFieldContainer}
              containerStyle={NewTaskModalStyle.modalTextInputContainer}
            />
          </View>
          <View>
            <TaskNameContainer onTaskSelect={handleTaskSelect} />
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default NewTaskModal;
