const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const tasksRoutes = require('./routes/tasks');
const financeRoutes = require('./routes/finance');

const app = express();

mongoose
  .connect(
    'mongodb+srv://tomer:' +
      process.env.MONGO_ATLAS_PW +
      '@cluster0-lvgto.mongodb.net/node-angular?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log('Connected to database!');
  })
  .catch(() => {
    console.log('Connected failed!');
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
mongoose.set('useCreateIndex', true);

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
    'Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  );
  next();
});

app.use('/api/tasks', tasksRoutes);
app.use('/api/finance', financeRoutes);

module.exports = app;
