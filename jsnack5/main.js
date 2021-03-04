// Creare array vuoto
var numeri = [];
//Chiedi per 6 volte di inserire un numero //Controllare se è dispari e aggiungilo nell'array
for (var i = 0; i < 6; i++) {
    var numero = parseInt(prompt("Inserisci un numero: "));

     if(!isNaN(numero) && numero%2){
        numeri.push(numero);
    } else {
        console.log("Il numero è pari quindi non è stato aggiunto all'array.");
    }
}

console.log(numeri);

