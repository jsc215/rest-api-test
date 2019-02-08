const express = require('express');
const bodyParser = require('body-parser');
require('./db/mongoose');
const path = require('path')
// const { ObjectID } = require('mongodb');
// const path = require('path');

// express wired up
const app = express();

// API file for interacting with MongoDB
const api = require('./routes/api');

// parsers for posts
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './dist')));
app.use('/api', api);

const cors = require('cors');
app.use(cors());

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/index.html'));
});

const port = process.env.PORT || '3000';
app.set('port', port);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
