/* eslint-disable import/default */
/* eslint-disable no-console */
import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';
import * as consts from './constants';

const app = express();

app.use(compression());
app.use(express.static(consts.DIST_FOLDER));

// Everything else will return the index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, consts.PROD_FALLBACK_INDEX_POINT));
});

app.listen(consts.PROD_BUILD_PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    open(consts.PROD_APP_ENTRY_POINT);
  }
});
