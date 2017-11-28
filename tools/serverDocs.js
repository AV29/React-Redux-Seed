/* eslint-disable import/default */
/* eslint-disable no-console */
import express from 'express';
import path from 'path';
import * as chalk from './chalkConfig';
import * as consts from './constants';

const {DOC_PATH, DOC_PORT} = consts;
const app = express();

app.use(express.static(path.join(__dirname, DOC_PATH)));

app.listen(DOC_PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(chalk.chalkSuccess(`Docs listen on port ${DOC_PORT}`));
  }
});
