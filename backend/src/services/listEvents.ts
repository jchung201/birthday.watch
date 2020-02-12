import { google } from 'googleapis';

export const listEvents = async (auth, calendarId, cb) => {
  try {
    const calendar = google.calendar({ version: 'v3', auth });
    const foundEvents = await calendar.events.list({
      calendarId,
      timeMin: new Date().toISOString(),
      maxResults: 100,
      // singleEvents: false,
      // orderBy: 'startTime',
    });
    cb(null, foundEvents.data.items);
  } catch (error) {
    cb(error);
  }
};
