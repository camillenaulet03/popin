// Si l'on appuie sur la touche "Echap", fermer le popin
document.addEventListener('keydown', function(e){
    if(e.keyCode == 27){
        showP();
        document.querySelectorAll('div')[0].className = "close";
        div.className = 'hidden';
    }
});


// Activation du bouton type submit lorsque le mail remplit les conditions
document.querySelectorAll('input')[0].addEventListener("keypress", function(){
    var email = document.querySelectorAll('input')[0].value;
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,4})+$/;
    if(re.test(email)){
        document.querySelectorAll('input')[1].disabled = "";
        document.querySelectorAll('input')[1].className = "vbtn"
    }else{
        document.querySelectorAll('input')[1].disabled = "disabled";
        document.querySelectorAll('input')[1].className = "vbtndbld"
    }
});

// Affichage du message de validation lorsque l'email est sauvegardé
document.addEventListener('submit', function(e) {
    e.preventDefault();
    $.ajax({
            method: "POST",
            url: "script.php",
            data: {mail: document.querySelector('#mail').value}
      })
    .done(function(msg) {
                    console.log(msg)
                    if (msg == 'ok') {
                        alert("Ok");
                    } else {
                        alert("No");
                        console.log("no")
                    }
                });
    div.className = 'hidden';
    var p = document.createElement('p');
    var texte = document.createTextNode('Votre demande a bien été prise en compte');
    p.appendChild(texte);
    document.body.querySelectorAll('div')[0].append(p);
    document.querySelectorAll('div')[0].className = "close";
    button.className = 'btn';
    showP();
});

// Affichage de la balise "p", message de validation
function hiddenP(){
    for(i = 0; i<document.querySelectorAll('p').length; i++){
        document.querySelectorAll('p')[i].className = "text_off";
    }
}
function showP(){
    for(i = 0; i<document.querySelectorAll('p').length; i++){
        document.querySelectorAll('p')[i].className = "";
    }
}