'use strict';

const playerOption = document.querySelector('.js-option')
const btn = document.querySelector('.js-btn');
const msg = document.querySelector('.js-msg');
const CPU = document.querySelector('.js-p');

//2 generar aleatorio
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
};


//3 convertir aleatorio en opción de la CPU
const getCPUOption = () => {
    const random = getRandomNumber(9);
    let selectedOption = '';
    if (random <= 3) {
        selectedOption  = 'Piedra';     
    } 
    else if (random >= 7) {
        selectedOption = 'Papel';
    } else {
        selectedOption = 'Tijera';
    };
    return selectedOption;
};

//1. coger el valor del select, opción de la jugadora
const getPlayerOption = () => {
    const valueSelect = playerOption.value;
    return valueSelect;
};


//función manejadora que se desencadena al hacer clic en Jugar. Toma la opción de la jugadora (getPlayerOption) y de la CPU (getCPUOption) y luego hace las comparaciones.
function handleClick(event) {
    event.preventDefault();
    const playerOption = getPlayerOption();
    const CPUOption = getCPUOption();
    
    CPU.innerHTML = CPUOption;

    if (playerOption === CPUOption) {
        msg.innerHTML = '¡Has empatado!';
        
    } else if (playerOption === 'Piedra' && CPUOption === 'Tijera') {
        msg.innerHTML = '¡Has ganado!';

    } else if (playerOption === 'Piedra' && CPUOption === 'Papel') {
        msg.innerHTML = '¡Has perdido!';

    } else if (playerOption === 'Tijera' && CPUOption === 'Piedra') {
        msg.innerHTML = '¡Has perdido!';

    } else if (playerOption === 'Tijera' && CPUOption === 'Papel') {
        msg.innerHTML = '¡Has ganado!';

    } else if (playerOption === 'Papel' && CPUOption === 'Tijera') {
        msg.innerHTML = '¡Has perdido!';

    } else if (playerOption === 'Papel' && CPUOption === 'Piedra') {
        msg.innerHTML = '¡Has ganado!';

    }
}

btn.addEventListener('click', handleClick);


