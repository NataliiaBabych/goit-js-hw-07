
const inputSizeInput = document.querySelector("#font-size-control");
const inputSizeSpan = document.querySelector("#text");


const checkSize = function ()
{ inputSizeSpan.style.fontSize = `${inputSizeInput.value}px`; };

inputSizeInput.addEventListener("input", () => checkSize());