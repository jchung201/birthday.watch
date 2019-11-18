const { google } = require("googleapis");
import { credentials } from "../lib/credentials.js";

const createEvent = async (token, calendarId, dates, cb) => {
  try {
    const { client_secret, client_id, redirect_uris } = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(
      client_id,
      client_secret,
      redirect_uris[0]
    );
    oAuth2Client.setCredentials(JSON.parse(JSON.stringify(token)));
    const calendar = google.calendar({ version: "v3", auth: oAuth2Client });
    const insertedDates = [];
    for (let i = 0; i < dates.length; i++) {
      const { date, name, description, days } = dates[i];
      const first = new Date(date);
      const second = new Date(first);
      second.setDate(first.getDate() + 1);
      const summary = `${name}'s Birthday!`;
      var event = {
        summary: summary,
        location: "Birthday",
        description: description,
        start: {
          dateTime: first,
          timeZone: "America/New_York"
        },
        end: {
          dateTime: second,
          timeZone: "America/New_York"
        },
        recurrence: ["RRULE:FREQ=YEARLY"],
        reminders: {
          useDefault: false,
          overrides: [{ method: "email", minutes: 24 * days * 60 }]
        }
      };
      const insertedDate = await calendar.events.insert({
        auth: oAuth2Client,
        calendarId: calendarId,
        resource: event
      });
      insertedDates.push(insertedDate.data);
    }
    cb(null, insertedDates);
  } catch (error) {
    cb(error);
  }
};
module.exports = {
  createEvent
};
