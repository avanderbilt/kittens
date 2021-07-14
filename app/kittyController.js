const Kitten = require('./kittyModel');

/**
 * Build and save a sweet, sweet database of kitties.
 * @returns {Promise<void>}
 */
exports.buildKittens = async () => {

  // Test Kitties
  // const noName = new Kitten();
  // noName.speak(); // Meow don't have a name!
  // const fluffy = new Kitten({name: 'Fluffy'});

  const mindy = new Kitten({name: 'Mindy'});
  const verbal = new Kitten({name: 'Verbal'});
  const leander = new Kitten({name: 'Leander'});
  const hazle = new Kitten({name: 'Hazle'});

  await mindy.save();
  await verbal.save();
  await leander.save();
  await hazle.save();

  const moreKitties = [];
  moreKitties.push(new Kitten({name: 'Fred'}));
  moreKitties.push(new Kitten({name: 'Wilma'}));

  await Kitten.create(moreKitties);

  // TODO: Figure out how to save a bunch of kitties together.
}

/**
 * Print all kitties in the database.
 * @returns {Promise<void>}
 */
exports.printKitties = async () => {
  const chalk = require('chalk');
  const data = await Kitten.find({}, {'_id': 0, 'name': 1});
  const kitties = data.map((element) => {
    return element.name;
  });
  console.log(chalk.bold('\nThese are all of the kitties:\n'));
  console.table(kitties);
}

/**
 * Gently shoos kitties away for now.
 * @returns {Promise<void>}
 */
exports.clearKitties = async () => {
  await Kitten.deleteMany({});
}

/**
 * Allow each kitty an opportunity to speak.
 * @returns {Promise<void>}
 */
exports.speak = async () => {
  const chalk = require('chalk');
  const kitties = await Kitten.find({}, {'_id': 0, 'name': 1});
  console.log(chalk.bold('\nPlease listen, as all of the kitties speak:\n'));
  for (let i = 0; i < kitties.length; i++) {
    kitties[i].speak();
  }
}