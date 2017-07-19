const ProgressPromise = require('progress-promise');

function longTask() {
  return new ProgressPromise((resolve, reject, progress) => {
    setTimeout(() => progress(25), 250);
    setTimeout(() => progress(50), 500);
    setTimeout(() => progress(75), 750);
    setTimeout(resolve, 1000);
  });
}

longTask()
  .progress(value => console.log(value + '%'))
  .then(() => console.log('Done'));