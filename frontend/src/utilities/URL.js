export let API_URL = "";
export let WEB_URL = "";

switch (process.env.NODE_ENV) {
  case "production":
    WEB_URL = "https://www.mergedpr.com";
    API_URL = "https://eyspc29ly2.execute-api.us-east-1.amazonaws.com/dev";
    // API_URL = "https://birthday-watch.herokuapp.com";
    break;
  default:
    WEB_URL = "http://localhost:8080";
    API_URL = "http://localhost:3000";
}

export default { API_URL, WEB_URL };
