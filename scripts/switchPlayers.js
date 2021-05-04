function ObjectPlayer (name, number, numberText, encaisser, lancer, cagnotte, score, background, colorFont, location, jauge, spanScore, important, infoGame) {
    this.name = name;
    this.number = number;
    this.numberText = numberText;
    this.encaisser = encaisser;
    this.lancer = lancer;
    this.cagnotte = cagnotte;
    this.score = score;
    this.background = background;
    this.colorFont = colorFont;
    this.location = location;
    this.jauge = jauge;
    this.spanScore = spanScore;
    this.important = important;
    this.infoGame = infoGame;
}

var player1= name1.value.toUpperCase();
var player2= name2.value.toUpperCase();
var score1 = 0;
var score2 = 0;
var cagnotte1 = 0;
var cagnotte2 = 0;


var objectPlayer1 = new ObjectPlayer (player1, '.number1', '.numberText1', '.encaisser1', '.lancer1', cagnotte1, score1, 'orange', 'black', "#cardPlayer1", '.jauge1', '.scoreP1', '.player1', '.info-game1')
var objectPlayer2 = new ObjectPlayer (player2, '.number2', '.numberText2', '.encaisser2', '.lancer2', cagnotte2, score2, 'black', 'white', "#cardPlayer2", '.jauge2', '.scoreP2', '.player2', '.info-game2')
var currentObjectPlayer = objectPlayer1;
var currentOpposite = objectPlayer2;

function switchPlayers() {

    if (currentObjectPlayer === objectPlayer1) {
        currentObjectPlayer = objectPlayer2;
        currentOpposite = objectPlayer1;
    } else {
        currentObjectPlayer = objectPlayer1;
        currentOpposite = objectPlayer2;
    }
}

