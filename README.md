# Birthday Watch

[Birthday Watch](https://mergedpr.com/) is a birthday reminder platform that integrates with Google Calendar.

## Table of Contents

1. [Features](#features)
1. [Get Started](#get-started)
1. [Screenshots](#screenshots)
1. [Built With](#built-with)
1. [License](#license)

## Features

- Typescript Node, Typescript React w/ MobX State Tree
- Google API SDK to Create, Update, and Delete Calendars/Events
- Netlify, Heroku, and AWS-Serverless auto deployment configuration
- Webpack code-splitting and load optimization

## Get Started

- Frontend and Backend split by directories (Need to npm/yarn install for each)
- Populate .env file for backend
- Frontend auto netlify deploy
- Backend auto heroku dpeloy
- Backend serverless, customize yml, configure aws serverless on machine, run 'serverless deploy' in backend after production build (npm run build with NODE_ENV set to production)

## Built With

- [TypeScript](https://www.typescriptlang.org/)
- [AWS-Serverless](https://aws.amazon.com/serverless/build-a-web-app/)
- [React](https://reactjs.org/)
- [Node](https://nodejs.org/en/)
- [Google SDK](https://github.com/googleapis/google-api-nodejs-client)

## Screenshots

## License

Used the [MIT License](LICENSE.md).
