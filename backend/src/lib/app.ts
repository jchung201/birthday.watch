import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

class App {
  public app;
  constructor() {
    this.app = express();
    this.config();
  }

  config() {
    this.app.use(morgan('combined'));
    this.app.use(cors());
    this.app.options('*', cors());
    this.app.enable('trust proxy');
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
  }
}

export default new App().app;
