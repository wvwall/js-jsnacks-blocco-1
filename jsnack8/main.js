// Chiedi un numero di 4 cifre all'utente

var numero =(prompt("Inserisci un numero di 4 cifre: "));
console.log(numero);
//Calcola la somma delle cifre che compongono il numero
var somma = (parseInt(numero[0]) + parseInt(numero[1]) + parseInt(numero[2]) + parseInt(numero [3]));
console.log(somma);

// METODO FLESSIBILE
/* 
 var numero = prompt("Inserisci un numero di 4 cifre: ");
 console.log(numero);

 var daSommare = 0;
 var somma = 0;

 for(var i = 0; i < numero.length; i++) {
     daSommare = parseInt(numero[i]);
     somma = somma + daSommare;
 }

 document.getElementById("somma").innerHTML = "Il tuo numero è :" + numero + "La somma è:" + somma; */