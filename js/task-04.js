

const counter = {
    counterValue: 0,
    increment() {
        this.counterValue += 1;
    },
    decrement() {
        this.counterValue -= 1;
    },
};

const buttonDec = document.querySelector('[data-action="decrement"]');
const valueEl = document.querySelector('#value');
const buttonInc = document.querySelector('[data-action="increment"]');

buttonDec.addEventListener('click', function () {
    counter.decrement();
    valueEl.textContent = counter.counterValue;
});
buttonInc.addEventListener('click', function () {
    counter.increment();
    valueEl.textContent = counter.counterValue;
});