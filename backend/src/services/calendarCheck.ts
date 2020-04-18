import { google } from 'googleapis';

export const calendarCheck = async (auth, cb) => {
  try {
    const calendar = google.calendar({ version: 'v3', auth });
    await calendar.calendarList.list({}, async (err, list) => {
      if (err) return cb(err);
      const primaryCalendar = await list.data.items.find(calendar => {
        return calendar.primary === true;
      });
      const foundCalendar = await list.data.items.find(calendar => {
        return (
          calendar.summary === 'Birthday List Reminder' &&
          calendar.description === 'Birthday Reminders'
        );
      });
      if (foundCalendar) {
        cb(null, foundCalendar, primaryCalendar.timeZone);
      } else {
        await calendar.calendars.insert(
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
      }
    });
  } catch (error) {
    cb(error);
  }
};
