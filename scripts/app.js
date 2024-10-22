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



let redColor = 'blue';


const colorFunc = () => {
  redColor = 'red';
  const greenColor = 'green'
  return redColor
}

console.log(redColor)
console.log(colorFunc())
console.log(redColor)


























//   // Landing Section
//   const selectStopwatch = document.querySelector('.select-stopwatch'),
//   selectCountdown = document.querySelector('.select-countdown'),
//   landingSection = document.querySelector('#landing-section'),
//   stopwatchSection = document.querySelector('#stopwatch-section'),
//   countdownSection = document.querySelector('#countdown-section'),
//   goBack = document.querySelectorAll('.go-back');


// // Navigate Through Pages
// const navigate = (select, newPage) => {
//   select.addEventListener('click', () => {
//     landingSection.classList.add('remove-section')
//     newPage.classList.add('add-section')
//   })
// }
// navigate(selectStopwatch, stopwatchSection)
// navigate(selectCountdown, countdownSection)
// goBack.forEach((back) => {
//   back.addEventListener('click', () => {
//     landingSection.classList.remove('remove-section')
//     stopwatchSection.classList.remove('add-section')
//     countdownSection.classList.remove('add-section')
//   })
// });



















// // SELECTIONS AND GENERAL FUNCTIONS

//   // Landing Section
//   const selectStopwatch = document.querySelector('.select-stopwatch'),
//   selectCountdown = document.querySelector('.select-countdown'),
//   landingSection = document.querySelector('#landing-section'),
//   stopwatchSection = document.querySelector('#stopwatch-section'),
//   countdownSection = document.querySelector('#countdown-section'),
//   goBack = document.querySelectorAll('.go-back');

//   // Stopwatch Section
//   const displayStopwatchHr = document.querySelector('.display-sw-hr'),
//   displayStopwatchMin = document.querySelector('.display-sw-min'),
//   displayStopwatchSec = document.querySelector('.display-sw-sec'),
//   displayStopwatchMill = document.querySelector('.display-sw-mill'),
//   startStopwatch = document.querySelector('.sw-start-button'),
//   stopwatchLap = document.querySelector('.sw-lap-button'),
//   stopStopwatch = document.querySelector('.sw-stop-button'),
//   resetStopwatch = document.querySelector('.sw-reset-button');

//   // Countdown Section
//   const setCountdown = document.querySelector('#set-countdown'),
//   enterCountdownHr = document.querySelector('#countdown-hr'),
//   enterCountdownMin = document.querySelector('#countdown-min'),
//   enterCountdownSec = document.querySelector('#countdown-sec'),
//   displayCountdownHr = document.querySelector('.display-cd-hr'),
//   displayCountdownMin = document.querySelector('.display-cd-min'),
//   displayCountdownSec = document.querySelector('.display-cd-sec'),
//   displayCountdownMill = document.querySelector('.display-cd-mill'),
//   timeDimacation = document.querySelectorAll('.cd-time-dimacation'),
//   startCountdown = document.querySelector('.countdown-start-button'),
//   countdownLap = document.querySelector('.countdown-lap-button'),
//   stopCountdown = document.querySelector('.countdown-stop-button'),
//   resetCountdown = document.querySelector('.countdown-reset-button'),
//   redAlert = document.querySelector('#red-alert');
//   redAlert.insertAdjacentHTML('afterend', `<h3 class="time-up">Time Up!!!</h3>`)


// // Navigate Through Pages
// const navigate = (select, newPage) => {
//   select.addEventListener('click', () => {
//     landingSection.classList.add('remove-section')
//     newPage.classList.add('add-section')
//   })
// }
// navigate(selectStopwatch, stopwatchSection)
// navigate(selectCountdown, countdownSection)
// goBack.forEach((back) => {
//   back.addEventListener('click', () => {
//     landingSection.classList.remove('remove-section')
//     stopwatchSection.classList.remove('add-section')
//     countdownSection.classList.remove('add-section')
//   })
// });

// // Enable and Disable Buttons
// const disableButton = (button) => {
//   button.disabled = true;
//   button.classList.add('disable-control-button')
// }, enableButton = (button) => {
//   button.disabled = false;
//   button.classList.remove('disable-control-button')
// };
// disableButton(stopwatchLap)
// disableButton(stopStopwatch)
// disableButton(resetStopwatch)
// disableButton(startCountdown)
// disableButton(countdownLap)
// disableButton(stopCountdown)
// disableButton(resetCountdown)

// //  STOP WATCH SECTION
// let stopwatchHr = 0,
// stopwatchMin = 0,
// stopwatchSec = 0,
// stopwatchMill = 0,
// stopwatchRuntime;

  
// const stopwatchTimeLoop = () => {
//   if (stopwatchMin === 59 && stopwatchSec === 59 && stopwatchMill === 100) {
//     stopwatchMin = 0
//     stopwatchMin -= 1
//     stopwatchHr += 1
//   }
//   if (stopwatchSec === 59 && stopwatchMill === 100) {
//     stopwatchSec = 0;
//     stopwatchSec -= 1;
//     stopwatchMin += 1;
//   }
//   if (stopwatchMill === 100) {
//     stopwatchMill = 0;
//     stopwatchSec += 1
//   }
// },

// buildIntegration = (timeCount, display, num) => {
//   if (timeCount < 10) {
//     display.innerHTML = `0${timeCount}`
//   } else if (timeCount >= 10) {
//     display.innerHTML = timeCount
//   } else if (timeCount === num && display.classList.includes('display-sw-hr') === false) {
//     display.innerHTML = `00`
//   }
// },

// integrate = () => {
//   buildIntegration(stopwatchHr, displayStopwatchHr);
//   buildIntegration(stopwatchMin, displayStopwatchMin, 60);
//   buildIntegration(stopwatchSec, displayStopwatchSec, 60);
//   buildIntegration(stopwatchMill, displayStopwatchMill, 100);
// };

// integrate()

// startStopwatch.addEventListener('click', () => {
//   stopwatchRuntime = setInterval(() => {
//     stopwatchMill +=1;
//     stopwatchTimeLoop();
//     integrate()
//   }, 10)
//   disableButton(startStopwatch)
//   enableButton(stopwatchLap)
//   enableButton(stopStopwatch)
//   disableButton(resetStopwatch)
// })

// stopStopwatch.addEventListener('click', function(){
//   clearInterval(stopwatchRuntime);
//   disableButton(stopStopwatch)
//   enableButton(startStopwatch)
//   enableButton(resetStopwatch)
// })

// let eachLap = 0;
// stopwatchLap.addEventListener('click', function(){
//   eachLap += 1
//   document.querySelector('.lap-time').insertAdjacentHTML('beforeend', `
//     <div>
//       <h4 class="per-lap">Lap ${eachLap}:</h4>
//       <h4 class="per-lap">${displayStopwatchHr.innerText}:</h4>
//       <h4 class="per-lap">${displayStopwatchMin.innerText}:</h4>
//       <h4 class="per-lap">${displayStopwatchSec.innerText}:</h4>
//       <h4 class="per-lap">${displayStopwatchMill.innerText}</h4>
//     </div>
//   `);
//   if (eachLap <= 3){
//     document.querySelectorAll('.per-lap').forEach((lap) => {
//       lap.style.color = 'green'
//     })
//   }
// });

// resetStopwatch.addEventListener('click', function(){
//   stopwatchHr = 0;
//   stopwatchMin = 0;
//   stopwatchSec = 0;
//   stopwatchMill = 0;
//   eachLap = 0;
//   integrate()
//   disableButton(stopwatchLap)
//   disableButton(resetStopwatch)
//   document.querySelector('.lap-time').remove();
//   this.parentElement.insertAdjacentHTML('afterend', `<section class="lap-time"></section>`)
// });

// // COUNT DOWN
// let countdownHr,
// countdownMin,
// countdownSec,
// countdownMill = 0,
// countdownInterval;

// const assignTimer = () => {
//     countdownHr = Number(enterCountdownHr.value);
//     countdownMin = Number(enterCountdownMin.value);
//     countdownSec = Number(enterCountdownSec.value);
//   },

//   countdownLoop = () => {
//     if(countdownMin === 0){
//       countdownMin = 60;
//     }
//     if(countdownSec === 0){
//       countdownSec = 60;
//     }
//     if(countdownMill === 0){
//       countdownMill = 100;
//     }
//   },

//   buildCountTimer = (countdown, bigNum, display) => {
//     if(countdown === bigNum){
//       display.innerHTML = '00'
//     } else if (countdown < 10) {
//       display.innerHTML = `0${countdown}`
//     } else {
//       display.innerHTML = countdown;
//     }
//   },

//   displayCountdownTimer = () => {
//     buildCountTimer(countdownHr, 1000, displayCountdownHr)
//     buildCountTimer(countdownMin, 60, displayCountdownMin)
//     buildCountTimer(countdownSec, 60, displayCountdownSec)
//     buildCountTimer(countdownMill, 100, displayCountdownMill)
//   },

//   timeDivider = () => {
//     timeDimacation.forEach((section) => {
//       section.classList.add('isactive')
//     })
//   },

//   enableSetCountdown = () => {
//     setCountdown.classList.remove('disabled')
//     setCountdown.children[1].disabled = false
//     setCountdown.children[2].disabled = false
//     setCountdown.children[3].disabled = false
//     enableButton(setCountdown.children[4])
//   };

// setCountdown.addEventListener('submit', function(e){
//   e.preventDefault()
//   timeDivider();
//   assignTimer()
//   countdownLoop();
//   displayCountdownTimer()
//   redAlert.classList.remove('add-alert');
//   if (countdownHr > 0 || countdownMin < 60 || countdownSec < 60){
//     document.querySelector('.time-up').classList.remove('isactive');
//     document.querySelector
//     this.classList.add('disabled')
//     this.children[1].disabled =true;
//     this.children[2].disabled =true;
//     this.children[3].disabled =true;
//     disableButton(this.children[4])
//     enableButton(resetCountdown)
//     enableButton(startCountdown)
//   }
// });

// startCountdown.addEventListener('click', function(){
//   countdownInterval = setInterval(() => {
//     if (countdownHr > 0 || countdownMin < 60 || countdownSec < 60){
//       countdownMill -= 1
//       countdownLoop();
//       displayCountdownTimer()
//       if(countdownMill === 100){
//         countdownSec -= 1;
//       }
//       if(countdownSec === 59 && countdownMill === 100){
//         countdownMin -= 1;
//       }
//       if(countdownMin === 59 && countdownSec === 59 && countdownMill === 100){
//         countdownHr -= 1;
//       }
//     } else{
//       countdownMill = 0;
//       displayCountdownMill.innerHTML = '00';
//       clearInterval(countdownInterval);
//       disableButton(stopCountdown)
//       enableSetCountdown()
//       document.querySelector('.time-up').classList.add('isactive');
//     }
//     if (countdownHr === 0 && countdownMin === 60 && countdownSec <= 10 && countdownSec >= 1 && countdownMill === 100){
//       redAlert.classList.add('add-alert');
//       redAlert.insertAdjacentHTML('beforeend', `<audio src="sounds/beep2.mp3" autoplay></audio>`)
//     }
//     if (countdownHr === 0 && countdownMin === 60 && countdownSec <= 10 && countdownMill === 65){
//       redAlert.classList.remove('add-alert');
//       redAlert.children[0].remove()
//     }
//   }, 10)
//   disableButton(startCountdown)
//   disableButton(resetCountdown)
//   enableButton(stopCountdown)
// })

// stopCountdown.addEventListener('click', () => {
//   clearInterval(countdownInterval);
//   disableButton(stopCountdown)
//   enableButton(startCountdown)
//   enableButton(resetCountdown)
// })

// resetCountdown.addEventListener('click', () => {
//   countdownHr = 0
//   countdownMin = 0
//   countdownSec = 0
//   countdownMill = 0
//   displayCountdownTimer()
//   enableSetCountdown()
//   disableButton(startCountdown)
//   disableButton(resetCountdown)
//   redAlert.classList.remove('add-alert');
// })

