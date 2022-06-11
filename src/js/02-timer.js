import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

// const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
startBtn.setAttribute('disabled', true);

const timerDays = document.querySelector('span[data-days]');
const timerHours = document.querySelector('span[data-hours]');
const timerMinutes = document.querySelector('span[data-minutes]');
const timerSecond = document.querySelector('span[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDatesArr) {
    
    const timeNowTemp = new Date().getTime();
    const selectedDate = selectedDatesArr[0].getTime();
    
    if (selectedDate <= timeNowTemp) {
      window.alert('Please choose a date in the future');
    } else { 
      startBtn.removeAttribute('disabled');
      startBtn.addEventListener("click", function () {
      let timerDuration = '';
      function calculateTimerDuration(timeNow, selectedDate) {
        timerDuration = selectedDate - timeNow;
        return timerDuration;
        };
        let timerId = null;
        timerId = setInterval(() => {
          const timeNow = new Date().getTime();
          console.log('hello');
          console.log(timeNow);
          calculateTimerDuration(timeNow, selectedDate);
          console.log(timerDuration);

          function convertMs(timerDuration) {
            // Number of milliseconds per unit of time
            const second = 1000;
            const minute = second * 60;
            const hour = minute * 60;
            const day = hour * 24;

            // Remaining days
            const days = Math.floor(timerDuration / day);
            // Remaining hours
            const hours = Math.floor((timerDuration % day) / hour);
            // Remaining minutes
            const minutes = Math.floor(
              ((timerDuration % day) % hour) / minute
            );
            // Remaining seconds
            const seconds = Math.floor(
              (((timerDuration % day) % hour) % minute) / second
            );

            return (objectTimeDuration = { days, hours, minutes, seconds });
            
          }
          console.log(convertMs(timerDuration));

          function addLeadingZero(value) {
            const string = String(value);
            return string.padStart(2, '0');  
          };

          timerSecond.innerHTML = addLeadingZero(objectTimeDuration.seconds);
          timerMinutes.innerHTML = addLeadingZero(objectTimeDuration.minutes);
          timerHours.innerHTML = addLeadingZero(objectTimeDuration.hours);
          timerDays.innerHTML = addLeadingZero(objectTimeDuration.days);
          
          if (timerDuration <= 0) { 
            clearInterval(timerId);
          };
        }, 1000);
      });
    };
  },
};

flatpickr('#datetime-picker', options);


// ============================================================================================
// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     startBtn.addEventListener('click', function () {
//       setInterval(() => {
        
        
//           console.log(selectedDates[0]);
//           const selectedDatesNumber = selectedDates[0].getTime();
//           console.log(selectedDatesNumber);

//           let timerDuration = '';
//           function calculateTimerDuration(dateNowNumber, selectedDatesNumber) {
//             timerDuration = selectedDatesNumber - dateNowNumber;
//             return timerDuration;
//           }
//           const dateNow = new Date();
//           const dateNowNumber = dateNow.getTime();
//           console.log(dateNowNumber);

//           if (dateNowNumber >= selectedDatesNumber) {
//             window.alert('Please choose a date in the future');
//           } else {
//             startBtn.removeAttribute('disabled');
//             calculateTimerDuration(dateNowNumber, selectedDatesNumber);
//             console.log(timerDuration);

//             function convertMs(timerDuration) {
//               // Number of milliseconds per unit of time
//               const second = 1000;
//               const minute = second * 60;
//               const hour = minute * 60;
//               const day = hour * 24;

//               // Remaining days
//               const days = Math.floor(timerDuration / day);
//               // Remaining hours
//               const hours = Math.floor((timerDuration % day) / hour);
//               // Remaining minutes
//               const minutes = Math.floor(
//                 ((timerDuration % day) % hour) / minute
//               );
//               // Remaining seconds
//               const seconds = Math.floor(
//                 (((timerDuration % day) % hour) % minute) / second
//               );

//               return (objectTimeDuration = { days, hours, minutes, seconds });
//             }

            

//             // let aktualTimerDuration = "";
//             // let timerId = null;
//             // startBtn.addEventListener("click", () => {
//             //   timerId = setInterval(() => {
//             //     aktualTimerDuration = timerDuration - 1000;

//             //   }, 1000);console.log(aktualTimerDuration);

//             // });

//             console.log(convertMs(timerDuration)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
//             console.log(objectTimeDuration.days);
//             console.log(objectTimeDuration.hours);
//             console.log(objectTimeDuration.minutes);
//             console.log(objectTimeDuration.seconds);
//             timerSecond.innerHTML = objectTimeDuration.seconds;
//           }
        
//       },1000);
//     });
//   },
// };
// ============================================================================================




// const startBtn = document.querySelector('button[data-start]');
// startBtn.setAttribute('disabled', true);

// const dateNow = new Date();
// const dateNowNumber = dateNow.getTime();
// console.log(dateNowNumber);



// const selectedDatesArr = [];

// function buildSelectedArr() {
//   const selectedDate = new Date(input.value);
//   const selectedDateNumber = selectedDate.getTime();
//   if (dateNowNumber >= selectedDateNumber) {
//     window.alert('Please choose a date in the future');
//   } else {
//     selectedDatesArr.push(selectedDate.getTime());
//     startBtn.removeAttribute('disabled');
//   };
  
//   // console.log(selectedDatesArr);
//   console.log(selectedDateNumber);
// };
// console.log(selectedDatesArr);
// input.addEventListener("input", buildSelectedArr);



// const resultArr = [];
// function add(selectedDate) {
//   selectedDate = input.value;
//   resultArr.push(selectedDate);
//   console.log(resultArr);
// };

// input.addEventListener('input', add);




// const resultArr = [];
// function add(selectedDate) {
//   selectedDate = input.value;
//   resultArr.push(selectedDate); 
// };
// console.log(resultArr);
// input.addEventListener('input', add(input.value));



// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

// console.log(convertMs(selectedDatesArr[0])); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
