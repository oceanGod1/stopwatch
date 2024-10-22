let stopwatchHr = 0,
stopwatchMin = 0,
stopwatchSec = 0,
stopwatchMill = 0,
stopwatchRuntime;

const stopwatchTimeLoop = () => {
  if (stopwatchMin === 59 && stopwatchSec === 59 && stopwatchMill === 100) {
    stopwatchMin = 0
    stopwatchMin -= 1
    stopwatchHr += 1
  }
  if (stopwatchSec === 59 && stopwatchMill === 100) {
    stopwatchSec = 0;
    stopwatchSec -= 1;
    stopwatchMin += 1;
  }
  if (stopwatchMill === 100) {
    stopwatchMill = 0;
    stopwatchSec += 1
  }
};

const buildIntegration = (timeCount, display, num) => {
  if (timeCount < 10) {
    display.innerHTML = `0${timeCount}`
  } else if (timeCount >= 10) {
    display.innerHTML = timeCount
  } else if (timeCount === num && display.classList.includes('display-sw-hr') === false) {
    display.innerHTML = `00`
  }
};

const integrate = () => {
  buildIntegration(stopwatchHr, displayStopwatchHr);
  buildIntegration(stopwatchMin, displayStopwatchMin, 60);
  buildIntegration(stopwatchSec, displayStopwatchSec, 60);
  buildIntegration(stopwatchMill, displayStopwatchMill, 100);
};

integrate()

startStopwatch.addEventListener('click', () => {
  stopwatchRuntime = setInterval(() => {
    stopwatchMill +=1;
    stopwatchTimeLoop();
    integrate()
  }, 10)
  disableButton(startStopwatch)
  enableButton(stopwatchLap)
  enableButton(stopStopwatch)
  disableButton(resetStopwatch)
  obj.goBack[0].classList.add('hide-icon')
})

stopStopwatch.addEventListener('click', function(){
  clearInterval(stopwatchRuntime);
  disableButton(stopStopwatch)
  disableButton(stopwatchLap)
  enableButton(startStopwatch)
  enableButton(resetStopwatch)
  obj.goBack[0].classList.remove('hide-icon')
})

let eachLap = 0;
stopwatchLap.addEventListener('click', function(){
  eachLap += 1
  document.querySelector('.lap-time').insertAdjacentHTML('beforeend', `
    <div>
      <h4 class="per-lap">Lap ${eachLap}:</h4>
      <h4 class="per-lap">${displayStopwatchHr.innerText}:</h4>
      <h4 class="per-lap">${displayStopwatchMin.innerText}:</h4>
      <h4 class="per-lap">${displayStopwatchSec.innerText}:</h4>
      <h4 class="per-lap">${displayStopwatchMill.innerText}</h4>
    </div>
  `);
  if (eachLap <= 3){
    document.querySelectorAll('.per-lap').forEach((lap) => {
      lap.style.color = 'green'
    })
  }
});

resetStopwatch.addEventListener('click', function(){
  stopwatchHr = 0;
  stopwatchMin = 0;
  stopwatchSec = 0;
  stopwatchMill = 0;
  eachLap = 0;
  integrate()
  disableButton(stopwatchLap)
  disableButton(resetStopwatch)
  document.querySelector('.lap-time').remove();
  this.parentElement.insertAdjacentHTML('afterend', `<section class="lap-time"></section>`)
});