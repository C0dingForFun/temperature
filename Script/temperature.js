let celsius = document.querySelector('#celsius');
let answer = document.querySelector('#answer');
let calc = document.querySelector('.calc');

calc.addEventListener('click', ()=>{
    answer.innerText = parseFloat(eval(`(${celsius.value} * 9/5) + 32`)).toFixed(2) + "°F";
})

