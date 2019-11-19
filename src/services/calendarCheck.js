const { google } = require("googleapis");

const calendarCheck = async (auth, cb) => {
  try {
    const calendar = google.calendar({ version: "v3", auth });
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
            summary: "Birthday List Reminder",
            description: "Birthday Reminders"
          }
        });
        cb(null, madeCalendar);
      }
    });
  } catch (error) {
    cb(error);
  }
};
module.exports = {
  calendarCheck
};
