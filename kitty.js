`use strict`;

const mongoose = require('mongoose');
const chalk = require('chalk');

// ****************************************************************************
// Create the schema and add a function to the prototype.
// ****************************************************************************

const kittySchema = new mongoose.Schema({
  name: String
});

kittySchema.methods.speak = function () {
  const greeting = this.name ?
    `Meow name is ${chalk.yellow(this.name)}.` :
    chalk.red('I don\'t have a name!');
  console.log(greeting);
}

// ****************************************************************************
// Create and export the model.
// ****************************************************************************

module.exports = mongoose.model('Kitten', kittySchema);