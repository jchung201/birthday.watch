const { google } = require("googleapis");

const createEvent = async (auth, calendarId, dates, cb) => {
  try {
    const calendar = google.calendar({ version: "v3", auth });
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
        auth,
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
