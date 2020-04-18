import { google } from 'googleapis';

export const calendarCheck = async (auth, cb) => {
  try {
    const calendar = google.calendar({ version: 'v3', auth });
    calendar.calendarList.list({}, async (err, list) => {
      if (err) return cb(err);
      const primaryCalendar = list.data.items.find(priCal => {
        return priCal.primary;
      });
      const foundCalendar = list.data.items.filter(fouCal => {
        return (
          fouCal.summary === 'Birthday List Reminder' &&
          fouCal.description === 'Birthday Reminders'
        );
      });
      if (foundCalendar.length > 1) {
        calendar.calendars.delete({ calendarId: foundCalendar[1].id });
      }
      if (foundCalendar.length === 0) {
        calendar.calendars.insert(
          {
            requestBody: {
              summary: 'Birthday List Reminder',
              description: 'Birthday Reminders',
              timeZone: primaryCalendar.timeZone,
            },
          },
          (error, madeCalendar) => {
            if (error) throw error;
            cb(null, madeCalendar.data, primaryCalendar.timeZone);
          },
        );
      } else {
        cb(null, foundCalendar[0], primaryCalendar.timeZone);
      }
    });
  } catch (error) {
    cb(error);
  }
};
