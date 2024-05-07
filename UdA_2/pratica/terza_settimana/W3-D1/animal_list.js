const petNameInput = document.getElementById("name");
const ownerNameInput = document.getElementById("ownerName");
const speciesInput = document.getElementById("species");
const breedInput = document.getElementById("breed");

const petList = [];

class Animal {
  constructor(_petNameInput, _ownerNameInput, _speciesInput, _breedInput) {
    this.petNameInput = _petNameInput;
    this.ownerNameInput = _ownerNameInput;
    this.speciesInput = _speciesInput;
    this.breedInput = _breedInput;
  }
}


//funzione per aggiungere alla lista il la card nuovo pet e tutti i suoi attributi

// const createAnimal = function (){
//
//   const animalRow = document.getElementById("animal-row");
//   animalRow.innerHTML = " "
//   petList.forEach(element => {
//     const newDiv = document.createElement('div')
//     newDiv.classList.add("col")
//   });
//
// }
