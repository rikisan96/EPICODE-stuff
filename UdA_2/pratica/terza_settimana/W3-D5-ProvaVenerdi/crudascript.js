// 🛍️CRUDAZON
// Stai creando la parte front-end di uno shop online. In particolare sarai responsabile della creazione di un back-office, dove gli amministratori possono aggiungere e modificare i prodotti.
// L’obiettivo di oggi è connettere un’interfaccia statica alle API per poter ricevere prodotti, crearne di nuovi, modificarli una volta creati e cancellarli all’occorrenza.
// Questo è l’endpoint principale:
// https://striveschool-api.herokuapp.com/api/product/
// Per creare nuovi prodotti dovrai partire da questo modello come riferimento, e formarlo con alcune delle proprietà richieste per poi inviarlo come payload della chiamata POST.
// OGNI CHIAMATA DOVRÀ ESSERE AUTENTICATA! L’autenticazione di queste API è una “Token Based Authentication” per rendere privato l’accesso ai suoi contenuti. Senza essere autenticato non potrai ottenere i dati di cui hai bisogno.
// Per prima cosa dovrai recuperare un tuo token personale registrandoti su: https://strive.school/studentlogin
// Il token dovrà venire utilizzato come "authorization" header.

// Obiettivi generali:
// Avere una pagina back-office, in cui si potranno inserire i prodotti specificando i parametri obbligatori e facoltativi.
// Una homepage, dove l’utente possa vedere i prodotti disponibili
// Una pagina di dettaglio in cui visualizzare tutti i dettagli del prodotto.

// Task:
// Nella pagina di back-office: usa POST su /product con un payload per creare una nuova risorsa.
// Aggiungi un bottone per la funzionalità di modifica di un prodotto già creato in precedenza (usa una PUT su /product/[PRODUCT_ID]).
// Aggiungi un bottone per la cancellazione di uno specifico prodotto già esistente (usa DELETE su /product/[PRODUCT_ID])
// Aggiungi una validazione di base per la creazione/modifica del prodotto nel form.
// Aggiungi un bottone “Reset” per resettare il form.
// Nella Homepage: premendo un bottone “modifica” su un prodotto si dovrà poterlo modificare.
// Nella pagina Dettaglio: A questa pagina ci si arriverà cliccando sulla card in homepage.
// EXTRAS:
// In back-office: I bottoni “reset” e “delete” dovranno chiedere conferma prima di procedere con l’operazione.
// In homepage: aggiungi un indicatore di caricamento affianco al titolo principale della pagina durante il caricamento delle risorse.
// Crea un sistema di gestione degli errori. Mostra all’utente un messaggio di errore specifico per le varie tipologie di problema, quando qualcosa va storto, attraverso l’utilizzo di componenti di Bootstrap appropriati.

// const loadImages = (searchKeyword) =>
//   fetch("https://striveschool-api.herokuapp.com/api/product/", {
//     headers: {
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNlMDk4NDgxODQ0MjAwMTUzNzVhMjYiLCJpYXQiOjE3MTUzNDE3MDAsImV4cCI6MTcxNjU1MTMwMH0.2AdEt-c5ktlRNKzljjp-mNoUwWIjksN3Dsjl_DeBons"
//     },
//   })
//     .then((response) => {
//       if (response.ok) {
//         return response.json();
//       } else throw new Error("Sono morto");
//     })
//     .then(({ photos }) => {
//       console.log(photos);
//     });

// riempie lo span "year"
document.getElementById("year").innerText = new Date().getFullYear();

// riempiamo la riga con gli eventi
// https://striveschool-api.herokuapp.com/api/agenda

const generateConcertCards = function (concertsArray) {
  const row = document.getElementById("events-row");
  concertsArray.forEach((concert) => {
    const newCol = document.createElement("div");
    newCol.classList.add("col");
    newCol.innerHTML = `
      <div class="card h-100 d-flex flex-column">
        <img src="/W3-D5-ProvaVenerdi/assets/pics/pepperoni.jpeg" class="card-img-top" alt="...">
        <div class="card-body d-flex flex-column justify-content-around">
          <h5 class="card-title">${concert.name}</h5>
          <p class="card-text">${concert.description}</p>
          <p class="card-text">${concert.time}</p>
          <div class="d-flex justify-content-between">
            <button class="btn btn-primary">${concert.price}€</button>
            <a href="details.html?eventId=${concert._id}" class="btn btn-info">INFO</a>
          </div>
        </div>
      </div>
      `;
    row.appendChild(newCol);
  });
};

const getEvents = function () {
  fetch("https://striveschool-api.herokuapp.com/api/product/", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNlMDk4NDgxODQ0MjAwMTUzNzVhMjYiLCJpYXQiOjE3MTUzNDE3MDAsImV4cCI6MTcxNjU1MTMwMH0.2AdEt-c5ktlRNKzljjp-mNoUwWIjksN3Dsjl_DeBons",
    },
  })
    .then((response) => {
      if (response.ok) {
        console.log(response);
        return response.json();
      } else {
        throw new Error("Errore nella risposta del server");
      }
    })
    .then((array) => {
      console.log("ARRAY!", array);
      generateConcertCards(array);
    })
    .catch((err) => {
      console.log("ERRORE!", err);
    });
};

getEvents();
