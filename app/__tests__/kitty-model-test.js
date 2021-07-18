const kittyModel = require('../kitty-model');
const Kitty = kittyModel.Kitten;

describe('Kitty Model Module', () => {
  it('Kitties may be created.', () => {
    try {
      const name = 'Mindy';
      const kitty = new Kitty({name: name});
      expect(kitty).toBeTruthy();
      expect(kitty.name).toBe(name);
      kitty.speak();
    } catch (e) {
      console.error(e);
    }
  });
});