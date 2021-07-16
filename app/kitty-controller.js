const Kitty = require('./kitty-model').Kitten;

exports.buildKitty = async (name) => {
  try {
    const kitty = new Kitty({name: 'Mindy'});

    const existingKitty = await this.getKitty(name);

    if (existingKitty) {
      console.error(`There is already a kitty named ${name}!`);
      return null;
    }

    await kitty.save();

    return await this.getKitty(name);
  } catch (e) {
    throw e;
  }
};

exports.buildKitties = async (names) => {
  try {
    const kitties = names.map(name => {
      return new Kitty({
        name: name
      });
    });
    await Kitty.create(kitties);

    return await this.getKitties(names);
  } catch (e) {
    throw e;
  }
}

exports.getKitties = async (names) => {
  let kitties = null;

  try {
    kitties = await Kitty.find({
      'name': { '$in': names }
    });
  } catch (e) {
    throw e;
  }

  if (kitties.length === 0) {
    console.warn(`There were no kitties with these names: ${names}!`);
    return null;
  }

  return kitties;
}

exports.getKitty = async (name) => {
  let data = null;

  try {
    data = await Kitty.find({
      'name': name
    }, {
      '_id': 0,
      'name': 1
    });
  } catch (e) {
    throw e;
  }

  if (data.length === 0) {
    console.warn(`There were no kitties named ${name}!`);
    return null;
  }

  if (data.length > 1) {
    throw new Error(`There were too many kitties named ${name}!`);
  }

  const kitty = data[0];
  return kitty;
}

/**
 * Print all kitties in the database.
 * @returns {Promise<void>}
 */
exports.printKitties = async () => {
  try {
    const chalk = require('chalk');
    const data = await Kitty.find({}, {
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
    await Kitty.deleteMany({});
  } catch (e) {
    throw e;
  }
}

/**
 * Allow each kitty an opportunity to speak.
 * @returns {Promise<void>}
 */
/*
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
 */
