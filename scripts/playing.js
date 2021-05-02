$(document).ready(() => {

    const playing1 = $('.lancer1');
    const playing2 = $('.lancer2');

    const playing = $('.lancer');

    const stock1 = $('.encaisser1');
    const stock2 = $('.encaisser2');

    const stock = $('.encaisser');

  //  var score1 = 0;
   // var score2 = 0;
    var diceValue;

    //var player1= name1.value.toUpperCase();
    //var player2= name2.value.toUpperCase();

 //   var cagnotte1 = 0;
 //   var cagnotte2 = 0;

    var cagnotte = 0;

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
       currentObjectPlayer.cagnotte = 0;
       cagnotte=0;
       reinitialiserDe();
    }

/*
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
          } else {
              realPlay();
          }
        }
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

    playing.click(function() {
        let encaisser = currentObjectPlayer.encaisser;
        let lancer = currentObjectPlayer.lancer;
        let lancerOpposite = currentOpposite.lancer;
        let oppositePlayer = currentOpposite.name;
        //let cagnotte = currentObjectPlayer.cagnotte;
        let score = currentObjectPlayer.score;
        let background = currentObjectPlayer.background;
        let oppositeBackground = currentOpposite.background;
        let colorFont = currentObjectPlayer.colorFont;
        let oppositeColorFont = currentOpposite.colorFont;
        let location = currentObjectPlayer.location;
        let oppositeLocation = currentOpposite.location;
        $(encaisser).css('display', 'block')
        reinitialiserDe();
        $('.info-game').html('<span>Montant de la cagnotte : </span><span class="cagnotte">0 point</span>').css('background-color', background).css('color', colorFont);
        var jet = play();
        console.log(jet);
        cagnotte = cagnotte + jet
        switch (jet) {
            case 1 :
                cagnotte = 0;
                console.log ('perdu : ' + cagnotte);
                $(lancer).css('display', 'none');
                $(encaisser).css('display', 'none');
                $(lancerOpposite).css('display', 'block');
                document.location.href=oppositeLocation;
                $('.name-player').text(oppositePlayer)
                $('.info-game').text('Vous avez perdu, à "'+oppositePlayer+'" de jouer');
                $('.dice').css('background-color', oppositeBackground)
                $('.current-player').css('color', oppositeColorFont);
                
                switchPlayers();
                break;
            case 2 :
                console.log ('gagné ! cagnotte = '+ cagnotte)
                break;
            case 3 :
                console.log ('gagné ! cagnotte = ' + cagnotte);
                break;
            case 4 :
                console.log ('gagné ! cagnotte = ' + cagnotte);
                break;
            case 5 :
                console.log ('gagné ! cagnotte = ' + cagnotte);
                break;
            case 6 :
                console.log ('gagné ! cagnotte = ' + cagnotte);
                break;
        }
        if (cagnotte === 1) {
            $('.cagnotte').text(cagnotte + ' point');
        } else {
            $('.cagnotte').text(cagnotte + ' points');
        }
    })

    stock.click(function() {
        score = currentObjectPlayer.score;
        //cagnotte = currentObjectPlayer.cagnotte;
        lancer =currentObjectPlayer.lancer;
        encaisser =currentObjectPlayer.encaisser;
        oppositeLancer = currentOpposite.lancer;
        jauge = currentObjectPlayer.jauge;
        player = currentObjectPlayer.name;
        oppositeLocation = currentOpposite.location;
        oppositePlayer = currentOpposite.name;
        oppositeBackground = currentOpposite.background;
        oppositeColorFont = currentOpposite.colorFont;
        spanScore = currentObjectPlayer.spanScore;

        console.log('votre score précédent : ' + score)
        score = score + cagnotte;
        currentObjectPlayer.score = score;
        $(lancer).css('display', 'none');
        $(encaisser).css('display', 'none');
        $(oppositeLancer).css('display', 'block');
        console.log('stockage de la cagnotte, score total : ' + score);
        $(spanScore).text(score);
        $('.info-game').text(player + ' vient d\'encaisser '+cagnotte+' points.')


        $(jauge).css('width', score+'%').text(score +'%');
        document.location.href=oppositeLocation;
        $('.name-player').text(oppositePlayer)
        $('.dice').css('background-color', oppositeBackground)
        $('.current-player').css('color', oppositeColorFont);
        switchPlayers();
        reinitialiserAffichage();
    })



  /*  playing1.click(function() {
        let encaisser = currentObjectPlayer.encaisser;
        let lancer = currentObjectPlayer.lancer;
        let lancerOpposite = currentOpposite.lancer;
        let oppositePlayer = currentOpposite.name;
        let cagnotte = currentObjectPlayer.cagnotte;
        let score = currentObjectPlayer.score;
        $(encaisser).css('display', 'block')
        reinitialiserDe();
        $('.info-game').html('<span>Montant de la cagnotte : </span><span class="cagnotte">0 point</span>').css('background-color', 'orange').css('color', 'black');
        var jet = play();
        console.log(jet);
        cagnotte1 = cagnotte1 + jet
        switch (jet) {
            case 1 :
                console.log ('perdu : ' + (cagnotte-1));
                $(lancer).css('display', 'none');
                $(encaisser).css('display', 'none');
                $(lancerOpposite).css('display', 'block');
                document.location.href="#cardPlayer1";
                $('.name-player').text(oppositePlayer)
                $('.info-game').text('Vous avez perdu, à "'+oppositePlayer+'" de jouer');
                $('.dice').css('background-color', 'black')
                $('.current-player').css('color', 'white');
                switchPlayers();

                break;
            case 2 :
                console.log ('gagné ! cagnotte1 = '+ cagnotte)
                break;
            case 3 :
               
                console.log ('gagné ! cagnotte1 = ' + cagnotte);
                break;
            case 4 :
                
                console.log ('gagné ! cagnotte1 = ' + cagnotte);
                break;
            case 5 :
               
                console.log ('gagné ! cagnotte1 = ' + cagnotte);
                break;
            case 6 :
               
                console.log ('gagné ! cagnotte1 = ' + cagnotte);
                break;
        }
        if (cagnotte === 1) {
            $('.cagnotte').text(cagnotte + ' point');
        } else {
            $('.cagnotte').text(cagnotte + ' points');
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

    */
/*
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
*/
})

