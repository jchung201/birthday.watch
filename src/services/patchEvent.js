const { google } = require("googleapis");

const patchEvent = async (auth, calendarId, event, cb) => {
  try {
    const calendar = google.calendar({ version: "v3", auth });
    const { date, name, description, days } = event;
    const first = new Date(date);
    const second = new Date(first);
    second.setDate(first.getDate() + 1);
    const summary = `${name}'s Birthday!`;
    var event = {
      summary: summary,
      location: "Birthday",
      description: description,
      start: {
        dateTime: first
      },
      end: {
        dateTime: second
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
    cb(null, insertedDate);
  } catch (error) {
    cb(error);
  }
};
module.exports = {
  patchEvent
};
