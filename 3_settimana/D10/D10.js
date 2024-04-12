/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

function stampaRisultato(risultato){
  console.log(`Risultato Esercizio: ${risultato}, Esercizio N° ${seqEsercizio++}`)
}
var seqEsercizio = -5; // variabile per il console.log ;

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
let a = 10, b = 20, somma = a + b;

stampaRisultato(somma);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let casuale = Math.ceil(Math.random()*20);

stampaRisultato(casuale);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

const me = {
  name : `Riccardo`, 
  surname : `Cutruneo`, 
  age : 27
}
console.log(`Risultato esercizio: `, me.name, me.surname, me.age, `Esercizio N°`, seqEsercizio++)

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;
stampaRisultato(me.age)

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = [`HTML, CSS`]
stampaRisultato(me.skills)

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push("Javascript");
stampaRisultato(me.skills)

/* ESERCIZIO G
Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop();
stampaRisultato(me.skills)

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

function dice(){
  diceFace = Math.ceil(Math.random()*6);
  return diceFace;
}
stampaRisultato(dice())

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
var num1, num2;

function whoIsBigger(num1, num2){
  return console.log(num1 > num2 ? `Il numero maggiore e' ${num1} Esercizio N° ${seqEsercizio++}` :`Il numero maggiore e' ${num2} Esercizio N° ${seqEsercizio++}` )  
}

whoIsBigger(10,20);


/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

const contenitoreStringa = [];

function splitMe(stringa){
  stringa.split(" ");
  return console.log(stringa.split(" "));
}

console.log(`Esercizio N°`, seqEsercizio++);
splitMe("Ciao sono un programmatore in difficolta")

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

function deleteOne(stringa, booleano){
  if (booleano){
    x = stringa.slice(1,stringa.length);
    console.log(x)
    return x;
  }else 
    {
      x = stringa.slice(0,stringa.length-1,); 
      console.log(x)
      return x;
    }
}
console.log(`
Esercizio N°`, seqEsercizio++)
deleteOne("Ciao", false)

/* ESERCIZIO 5 nota prof su Discord
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

function onlyLetters(stringa){

    return stringa.replace(/\d/g, '');
}

console.log(`Esercizio N°`, seqEsercizio++, onlyLetters('Ciao sono 1 riccardo'))

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

function isThisAnEmail(stringa){
  let verificaChiocciola = stringa.includes("@");
  let verificaDominio = stringa.includes(".");

  verificaChiocciola + verificaDominio > 1 ? console.log("Indirizzo MAIL VALIDO "):  console.log("Indirizzo MAIL  NON VALIDO ") 
}
console.log(`Esercizio N°${seqEsercizio}`)
seqEsercizio++
isThisAnEmail(`lmao@gmail.com`)

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
function whatDayIsIt() {
  const d = new Date;
  let giorno = d.getDay() - 1
  console.log(giorno)
  let giornoSettimana = ""
    switch (giorno) {
      case 0:
        giornoSettimana = "Lunedì"
        break;
      case 1:
        giornoSettimana = "Martedì"
        break;
      case 2:
        giornoSettimana = "Mercoledì"
        break;
        case 3:
        giornoSettimana = "Giovedì"
        break;
      case 4:
        giornoSettimana = "Venerdì"
        break;
      case 5:
        giornoSettimana = "Sabato"
        break;
      case 6:
        giornoSettimana = "Domenica"
        break;
      default:
        break;
    }
  return giornoSettimana
}

stampaRisultato(whatDayIsIt())

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

const risultatiLanci = {
  valoriUsciti : [],

}
function rollTheDices(numeroRoll) {
  somma = 0;
    for (let i = 0; i < numeroRoll; i++) {
      let valore = dice()
      risultatiLanci.valoriUsciti.push(valore);
      somma += valore;
  }
  return {
    sum : somma,
    values : risultatiLanci.valoriUsciti
  }
}
seqEsercizio++;
console.log(`Esercizio N°${seqEsercizio}`,rollTheDices(4))

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

const giornoDaCalcolare = new Date(`07/15/1996`); //mm dd yyyy


function howManyDays(){
  const giornoDaCalcolareInMs = new Date(giornoDaCalcolare).getTime(); 
  const oggiInMs = new Date().getTime(); 
  const differenza = oggiInMs - giornoDaCalcolareInMs;
  const giorniTrascorsi = Math.floor(differenza / (1000 * 60 * 60 * 24));

  return giorniTrascorsi;
}

seqEsercizio++
stampaRisultato(`Giorni trascorsi dalla data del ${giornoDaCalcolare} - ${howManyDays()}  giorni `) 
 


/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

function isTodayMyBirthday(){
  const mioCompleanno = new Date(`07/15/1996`)
  const oggi = new Date()
  return oggi.getMonth() === mioCompleanno.getMonth && oggi.getDay() === mioCompleanno.getDay()
}
seqEsercizio++

console.log(`Esercizio N°`, seqEsercizio, isTodayMyBirthday(), ``)

// Arrays & Oggetti


const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

function deleteProp(obj,stringa){
  delete obj[stringa];
  console.log(obj);
  return obj;
}
seqEsercizio++;
console.log(`Esercizio N°`, seqEsercizio, deleteProp(movies, "year"))


/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/



function filmPiuNuovo() {
  let annoPiuRecente = 2024;
  let filmPiuRecente = null;

  for (let i = 0; i < movies.length; i++) {
    const anno = parseInt(movies[i].Year); 

    if (anno > annoPiuRecente) {
      annoPiuRecente = anno;
      filmPiuRecente = movies[i];
    }
  }

  return filmPiuRecente;
}

filmPiuNuovo()

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

function countMovies() {
  return movies.length;
}

seqEsercizio++;
console.log(`Esercizio N° ${seqEsercizio} Ci sono `,countMovies(),` films nell'oggetto 'movies'.`)


/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
function selectContainer() {
  document.getElementById("container");
  
}

seqEsercizio++;
stampaRisultato(``)
console.log(`function selectContainer() {
  document.getElementById("container");
  
}`)

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

function selectAllTds(){
  document.querySelectorAll("td");
}
seqEsercizio++;
stampaRisultato(``)
console.log(`function selectAllTds(){
  document.querySelectorAll("td")`)

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

function printTds(){

  x = document.querySelectorAll('td')
  x.forEach(e => {
    console.log(e.textContent) 
  });

}
seqEsercizio++;
stampaRisultato(``)
printTds()

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

function linksToRed() {
  x = document.querySelectorAll("a")
  for (let i = 0; i < x.length; i++) {
    x[i].style.color = "red"
    
  }
}
seqEsercizio++;
stampaRisultato(``)
 linksToRed()


/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

function addNewLi(){
  let x = document.getElementById('myList');
  const nuovaVoceLi = document.createElement('li');
  nuovaVoceLi.textContent = "LMAO LMAO"
  x.appendChild(nuovaVoceLi)
}

seqEsercizio++;
stampaRisultato(``)
addNewLi()

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */
