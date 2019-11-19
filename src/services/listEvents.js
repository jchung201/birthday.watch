const { google } = require("googleapis");

function listEvents(auth, calendarId, cb) {
  try {
    const calendar = google.calendar({ version: "v3", auth });
    calendar.events.list(
      {
        calendarId,
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
