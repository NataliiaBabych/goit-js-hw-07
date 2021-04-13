const inputEl = document.querySelector('#validation-input');

console.log(inputEl);

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    inputEl.textContent = event.currentTarget.value;

    if (inputEl.textContent.length === Number(inputEl.getAttribute('data-length'))) {
        inputEl.classList.add('valid') && inputEl.classList.remove('invalid');
    } else inputEl.classList.add('invalid') && inputEl.classList.remove('valid');
};

