var User = /** @class */ (function () {
    function User(_nome, _cognome) {
        this.credito = 0;
        this.numeroChiamata = 0;
        this.costoAlMinuto = 0.2;
        this.nome = _nome;
        this.cognome = _cognome;
    }
    Object.defineProperty(User.prototype, "ricarica", {
        set: function (n) {
            this.credito += n;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.chiamata = function (minutiChiamata) {
        var costo = this.costoAlMinuto * minutiChiamata;
        this.credito -= costo;
        this.numeroChiamata += minutiChiamata;
    };
    User.prototype.getNumeroChiamate = function () {
        return this.numeroChiamata;
    };
    User.prototype.azzeraChiamate = function () {
        this.numeroChiamata = 0;
    };
    Object.defineProperty(User.prototype, "chiamata404", {
        get: function () {
            return "Il credito residuo e di : ".concat(this.credito, " euro ");
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var user1 = new User("mario", "Fratm");
console.log(user1.credito);
user1.ricarica = 10;
console.log(user1.credito);
user1.chiamata(10);
console.log(user1.chiamata404);
