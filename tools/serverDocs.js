/* eslint-disable import/default */
/* eslint-disable no-console */
import express from 'express';
import path from 'path';
import open from 'open';
import * as consts from './constants';

const app = express();

app.use(express.static(path.join(__dirname, consts.DOC_PATH)));

app.listen(consts.DOC_PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    open(consts.DOC_APP_ENTRY_POINT);
  }
});
