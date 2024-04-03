/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

// let a=10, b=20;

// a > b? console.log("A e' maggiore di B") : console.log("B e' maggiore di A");

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

// let numeroInput = 10; 

// numeroInput != 5? console.log("Il numero inserito e' uguale a 5") : console.log("NON UGUALE");
// //OPPURE
 
// let numeroInput = 10;

// if (numeroInput == 5) {
//   console.log("Il numero inserito e' uguale a 5");
// } else {
//   console.log("NON UGUALE");
// }




/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

// let numeroInput = 10; 

// numeroInput % 5 == 0 ? console.log("Il numero inserito e' divisibile per 5") : console.log("NON DIVISIBILE");
// OPPURE
// let numeroInput = 10;

// if (numeroInput % 5 == 0) {
//   console.log("Il numero inserito e' divisibile per 5");
// } else {
//   console.log("NON DIVISIBILE");
// }



/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

// let primoNumero = 8, secondoNumero = 0;

// if (primoNumero == 8 || primoNumero + secondoNumero == 8 || primoNumero - secondoNumero == 8 || secondoNumero - primoNumero == 8 ) {
//     console.log("I due numeri, addizionati o sottratti, risultano insieme 8")
// } else {
//   (console.log("I due numeri non sono 8, ne la loro somma/sottrazione fa 8"))
// }

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del cnumeriello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del cnumeriello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

// let totalShoppingCart = 20, freeShippingThreshold = 50, defaultShippingCost = 10, checkoutCost;

// if (totalShoppingCart >= freeShippingThreshold) {
//   checkoutCost = totalShoppingCart;
//   console.log("Il totale del tuo cnumeriello e' di € ", totalShoppingCart ," + spedizione gratuita")
// } else {
//   console.log("Il totale del tuo cnumeriello e' di € ", totalShoppingCart , " + € "+ defaultShippingCost ," per spedirlo a casa tua. Aggiungi € ", freeShippingThreshold - totalShoppingCart, " in prodotti per avere la spedizione gratuita!" )
// }

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

// let totalShoppingCart = 40, freeShippingThreshold = 50, defaultShippingCost = 10, checkoutCost;
// let currentSale = 20, totalDiscount = totalShoppingCart * 20 / 100;

// if (totalShoppingCart >= freeShippingThreshold) {
//   checkoutCost = totalShoppingCart;
//   console.log("Riepilogo acquisti: \n", totalShoppingCart," costo prodotti \n - € ", totalDiscount," (20% di sconto sul totale) con promozione Black Friday.\n Totale spesa: ", totalShoppingCart - totalDiscount," + spedizione gratuita")
// } else { //caso senza spedizione gratuita
//   console.log("Riepilogo acquisti: \n", totalShoppingCart," costo prodotti \n - € ", totalDiscount," (20% di sconto sul totale) con promozione Black Friday.\n Totale spesa: ", totalShoppingCart - totalDiscount + defaultShippingCost,"\n Aggiungi € ", freeShippingThreshold - totalShoppingCart, " in prodotti per avere la spedizione gratuita!" )
// }

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

// let numeri = [300, 200 , 19];
  
// console.log("Numeri da ordinare: ", numeri)

// for (var i = 0; i < numeri.length; i++) {
//   for (var j = 0; j < (numeri.length - i - 1); j++) {
//       // controlla se la posizione e' piu grande della prossima iterazione
//       console.log(numeri)
//       if (numeri[j] > numeri[j + 1]) {
//           // se vero, fai lo swap
//           var variabileTemp = numeri[j];
//           numeri[j] = numeri[j + 1];
//           numeri[j + 1] = variabileTemp;
//       }
//   }
// }


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/


// let datoDaControllare = "ciao", tipoDato = typeof datoDaControllare;

// tipoDato == "number" ? console.log("il dato e' ",tipoDato) : console.log("il dato e'",tipoDato,"Non e' number");


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

// let numero = 9;

// numero % 2 == 0? console.log("Numero inserito: ", numero,".\n Il numero e' pari"): console.log("Numero inserito: ", numero,".\n Il numero e' dispari")

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

// let val = 1;

// if (val > 5 && val < 10) {
//     console.log("Meno di 10");
//   } else 
//     if (val <= 5) {

//       console.log("Meno di 5");

//     } else if (val >= 10){
      
//         console.log("Uguale a 10 o maggiore");
    
//       }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

// const me = {
//   name: 'John',
//   lastName: 'Doe',
//   skills: ['javascript', 'html', 'css'],
// }

// me.city = "Toronto";

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

// delete me.lastName;

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

// me.skills.pop()
// console.log(me.skills)

/* ESERCIZIO 14
  Scrivi del codice per creare un numeri inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

// let numeri=[], dato = 1;
// console.log("prima: ", numeri)

// for (let I = 0; I < 10; I++) {
//   numeri[I] = dato;
//   dato++;
// }
// console.log("Dopo: ", numeri)

// /* ESERCIZIO 15
// Scrivi del codice per sostituire l'ultimo elemento dell'numeri, ovvero il valore 10, con il valore 100.
// */
// console.log("Eserc.15 - prima: ", numeri)

// numeri.pop();
// numeri.push(100);
// console.log("Eserc.15 - Dopo: ", numeri);