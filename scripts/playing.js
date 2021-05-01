const form2 = document.querySelector('form2');

function randomBetween(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function play(nb) {
    while(nb>6){
        nb=Math.round(nb/6);
    }
    console.log (nb);
}

let letSGo = $('.lancer');

count = 20;

while (count >0) {
    let nb = randomBetween(50000, 280000);
    play (nb);
    count = count-1;
}

form2.addEventListener('submit', (event) => {
    
        event.preventDefault();  
        console.log('jeu en cours');



})