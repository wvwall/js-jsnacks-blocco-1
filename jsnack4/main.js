// Creare array invitati alla festa

var invitati = ["pinco","pallo","pinca","palla"];
//console.log(invitati);
//Chiedi all'utente il suo nome

var nome = prompt("Dimmi il tuo nome: ");

//Comunica se può accedere o meno

var diLivio = false;

for (var i = 0; i < invitati.length && !diLivio; i++) {
    if (invitati[i] === nome) {
        diLivio = true;
    }
}

if (diLivio) {
    console.log("Il tuo nome è in lista, puoi partecipare alla festa.");
} else {
    console.log("Il tuo nome non è presente. Spiaze");
}