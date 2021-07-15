(async () => {
    try {

        const chalk = require('chalk');
        const configuration = require('./configuration');

        console.log(chalk`{bold Hello!}`);
    } catch (error) {
        console.error(error.message);
    }
})();