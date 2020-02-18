import { google } from 'googleapis';

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
    const first = new Date(time);
    const second = new Date(first);
    second.setDate(first.getDate() + 1);
    const summary = `${name}'s Birthday!`;
    var event = {
      summary: summary,
      location: 'Birthday',
      description: description,
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
    cb(error);
  }
};
