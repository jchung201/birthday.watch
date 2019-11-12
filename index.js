const fs = require("fs");
const { authorize } = require("./services/authorize");
const { listEvents } = require("./services/listEvents");
const { createEvent } = require("./services/createEvent");

// Load client secrets from a local file.
fs.readFile("credentials.json", async (err, content) => {
  if (err) return console.log("Error loading client secret file:", err);
  // Authorize a client with credentials, then call the Google Calendar API.
  // authorize(JSON.parse(content), createEvent);
  authorize(JSON.parse(content), listEvents);
});
