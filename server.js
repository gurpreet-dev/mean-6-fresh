const express = require('express');
const mongoose = require('mongoose');
const chalk = require('chalk');

const app = express();

// Mongoose connection

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://g4gpsingh:singh-8851@ds139331.mlab.com:39331/gp_mean2', {useNewUrlParser: true});
mongoose.connection.on('error', (err) => {
  console.error(err);
  console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
  process.exit();
});


// API connection

const api = require('./server/routes/index.route');
app.use('/api', api);


// Express connection

app.set('port', 3000);

app.listen(app.get('port'), () => {
    console.log('%s App is running at http://localhost:%d in %s mode', chalk.green('✓'), app.get('port'), app.get('env'));
    console.log(' Press CTRL-C to stop\n');
});

module.exports = app;