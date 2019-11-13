// Import Express Instance
import app from "./src/lib/app";

import "./src/calendar";

app.listen(3000, () => {
  console.log("Listening on port: " + 3000);
});
