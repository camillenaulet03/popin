var div = document.querySelectorAll('div')[1];
var button = document.querySelector('button');

// Lorsqu'on clique sur le bouton
button.addEventListener('click', function () {
    if(div.className == 'hidden'){
        document.querySelectorAll('div')[0].className = "open";
        hiddenP();
        div.className = 'show';

    }else{
        showP();
        document.querySelectorAll('div')[0].className = "closed";
        div.className = 'hidden';
    }
});


// Transformer le bouton lorsque le popin est ouvert
document.addEventListener('click', function () {
    if(div.className == 'show'){
        button.className = 'btnclosed';
    }else{
        button.className = 'btn';
    }
});

// Remettre le bouton à son état d'origine si l'on appuie sur la touche "Echap" alors que le popin est ouvert
document.addEventListener('keydown', function(e){
    if(e.keyCode == 27){
        button.className = 'btn';
    }else{
        button.className = 'btnclosed';
    }
});

// Fonctionnement du bouton permettant de fermer le popin
var span = document.querySelector('span');
span.addEventListener('click', function(){
    showP();
    document.querySelectorAll('div')[0].className = "close";
    div.className = 'hidden';
});