const { google } = require("googleapis");

const deleteEvent = async (auth, calendarId, eventId, cb) => {
  try {
    const calendar = google.calendar({ version: "v3", auth });
    const deletedEvent = await calendar.events.delete({
      auth,
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
