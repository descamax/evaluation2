$(document).ready(() => {
    
 //affichage de la contrainte de nom lorsque le curseur est dans le formulaire
    //texte de la contrainte de nom
    let constraintstext = {
        name1: 'Le nom de joueur doit contenir entre 2 et 10 caractères et ne doit contenir que des lettres.',
        name2: 'Le nom de joueur doit contenir entre 2 et 10 caractères et ne doit contenir que des lettres.',
    }

    let help = $('.js-name-joueur');
    help.each(function (){
        let helpText = '<p class="help-text">' + constraintstext[$(this).attr('name')] + '</p>' ;
        $(this).after(helpText);
    })

    let form=$('#formProv');

    form.on('focus', 'input, textarea', function(){
        $(this).next('.help-text').show(250)
    })

    form.on('blur', 'input, textarea', function(){
        $('.help-text').hide(250)
    });

    //disparition du formulaire au clic
 /*
    let envoiFormulaire = document.getElementById("boutonEnvoi");

    envoiFormulaire.addEventListener("click", (){
        if (getComputedStyle(form.display !='none'){
            form.style.display = 'none';
        } else {
            form.style.display = 'block';
        }
    })
*/

//removeDiv('.form-players');

});