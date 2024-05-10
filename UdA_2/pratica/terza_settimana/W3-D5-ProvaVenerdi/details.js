const addressBarContent = new URLSearchParams(location.search);
console.log(addressBarContent);
const eventId = addressBarContent.get("eventId");

const getEventData = function () {
  fetch(`https://striveschool-api.herokuapp.com/api/product/${eventId}`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNlMDk4NDgxODQ0MjAwMTUzNzVhMjYiLCJpYXQiOjE3MTUzNDE3MDAsImV4cCI6MTcxNjU1MTMwMH0.2AdEt-c5ktlRNKzljjp-mNoUwWIjksN3Dsjl_DeBons",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nel recupero dei dettagli dell'evento");
      }
    })
    .then((event) => {
      console.log("DETTAGLI RECUPERATI", event);
      document.getElementById("name").innerText = event.name;
      document.getElementById("description").innerText = event.description;
      document.getElementById("time").innerText = event.time;
      document.getElementById("price").innerText = event.price + "€";
    })
    .catch((err) => {
      console.log("ERRORE", err);
    });
};

getEventData();

const deleteEvent = function () {
  fetch(`https://striveschool-api.herokuapp.com/api/product/${eventId}`, {
    method: "DELETE",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNlMDk4NDgxODQ0MjAwMTUzNzVhMjYiLCJpYXQiOjE3MTUzNDE3MDAsImV4cCI6MTcxNjU1MTMwMH0.2AdEt-c5ktlRNKzljjp-mNoUwWIjksN3Dsjl_DeBons",
    },
  })
    .then((response) => {
      if (response.ok) {
        alert("RISORSA ELIMINATA");
        location.assign("pizzamania.html");
      } else {
        alert("ERRORE - RISORSA NON ELIMINATA");
      }
    })
    .catch((err) => {
      console.log("ERR", err);
    });
};

const editButton = document.getElementById("edit-button");
editButton.addEventListener("click", function () {
  location.assign(`backoffice.html?eventId=${eventId}`);
});
