import { getDatabase, ref, set, push, update, child } from 'firebase/database';
import { auth, db } from '../firebase';
import { RRule, RRuleSet, rrulestr } from 'rrule';
import dayjs from 'dayjs';

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

export const createReocurrence = (
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
  const repeatedEventId = addRecurringEvent(userId, {
    ...repeatedTask,
    startDate: repeatedDate,
    endDate: newEndDate,
  });
  const updates = {};
  rule?.all()?.forEach((date) => {
    const newPostKey = push(ref(db, `${userId}/events`)).key;
    updates[`${userId}/events/${newPostKey}`] = {
      ...repeatedTask,
      repeatedEventId: repeatedEventId,
      selectedDate: date,
    };
  });

  update(ref(db), updates);
};

export const addSingleEvents = (userId, newEvent) => {
  const newPostKey = push(ref(db, `${userId}/events`)).key;
  update(ref(db, `${userId}/events/${newPostKey}`), {
    ...newEvent,
  });
};

export const addRecurringEvent = (userId, newEvent) => {
  const newPostKey = push(ref(db, `${userId}/repeatedEvents`)).key;
  update(ref(db, `${userId}/repeatedEvents/${newPostKey}`), {
    ...newEvent,
  });
  return newPostKey;
};
