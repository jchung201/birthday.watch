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
    const { date, name, description, days } = eventObj;
    const first = new Date(date);
    const second = new Date(first);
    second.setDate(first.getDate() + 1);
    const summary = `${name}'s Birthday!`;
    const event = {
      summary,
      location: description,
      start: {
        dateTime: first.toISOString(),
        timeZone,
      },
      end: {
        dateTime: second.toISOString(),
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
