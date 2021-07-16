(async () => {

  /**
   * https://developer.mozilla.org/en-US/docs/Glossary/IIFE
   * An IIFE (Immediately Invoked Function Expression) is a JavaScript function
   * that runs as soon as it is defined.
   * See also, "Cowboy" Ben Alman: IIFE https://tinyurl.com/pfn4xre9
   */

  try {
    const mongoose = require('mongoose'); // §202107041019
    const chalk = require('chalk'); // §202107041507
    const dbc = require('./configuration').db;
    const kittyController = require('../app/kittyController');
    const db = mongoose.connection;

    // **************************************************************************
    // Set up event handlers ...
    // **************************************************************************

    /**
     * `error`: Emitted if an error occurs on a connection, like a
     * `parseError` due to malformed data or a payload larger than 16MB.
     * See: https://mongoosejs.com/docs/connections.html#connection-events
     */
    db.on('error', console.error.bind(console, 'Connection error:'));

    /**
     * `close`: Emitted after `Connection#close()` successfully closes the
     * connection. If you call `conn.close()`, you'll get both a
     * 'disconnected' event and a 'close' event.
     * See: https://mongoosejs.com/docs/connections.html#connection-events
     */
    db.on('close', () => {
      console.log(chalk.gray(`\nClosed the ${chalk.bold(dbc.name)} database.\n`));
    });

    /**
     * `connected`: Emitted when Mongoose successfully makes its initial
     * connection to the MongoDB server, or when Mongoose reconnects after
     * losing connectivity.
     * `open`: Equivalent to `connected`.
     */
    db.once('open', async () => {
      await kittyController.buildKitties(['Mindy', 'Verbal', 'Leander', 'Hazle']);
      await kittyController.printKitties();
      await kittyController.speak();
      await kittyController.clearKitties();
      await db.close();
    });

    // **************************************************************************
    // Initialize the connection ...
    // **************************************************************************

    /**
     * `useNewUrlParser` - The underlying MongoDB driver has deprecated
     * their `currentconnection` string parser. Because this is a major
     * change, they added the `useNewUrlParser` flag to allow users to fall
     * back to the old parser if they find a bug in the new parser. You
     * should set `useNewUrlParser: true` unless that prevents you from
     * connecting.
     * Note that if you specify `useNewUrlParser: true`, you must specify a
     * port in your connection string, like `mongodb:/*localhost:27017/dbname`.
     * The new url parser does not support connection strings that do not
     * have a port, like `mongodb://localhost/dbname`.
     * See: https://mongoosejs.com/docs/connections.html#options
     */

    /**
     * `useUnifiedTopology` - False by default. Set to true to opt in to
     * using theMongoDB driver's new connection management engine. You
     * should set this option to true, except for the unlikely case that it
     * prevents you from maintaining a stable connection.
     * See: https://mongoosejs.com/docs/connections.html#options
     */

    await mongoose.connect(`mongodb://${dbc.host}:${dbc.port}/${dbc.name}`, { // §202107041049
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log(chalk.gray(chalk`\nConnected to {bold ${dbc.name}} on {bold ${dbc.host}}, port {bold ${dbc.port}}.`));
  } catch (error) {
    console.error(error.message);
  }
})();