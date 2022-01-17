/*
L'utente indica TRAMITE DOM un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, 
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
*/

// PRENDO LA SCELTA DELL UTENTE

const userChoice = document.getElementById('choice');
const buttonGen = document.getElementById('buttonGen');


buttonGen.addEventListener('click', function () {
    const userChoiceValue = userChoice.value;
    console.log(userChoiceValue);
})