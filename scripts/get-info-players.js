var error='';
var multipl=1;

const name1 = document.getElementById('name-joueur1');
const name2 = document.getElementById('name-joueur2');
const avatar1 = document.getElementById('avatar1');
const avatar2 = document.getElementById('avatar2');
const nbPoints = document.getElementById('nbPoints');    
var endGame = 5;

let form = document.querySelector('.formPlayers');



function Avatar (name, urlImage, description, color) {
    this.name = name;
    this.urlImage = urlImage;
    this.description = description;
    this.color = color;
}

var renard = new Avatar('renard', '<img src="images/renard.jpg" class="image-avatar">', 
    "Vous êtes assurément le plus rusé. Mais serez-vous assez prudent ?", 
    'orange' );
var kangourou = new Avatar('kangourou', '<img src="images/kangourou.jpg" class="image-avatar">', 
    "Vous êtes sautillant ! Rien ne vous fait peur... alors, foncez !", 
    'orange' );
var ecureuil = new Avatar('ecureuil', '<img src="images/ecureuil.jpg" class="image-avatar"', 
    "Vous avez un don pour faire des réserves... Votre adversaire peut trembler !", 
    'orange' );
var poule = new Avatar('poule', '<img src="images/poule.jpg" class="image-avatar">', 
    "Picorer peut être la solution pour vous remplir le ventre ! Petit à petit, l'oiseau fait son nid.", 
    'orange' );
var panthere = new Avatar('panthere', '<img src="images/panthere.jpg" class="image-avatar">', 
    "Vous avez un appétit dévorant ! Vous devriez remplir votre réserve par gros morceaux !", 
    'noir' );
var gorille = new Avatar('gorille', '<img src="images/gorille.jpg" class="image-avatar">', 
    "La force brute et un cerveau développé... Auriez-vous trouver le subtil mélange pour gagner ?", 
    'noir' );
var phacochere = new Avatar('phacochere', '<img src="images/phacochere.jpg" class="image-avatar">', 
    "Vous êtes un participant méconnu, mais qui saura prendre les décisions au bon moment !",
    'noir' );
var gnou = new Avatar('gnou', '<img src="images/gnou.jpg" class="image-avatar">', 
    "Brouter petit à petit est peut-être la meilleure solution... Prouvez-le !", 
    'noir' );

const listAvatarsObjects =[renard, kangourou, ecureuil, poule, panthere, gorille, phacochere, gnou];

function avatarToObject(value){
    var retour='';
    for (avatarObject of listAvatarsObjects){
       
        if (value === avatarObject.name) {
            retour = avatarObject;
        }
    }
    return retour;
}

function validAvatarObject(value, name){
    let search=false;
    for (listAvatarsObject of listAvatarsObjects){
        if (value === listAvatarsObject.name) {
            search=true;
        }
    }
    if (!search){
        return (name + ' : vous devez choisir votre avatar.\n');
    } else {
        return ('');
    }
}

function validNbPoints(value){
    //let valid = (value === 'g20' || value === 'g50' || value === 'g100' || value === 'g200')
    //if (!valid){
    //    return ('Vous devez choisir un nombre de points.\n');
    //} else {
        switch (value) {
            case 'g20' :
                multipl = 5;
                endGame = 20;
                break;
            case 'g50' :
                multipl = 2;
                endGame = 50;
                break;
            case 'g100' :
                multipl = 1;
                endGame = 100;
                break;
            case 'g200' :
                multipl = 0.5;
                endGame = 200;
                break;
            default :
            return ('Vous devez choisir un nombre de points.\n');
        }
        return ('');
    //}
}


function validName(value, name){
    if (value.length < 2) {
        return (name + ' : votre nom doit contenir plus de 2 caractères.\n');
    } else if (value.length > 10) {
        return (name + ' : votre nom de joueur doit contenir moins de 10 caractères.\n');
    }else {
        return ('');
    }
    
}
 


form.addEventListener('submit', (event) => {
    error='';
    for (var count=0; count<form.elements.length; count++) {
        switch (form.elements[count].name) {
            case 'name1':
                error += validName (form.elements[count].value, 'Joueur 1')
                break;
            case 'name2' :
                error += validName (form.elements[count].value, 'Joueur 2')
                break;
            case 'avatar1' :
                error += validAvatarObject(form.elements[count].value, 'Joueur 1')
                break;
            case 'avatar2' :
                error += validAvatarObject(form.elements[count].value, 'Joueur 2');
                break;
            case 'nbPoints' :
                error += validNbPoints(form.elements[count].value) ;       
            }
    
    }
    
    
     
  if (error !=='') {
      alert (error);
      event.preventDefault();
  } else {
        event.preventDefault();  
        removeDiv('.formPlayers')
        $('.name2').text(name2.value.toUpperCase());
        $('.name1').text(name1.value.toUpperCase());
        $('.presentation1').text(avatarToObject(avatar1.value).description);
        $('.presentation2').text(avatarToObject(avatar2.value).description);
        $('.imgPlayer1').replaceWith(avatarToObject(avatar1.value).urlImage);
        $('.imgPlayer2').replaceWith(avatarToObject(avatar2.value).urlImage);
        $('.common, .player').css('display', 'block');

        

  }



})
