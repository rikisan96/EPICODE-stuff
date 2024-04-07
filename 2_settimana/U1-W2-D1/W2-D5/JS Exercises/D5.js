/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']
console.log(pets, "ESERCIZIO 1 \n");

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
pets.sort();
console.log(pets, "ESERCIZIO 2 \n");

/* ESERCIZIO 3
Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

pets.reverse()
console.log(pets, "ESERCIZIO 3 \n");

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

pets.push(pets.shift())
console.log(pets, "ESERCIZIO 5 \n");


/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate"
     con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
];

for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = "Non trovata";
}
console.log(cars, "ESERCIZIO 5 \n");


/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars",
     rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
nuovaAuto =   {
  brand: 'Toyota',
  model: 'RAV-4',
  color: 'gray',
  trims: ['life', 'style', 'r-line'],
}
cars.push(nuovaAuto);
for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}
console.log(cars, "ESERCIZIO 6 \n");


/* ESERCIZIO 7
Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []
for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0])
}
console.log(justTrims, "ESERCIZIO 7 \n");


/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console.
    Se la prima lettera della proprietà "color" ha valore "b", mostra in console "Fizz".
    Altrimenti, mostra in console "Buzz".
*/

// for (let i = 0; i < cars.length; i++) {
//   var parolaTagliata = cars[i].color.substring(0,1)
//   console.log(parolaTagliata)
//   if (parolaTagliata=== "b"){
//     console.log("Fizz"," ESERCIZIO 8");
//   } else console.log("buzz"," ESERCIZIO 8");
// } OPPURE

for (let i = 0; i < cars.length; i++) {
  var parolaTagliata = cars[i].color.substring(0,1);
  console.log(parolaTagliata === "b" ? "Fizz" : "Buzz");
}



/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

// for (let i = 0; i < numericArray.length && numericArray[i] != 32; i++) {
//   console.log(numericArray[i]);
//   if (numericArray[i+1] == 32) {
//     console.log(numericArray[i+1], "ho trovato 32!" , "ESERCIZIO 9")
//   }
// }
// mi sono accorto di dover fare il while loop adesso... lascio il for loop commentato.

let i=0;
while (i < numericArray.length && numericArray[i] !== 32) {
  console.log(numericArray[i]);
  if (numericArray[i+1] === 32) {
    console.log(numericArray[i+1], "ho trovato 32!", "ESERCIZIO 9 \n");
  }
  i++;
}


// /* ESERCIZIO 10
//     Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
//     dell'alfabeto italiano.
//     es. [f, b, e] --> [6, 2, 5]
// */
const charactersArray = ['g', 'n', 'u', 'z', 'd'];

for (let i = 0; i < charactersArray.length; i++) {
    const letter = charactersArray[i];
    switch (letter) {
        case 'a':console.log(letter, "la sua posizione è la: 1");break;
        case 'b':console.log(letter, "la sua posizione è la: 2");break;
        case 'c':console.log(letter, "la sua posizione è la: 3");break;
        case 'd':console.log(letter, "la sua posizione è la: 4");break;
        case 'e':console.log(letter, "la sua posizione è la: 5");break;
        case 'f':console.log(letter, "la sua posizione è la: 6");break;
        case 'g':console.log(letter, "la sua posizione è la: 7");break;
        case 'h':console.log(letter, "la sua posizione è la: 8");break;
        case 'i':console.log(letter, "la sua posizione è la: 9");break;
        case 'l':console.log(letter, "la sua posizione è la: 10");break;
        case 'm':console.log(letter, "la sua posizione è la: 11");break;
        case 'n':console.log(letter, "la sua posizione è la: 12");break;
        case 'o':console.log(letter, "la sua posizione è la: 13");break;
        case 'p':console.log(letter, "la sua posizione è la: 14");break;
        case 'q':console.log(letter, "la sua posizione è la: 15");break;
        case 'r':console.log(letter, "la sua posizione è la: 16");break;
        case 's':console.log(letter, "la sua posizione è la: 17");break;
        case 't':console.log(letter, "la sua posizione è la: 18");break;
        case 'u':console.log(letter, "la sua posizione è la: 19");break;
        case 'v':console.log(letter, "la sua posizione è la: 20");break;
        case 'z':console.log(letter, "la sua posizione è la: 21");break;
    }
}
console.log(" ESERCIZIO 10")

//oppure
//const alfabetoItaliano = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "z" ];

// i=0;
// function contaPosizioni(array){
//   for (let i = 0; i < alfabetoItaliano.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       if(array[j] === alfabetoItaliano[i]){
//         console.log("lettera in lettura: ", array[j] , " Posizione nell'alfabeto: ", i + 1)
//       }
//     }
//   }
// }

// contaPosizioni(charactersArray)