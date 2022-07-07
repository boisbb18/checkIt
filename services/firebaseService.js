import {
  getDatabase,
  ref,
  set,
  push,
  update,
  child,
  get,
} from 'firebase/database';
import { auth, db } from '../firebase';
import { RRule, RRuleSet, rrulestr } from 'rrule';
import dayjs from 'dayjs';

export const getAllEvents = (userId) => {
  console.log('USER ID -----> ', userId);
  return get(ref(db, `${userId}/events`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        // console.log('SNapSHot Val ---> ', snapshot.val());
        return snapshot.val();
      } else {
        console.log('No data available');
        return {};
      }
    })
    .catch((e) => console.log('Get All Events ---> ', e));
};

export const saveNewTask = (userId, newEvent) => {
  set(ref(db, `${userId}/tasks`), {
    ...newEvent,
  }).then(() => {
    console.log('New Event Saved');
  });
};

export const saveNewReminder = (userId, newEvent) => {
  const newPostKey = push(ref(db, `${userId}/reminders`)).key;
  const updates = {};
  updates[`${userId}/reminders/${newPostKey}`] = newEvent;

  return update(ref(db), updates);
};

export const createReocurrence = async (
  frequencyDays,
  type,
  userId,
  repeatedTask,
  repeatedDate,
  startRepeatedDate = new Date(),
  endRepeatedDate = new Date()
) => {
  let newEndDate = new Date(repeatedDate);
  newEndDate.setDate(newEndDate.getDate() + 7);
  let rule;
  if (type === 'daily') {
    rule = new RRule({
      freq: RRule.DAILY,
      interval: 1,
      until: newEndDate,
      dtstart: repeatedDate,
    });
  } else {
    const weekDays = frequencyDays.map(({ weekDay }) => weekDay);
    rule = new RRule({
      freq: RRule.WEEKLY,
      interval: 1,
      byweekday: [...weekDays],
      until: newEndDate,
      dtstart: repeatedDate,
    });
  }
  const repeatedEventId = await addRecurringEvent(userId, {
    ...repeatedTask,
    startDate: repeatedDate,
    endDate: newEndDate,
  });
  const updates = {};
  let key;
  await rule?.all()?.forEach((date, idx) => {
    const newPostKey = push(ref(db, `${userId}/events`)).key;
    if (idx === 0) {
      key = newPostKey;
    }
    updates[`${userId}/events/${newPostKey}`] = {
      ...repeatedTask,
      repeatedEventId: repeatedEventId,
      selectedDate: date,
    };
  });

  await update(ref(db), updates);
  return {
    ...repeatedTask,
    key: key,
    selectedDate: startRepeatedDate,
  };
};

export const addSingleEvents = async (userId, newEvent) => {
  const newPostKey = push(ref(db, `${userId}/events`)).key;
  await update(ref(db, `${userId}/events/${newPostKey}`), {
    ...newEvent,
  });
  return { ...newEvent, key: newPostKey };
};

export const addRecurringEvent = async (userId, newEvent) => {
  const newPostKey = push(ref(db, `${userId}/repeatedEvents`)).key;
  await update(ref(db, `${userId}/repeatedEvents/${newPostKey}`), {
    ...newEvent,
  });
  return newPostKey;
};

export const updateTaskEvent = async (userId, event) => {
  const key = event.key;
  delete event.key;
  await update(ref(db, `${userId}/events/${key}`), {
    ...event,
  });
};
