const playing = document.querySelector('.playingDiv');
const stopping = document.querySelector('.stoppingDiv')

function randomBetween(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function play(nb) {
    while(nb>6){
        nb=Math.round(nb/6);
    }
    console.log (nb);
}





playing.addEventListener('submit', (event) => {
    
        event.preventDefault(); 
        let count = 20;


        console.log('jeu en cours');
        while (count >0) {
            let nb = randomBetween(50000, 280000);
            play (nb);
            count = count-1;
        };



})

stopping.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('stockage des points');
})