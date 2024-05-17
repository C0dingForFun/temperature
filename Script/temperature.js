let celcius = document.querySelector('#celcius');
let answer = document.querySelector('#answer');
let calc = document.querySelector('#calc');

calc.addEventListener('click', ()=>{
    answer.innerText = parseFloat(eval(`(${celcius.value} * 9/5) + 32`)).toFixed(2);
})