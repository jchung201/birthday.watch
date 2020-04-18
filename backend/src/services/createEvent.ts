import { google } from 'googleapis';

export const createEvent = async (auth, calendarId, timeZone, birthday, cb) => {
  try {
    const calendar = google.calendar({ version: 'v3', auth });
    const insertedDates = [];
    const { date, name, description, days } = birthday;
    const first = new Date(date);
    first.setHours(0);
    first.setMinutes(0);
    const second = new Date(first);
    second.setDate(first.getDate() + 1);
    const summary = `${name}'s Birthday!`;
    const event = {
      summary,
      location: description,
      start: {
        dateTime: first,
        timeZone,
      },
      end: {
        dateTime: second,
        timeZone,
      },
      recurrence: ['RRULE:FREQ=YEARLY'],
      reminders: {
        useDefault: false,
        overrides: [{ method: 'email', minutes: 24 * days * 60 }],
      },
    };
    const formattedInformation = {
      auth,
      calendarId,
      resource: event,
    };
    const insertedDate = await calendar.events.insert(formattedInformation);
    insertedDates.push(insertedDate.data);
    cb(null, insertedDates);
  } catch (error) {
    cb(error);
  }
};
