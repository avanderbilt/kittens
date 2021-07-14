### Background

This project is mostly my implementation of the example code from the [Mongoose](https://mongoosejs.com/) [Getting Started](https://mongoosejs.com/docs/) tutorial. I added a lot of notes and links to things so that I could use this project as a reference and launchpad to improve my [MongoDB](https://www.mongodb.com/) skills.

There are links to my [Zettelkasten](https://en.wikipedia.org/wiki/Zettelkasten) notes (in [Obsidian](https://obsidian.md/)) related to areas of the code and techniques in general that look like this: `§202107041019`

This project makes use of [chalk](https://github.com/chalk/chalk), mostly in the form of [tagged template literals](https://exploringjs.com/es6/ch_template-literals.html#_tagged-template-literals):

```javascript
console.log(chalk`Connected to {bold ${dbc.name}} on {bold ${dbc.host}}, port {bold ${dbc.port}}.`);
```
