import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

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
      Notiflix.Notify.failure('Please choose a date in the future');
      // window.alert('Please choose a date in the future');
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
          calculateTimerDuration(timeNow, selectedDate);
          
          let objectTimeDuration = {};
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

            return objectTimeDuration = { days, hours, minutes, seconds };
            
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
          
          if (timerDuration < 1000) { 
            clearInterval(timerId);
          };
        }, 1000);
      });
    };
  },
};

flatpickr('#datetime-picker', options);