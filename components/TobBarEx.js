import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Assets,
  Icon,
  TouchableOpacity,
} from 'react-native-ui-lib';
import {
  Agenda,
  DateData,
  AgendaEntry,
  AgendaSchedule,
} from 'react-native-calendars';
import TopBarStyles from '../styles/TopBar';
import { ScaledSheet, moderateScale } from 'react-native-size-matters';
import dayjs from 'dayjs';

const TopBarEx = ({}) => {
  const [allItems, setAllItems] = useState(undefined);

  useEffect(() => {
    // loadItems(new Date());
  }, []);

  const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  };

  const loadItems = (day) => {
    const items = allItems || {};
    // console.log('Load Itemsa Day selected -----> ', day);
    setTimeout(() => {
      for (let i = -15; i < 0; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);

        if (!items[strTime]) {
          items[strTime] = [];

          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
              day: strTime,
            });
          }
        }
      }

      // console.log('ITEMS ------> ', items)

      let newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      // this.setState({
      //   items: newItems
      // });
      // console.log('NEW ITEMS ----> ', newItems);
      setAllItems(newItems);
      // console.log('NEW ITEMS ----> ', newItems);
    }, 1000);
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Text>Hello World</Text>
      <Agenda
        style={{
          backgroundColor: 'red',
        }}
        items={allItems}
        loadItemsForMonth={loadItems}
        selected="2022-04-09"
        renderItem={renderItem}
        renderEmptyData={renderEmptyDate}
        rowHasChanged={rowHasChanged}
        calendarStyle={{
          backgroundColor: 'green',
        }}
        theme={{
          agendaDayTextColor: 'yellow',
          agendaDayNumColor: 'green',
          agendaTodayColor: 'red',
          agendaKnobColor: 'blue',
        }}
        renderKnob={() => (
          <View>
            <Text>Drag me</Text>
          </View>
        )}
      />
    </View>
  );

  const renderItem = (reservation, isFirst) => {
    const fontSize = isFirst ? 16 : 14;
    const color = isFirst ? 'black' : '#43515c';
    console.log('Reservation ----> ', reservation);

    return (
      <TouchableOpacity
        style={[styles.item, { height: reservation.height }]}
        onPress={() => console.log('TOuchability Click')}
      >
        <Text style={{ fontSize, color }}>{reservation.name}</Text>
      </TouchableOpacity>
    );
  };

  const renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  };

  const rowHasChanged = (r1, r2) => {
    return r1.name !== r2.name;
  };
};

const styles = ScaledSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
});

export default TopBarEx;

/*
 "2022-12-29": Array [
    Object {
      "day": "2022-12-29",
      "height": 98,
      "name": "Item for 2022-12-29 #0",
    },
    Object {
      "day": "2022-12-29",
      "height": 104,
      "name": "Item for 2022-12-29 #1",
    },
    Object {
      "day": "2022-12-29",
      "height": 83,
      "name": "Item for 2022-12-29 #2",
    },
  ]

*/
