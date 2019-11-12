const { google } = require("googleapis");
/**
 * Lists the next 10 events on the user's primary calendar.
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */

function calendarCheck(auth, returncb) {
  const calendar = google.calendar({ version: "v3", auth });
  calendar.calendarList.list({}, (err, list) => {
    const foundCalendar = list.data.items.find(calendar => {
      return (
        calendar.summary === "birthday-list-reminder" &&
        calendar.description === "Birthday Reminders"
      );
    });
    if (foundCalendar) {
      console.log("Exists");
      returncb(foundCalendar);
    } else {
      calendar.calendars.insert({
        requestBody: {
          summary: "birthday-list-reminder", // required
          timezone: "America/New_York", // optional
          description: "Birthday Reminders" // optional
        }
      });
      console.log("created");
    }
  });
}
module.exports = {
  calendarCheck
};
