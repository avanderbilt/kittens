const mongoose = require('mongoose');
const chalk = require('chalk');

/**
 * The schema for kitties in the database.
 * @type {mongoose.Schema}
 */
const kittySchema = new mongoose.Schema({
  name: String
});

/**
 * Cause a kitty to speak.
 */
kittySchema.methods.speak = function () {
  const greeting = this.name ?
    `Hi, meow name is ${chalk.yellow(this.name)}.` :
    chalk.red('Meow don\'t have a name!');
  console.log(greeting);
}

/**
 * Create and export the model.
 * @type {Model}
 */
module.exports = mongoose.model('Kitten', kittySchema);