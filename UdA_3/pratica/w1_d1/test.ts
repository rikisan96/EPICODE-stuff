interface Smartphoned {
  credito: number;
  numeroChiamata: number;
}

class User implements Smartphoned {
  credito: number = 0;
  numeroChiamata: number = 0;
  costoAlMinuto: number = 0.2;
  nome: string;
  cognome: string;

  constructor(_nome: string, _cognome: string) {
    this.nome = _nome;
    this.cognome = _cognome;
  }

  set ricarica(n: number) {
    this.credito += n;
  }

  chiamata(minutiChiamata: number) {
    let costo = this.costoAlMinuto * minutiChiamata;
    this.credito -= costo;
    this.numeroChiamata += minutiChiamata;
  }

  getNumeroChiamate(): number {
    return this.numeroChiamata;
  }

  azzeraChiamate(): void {
    this.numeroChiamata = 0;
  }

  get chiamata404(): string {
    return `Il credito residuo e di : ${this.credito} euro `;
  }
}

const user1 = new User("mario", "Fratm");
console.log(user1.credito);
user1.ricarica = 10;
console.log(user1.credito);
user1.chiamata(10);
console.log(user1.chiamata404);
