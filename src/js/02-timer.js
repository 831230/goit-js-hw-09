import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

const input = document.querySelector('#datetime-picker');
const 

const dateNow = new Date();
console.log(dateNow);

flatpickr(input, { options });

let selectedDates = [];
input.addEventListener("input", function () { 
  selectedDates.push(input.value);
  console.log(selectedDates)
})
