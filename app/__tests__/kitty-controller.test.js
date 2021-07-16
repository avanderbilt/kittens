const controller = require('../kitty-controller');
const mongoose = require('mongoose');
const Kitty = require('../kitty-model').Kitten;

describe('Kitty Controller Module', () => {
  it('ensures a single kitty may be created.', async () => {
    try {
      const name = 'Mindy';
      const kitty = await controller.buildKitty(name);
      expect(kitty).toBeTruthy();
      expect(kitty.name).toBe(name);
    } catch (e) {
      console.error(e);
    }
  });

  it('Ensure that multiple kitties can\'t be created with the same name.', async () => {
    try {
      const name = 'Mindy';
      await controller.buildKitty(name);
      const kitty = await controller.buildKitty(name);
      expect(kitty).toBeNull();
    } catch (e) {
      console.error(e);
    }
  });

  it('Ensure that a single kitty may be retrieved by name.', async () => {
    try {
      const name = 'Mindy';
      await controller.buildKitty(name);
      const retrievedKitty = await controller.getKitty(name);
      expect(retrievedKitty).toBeTruthy();
      expect(retrievedKitty.name).toBe(name);
    } catch (e) {
      console.error(e);
    }
  });

  it('Ensure a kitty can\'t be retrieved if it isn\'t there.', async () => {
    try {
      const noKitty = await controller.getKitty('Ghost');
      expect(noKitty).toBeNull();
    } catch (e) {
      console.error(e);
    }
  });

  it('Ensure that multiple kitties can\'t be retrieved if they aren\'t there.', async () => {
    try {
      const nonKittyNames = ['Ghost', 'Phantom'];
      const nonKitties = await controller.getKitties(nonKittyNames);
      expect(nonKitties).toBeNull();
    } catch (e) {
      console.error(e);
    }
  });

  it('Ensure that some kitties can be retrieved if some other ones aren\'t there.', async () => {
    try {
      const existingKittyName = 'Mindy';
      await controller.buildKitty(existingKittyName);
      const names = ['Ghost', 'Phantom', existingKittyName];
      const kitties = await controller.getKitties(names);
      expect(kitties).toBeTruthy();
      expect(kitties.length).toBe(1);
      expect(kitties[0].name).toBe(existingKittyName);
    } catch (e) {
      console.error(e);
    }
  });

  it('Ensure that multiple kitties may be created.', async () => {
    try {
      const kittyNames = ['Leander', 'Verbal'];
      const kitties = await controller.buildKitties(kittyNames);
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
});