export let WEB_URL = '';

switch (process.env.NODE_ENV) {
  case 'production':
    WEB_URL = 'https://www.birthday.watch';
    break;
  default:
    WEB_URL = 'http://localhost:8080';
}

export default { WEB_URL };
