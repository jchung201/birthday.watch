// Import Express Instance
import app from "./lib/app";

const router = require("./routes/index");
app.use("/rest", router);

app.listen(3000, () => {
  console.log("Listening on port: " + 3000);
});
