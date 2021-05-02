$(document).ready(() => {
    const playing1 = $('.lancer1');
    const playing2 = $('.lancer2');

    const stock1 = $('.encaisser1');
    const stock2 = $('.encaisser2');

    var score1 = 0;
    var score2 = 0;

    var cagnotte1 = 0;
    var cagnotte2 = 0;

    function randomBetween(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function play(){
        let valeurs = [];
        for (let i = 0 ; i < 10 ; i++){
            valeurs.push(randomBetween(1, 6));
        }
        console.log(valeurs);
        console.log(valeurs[9]+' points à ce lancer')
        return (valeurs[9]);
    }


    playing1.click(function() {
        var jet = play();
        console.log(jet);
        if (jet === 1) {
            cagnotte1 = 0;
            console.log ('perdu : ' + cagnotte1);
            $('.lancer1').css('display', 'none');
            $('.encaisser1').css('display', 'none');
            $('.lancer2').css('display', 'block');
            $('.encaisser2').css('display', 'block');
        } else {
            cagnotte1 = cagnotte1 + jet;
            console.log ('gagné ! cagnotte1 = ' + cagnotte1);
        }
    })

    playing2.click(function() {
        var jet = play();
        console.log(jet);
        if (jet === 1) {
            cagnotte2 = 0;
            console.log ('perdu ' + cagnotte2);
            $('.lancer2').css('display', 'none');
            $('.lancer1').css('display', 'block');
            $('.encaisser2').css('display', 'none');
            $('.encaisser1').css('display', 'block');
        } else {
            cagnotte2 = cagnotte2 + jet;
            console.log ('gagné ! cagnotte2 = ' + cagnotte2);
        }
    })

    stock1.click(function() {
        console.log('votre score précédent : ' + score1)
        score1 = score1 + cagnotte1;
        $('.lancer1').css('display', 'none');
        $('.encaisser1').css('display', 'none');
        $('.lancer2').css('display', 'block');
        $('.encaisser2').css('display', 'block');

        console.log('stockage de la cagnotte, score total : ' + score1);
        cagnotte1 = 0;
    })

    stock2.click(function() {
        console.log('votre score précédent : ' + score2)
        score2 = score2 + cagnotte2;
        $('.lancer1').css('display', 'block');
        $('.encaisser1').css('display', 'block');
        $('.lancer2').css('display', 'none');
        $('.encaisser2').css('display', 'none');
        console.log('stockage de la cagnotte, score total = '+ score2);
        cagnotte2 = 0;
        $('.score2').text(score2);
    })

})

