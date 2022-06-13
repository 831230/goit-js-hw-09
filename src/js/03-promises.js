import Notiflix from 'notiflix';

const firstDelayInput = document.querySelector('input[name="delay"]');
const delayStepInput = document.querySelector('input[name="step"]');
const amountInput = document.querySelector('input[name="amount"]');
const submitBtn = document.querySelector('button[type="submit"]');

function createPromise(position, delayStep) {
  return new Promise((resolve, reject) => { 
    const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
      // Fulfill
    resolve(position);
    } else {
      // Reject
    reject(delayStep);
    }
  });
};

let firstDelay = "";
let delayStep = "";
let amount = "";

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  
  firstDelay = firstDelayInput.value; 
  delayStep = delayStepInput.value;
  amount = amountInput.value;

  setTimeout(() => { 
    
    for (let position = 0; position < amount; position++) { 
      
      createPromise(position, delayStep)
        .then(({ position, delayStep }) => {
          console.log(`✅ Fulfilled promise ${position} in ${delayStep}ms`);
        })
        .catch(({ position, delayStep }) => {
          console.log(`❌ Rejected promise ${position} in ${delayStep}ms`);
        });
    };
  }, firstDelay);
});



// submitBtn.addEventListener("click", function (event) {
//   event.preventDefault();
//   firstDelay = firstDelayInput.value; 
//   delayStep = delayStepInput.value; 
//   amount = amountInput.value;
//   for (let i = 0; i < amount; i++) { 
//     setTimeout(() => { 

//       function createPromise(i, delayStep) {
//         return new Promise((resolve, reject) => { 
//           const shouldResolve = Math.random() > 0.3;
//           if (shouldResolve) {
//             // Fulfill
//             resolve()   
//           } else {
//             // Reject
//             reject()
//           }
//         })

//       };
      
//       createPromise(i, delayStep)
//         .then(({ i, delayStep }) => {
//           console.log(`✅ Fulfilled promise ${i} in ${delayStep}ms`);
//         })
//         .catch(({ i, delayStep }) => {
//           console.log(`❌ Rejected promise ${i} in ${delayStep}ms`);
//         });

//     },firstDelay);
//   };

// });



