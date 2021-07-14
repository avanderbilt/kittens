<!-- ⚠️ This README has been generated from the file(s) "blueprint.md" ⚠️--><h1 align="center">kittens</h1>
<p align="center">
  <img src="https://raw.githubusercontent.com/avanderbilt/kittens/master/doc/cats.jpg" alt="Logo" width="150" height="auto" />
</p>
<p align="center">
  <b>This project was created to house my experiments with the "Mongoose v5.13.2: Getting Started" tutorial code.</b></br>
  <sub><sub>
</p>

<br />


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#table-of-contents)

## ➤ Table of Contents

* [➤ Background](#-background)
* [➤ Output](#-output)
* [➤ References](#-references)
* [➤ License](#-license)

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#background)

## ➤ Background

This project is mostly my implementation of the example code from the [Mongoose](https://mongoosejs.com/) [Getting Started](https://mongoosejs.com/docs/) tutorial. I added a lot of notes and links to things so that I could use this project as a reference and launchpad to improve my [MongoDB](https://www.mongodb.com/) skills.

There are links to my [Zettelkasten](https://en.wikipedia.org/wiki/Zettelkasten) notes (in [Obsidian](https://obsidian.md/)) related to areas of the code and techniques in general that look like this: `§202107041019`

This project makes use of [chalk](https://github.com/chalk/chalk), mostly in the form of [tagged template literals](https://exploringjs.com/es6/ch_template-literals.html#_tagged-template-literals):

```javascript
console.log(chalk`Connected to {bold ${dbc.name}} on {bold ${dbc.host}}, port {bold ${dbc.port}}.`);
```


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#output)

## ➤ Output

![Program Output](/doc/output.png)

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#references)

## ➤ References

- [Mongoose v5.13.2: Getting Started](https://mongoosejs.com/docs/)
- [Mongoose ODM v5.13.2](https://mongoosejs.com/)
- [The most popular database for modern apps | MongoDB](https://www.mongodb.com/)
- [Zettelkasten](https://en.wikipedia.org/wiki/Zettelkasten)
- [chalk/chalk: 🖍 Terminal string styling done right](https://github.com/chalk/chalk)
- [Exploring ES6 — 8. Template literals](https://exploringjs.com/es6/ch_template-literals.html#_tagged-template-literals)


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#license)

## ➤ License
	
Licensed under [GPL-3.0](https://opensource.org/licenses/GPL-3.0).