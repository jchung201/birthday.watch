import { google } from 'googleapis';

export const calendarCheck = async (auth, cb) => {
  try {
    const calendar = google.calendar({ version: 'v3', auth });
    calendar.calendarList.list({}, (err, list) => {
      if (err) return cb(err);
      const primaryCalendar = list.data.items.find(calendar => {
        return calendar.primary === true;
      });
      const foundCalendar = list.data.items.find(calendar => {
        return (
          calendar.summary === 'Birthday List Reminder' &&
          calendar.description === 'Birthday Reminders'
        );
      });
      if (foundCalendar) {
        cb(null, foundCalendar, primaryCalendar.timeZone);
      } else {
        const madeCalendar = calendar.calendars.insert({
          requestBody: {
            summary: 'Birthday List Reminder',
            description: 'Birthday Reminders',
            timeZone: primaryCalendar.timeZone,
          },
        });
        cb(null, madeCalendar, primaryCalendar.timeZone);
      }
    });
  } catch (error) {
    cb(error);
  }
};
