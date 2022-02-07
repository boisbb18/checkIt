import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Text, View, Modal, Assets } from 'react-native-ui-lib';
import { ScaledSheet } from 'react-native-size-matters';
import { TimePicker } from 'react-native-simple-time-picker';
import MainButon from '../common/buttons/MainButton';

const DurationEditModal = ({
  showModal = false,
  onClose,
  selectedDuration,
  onDurationChange,
  onSave,
}) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(15);

  const handleTimChange = ({ hours: newHours, minutes: newMinutes }) => {
    setHours(newHours);
    setMinutes(newMinutes);
  };
  useEffect(() => {
    setHours(parseInt(selectedDuration / 60));
    setMinutes(selectedDuration % 60);
  }, [selectedDuration]);

  const timeSelected = () => {
    onSave(hours * 60 + minutes);
    onClose();
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showModal}
      onBackgroundPress={onClose}
    >
      <View style={styles.modalView}>
        <Modal.TopBar
          title="Select Time"
          onCancel={onClose}
          onDone={onClose}
          cancelIcon={null}
          doneIcon={Assets.icons.x}
          doneLabel=""
          cancelLabel=""
          containerStyle={styles.modalTopBar}
          titleStyle={{}}
        />
        <View style={styles.timeContainer}>
          <TimePicker
            value={{ hours, minutes }}
            onChange={handleTimChange}
            hoursUnit="h"
            minutesUnit="m"
            minutesInterval={5}
          />
          <View>
            <MainButon text="Continue" onPress={() => timeSelected()} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = ScaledSheet.create({
  bodyWrapper: {
    paddingHorizontal: '15@msr',
    paddingVertical: '10@msr',
    height: '100%',
  },
  modalTopBar: {
    paddingTop: 0,
    marginTop: 0,
    position: 'absolute',
    top: '8@msr',
    width: '100%',
  },
  modalView: {
    height: '40%',
    width: '100%',
    paddingVertical: '25@msr',
    position: 'absolute',
    left: 0,
    bottom: 0,
    borderRadius: '10@msr',
    shadowColor: '#000',
    backgroundColor: 'red',
    flexDirection: 'column',
  },
  timeContainer: {
    flex: 1,
    paddingTop: '16@msr',
    paddingHorizontal: '24@msr',
  },
  picker: {
    backgroundColor: '#E5E5E5',
  },
});

export default DurationEditModal;
