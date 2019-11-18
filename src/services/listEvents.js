const { google } = require("googleapis");
import { credentials } from "../lib/credentials.js";

function listEvents(token, calendarId, cb) {
  try {
    const { client_secret, client_id, redirect_uris } = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(
      client_id,
      client_secret,
      redirect_uris[0]
    );
    oAuth2Client.setCredentials(JSON.parse(JSON.stringify(token)));
    const calendar = google.calendar({ version: "v3", auth: oAuth2Client });
    calendar.events.list(
      {
        calendarId: calendarId,
        timeMin: new Date().toISOString(),
        maxResults: 100,
        singleEvents: true,
        orderBy: "startTime"
      },
      (err, res) => {
        if (err) cb(err);
        const events = res.data.items;
        if (events.length) {
          cb(null, events);
        } else {
          cb(null, []);
        }
      }
    );
  } catch (error) {
    cb(error);
  }
}

module.exports = {
  listEvents
};
