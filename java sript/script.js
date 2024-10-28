console.clear();

/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km)

- va applicato uno sconto del 20% per i minorenni

- va applicato uno sconto del 40% per gli over 65.

- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.*/

const priceKm = 0.21;
const discountJunior = 20;
const discountSenior = 40;
const juniorAge = 17;
const seniorAge = 65;

const km = parseInt(prompt("quanti km vuoi percorrere ?"));
console.log(km);
const age = parseInt(prompt("quanti anni hai ?"));
console.log(age);

let price=(priceKm * km);
//console.log("prezzo biglietto senza sconto " + price);
if(age <=17 ){
    let sconto = (price * 20) /100;
    let prezzoFinale = (price - sconto);
    console.log("prezzo finale: " + prezzoFinale.toFixed(2));
}
else if(age >= 65 ){
    let sconto = (price * 40) /100;
    let prezzoFinale = (price - sconto);
    console.log("prezzo finale: " + prezzoFinale.toFixed(2));
}
else{
    console.log("prezzo finale: " + price.toFixed(2));
}

