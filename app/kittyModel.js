const mongoose = require('mongoose');
const chalk = require('chalk');

// ****************************************************************************
// Create the schema and add a function to the prototype.
// ****************************************************************************

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

// ****************************************************************************
// Create and export the model.
// ****************************************************************************

module.exports = mongoose.model('Kitten', kittySchema);