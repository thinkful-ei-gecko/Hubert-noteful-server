require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const errorHandler = require('./errorHandler');
const foldersRouter = require('./folders-router');
const notesRouter = require('./notes-router');

const app = express();

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/api/folders', foldersRouter);
app.use('/api/notes', notesRouter);


app.get('/', (req, res) => {
  res.send('Hello, world from Heroku!');
});



app.use(errorHandler);

module.exports = app;