export let API_URL = '';
export let WEB_URL = '';

switch (process.env.NODE_ENV) {
  case 'production':
    WEB_URL = 'https://www.birthday.watch';
    API_URL = 'https://api.birthday.watch';
    break;
  default:
    WEB_URL = 'http://localhost:8080';
    API_URL = 'http://localhost:3000';
}

export default { API_URL, WEB_URL };
