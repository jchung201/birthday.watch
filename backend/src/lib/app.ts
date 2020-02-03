require('dotenv').config();
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import logger from 'morgan';

class App {
  constructor() {
    this.app = express();
    this.config();
  }

  config() {
    this.app.use(logger('combined'));
    this.app.use(cors());
    this.app.options('*', cors());
    this.app.enable('trust proxy');
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
  }
}

export default new App().app;
