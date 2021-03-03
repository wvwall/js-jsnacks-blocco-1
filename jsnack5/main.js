// Creare array vuoto
var numeri = [];
var numero;
//Chiedi per 6 volte di inserire un numero //Controllare se è dispari e aggiungilo nell'array
for (var i = 0; i < 6; i++) {
     numero = parseInt(prompt("Metti un numero: "));

     if(numero%2){
        numeri.push(numero);
    } else {
        console.log("Il numero è pari quindi non è stato aggiunto all'array.");
    }
}

console.log(numeri);

