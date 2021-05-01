let error='';

let name1 = document.getElementById('name-joueur1');
let name2 = document.getElementById('name-joueur2');
let avatar1 = document.getElementById('avatar1');
let avatar2 = document.getElementById('avatar2');
let form = document.querySelector('form');



function Avatar (name, urlImage, description, color) {
    this.name = name;
    this.urlImage = urlImage;
    this.description = description;
    this.color = color;
}

var renard = new Avatar('renard', '<img src="images/renard.jpg">', 'rusé, vous saurez quand vous arrêter !', 'orange' );
var kangourou = new Avatar('kangourou', '<img src="images/kangourou.jpg">', 'Sautillant, vous oserez tout !', 'orange' );
var ecureuil = new Avatar('ecureuil', '<img src="images/ecureuil.jpg">', 'Prudent, vous veillerez sur vos réserves', 'orange' );
var poule = new Avatar('poule', '<img src="images/poule.jpg">', 'ça picore, ça picore !', 'orange' );
var panthere = new Avatar('panthere', '<img src="images/panthere.jpg">', "A l'attaque ! Dévorez votre adversaire !", 'noir' );
var gorille = new Avatar('gorille', '<img src="images/gorille.jpg">', 'Bourrin comme vous êtes, ça va taper fort !', 'noir' );
var phacochere = new Avatar('phacochere', '<img src="images/phacochere.jpg">', 'Mi-sauvage, mi-modestique, on ne sait pas ce que vous voulez', 'noir' );
var gnou = new Avatar('gnou', '<img src="images/gnou.jpg">', 'Broutez à volonté !', 'noir' );

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
            }
    
    }
    
    
     
  if (error !=='') {
      alert (error);
      event.preventDefault();
  } else {





        event.preventDefault();  
        removeDiv('.form-players')
        $('.name2').text(name2.value.toUpperCase());
        $('.name1').text(name1.value.toUpperCase());
        $('.presentation1').text(avatarToObject(avatar1.value).description);
        $('.presentation2').text(avatarToObject(avatar2.value).description);
        $('.imgPlayer1').replaceWith(avatarToObject(avatar1.value).urlImage);
        $('.imgPlayer2').replaceWith(avatarToObject(avatar2.value).urlImage);
        $('.common, .player').css('display', 'block');
        

  }



})