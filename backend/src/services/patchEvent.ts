import { google } from 'googleapis';
import moment from 'moment';

export const patchEvent = async (
  auth,
  calendarId,
  timeZone,
  eventId,
  eventObj,
  cb,
) => {
  try {
    const calendar = google.calendar({ version: 'v3', auth });
    const { date, name, description, days, time } = eventObj;
    // Calculate time
    const end = date.substring(date.length - 2, date.length);
    let first = new Date(moment(date + ', ' + process.env.YEAR).toDate());
    if (end === 'st' || end === 'nd' || end == 'rd' || end === 'th') {
      first = new Date(
        moment(
          date.substring(0, date.length - 2) + ', ' + process.env.YEAR,
        ).toDate(),
      );
    }
    const second = new Date(first.getTime());
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
      eventId,
      resource: event,
    };
    const patchedDate = await calendar.events.patch(formattedInformation);
    cb(null, patchedDate.data);
  } catch (error) {
    console.log(error);
    cb(error);
  }
};
