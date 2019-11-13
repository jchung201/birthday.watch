const { google } = require("googleapis");
/**
 * Lists the next 10 events on the user's primary calendar.
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */

const createEvent = async (auth, calendarId, dates) => {
  const calendar = google.calendar({ version: "v3", auth });
  for (let i = 0; i < dates.length; i++) {
    const { date, name, description } = dates[i];
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
        overrides: [{ method: "email", minutes: 168 * 60 }]
      }
    };
    await calendar.events.insert({
      auth: auth,
      calendarId: calendarId,
      resource: event
    });
    console.log(name);
  }
};
module.exports = {
  createEvent
};
