import React, { useState, useEffect } from 'react'
import { SafeAreaView, InputAccessoryView, Keyboard } from 'react-native'
import { Modal, Text, Assets, View, Incubator } from 'react-native-ui-lib'
import NewTaskModalStyle from '../styles/NewTaskModal'
import Icon from 'react-native-vector-icons/FontAwesome'
import { moderateScale } from 'react-native-size-matters'
import TaskNameContainer from './TaskNameContainer'
import TaskTitleContainer from './TaskTitleContainer'
import TitleSelector from './TitleSelector'
import NewTaskPlannerContainer from './NewTaskPlannerContainer'
import MainButon from '../common/MainButton'
// import { LinearGradient } from 'expo-linear-gradient';
const { TextField } = Incubator

const inputAccessoryViewID = '123abc'
const NewTaskModal = ({ modalVisible, closeModal } = {}) => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false)
  const [taskName, setTaskName] = useState('')
  const [taskIcon, setTaskIcon] = useState('shopping-cart')
  const [titleSelected, setTitleSelected] = useState(false)
  // const [titleSelected]

  useEffect(() => {
    if (modalVisible) {
      setTaskName('')
      setTaskIcon('shopping-cart')
      setTitleSelected(false)
    }

    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true) // or some other action
      }
    )
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false) // or some other action
      }
    )

    return () => {
      keyboardDidHideListener.remove()
      keyboardDidShowListener.remove()
    }
  }, [modalVisible])

  const handleTaskSelect = (taskRow) => {
    setTaskName(taskRow.text)
    setTaskIcon(taskRow.icon)
    setTitleSelected(true)
  }

  const handleTitleSelect = () => {
    setTitleSelected(true)
  }

  return (
    // <SafeAreaView>
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={NewTaskModalStyle.modalView}>
        {/* <LinearGradient
          colors={['#E7F0FF', '#D6E6FF']}
          style={NewTaskModalStyle.modalViewTopBarViewContainer}
        > */}

        <Modal.TopBar
          title="Create New Task"
          onCancel={closeModal}
          onDone={closeModal}
          cancelIcon={null}
          // doneIcon={Assets.icons.x}
          doneLabel="Close"
          cancelLabel=""
          containerStyle={NewTaskModalStyle.modalViewTopBarContainer}
          titleStyle={NewTaskModalStyle.modalViewTopBarTitle}
          doneButtonProps={{
            fontSize: 16,
            fontFamily: 'SFPro',
            color: '#2B396C',
          }}
        ></Modal.TopBar>
        {/* </LinearGradient> */}
        <View>
          <View
            style={{
              // paddingTop: 0,
              marginBottom: 100,
            }}
          >
            <View style={NewTaskModalStyle.titleWrapper}>
              <TitleSelector
                modalVisible={modalVisible}
                taskName={taskName}
                onTaskChange={setTaskName}
                inputAccessoryViewID={inputAccessoryViewID}
              />
            </View>
            <View style={{ marginTop: 0 }}>
              <NewTaskPlannerContainer
                modalVisible={modalVisible}
                taskIcon={taskIcon}
                taskName={taskName}
                onTaskNameChange={setTaskName}
                titleSelected={titleSelected}
                inputAccessoryViewId={inputAccessoryViewID}
              />
            </View>
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
      </View>
    </Modal>
    // </SafeAreaView>
  )
}

export default NewTaskModal
