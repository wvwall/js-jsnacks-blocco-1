// Chiedi due numeri in successione e stampa il maggiore

var num1 = parseInt(prompt("Inserisci il primo numero: "));
var num2 = parseInt(prompt("Inserisci il secondo numero: "));

if (num1 > num2) {
    console.log(num1);
} else if (num2 > num1) {
    console.log(num2);
}