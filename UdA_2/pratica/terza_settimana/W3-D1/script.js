class Utente {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location
  }
  comparison(_secondoTizio) {
    if (this.age > _secondoTizio.age) {
      console.log(`${this.firstName} e' piu vecchio`);
    } else console.log(`${_secondoTizio.firstName} e' piu vecchio`);
  }
}

let giacomino = new Utente("Giacomino", " Puzzone", 19, "SEATTLE");
console.log(giacomino)

let Fratm = new Utente ("Fratm", " ", 2228, "Un po ovunque")
console.log(Fratm)

console.log(giacomino.comparison(Fratm))

