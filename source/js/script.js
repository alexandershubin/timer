`use strict`;
window.addEventListener('DOMContentLoaded', function () {
  const hour = document.querySelector('.hour');
  const minute = document.querySelector('.minute');
  const second = document.querySelector('.second');
  let counter = 11;
  let min = 1;

  const init = () => {
    setInterval(() => {
      second.innerHTML = counter;
      minute.innerHTML = min;
      if (counter == 0 || min == 0) {
        counter = 59;
        min = 59;
        min--;
      }
      checkSecondTimer();
      checkMinuteTimer();
    }, 1000);
  };

  const checkSecondTimer = () => {
    if (counter < 10) {
      second.innerHTML = `0` + counter;
    }
    counter--;
  };

  const checkMinuteTimer = () => {
    if (min < 10) {
      minute.innerHTML = `0` + min;
    }
  };
  init();

});
