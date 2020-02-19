import { google } from 'googleapis';

export const createEvent = async (auth, calendarId, timeZone, dates, cb) => {
  try {
    const calendar = google.calendar({ version: 'v3', auth });
    const insertedDates = [];
    for (let i = 0; i < dates.length; i++) {
      const { date, name, description, days } = dates[i];
      const first = new Date(date);
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
    }
    cb(null, insertedDates);
  } catch (error) {
    cb(error);
  }
};
