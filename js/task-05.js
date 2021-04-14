const input = document.querySelector('#name-input');
const greeting = document.querySelector('#name-output');

console.log(greeting);

input.addEventListener('input', onInputChange); 

function onInputChange(event) {
    console.log(event.currentTarget.value);
    greeting.textContent = event.currentTarget.value;
    if (event.currentTarget.value === '') {
    greeting.textContent = 'незнакомец';
  }
};
