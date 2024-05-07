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
const saveButton = document.getElementById("salva")
const delButton = document.getElementById("cancella")

const contact = [];

// classe Contact
class Contact {
  constructor(_name, _phone, _fav) {
    this.name = _name;
  }
}

formTag.addEventListener('click', function (e){
    e.preventDefault()

})


saveButton.addEventListener('click', function (e){
    newContact = nameInput.value
    contact.push(newContact)
    console.log(newContact, contact, typeof contact)
    console.log(localStorage, typeof localStorage)
    localStorage.setItem("contact", JSON.stringify(contact))
    console.log(`Contatto Creato!`,newContact, contact, typeof contact)
    nameInput.value = ""
})

delButton.addEventListener('click', function (e){
localStorage.clear()
})
