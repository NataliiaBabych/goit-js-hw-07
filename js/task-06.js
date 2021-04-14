const inputEl = document.querySelector('#validation-input');

console.log(inputEl);

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    inputEl.textContent = event.currentTarget.value;

    if (inputEl.textContent.length === Number(inputEl.getAttribute('data-length'))) {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
    }
    else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
} 
};
