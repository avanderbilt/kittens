/**
 * Build and save a sweet, sweet database of kitties.
 * @returns {Promise<void>}
 */
exports.buildKittens = async () => {

    const Kitten = require('./kittyModel');

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

    // TODO: Figure out how to save a bunch of kitties together.
}

/**
 * Print all kitties in the database.
 * @returns {Promise<void>}
 */
exports.printKitties = async () => {

    const Kitten = require('./kittyModel');

    const data = await Kitten.find({}, {'_id': 0, 'name': 1});

    const kitties = data.map((element) => {
        return element.name;
    });

    console.table(kitties);
}