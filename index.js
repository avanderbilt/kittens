'use strict'; // §202107041034

// packages ...
const mongoose = require('mongoose'); // §202107041019
const chalk = require('chalk'); // §202107041507

// schema & model ...
const Kitten = require('./kitty');

// configuration variables ...
const configuration = require('./configuration');
const dbc = configuration.db;

// ****************************************************************************
// Initialize the connection ...
// ****************************************************************************

/* https://mongoosejs.com/docs/connections.html#options
useNewUrlParser - The underlying MongoDB driver has deprecated their current
connection string parser. Because this is a major change, they added the
useNewUrlParser flag to allow users to fall back to the old parser if they find
a bug in the new parser. You should set useNewUrlParser: true unless that
prevents you from connecting. Note that if you specify useNewUrlParser: true,
you must specify a port in your connection string, like
mongodb://localhost:27017/dbname. The new url parser does not support
connection strings that do not have a port, like mongodb://localhost/dbname. */

/* https://mongoosejs.com/docs/connections.html#options
useUnifiedTopology - False by default. Set to true to opt in to using the
MongoDB driver's new connection management engine. You should set this option
to true, except for the unlikely case that it prevents you from maintaining a
stable connection. */
const connectionString = `mongodb://${dbc.host}:${dbc.port}/${dbc.name}`;

mongoose.connect(connectionString, { // §202107041049
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  db.dropDatabase();
});

const db = mongoose.connection;

console.log(`Connected to ${chalk.bold(dbc.name)} on ${chalk.bold(dbc.host)}, port ${chalk.bold(dbc.port)}.`);

/* https://mongoosejs.com/docs/connections.html#connection-events
error: Emitted if an error occurs on a connection, like a parseError due to
malformed data or a payload larger than 16MB. */
db.on('error', console.error.bind(console, 'Connection error:'));

db.on('close', () => {  
  console.log(`Closed the ${chalk.bold(dbc.name)} database.`);
});

/* https://mongoosejs.com/docs/connections.html#connection-events
connected: Emitted when Mongoose successfully makes its initial connection to
the MongoDB server, or when Mongoose reconnects after losing connectivity.
open: Equivalent to connected */
db.once('open', async () => {
  
  // **************************************************************************
  // Build and save kittens.
  // **************************************************************************
  
  const noName = new Kitten();
  noName.speak();

  const fluffy = new Kitten({ name: 'Fluffy' });
  const verbal = new Kitten({ name: 'Verbal' });
  const leander = new Kitten({ name: 'Leander' });
  const hazle = new Kitten({ name: 'Hazle' });
  
  await fluffy.save();
  fluffy.speak();
  
  await verbal.save();
  verbal.speak();
  
  await leander.save();
  leander.speak();
  
  await hazle.save();
  hazle.speak();
  
  // **************************************************************************
  // Print kittens.
  // **************************************************************************
  
  Kitten.find({}, { '_id': 0, 'name': 1 }, (error, kittens) => {
    if (error) {
      console.log(error.message);
      process.exit(1);
    }
    console.log(kittens);
    db.close();
  });
});
