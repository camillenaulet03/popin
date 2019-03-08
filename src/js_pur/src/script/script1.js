(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var div = document.querySelectorAll('div')[1];
var button = document.querySelector('button');

// Lorsqu'on clique sur le bouton
button.addEventListener('click', function () {
    if (div.className == 'hidden') {
        document.querySelectorAll('div')[0].className = "open";
        hiddenP();
        div.className = 'show';
    } else {
        showP();
        document.querySelectorAll('div')[0].className = "closed";
        div.className = 'hidden';
    }
});

// Transformer le bouton lorsque le popin est ouvert
document.addEventListener('click', function () {
    if (div.className == 'show') {
        button.className = 'btnclosed';
    } else {
        button.className = 'btn';
    }
});

// Remettre le bouton à son état d'origine si l'on appuie sur la touche "Echap" alors que le popin est ouvert
document.addEventListener('keydown', function (e) {
    if (e.keyCode == 27) {
        button.className = 'btn';
    } else {
        button.className = 'btnclosed';
    }
});

// Fonctionnement du bouton permettant de fermer le popin
var span = document.querySelector('span');
span.addEventListener('click', function () {
    showP();
    document.querySelectorAll('div')[0].className = "close";
    div.className = 'hidden';
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0L3NjcmlwdDEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQUksTUFBTSxTQUFTLGdCQUFULENBQTBCLEtBQTFCLEVBQWlDLENBQWpDLENBQVY7QUFDQSxJQUFJLFNBQVMsU0FBUyxhQUFULENBQXVCLFFBQXZCLENBQWI7O0FBRUE7QUFDQSxPQUFPLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFlBQVk7QUFDekMsUUFBRyxJQUFJLFNBQUosSUFBaUIsUUFBcEIsRUFBNkI7QUFDekIsaUJBQVMsZ0JBQVQsQ0FBMEIsS0FBMUIsRUFBaUMsQ0FBakMsRUFBb0MsU0FBcEMsR0FBZ0QsTUFBaEQ7QUFDQTtBQUNBLFlBQUksU0FBSixHQUFnQixNQUFoQjtBQUVILEtBTEQsTUFLSztBQUNEO0FBQ0EsaUJBQVMsZ0JBQVQsQ0FBMEIsS0FBMUIsRUFBaUMsQ0FBakMsRUFBb0MsU0FBcEMsR0FBZ0QsUUFBaEQ7QUFDQSxZQUFJLFNBQUosR0FBZ0IsUUFBaEI7QUFDSDtBQUNKLENBWEQ7O0FBY0E7QUFDQSxTQUFTLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFlBQVk7QUFDM0MsUUFBRyxJQUFJLFNBQUosSUFBaUIsTUFBcEIsRUFBMkI7QUFDdkIsZUFBTyxTQUFQLEdBQW1CLFdBQW5CO0FBQ0gsS0FGRCxNQUVLO0FBQ0QsZUFBTyxTQUFQLEdBQW1CLEtBQW5CO0FBQ0g7QUFDSixDQU5EOztBQVFBO0FBQ0EsU0FBUyxnQkFBVCxDQUEwQixTQUExQixFQUFxQyxVQUFTLENBQVQsRUFBVztBQUM1QyxRQUFHLEVBQUUsT0FBRixJQUFhLEVBQWhCLEVBQW1CO0FBQ2YsZUFBTyxTQUFQLEdBQW1CLEtBQW5CO0FBQ0gsS0FGRCxNQUVLO0FBQ0QsZUFBTyxTQUFQLEdBQW1CLFdBQW5CO0FBQ0g7QUFDSixDQU5EOztBQVFBO0FBQ0EsSUFBSSxPQUFPLFNBQVMsYUFBVCxDQUF1QixNQUF2QixDQUFYO0FBQ0EsS0FBSyxnQkFBTCxDQUFzQixPQUF0QixFQUErQixZQUFVO0FBQ3JDO0FBQ0EsYUFBUyxnQkFBVCxDQUEwQixLQUExQixFQUFpQyxDQUFqQyxFQUFvQyxTQUFwQyxHQUFnRCxPQUFoRDtBQUNBLFFBQUksU0FBSixHQUFnQixRQUFoQjtBQUNILENBSkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJ2YXIgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2JylbMV07XHJcbnZhciBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcclxuXHJcbi8vIExvcnNxdSdvbiBjbGlxdWUgc3VyIGxlIGJvdXRvblxyXG5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZihkaXYuY2xhc3NOYW1lID09ICdoaWRkZW4nKXtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYnKVswXS5jbGFzc05hbWUgPSBcIm9wZW5cIjtcclxuICAgICAgICBoaWRkZW5QKCk7XHJcbiAgICAgICAgZGl2LmNsYXNzTmFtZSA9ICdzaG93JztcclxuXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBzaG93UCgpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdicpWzBdLmNsYXNzTmFtZSA9IFwiY2xvc2VkXCI7XHJcbiAgICAgICAgZGl2LmNsYXNzTmFtZSA9ICdoaWRkZW4nO1xyXG4gICAgfVxyXG59KTtcclxuXHJcblxyXG4vLyBUcmFuc2Zvcm1lciBsZSBib3V0b24gbG9yc3F1ZSBsZSBwb3BpbiBlc3Qgb3V2ZXJ0XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgaWYoZGl2LmNsYXNzTmFtZSA9PSAnc2hvdycpe1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc05hbWUgPSAnYnRuY2xvc2VkJztcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc05hbWUgPSAnYnRuJztcclxuICAgIH1cclxufSk7XHJcblxyXG4vLyBSZW1ldHRyZSBsZSBib3V0b24gw6Agc29uIMOpdGF0IGQnb3JpZ2luZSBzaSBsJ29uIGFwcHVpZSBzdXIgbGEgdG91Y2hlIFwiRWNoYXBcIiBhbG9ycyBxdWUgbGUgcG9waW4gZXN0IG91dmVydFxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24oZSl7XHJcbiAgICBpZihlLmtleUNvZGUgPT0gMjcpe1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc05hbWUgPSAnYnRuJztcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc05hbWUgPSAnYnRuY2xvc2VkJztcclxuICAgIH1cclxufSk7XHJcblxyXG4vLyBGb25jdGlvbm5lbWVudCBkdSBib3V0b24gcGVybWV0dGFudCBkZSBmZXJtZXIgbGUgcG9waW5cclxudmFyIHNwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XHJcbnNwYW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgc2hvd1AoKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdicpWzBdLmNsYXNzTmFtZSA9IFwiY2xvc2VcIjtcclxuICAgIGRpdi5jbGFzc05hbWUgPSAnaGlkZGVuJztcclxufSk7Il19
