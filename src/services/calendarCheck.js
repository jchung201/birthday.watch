const { google } = require("googleapis");
import { credentials } from "../lib/credentials.js";

const calendarCheck = async (token, cb) => {
  try {
    const { client_secret, client_id, redirect_uris } = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(
      client_id,
      client_secret,
      redirect_uris[0]
    );
    oAuth2Client.setCredentials(JSON.parse(JSON.stringify(token)));
    const calendar = google.calendar({ version: "v3", auth: oAuth2Client });
    calendar.calendarList.list({}, (err, list) => {
      if (err) return cb(err);
      const foundCalendar = list.data.items.find(calendar => {
        return (
          calendar.summary === "Birthday List Reminder" &&
          calendar.description === "Birthday Reminders"
        );
      });
      if (foundCalendar) {
        cb(null, foundCalendar);
      } else {
        const madeCalendar = calendar.calendars.insert({
          requestBody: {
            summary: "Birthday List Reminder", // required
            timezone: "America/New_York", // optional
            description: "Birthday Reminders" // optional
          }
        });
        cb(null, madeCalendar);
        console.log("created");
      }
    });
  } catch (error) {
    cb(error);
  }
};
module.exports = {
  calendarCheck
};
