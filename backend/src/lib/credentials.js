require('dotenv').config();
const credentials = {
  installed: {
    client_id: process.env.CLIENT_ID,
    project_id: process.env.project_id,
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_secret: process.env.CLIENT_SECRET,
    redirect_uris: [`${process.env.WEB_URL}/token`]
  }
};
module.exports = {
  credentials
};
