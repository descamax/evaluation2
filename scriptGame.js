$(document).ready(() => {
    
 //affichage de la contrainte de nom lorsque le curseur est dans le formulaire
    //texte de la contrainte de nom
    let constraintstext = {
        formName1: 'Le nom de joueur doit contenir entre 2 et 15 caractères et ne doit contenir que des lettres.',
        formName2: 'Le nom de joueur doit contenir entre 2 et 15 caractères et ne doit contenir que des lettres.',
    }
    
    let help = $('.js-name-joueur');

    help.each(function (){
        let helpText = '<p class="help-text">' + constraintstext[$(this).attr('name')] + '</p>' ;
        $(this).after(helpText);
    })

    let form=$('#formProv');

    //affichage et masquage du petit texte d'aide
    form.on('focus', 'input, textarea', function(){
        $(this).next('.help-text').show(250)
    })
    form.on('blur', 'input, textarea', function(){
        $('.help-text').hide(250)
    });
});