const mongoose = require('mongoose'); // §202107041019
const chalk = require('chalk'); // §202107041507
const dbc = require('../bin/configuration').db;

/**
 * The schema for kitties in the database.
 * @type {mongoose.Schema}
 */
exports.KittySchema = new mongoose.Schema({
  name: String
});

/**
 * Cause a kitty to speak.
 */
this.KittySchema.methods.speak = () => {
  const greeting = this.name ?
    `Hi, meow name is ${chalk.yellow(this.name)}.` :
    chalk.red('Meow don\'t have a name!');
  console.log(greeting);
}

(async () => {
  try {
    await mongoose.connect(`mongodb://${dbc.host}:${dbc.port}/${dbc.name}`, {useNewUrlParser: true, useUnifiedTopology: true});
  } catch (error) {
    console.error(error.message);
  }
})();

exports.Kitten = mongoose.model('Kitten', this.KittySchema);