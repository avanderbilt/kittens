const Kitten = require('./kitty-model');

exports.buildKitty = async (name) => {
  try {
    await new Kitten({
      name: name
    }).save();
  } catch (e) {
    throw e;
  }
};

exports.buildKitties = async (names) => {
  try {
    const kitties = names.map(name => {
      return new Kitten({
        name: name
      });
    });
    await Kitten.create(kitties);
  } catch (e) {
    throw e;
  }
}

exports.getKitty = async (name) => {
  let data = null;

  try {
    data = await Kitten.find({
      'name': name
    }, {
      '_id': 0,
      'name': 1
    });
  } catch (e) {
    throw e;
  }

  if (data.length !== 1) {
    throw new Error(`There were too many kitties named ${name}!`);
  }
  const kitty = data[0];
  console.log(kitty);
  return kitty;
}

/**
 * Print all kitties in the database.
 * @returns {Promise<void>}
 */
exports.printKitties = async () => {
  try {
    const chalk = require('chalk');
    const data = await Kitten.find({}, {
      '_id': 0,
      'name': 1
    });

    if (data && data.length !== 0) {

      const kitties = data.map((element) => {
        return element.name;
      });
      console.log(chalk.bold('\nThese are all of the kitties:\n'));
      console.table(kitties);
    }
  } catch (e) {
    throw e;
  }
}

/**
 * Gently shoos kitties away for now.
 * @returns {Promise<void>}
 */
exports.clearKitties = async () => {
  try {
    await Kitten.deleteMany({});
  } catch (e) {
    throw e;
  }
}

/**
 * Allow each kitty an opportunity to speak.
 * @returns {Promise<void>}
 */
exports.speak = async () => {
  try {
    const chalk = require('chalk');
    const kitties = await Kitten.find({}, {
      '_id': 0,
      'name': 1
    });
    console.log(chalk.bold('\nPlease listen, as all of the kitties speak:\n'));
    for (let i = 0; i < kitties.length; i++) {
      kitties[i].speak();
    }
  } catch (e) {
    throw e;
  }
}