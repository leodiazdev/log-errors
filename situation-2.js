
//EMAIL
const logError = require("./logerror")

const cron = require('node-cron');

const task = cron.schedule('*/5 * * * * *', () => {
    logError('Errors every 5 seconds.');
});

task.start()