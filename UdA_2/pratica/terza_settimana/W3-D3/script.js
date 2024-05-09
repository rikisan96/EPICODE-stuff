//contatto il server con una fetch

fetch("https://striveschool-api.herokuapp.com/books")
  .then((response) => {
    console.log("Funziona Tutto!", response);
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Errore nella chiamata!");
    }
  })
  .then((books) => {
    console.log("Libri: ", books);
    const cardImg = document.getElementsByClassName("card-img");
    const cardTitle = document.getElementsByClassName("cardTitle");
    const cardPrice = document.getElementsByClassName("cardPrice");
    const colonnaCards = document.querySelectorAll("div");

    console.log(colonnaCards);

    books.forEach((element) => {
      const libreria = books.map((libri) => {
        return `libri numero ${libri}`;
      });
    });
  })
  .catch((error) => {
    console.log("POLIZIIIAAAA", error);
  });
