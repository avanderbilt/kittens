const mongoose = require('mongoose');
const dbc = require('../bin/configuration').db;
const kittyController = require('./kitty-controller');


test('Get the expected kitty back.', async () => {

  try {

    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'Connection error:'));
    db.on('close', () => {
      console.log(chalk.gray(`\nClosed the ${chalk.bold(dbc.name)} database.\n`));
    });

    const kittyName = 'Mindy';
    let kitty = null;

    db.once('open', async () => {
      await kittyController.buildKitty(name);
      kitty = await kittyController.getKitty(name)
      await kittyController.clearKitties();
      await db.close();
    });

    await mongoose.connect(`mongodb://${dbc.host}:${dbc.port}/${dbc.name}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log(chalk.gray(chalk`\nConnected to {bold ${dbc.name}} on {bold ${dbc.host}}, port {bold ${dbc.port}}.`));

    expect(kitty.name).toBe(kittyName);

  } catch (error) {
    console.error(error.message);
  }
});
