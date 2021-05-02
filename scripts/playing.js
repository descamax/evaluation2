$(document).ready(() => {

    const playing1 = $('.lancer1');
    const playing2 = $('.lancer2');

    const stock1 = $('.encaisser1');
    const stock2 = $('.encaisser2');

    var score1 = 0;
    var score2 = 0;
    var diceValue;

    var player1= name1.value.toUpperCase();
    var player2= name2.value.toUpperCase();


    var cagnotte1 = 0;
    var cagnotte2 = 0;

    function randomBetween(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function reinitialiserDe(){
        $('.number2, .number3, .number4, .number5, .number6').css('background-color', 'white').css('font-size', '1em');
        $('.number1').css('background-color', 'red').css('border', 'none').css('font-size', '1em');
        $('.numberText').css('font-size', '1em');
    }

    function reinitialiserAffichage(){
        $('.cagnotte').text('0 point');
        cagnotte1 = 0;
        cagnotte2 = 0;
       reinitialiserDe();
    }

/*
    function fakePlay() {
        var i =0;
        let delay=50;
        setTimeout(function() {fakePlay2(i)}, delay);
        function fakePlay2(i)
        {
          reinitialiserDe();
          i++;
          let valeur = randomBetween(1, 6);
              switch (valeur) {
                case 1 :
                    $('.number1').css('font-size', '1.5em').css('border', 'solid yellow 2px');
                    break;
                case 2 :
                    $('.number2').css('background-color', 'yellow').css('font-size', '1.5em');
                    break;
                case 3 :
                    $('.number3').css('background-color', 'yellow').css('font-size', '1.5em');
                    break;
                case 4 :
                    $('.number4').css('background-color', 'yellow').css('font-size', '1.5em');
                    break;
                case 5 :
                    $('.number5').css('background-color', 'yellow').css('font-size', '1.5em');
                    break;
                case 6 :
                    $('.number6').css('background-color', 'yellow').css('font-size', '1.5em');
                    break;
              }
          delay = delay*1.2;
          if (i<10){
            setTimeout(function() {fakePlay2(i)}, delay);
          }
        }
      }
    
      function realPlay() {
        reinitialiserDe();
        let valeur = randomBetween(1, 6);
              switch (valeur) {
                case 1 :
                    $('.number1').css('font-size', '1.5em').css('border', 'solid yellow 2px');
                    break;
                case 2 :
                    $('.number2').css('background-color', 'yellow').css('font-size', '1.5em');
                    break;
                case 3 :
                    $('.number3').css('background-color', 'yellow').css('font-size', '1.5em');
                    break;
                case 4 :
                    $('.number4').css('background-color', 'yellow').css('font-size', '1.5em');
                    break;
                case 5 :
                    $('.number5').css('background-color', 'yellow').css('font-size', '1.5em');
                    break;
                case 6 :
                    $('.number6').css('background-color', 'yellow').css('font-size', '1.5em');
                    break;
              }
        diceValue = valeur;
      }

*/
   function play(){
        valeur = randomBetween(1, 6);
        console.log(valeur+' points à ce lancer')

        switch (valeur) {
            case 1 :
                console.log ('ah bon');
                $('.number1').css('border', 'solid yellow 2px');
                $('.numberText1').css('font-size', '1.5em');
                break;
            case 2 :
                $('.number2').css('background-color', 'yellow');
                $('.numberText2').css('font-size', '1.5em');
                break;
            case 3 :
                $('.number3').css('background-color', 'yellow');
                $('.numberText3').css('font-size', '1.5em');
                break;
            case 4 :
                $('.number4').css('background-color', 'yellow');
                $('.numberText4').css('font-size', '1.5em');
                break;
            case 5 :
                $('.number5').css('background-color', 'yellow');
                $('.numberText5').css('font-size', '1.5em');
                break;
            case 6 :
                $('.number6').css('background-color', 'yellow');
                $('.numberText6').css('font-size', '1.5em');
                break;
        }

        return (valeur);
    }

    
    playing1.click(function() {
        $('.encaisser1').css('display', 'block')
        reinitialiserDe();
        $('.info-game').html('<span>Montant de la cagnotte : </span><span class="cagnotte">0 point</span>').css('background-color', 'orange').css('color', 'black');
        var jet = play();
        console.log(jet);
        cagnotte1 = cagnotte1 + jet
        switch (jet) {
            case 1 :
                console.log ('perdu : ' + (cagnotte1-1));
                $('.lancer1').css('display', 'none');
                $('.encaisser1').css('display', 'none');
                $('.lancer2').css('display', 'block');
                document.location.href="#cardPlayer1";
                $('.name-player').text(player2)
                $('.info-game').text('Vous avez perdu, à "'+player2+'" de jouer');
                $('.dice').css('background-color', 'black')
                $('.current-player').css('color', 'white');

                break;
            case 2 :
                console.log ('gagné ! cagnotte1 = '+ cagnotte1)
                break;
            case 3 :
               
                console.log ('gagné ! cagnotte1 = ' + cagnotte1);
                break;
            case 4 :
                
                console.log ('gagné ! cagnotte1 = ' + cagnotte1);
                break;
            case 5 :
               
                console.log ('gagné ! cagnotte1 = ' + cagnotte1);
                break;
            case 6 :
               
                console.log ('gagné ! cagnotte1 = ' + cagnotte1);
                break;
        }
        if (cagnotte1 === 1) {
            $('.cagnotte').text(cagnotte1 + ' point');
        } else {
            $('.cagnotte').text(cagnotte1 + ' points');
        }
    })

    playing2.click(function() {
        $('.encaisser2').css('display', 'block')
        reinitialiserDe();
        $('.info-game').html('<span>Montant de la cagnotte : </span><span class="cagnotte">0 point</span>').css('background-color', 'black').css('color', 'white');
        var jet = play();
        console.log(jet);
        cagnotte2 = cagnotte2 + jet
        switch (jet) {
            case 1 :
                console.log ('perdu : ' + (cagnotte2-1));
                $('.lancer2').css('display', 'none');
                $('.encaisser2').css('display', 'none');
                $('.lancer1').css('display', 'block');
                document.location.href="#cardPlayer1";
                $('.name-player').text(player1)
                $('.info-game').text('Vous avez perdu, à "'+player1+'" de jouer');
                $('.dice').css('background-color', 'orange');
                $('.current-player').css('color', 'black');

                break;
            case 2 :
                console.log ('gagné ! cagnotte1 = ' + cagnotte2);
                break;
            case 3 :
                console.log ('gagné ! cagnotte1 = ' + cagnotte2);
                break;
            case 4 :
                console.log ('gagné ! cagnotte1 = ' + cagnotte2);
                break;
            case 5 :
                console.log ('gagné ! cagnotte1 = ' + cagnotte2);
                break;
            case 6 :
                console.log ('gagné ! cagnotte1 = ' + cagnotte2);
                break;
        }
        if (cagnotte2 === 1) {
            $('.cagnotte').text(cagnotte2 + ' point');
        } else {
            $('.cagnotte').text(cagnotte2 + ' points');
        }
    })

    stock1.click(function() {
        console.log('votre score précédent : ' + score1)
        score1 = score1 + cagnotte1;
        $('.lancer1').css('display', 'none');
        $('.encaisser1').css('display', 'none');
        $('.lancer2').css('display', 'block');
        console.log('stockage de la cagnotte, score total : ' + score1);
        $('.score1').text(score1);
        $('.info-game').text(player1 + ' vient d\'encaisser '+cagnotte1+' points.')

        reinitialiserAffichage();
        $('.jauge1').css('width', score1+'%').text(score1 +'%');
        document.location.href="#cardPlayer2";
        $('.name-player').text(player2)
        $('.dice').css('background-color', 'black')
        $('.current-player').css('color', 'white');



    })

    stock2.click(function() {
        console.log('votre score précédent : ' + score2)
        score2 = score2 + cagnotte2;
        $('.lancer1').css('display', 'block');
        $('.lancer2').css('display', 'none');
        $('.encaisser2').css('display', 'none');
        console.log('stockage de la cagnotte, score total = '+ score2);
        $('.score2').text(score2);
        $('.info-game').text(player2 + ' vient d\'encaisser '+cagnotte2+' points.')

        reinitialiserAffichage();
        $('.jauge2').css('width', score2+'%').text(score2 +'%');
        document.location.href="#cardPlayer1";
        $('.name-player').text(player1);
        $('.dice').css('background-color', 'orange');
        $('.current-player').css('color', 'black');




    })

})

