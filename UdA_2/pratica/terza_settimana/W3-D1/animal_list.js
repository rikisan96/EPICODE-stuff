const petNameInput = document.getElementById("name");
const ownerNameInput = document.getElementById("ownerName");
const speciesInput = document.getElementById("species");
const breedInput = document.getElementById("breed");

const petList = [];

class Contact {
  constructor(_petNameInput, _ownerNameInput, _speciesInput, _breedInput) {
    this.petNameInput = _petNameInput;
    this.ownerNameInput = _ownerNameInput;
    this.speciesInput = _speciesInput;
    this.breedInput = _breedInput;
  }
}


//funzione per aggiungere alla lista il nuovo pet e tutti i suoi attributi

