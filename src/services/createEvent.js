const { google } = require("googleapis");
/**
 * Lists the next 10 events on the user's primary calendar.
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */

function createEvent(auth) {
  const calendar = google.calendar({ version: "v3", auth });
  var event = {
    summary: "Test",
    location: "Birthday",
    description: "Birthday",
    start: {
      dateTime: "2019-11-13T09:00:00-07:00",
      timeZone: "America/Los_Angeles"
    },
    end: {
      dateTime: "2019-11-13T17:00:00-07:00",
      timeZone: "America/Los_Angeles"
    },
    recurrence: ["RRULE:FREQ=YEARLY"],
    reminders: {
      useDefault: false,
      overrides: [{ method: "email", minutes: 72 * 60 }]
    }
  };
  calendar.events.insert(
    {
      auth: auth,
      calendarId: "primary",
      resource: event
    },
    function(err, event) {
      if (err) {
        console.log(
          "There was an error contacting the Calendar service: " + err
        );
        return;
      }
      console.log("Event created: %s", event.htmlLink);
    }
  );
}
module.exports = {
  createEvent
};
