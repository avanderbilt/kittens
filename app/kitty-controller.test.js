const controller = require('./kitty-controller');
const mongoose = require('mongoose');
const Kitty = require('./kitty-model').Kitten;

test('Ensure a single kitty may be created.', async () => {
  try {
    const name = 'Mindy';
    const kitty = await controller.buildKitty(name);

    console.log(kitty);

    expect(kitty.name).toBe(name);
  } catch (e) {
    console.error(e);
  }
});

test('Ensure that a single kitty may be retrieved by name.', async () => {

  /**
   * This assumes that kitty names are unique, which is supported by the code,
   * not the database in this case.
   */

  try {

    /**
     * Build the kitty to retrieve.
     */

    const name = 'Mindy';
    await controller.buildKitty(name);

    /**
     * Retrieve the kitty.
     */

    const retrievedKitty = await controller.getKitty(name);

    console.log(retrievedKitty);

    expect(retrievedKitty).toBeTruthy();
    expect(retrievedKitty.name).toBe(name);

    const noKitty = await controller.getKitty('Ghost');

    expect(noKitty).toBeNull();

  } catch (e) {
    console.error(e);
  }
});

test('Ensure that multiple kitties may be created.', async () => {
  try {
    const kittyNames = ['Leander', 'Verbal'];

    const kitties = await controller.buildKitties(kittyNames);

    console.log(`Expecting kitties.length (${kitties.length}) to be kittyNames.length (${kittyNames.length}).`);

    expect(kitties.length).toBe(kittyNames.length);
  } catch (e) {
    console.error(e);
  }
});

afterEach(async () => {
  await Kitty.deleteMany({});
});

afterAll(async () => {
  await mongoose.connection.close();
});
