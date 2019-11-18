const { google } = require("googleapis");
import { credentials } from "../lib/credentials.js";

const deleteEvent = async (token, calendarId, eventId, cb) => {
  try {
    const { client_secret, client_id, redirect_uris } = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(
      client_id,
      client_secret,
      redirect_uris[0]
    );
    oAuth2Client.setCredentials(JSON.parse(JSON.stringify(token)));
    const calendar = google.calendar({ version: "v3", auth: oAuth2Client });
    const deletedEvent = await calendar.events.delete({
      auth: oAuth2Client,
      calendarId,
      eventId
    });
    cb(null, deletedEvent);
  } catch (error) {
    cb(error);
  }
};
module.exports = {
  deleteEvent
};
