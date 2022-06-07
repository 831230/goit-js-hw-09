import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDatesArr) {
    console.log(selectedDatesArr[0]);
  },
};

const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
startBtn.setAttribute('disabled', true);

const dateNow = new Date();
console.log(dateNow.getTime());

flatpickr(input, { options });

let selectedDatesArr = [];
input.addEventListener("input", function () { 
  const selectedDate = new Date(input.value);
  selectedDatesArr.push(input.value);
  console.log(selectedDatesArr);
  console.log(selectedDate.getTime());
})
