import React, { useState, useEffect } from 'react';
import { Modal, Text, Assets, View, Incubator } from 'react-native-ui-lib';
import NewTaskModalStyle from '../styles/NewTaskModal';
import Icon from 'react-native-vector-icons/FontAwesome';
import { moderateScale } from 'react-native-size-matters';
import TaskNameContainer from './TaskNameContainer';
import TaskTitleContainer from './TaskTitleContainer';
import NewTaskPlannerContainer from './NewTaskPlannerContainer';
const { TextField } = Incubator;

const NewTaskModal = ({ modalVisible, closeModal } = {}) => {
  const [taskName, setTaskName] = useState('');
  const [taskIcon, setTaskIcon] = useState('shopping-cart');
  const [titleSelected, setTitleSelected] = useState(false);
  // const [titleSelected]

  useEffect(() => {
    if (modalVisible) {
      setTaskName('');
      setTaskIcon('shopping-cart');
      setTitleSelected(false);
      // setTitleSelected(false);
    }
  }, [modalVisible]);

  const handleTaskSelect = (taskRow) => {
    setTaskName(taskRow.text);
    setTaskIcon(taskRow.icon);
    setTitleSelected(true);
  };

  const handleTitleSelect = () => {
    setTitleSelected(true);
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
        <View>
          {titleSelected ? (
            <NewTaskPlannerContainer
              modalVisible={modalVisible}
              taskIcon={taskIcon}
              taskName={taskName}
              onTaskNameChange={setTaskName}
              titleSelected={titleSelected}
            />
          ) : (
            <TaskTitleContainer
              modalVisible={modalVisible}
              taskIcon={taskIcon}
              taskName={taskName}
              onTaskNameChange={setTaskName}
              onTaskSelect={handleTaskSelect}
              onTitleSelect={handleTitleSelect}
            />
          )}
        </View>
      </View>
    </Modal>
  );
};

export default NewTaskModal;
