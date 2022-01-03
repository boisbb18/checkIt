import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { Text, Assets, View, ListItem } from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/FontAwesome';
import { moderateScale } from 'react-native-size-matters';
import TaskNameContainerStyles from '../styles/TaskNameContainer';

const data = [
  { icon: 'tv', text: 'Watch a Movie' },
  { icon: 'shopping-cart', text: 'Grocery Shopping' },
  { icon: 'book', text: 'Read a Book' },
];

const TaskNameContainer = ({ onTaskSelect } = {}) => {
  const renderItems = (row, id) => {
    return (
      <View>
        <ListItem
          activeOpacity={0.3}
          onPress={() => onTaskSelect(row)}
          style={TaskNameContainerStyles.listItemWrapper}
        >
          <ListItem.Part left>
            <View style={TaskNameContainerStyles.listItemIcon}>
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
    <View>
      <FlatList
        data={data}
        renderItem={({ item, index }) => renderItems(item, index)}
        keyExtractor={(item) => item.icon}
      />
    </View>
  );
};

export default TaskNameContainer;
