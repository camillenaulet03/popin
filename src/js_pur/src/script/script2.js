(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

// Si l'on appuie sur la touche "Echap", fermer le popin
document.addEventListener('keydown', function (e) {
    if (e.keyCode == 27) {
        showP();
        document.querySelectorAll('div')[0].className = "close";
        div.className = 'hidden';
    }
});

// Activation du bouton type submit lorsque le mail remplit les conditions
document.querySelectorAll('input')[0].addEventListener("keypress", function () {
    var email = document.querySelectorAll('input')[0].value;
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,4})+$/;
    if (re.test(email)) {
        document.querySelectorAll('input')[1].disabled = "";
        document.querySelectorAll('input')[1].className = "vbtn";
    } else {
        document.querySelectorAll('input')[1].disabled = "disabled";
        document.querySelectorAll('input')[1].className = "vbtndbld";
    }
});

// Affichage du message de validation lorsque l'email est sauvegardé
document.addEventListener('submit', function (e) {
    e.preventDefault();
    $.ajax({
        method: "POST",
        url: "script.php",
        data: { mail: document.querySelector('#mail').value }
    }).done(function (msg) {
        console.log(msg);
        if (msg == 'ok') {
            alert("Ok");
        } else {
            alert("No");
            console.log("no");
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
function hiddenP() {
    for (i = 0; i < document.querySelectorAll('p').length; i++) {
        document.querySelectorAll('p')[i].className = "text_off";
    }
}
function showP() {
    for (i = 0; i < document.querySelectorAll('p').length; i++) {
        document.querySelectorAll('p')[i].className = "";
    }
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0L3NjcmlwdDIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBO0FBQ0EsU0FBUyxnQkFBVCxDQUEwQixTQUExQixFQUFxQyxVQUFTLENBQVQsRUFBVztBQUM1QyxRQUFHLEVBQUUsT0FBRixJQUFhLEVBQWhCLEVBQW1CO0FBQ2Y7QUFDQSxpQkFBUyxnQkFBVCxDQUEwQixLQUExQixFQUFpQyxDQUFqQyxFQUFvQyxTQUFwQyxHQUFnRCxPQUFoRDtBQUNBLFlBQUksU0FBSixHQUFnQixRQUFoQjtBQUNIO0FBQ0osQ0FORDs7QUFTQTtBQUNBLFNBQVMsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsQ0FBbkMsRUFBc0MsZ0JBQXRDLENBQXVELFVBQXZELEVBQW1FLFlBQVU7QUFDekUsUUFBSSxRQUFRLFNBQVMsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsQ0FBbkMsRUFBc0MsS0FBbEQ7QUFDQSxRQUFJLEtBQUssK0NBQVQ7QUFDQSxRQUFHLEdBQUcsSUFBSCxDQUFRLEtBQVIsQ0FBSCxFQUFrQjtBQUNkLGlCQUFTLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLENBQW5DLEVBQXNDLFFBQXRDLEdBQWlELEVBQWpEO0FBQ0EsaUJBQVMsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsQ0FBbkMsRUFBc0MsU0FBdEMsR0FBa0QsTUFBbEQ7QUFDSCxLQUhELE1BR0s7QUFDRCxpQkFBUyxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxDQUFuQyxFQUFzQyxRQUF0QyxHQUFpRCxVQUFqRDtBQUNBLGlCQUFTLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLENBQW5DLEVBQXNDLFNBQXRDLEdBQWtELFVBQWxEO0FBQ0g7QUFDSixDQVZEOztBQVlBO0FBQ0EsU0FBUyxnQkFBVCxDQUEwQixRQUExQixFQUFvQyxVQUFTLENBQVQsRUFBWTtBQUM1QyxNQUFFLGNBQUY7QUFDQSxNQUFFLElBQUYsQ0FBTztBQUNDLGdCQUFRLE1BRFQ7QUFFQyxhQUFLLFlBRk47QUFHQyxjQUFNLEVBQUMsTUFBTSxTQUFTLGFBQVQsQ0FBdUIsT0FBdkIsRUFBZ0MsS0FBdkM7QUFIUCxLQUFQLEVBS0MsSUFMRCxDQUtNLFVBQVMsR0FBVCxFQUFjO0FBQ0osZ0JBQVEsR0FBUixDQUFZLEdBQVo7QUFDQSxZQUFJLE9BQU8sSUFBWCxFQUFpQjtBQUNiLGtCQUFNLElBQU47QUFDSCxTQUZELE1BRU87QUFDSCxrQkFBTSxJQUFOO0FBQ0Esb0JBQVEsR0FBUixDQUFZLElBQVo7QUFDSDtBQUNKLEtBYmI7QUFjQSxRQUFJLFNBQUosR0FBZ0IsUUFBaEI7QUFDQSxRQUFJLElBQUksU0FBUyxhQUFULENBQXVCLEdBQXZCLENBQVI7QUFDQSxRQUFJLFFBQVEsU0FBUyxjQUFULENBQXdCLDBDQUF4QixDQUFaO0FBQ0EsTUFBRSxXQUFGLENBQWMsS0FBZDtBQUNBLGFBQVMsSUFBVCxDQUFjLGdCQUFkLENBQStCLEtBQS9CLEVBQXNDLENBQXRDLEVBQXlDLE1BQXpDLENBQWdELENBQWhEO0FBQ0EsYUFBUyxnQkFBVCxDQUEwQixLQUExQixFQUFpQyxDQUFqQyxFQUFvQyxTQUFwQyxHQUFnRCxPQUFoRDtBQUNBLFdBQU8sU0FBUCxHQUFtQixLQUFuQjtBQUNBO0FBQ0gsQ0F4QkQ7O0FBMEJBO0FBQ0EsU0FBUyxPQUFULEdBQWtCO0FBQ2QsU0FBSSxJQUFJLENBQVIsRUFBVyxJQUFFLFNBQVMsZ0JBQVQsQ0FBMEIsR0FBMUIsRUFBK0IsTUFBNUMsRUFBb0QsR0FBcEQsRUFBd0Q7QUFDcEQsaUJBQVMsZ0JBQVQsQ0FBMEIsR0FBMUIsRUFBK0IsQ0FBL0IsRUFBa0MsU0FBbEMsR0FBOEMsVUFBOUM7QUFDSDtBQUNKO0FBQ0QsU0FBUyxLQUFULEdBQWdCO0FBQ1osU0FBSSxJQUFJLENBQVIsRUFBVyxJQUFFLFNBQVMsZ0JBQVQsQ0FBMEIsR0FBMUIsRUFBK0IsTUFBNUMsRUFBb0QsR0FBcEQsRUFBd0Q7QUFDcEQsaUJBQVMsZ0JBQVQsQ0FBMEIsR0FBMUIsRUFBK0IsQ0FBL0IsRUFBa0MsU0FBbEMsR0FBOEMsRUFBOUM7QUFDSDtBQUNKIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8gU2kgbCdvbiBhcHB1aWUgc3VyIGxhIHRvdWNoZSBcIkVjaGFwXCIsIGZlcm1lciBsZSBwb3BpblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24oZSl7XHJcbiAgICBpZihlLmtleUNvZGUgPT0gMjcpe1xyXG4gICAgICAgIHNob3dQKCk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2JylbMF0uY2xhc3NOYW1lID0gXCJjbG9zZVwiO1xyXG4gICAgICAgIGRpdi5jbGFzc05hbWUgPSAnaGlkZGVuJztcclxuICAgIH1cclxufSk7XHJcblxyXG5cclxuLy8gQWN0aXZhdGlvbiBkdSBib3V0b24gdHlwZSBzdWJtaXQgbG9yc3F1ZSBsZSBtYWlsIHJlbXBsaXQgbGVzIGNvbmRpdGlvbnNcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKVswXS5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgZnVuY3Rpb24oKXtcclxuICAgIHZhciBlbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JylbMF0udmFsdWU7XHJcbiAgICB2YXIgcmUgPSAvXlxcdysoW1xcLi1dP1xcdyspKkBcXHcrKFtcXC4tXT9cXHcrKSooXFwuXFx3ezEsNH0pKyQvO1xyXG4gICAgaWYocmUudGVzdChlbWFpbCkpe1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JylbMV0uZGlzYWJsZWQgPSBcIlwiO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JylbMV0uY2xhc3NOYW1lID0gXCJ2YnRuXCJcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JylbMV0uZGlzYWJsZWQgPSBcImRpc2FibGVkXCI7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKVsxXS5jbGFzc05hbWUgPSBcInZidG5kYmxkXCJcclxuICAgIH1cclxufSk7XHJcblxyXG4vLyBBZmZpY2hhZ2UgZHUgbWVzc2FnZSBkZSB2YWxpZGF0aW9uIGxvcnNxdWUgbCdlbWFpbCBlc3Qgc2F1dmVnYXJkw6lcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgdXJsOiBcInNjcmlwdC5waHBcIixcclxuICAgICAgICAgICAgZGF0YToge21haWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWlsJykudmFsdWV9XHJcbiAgICAgIH0pXHJcbiAgICAuZG9uZShmdW5jdGlvbihtc2cpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhtc2cpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1zZyA9PSAnb2snKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiT2tcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJOb1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJub1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgZGl2LmNsYXNzTmFtZSA9ICdoaWRkZW4nO1xyXG4gICAgdmFyIHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB2YXIgdGV4dGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnVm90cmUgZGVtYW5kZSBhIGJpZW4gw6l0w6kgcHJpc2UgZW4gY29tcHRlJyk7XHJcbiAgICBwLmFwcGVuZENoaWxkKHRleHRlKTtcclxuICAgIGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvckFsbCgnZGl2JylbMF0uYXBwZW5kKHApO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2JylbMF0uY2xhc3NOYW1lID0gXCJjbG9zZVwiO1xyXG4gICAgYnV0dG9uLmNsYXNzTmFtZSA9ICdidG4nO1xyXG4gICAgc2hvd1AoKTtcclxufSk7XHJcblxyXG4vLyBBZmZpY2hhZ2UgZGUgbGEgYmFsaXNlIFwicFwiLCBtZXNzYWdlIGRlIHZhbGlkYXRpb25cclxuZnVuY3Rpb24gaGlkZGVuUCgpe1xyXG4gICAgZm9yKGkgPSAwOyBpPGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3AnKS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgncCcpW2ldLmNsYXNzTmFtZSA9IFwidGV4dF9vZmZcIjtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBzaG93UCgpe1xyXG4gICAgZm9yKGkgPSAwOyBpPGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3AnKS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgncCcpW2ldLmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICB9XHJcbn0iXX0=
