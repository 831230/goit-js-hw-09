import Notiflix from 'notiflix';

const firstDelayInput = document.querySelector('input[name="delay"]');
const delayStepInput = document.querySelector('input[name="step"]');
const amountInput = document.querySelector('input[name="amount"]');
const submitBtn = document.querySelector('button[type="submit"]');

let timer = 0;

function createPromise(position, timer) {
  return new Promise((resolve, reject) => { 
    setTimeout(() => { 
      const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
        // Fulfill
      resolve({ position, timer });
      } else {
        // Reject
      reject({ position, timer });
      }
    }, timer);
  });
};

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  
  let firstDelay = Number(firstDelayInput.value); 
  let delayStep = Number(delayStepInput.value);
  let amount = Number(amountInput.value);
  timer = firstDelay; 
    for (let position = 1; position <= amount; position++) { 
      
      createPromise(position, timer)
        .then(({ position, timer }) => {
          console.log(`✅ Fulfilled promise ${position} in ${timer}ms`);
          Notiflix.Notify.success(
            `Fulfilled promise ${position} in ${timer}ms`
          );
        })
        .catch(({ position, timer }) => {
          console.log(`❌ Rejected promise ${position} in ${timer}ms`);
          Notiflix.Notify.failure(
            `Rejected promise ${position} in ${timer}ms`
          );
        });
      timer += delayStep;
    };
});
