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
const grid = document.querySelector('.grid');



const dimensions = [100, 81, 49];
buttonGen.addEventListener('click', function () {
    const userChoiceValue = userChoice.value;
    console.log(userChoiceValue);
    switch (userChoiceValue) {
        case 'diff1':
            for (let i = 0; i < dimensions[0]; i++) {
                const cella = document.createElement('div');
                cella.className = 'cell';
                cella.classList.add('diff1');
                grid.appendChild(cella);
                console.log('1-100');
            };
            break;
        case 'diff2':
            for (let i = 0; i < dimensions[1]; i++) {
                const cella = document.createElement('div');
                cella.className = 'cell';
                cella.classList.add('diff2');
                grid.appendChild(cella);
                console.log('1-81');
            };
            break;
        case 'diff3':
            for (let i = 0; i < dimensions[2]; i++) {
                const cella = document.createElement('div');
                cella.className = 'cell';
                cella.classList.add('diff3');
                grid.appendChild(cella);
                console.log('1-81');
            };
            console.log('1-49');
            break;
        default:
            console.log(`Sorry, we are out of `);
    }

})

