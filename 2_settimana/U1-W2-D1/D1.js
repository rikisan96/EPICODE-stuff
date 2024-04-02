/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* --------------------------- RICCARDO CUTRUNEO ------------------------------------------------------------------------------------------------- */


/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* 
  "Allora Gigetto, ti spiego: I datatype di Javascript sono diverse tipologie di variabili che servono a determinare la natura di quello che dichiari.
  Ad esempio, se, per esempio, vuoi smontare un tuo giocattolo e noti che le viti del gioco in questione presentano una forma a crocetta, sicuramente mi servira'
  quantomeno un cacciavite a stella o a croce per smontarlo.
  
  Sempre su questo filone di pensiero, quindi, i datatype di JS sono classificabili in:

  Stringhe - Sono una concatenazione di caratteri, che formano una parola, una frase od un periodo.
  Number - Indica un tipo di dato rappresentato da un numero naturale intero.
  Bigint - Indica un tipo di dato numerico che, a differenza del datatype "number" riesce a immagazzinare un numero molto piu grande.
  boolean - Indica un tipo di variabile che segue la logia Booleana, quindi rappresenta fondamentalmente uno 0 od un 1 (quindi o vero o falso)
  Undifined - Indica una variabile alla quale non e' stato ancora definito un valore. 
  Null - Indica un valore nullo (non e' ne' 0, ne' "undefined")."
*/


/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.\
 */

/*
  let myName = "Riccardo";
*/


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* let a = 12, b = 20;
    console.log(a + b)
  OPPURE
    let a = 12, b = 20;
    let somma = a + b;
    console.log(somma)
*/

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* let sasso = 12*/

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* let MYNAME = "Cutruneo"
    MYNAME = myName ;

*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* 
  sasso =- 4 
*/

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
/*
 
let name1 = "john", name2 = "John";

name1 === name2 ? console.log("Sono uguali") : console.log("Sono DIVERSI!"); 

name1.toLowerCase() === name2.toLowerCase() ? console.log("sono uguali 2") : console.log("son diversi 2");

*/
