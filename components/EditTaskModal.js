import React, { useState, useEffect } from 'react';
import {
  Modal,
  Text,
  Assets,
  View,
  Incubator,
  TouchableOpacity,
} from 'react-native-ui-lib';
import EditTaskModalStyles from '../styles/EditTaskModal';

const EditTaskModal = ({ editModalVisible = false, onCloseEditModal }) => {
  const onModalClose = () => {
    onCloseEditModal();
  };
  return (
    <Modal animationType="slide" transparent={true} visible={editModalVisible}>
      <View style={EditTaskModalStyles.modalView}>
        <Modal.TopBar
          title="Edit Modal opened"
          cancelIcon={null}
          onDone={onModalClose}
          doneLabel="Close"
          cancelLabel=""
        />
        <View>
          <Text>EDit Modal is visible</Text>
        </View>
      </View>
    </Modal>
  );
};

export default EditTaskModal;
