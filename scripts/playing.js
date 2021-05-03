$(document).ready(() => {

    const endGame = 6;

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

    function initialiserTout(){
        reinitialiserDe();
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
        let spanScore = currentObjectPlayer.spanScore;
        let oppositeSpanScore = currentOpposite.spanScore;
        let jauge = currentObjectPlayer.jauge;
        let oppositeJauge = currentOpposite.jauge;
        $(spanScore).text('0');
        $(oppositeSpanScore).text('0');
        $('.cagnotte').text(cagnotte + ' point');
        $(jauge).css('width', '0%').text('0%');
        $(oppositeJauge).css('width', '0%').text('0%');
        currentObjectPlayer.score=0;
        currentOpposite.score=0;

        // masquer lancer le dé
        $(lancer).css("display", "none");

        // masquer gameSpace
        $(".gameSpace").css("display", 'none');

        // afficher "voulez-vous rejouer ? : mêmes joueurs / changer les joueurs ?""
        $(".replaySame").css('display', 'block');
        //refaire une partie avec les mêmes paramètres
        $('.same').click(function(){
            $('.gameSpace').css("display", 'block');
            $(lancer).css('display', 'block');
            $('.replaySame').css('display', 'none');
        })
        //changer les paramètres de jeu / retour au formulaire
        $('.change').click(function(){
            //document.location.href="file:///C:/Users/volta/Documents/eval-studi/evaluation2/index.html";
            document.location.href="index.html";
        })

    }


    function testFin(nb){

        if (currentObjectPlayer.score>=nb) {
            alert(`la partie se termine sur la victoire de ${currentObjectPlayer.name} !\nLe score est de ${currentObjectPlayer.score} à ${currentOpposite.score}.`);
            initialiserTout();
        } else if (currentOpposite.score>=nb) {
            alert(`la partie se termine sur la victoire de ${currentOpposite.name} !\nLe score est de ${currentOpposite.score} à ${currentObjectPlayer.score}.`);
            initialiserTout();
        }
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
                
                console.log ('Vous avez fait 1 - vous perdez tout');
                $(lancer).css('display', 'none');
                $(encaisser).css('display', 'none');
                $(lancerOpposite).css('display', 'block');
                document.location.href=oppositeLocation;
                $('.name-player').text(oppositePlayer)
                $('.info-game').text('Vous avez gâché votre cagnotte de '+(cagnotte-1)+ ' points ! C\'est à "'+oppositePlayer+'" de jouer');
                $('.dice').css('background-color', oppositeBackground)
                $('.current-player').css('color', oppositeColorFont);
                cagnotte = 0;
                switchPlayers();
                testFin(endGame);
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
        let score = currentObjectPlayer.score;
        //cagnotte = currentObjectPlayer.cagnotte;
        let lancer =currentObjectPlayer.lancer;
        let encaisser =currentObjectPlayer.encaisser;
        let oppositeLancer = currentOpposite.lancer;
        let jauge = currentObjectPlayer.jauge;
        let player = currentObjectPlayer.name;
        let oppositeLocation = currentOpposite.location;
        let oppositePlayer = currentOpposite.name;
        let oppositeBackground = currentOpposite.background;
        let oppositeColorFont = currentOpposite.colorFont;
        let spanScore = currentObjectPlayer.spanScore;

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
        testFin(endGame);

    })
})

