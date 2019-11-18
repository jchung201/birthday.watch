const fs = require("fs");
const { authorize } = require("./services/oldauthorize");
const { listEvents } = require("./services/listEvents");
const { createEvent } = require("./services/createEvent");
const { calendarCheck } = require("./services/calendarCheck");

// Load client secrets from a local file.
fs.readFile("credentials.json", (err, content) => {
  if (err) return console.log("Error loading client secret file:", err);
  // Authorize a client with credentials, then call the Google Calendar API.
  // authorize(JSON.parse(content), createEvent);
  authorize(JSON.parse(content), calendarCheck, data => {
    // authorize(JSON.parse(content), listEvents, data.id);
    authorize(JSON.parse(content), createEvent, data.id, [
      {
        date: "7/30/2019",
        name: "5",
        description: ""
      },
      {
        date: "10/15/2019",
        name: "5",
        description: ""
      }
    ]);
  });
});
