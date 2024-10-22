// SELECTIONS AND GENERAL FUNCTIONS

// Landing Section
const Landing = function(){
  this.selectStopwatch = document.querySelector('.select-stopwatch')
  this.selectCountdown = document.querySelector('.select-countdown')
  this.landingSection = document.querySelector('#landing-section')
  this.stopwatchSection = document.querySelector('#stopwatch-section')
  this.countdownSection = document.querySelector('#countdown-section')
  this.goBack = document.querySelectorAll('.go-back')
}
const obj = new Landing();

// Stopwatch Section
const displayStopwatchHr = document.querySelector('.display-sw-hr'),
displayStopwatchMin = document.querySelector('.display-sw-min'),
displayStopwatchSec = document.querySelector('.display-sw-sec'),
displayStopwatchMill = document.querySelector('.display-sw-mill'),
startStopwatch = document.querySelector('.sw-start-button'),
stopwatchLap = document.querySelector('.sw-lap-button'),
stopStopwatch = document.querySelector('.sw-stop-button'),
resetStopwatch = document.querySelector('.sw-reset-button');

// Countdown Section
const setCountdown = document.querySelector('#set-countdown'),
enterCountdownHr = document.querySelector('#countdown-hr'),
enterCountdownMin = document.querySelector('#countdown-min'),
enterCountdownSec = document.querySelector('#countdown-sec'),
displayCountdownHr = document.querySelector('.display-cd-hr'),
displayCountdownMin = document.querySelector('.display-cd-min'),
displayCountdownSec = document.querySelector('.display-cd-sec'),
displayCountdownMill = document.querySelector('.display-cd-mill'),
timeDimacation = document.querySelectorAll('.cd-time-dimacation'),
startCountdown = document.querySelector('.countdown-start-button'),
countdownLap = document.querySelector('.countdown-lap-button'),
stopCountdown = document.querySelector('.countdown-stop-button'),
resetCountdown = document.querySelector('.countdown-reset-button'),
redAlert = document.querySelector('#red-alert');
redAlert.insertAdjacentHTML('afterend', `<h3 class="time-up">Time Up!!!</h3>`)


// Navigate Through Pages
const navigate = (select, newPage) => {
  select.addEventListener('click', () => {
    obj.landingSection.classList.add('remove-section')
    newPage.classList.add('add-section')
  })
}
navigate(obj.selectStopwatch, obj.stopwatchSection)
navigate(obj.selectCountdown, obj.countdownSection)
obj.goBack.forEach((back) => {
  back.addEventListener('click', () => {
    obj.landingSection.classList.remove('remove-section')
    obj.stopwatchSection.classList.remove('add-section')
    obj.countdownSection.classList.remove('add-section')
  })
});

// Enable and Disable Buttons
const disableButton = (button) => {
  button.disabled = true;
  button.classList.add('disable-control-button')
}, enableButton = (button) => {
  button.disabled = false;
  button.classList.remove('disable-control-button')
};
disableButton(stopwatchLap)
disableButton(stopStopwatch)
disableButton(resetStopwatch)
disableButton(startCountdown)
disableButton(countdownLap)
disableButton(stopCountdown)
disableButton(resetCountdown)
