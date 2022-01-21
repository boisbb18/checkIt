import React, { useState, useEffect } from 'react';
import { Text, View, ListItem } from 'react-native-ui-lib';
import { FlatList, InputAccessoryView } from 'react-native';
import TaskTitleField from './TaskTitleField';
import Icon from 'react-native-vector-icons/FontAwesome';
import { moderateScale } from 'react-native-size-matters';
import MainButon from '../common/buttons/MainButton';
import TaskTitleContainerStyles from '../styles/TaskTitleContainer';

const data = [
  { icon: 'tv', text: 'Watch a Movie' },
  { icon: 'shopping-cart', text: 'Grocery Shopping' },
  { icon: 'book', text: 'Read a Book' },
];

const inputAccessoryViewID = 'uniqueID';

const TaskTitleContainer = ({
  modalVisible,
  taskIcon,
  taskName,
  onTaskNameChange,
  onTaskSelect,
  onTitleSelect,
} = {}) => {
  const renderItems = (row, id) => {
    return (
      <View key={id}>
        <ListItem
          activeOpacity={0.3}
          onPress={() => onTaskSelect(row)}
          style={TaskTitleContainerStyles.listItemWrapper}
        >
          <ListItem.Part left>
            <View style={TaskTitleContainerStyles.listItemIcon}>
              <Icon name={row.icon} size={moderateScale(24)} color="#fff" />
            </View>
          </ListItem.Part>

          <ListItem.Part middle>
            <View>
              <Text text70L>{row.text}</Text>
            </View>
          </ListItem.Part>
        </ListItem>
      </View>
    );
  };

  return (
    <View style={TaskTitleContainerStyles.bodyWrapper}>
      <FlatList
        ListHeaderComponent={
          <View style={TaskTitleContainerStyles.textWrapper}>
            <TaskTitleField
              modalVisible={modalVisible}
              taskIcon={taskIcon}
              taskName={taskName}
              onTaskNameChange={onTaskNameChange}
              inputAccessoryViewID={inputAccessoryViewID}
            />
          </View>
        }
        data={data}
        renderItem={({ item, index }) => renderItems(item, index)}
        keyExtractor={(item) => item.icon}
        ListFooterComponent={
          <>
            <InputAccessoryView nativeID={inputAccessoryViewID}>
              <View style={TaskTitleContainerStyles.footWrapper}>
                <MainButon
                  text="Continue"
                  onPress={() => onTitleSelect(true)}
                  disabled={taskName === ''}
                />
              </View>
            </InputAccessoryView>
          </>
        }
      />
    </View>
  );
};

export default TaskTitleContainer;
