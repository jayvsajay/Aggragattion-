var cron = require('node-cron');

var task=cron.schedule('*/2 * * * * *', () => {
  console.log('running a task every minute');
});
task.start();
task.stop();
task.start();
