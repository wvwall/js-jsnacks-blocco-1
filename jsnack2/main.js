//Inserisci due parole e stampa prima la parolo più corta e poi la parola più lunga

var parola1 = prompt("Inserisci la prima parola: ");
var parola2 = prompt("Inserisci la seconda parola: ");

if (parola1 > parola2) {
    console.log(parola2, parola1);
} else if (parola2 > parola1) {
    console.log(parola1, parola2);
}