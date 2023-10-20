//NO EMAIL
const logError = require("./logerror")

const cron = require('node-cron');

const task = cron.schedule('*/7 * * * * *', () => {
    logError('Errors every 7 seconds.');
});

task.start()