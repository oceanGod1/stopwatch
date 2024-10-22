let countdownHr,
countdownMin,
countdownSec,
countdownMill = 0,
countdownInterval;

const assignTimer = () => {
  countdownHr = Number(enterCountdownHr.value);
  countdownMin = Number(enterCountdownMin.value);
  countdownSec = Number(enterCountdownSec.value);
};

const countdownLoop = () => {
  if(countdownMin === 0){
    countdownMin = 60;
  }
  if(countdownSec === 0){
    countdownSec = 60;
  }
  if(countdownMill === 0){
    countdownMill = 100;
  }
};

const buildCountTimer = (countdown, bigNum, display) => {
  if(countdown === bigNum){
    display.innerHTML = '00'
  } else if (countdown < 10) {
    display.innerHTML = `0${countdown}`
  } else {
    display.innerHTML = countdown;
  }
};

const displayCountdownTimer = () => {
  buildCountTimer(countdownHr, 1000, displayCountdownHr)
  buildCountTimer(countdownMin, 60, displayCountdownMin)
  buildCountTimer(countdownSec, 60, displayCountdownSec)
  buildCountTimer(countdownMill, 100, displayCountdownMill)
};

const timeDivider = () => {
  timeDimacation.forEach((section) => {
    section.classList.add('isactive')
  })
};

const enableSetCountdown = () => {
  setCountdown.classList.remove('disabled')
  setCountdown.children[1].disabled = false
  setCountdown.children[2].disabled = false
  setCountdown.children[3].disabled = false
  enableButton(setCountdown.children[4])
};

setCountdown.addEventListener('submit', function(e){
  e.preventDefault()
  timeDivider();
  assignTimer()
  countdownLoop();
  displayCountdownTimer()
  redAlert.classList.remove('add-alert');
  if (countdownHr > 0 || countdownMin < 60 || countdownSec < 60){
    document.querySelector('.time-up').classList.remove('isactive');
    document.querySelector
    this.classList.add('disabled')
    this.children[1].disabled =true;
    this.children[2].disabled =true;
    this.children[3].disabled =true;
    disableButton(this.children[4])
    enableButton(resetCountdown)
    enableButton(startCountdown)
  }
});

startCountdown.addEventListener('click', function(){
  countdownInterval = setInterval(() => {
    if (countdownHr > 0 || countdownMin < 60 || countdownSec < 60){
      countdownMill -= 1
      countdownLoop();
      displayCountdownTimer()
      if(countdownMill === 100){
        countdownSec -= 1;
      }
      if(countdownSec === 59 && countdownMill === 100){
        countdownMin -= 1;
      }
      if(countdownMin === 59 && countdownSec === 59 && countdownMill === 100){
        countdownHr -= 1;
      }
    } else{
      countdownMill = 0;
      displayCountdownMill.innerHTML = '00';
      clearInterval(countdownInterval);
      disableButton(stopCountdown)
      enableSetCountdown()
      obj.goBack[1].classList.remove('hide-icon')
      document.querySelector('.time-up').classList.add('isactive');
    }
    if (countdownHr === 0 && countdownMin === 60 && countdownSec <= 10 && countdownSec >= 1 && countdownMill === 100){
      redAlert.classList.add('add-alert');
      redAlert.insertAdjacentHTML('beforeend', `<audio src="multimedia/sounds/beep2.mp3" autoplay></audio>`)
    }
    if (countdownHr === 0 && countdownMin === 60 && countdownSec <= 10 && countdownMill === 65){
      redAlert.classList.remove('add-alert');
      redAlert.children[0].remove()
    }
  }, 10)
  disableButton(startCountdown)
  disableButton(resetCountdown)
  enableButton(stopCountdown)
  obj.goBack[1].classList.add('hide-icon')
})

stopCountdown.addEventListener('click', () => {
  clearInterval(countdownInterval);
  disableButton(stopCountdown)
  enableButton(startCountdown)
  enableButton(resetCountdown)
  obj.goBack[1].classList.remove('hide-icon')
})

resetCountdown.addEventListener('click', () => {
  countdownHr = 0
  countdownMin = 0
  countdownSec = 0
  countdownMill = 0
  displayCountdownTimer()
  enableSetCountdown()
  disableButton(startCountdown)
  disableButton(resetCountdown)
  redAlert.classList.remove('add-alert');
})