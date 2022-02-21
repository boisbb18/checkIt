import React, { useState, useEffect } from 'react';
import { SafeAreaView, InputAccessoryView, Keyboard } from 'react-native';
import { Modal, Text, Assets, View, Incubator } from 'react-native-ui-lib';
import NewTaskModalStyle from '../styles/NewTaskModal';
import Icon from 'react-native-vector-icons/FontAwesome';
import { moderateScale } from 'react-native-size-matters';
import TaskNameContainer from './TaskNameContainer';
import TaskTitleContainer from './TaskTitleContainer';
import NewTaskPlannerContainer from './NewTaskPlannerContainer';
import MainButon from '../common/MainButton';
const { TextField } = Incubator;

const inputAccessoryViewID = '123abc';
const NewTaskModal = ({ modalVisible, closeModal } = {}) => {
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

  return (
    // <SafeAreaView>
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
          <View
            style={{
              marginTop: 16,
              marginBottom: 100,
            }}
          >
            <NewTaskPlannerContainer
              modalVisible={modalVisible}
              taskIcon={taskIcon}
              taskName={taskName}
              onTaskNameChange={setTaskName}
              titleSelected={titleSelected}
              inputAccessoryViewId={inputAccessoryViewID}
            />
          </View>
          {!isKeyboardVisible && (
            <View
              style={{
                height: 80,
                // backgroundColor: 'white',
                position: 'absolute',
                bottom: 25,
                left: 0,
                right: 0,
                paddingHorizontal: 15,
                // marginHorizontal: 15,
              }}
            >
              <MainButon
                text={'Create Task'}
                onPress={() => console.log('Button clickeed')}
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
                onPress={() => console.log('Button clickeed')}
              />
            </View>
          </InputAccessoryView>
        </View>
        {/* <View>
          {titleSelected ? (
            <View>
              <View
                style={{
                  marginTop: 16,
                  marginBottom: 100,
                }}
              >
                <NewTaskPlannerContainer
                  modalVisible={modalVisible}
                  taskIcon={taskIcon}
                  taskName={taskName}
                  onTaskNameChange={setTaskName}
                  titleSelected={titleSelected}
                  inputAccessoryViewId={inputAccessoryViewID}
                />
              </View>
              {!isKeyboardVisible && (
                <View
                  style={{
                    height: 80,
                    // backgroundColor: 'white',
                    position: 'absolute',
                    bottom: 25,
                    left: 0,
                    right: 0,
                    paddingHorizontal: 15,
                    // marginHorizontal: 15,
                  }}
                >
                  <MainButon
                    text={'Create Task'}
                    onPress={() => console.log('Button clickeed')}
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
                    onPress={() => console.log('Button clickeed')}
                  />
                </View>
              </InputAccessoryView>
            </View>
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
        </View> */}
      </View>
    </Modal>
    // </SafeAreaView>
  );
};

export default NewTaskModal;
