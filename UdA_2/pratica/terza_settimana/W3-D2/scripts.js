//Crea un semplice form di registrazione con un input field in cui l’utente possa inserire il proprio nome.
// A fianco di questo input field crea due pulsanti: uno salverà il valore in localStorage, uno rimuoverà il valore precedentemente salvato (se presente).
// Mostra sopra l’input field il valore precedentemente salvato, se presente.

//Crea un contatore che tenga conto del tempo che passa, utilizzando sessionStorage.
// Aggiornando la pagina il valore prosegue, chiudendo la pagina - ovviamente - ricomincia.
// Il valore del contatore deve aggiornarsi ad ogni secondo.

// campo telefono
const nameInput = document.getElementById("name");
// riferimento generico al form
const formTag = document.getElementsByTagName("form")[0];
//creo array che conterra' i dati
const saveButton = document.getElementById("salva");
const delButton = document.getElementById("cancella");
const ACButton = document.getElementById("cancellaTutto");

const prevSave = document.getElementById("datoPrecedente");

const contact = [];

formTag.addEventListener("click", function (e) {
  e.preventDefault();
});

saveButton.addEventListener("click", function (e) {
  newContact = nameInput.value;
  contact.push(newContact);
  localStorage.setItem("contact", JSON.stringify(contact));
  console.log(`Contatto Creato!`, newContact, contact, typeof contact);
  prevSave.innerHTML = newContact;
  nameInput.value = "";
});

ACButton.addEventListener("click", function (e) {
  localStorage.clear();
  clearInterval(mioTimer);
    hours.innerHTML = 0, minutes.innerHTML = 0, seconds.innerHTML = 0;
});

function showLastAdded(lastContact) {
  console.log(`Contatto precedente: `, lastContact);
}

// sezione timer
function startCounter() {
  let hours = parseInt(sessionStorage.getItem("hours"));
  let minutes = parseInt(sessionStorage.getItem("minutes"));
  let seconds = parseInt(sessionStorage.getItem("seconds"));

  // Aggiorna il contatore ogni secondo
  mioTimer = setInterval(function () {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    sessionStorage.setItem("hours", hours);
    sessionStorage.setItem("minutes", minutes);
    sessionStorage.setItem("seconds", seconds);
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }, 1000);
}

window.addEventListener("load", startCounter);
