const { google } = require("googleapis");

const patchEvent = async (auth, calendarId, eventId, event, cb) => {
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
    const patchedDate = await calendar.events.patch({
      auth,
      calendarId,
      eventId,
      resource: event
    });
    cb(null, patchedDate.data);
  } catch (error) {
    cb(error);
  }
};
module.exports = {
  patchEvent
};
