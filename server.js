import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import path from 'path';

import config from './server_utils/getConfig';

const app = express();

app.use(compression());

app.use(express.static(path.resolve(__dirname, 'dist')));
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());

app.get('*', (req, res) => {
  res.sendFile(path.resolve('./dist/index.html'));
});

app.listen(config.port, () => {
  console.log( // eslint-disable-line no-console
    `AdvancedReactBoilerplate is now running on http://localhost:${config.port}`,
  );
});
