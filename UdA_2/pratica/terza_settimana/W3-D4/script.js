const loadImages = (searchKeyword) =>
  fetch("https://api.pexels.com/v1/search?query=" + searchKeyword, {
    headers: {
      Authorization: "xIMO8U8wKkk7kIjnmZrhxZe8rsgqBbd3sur3Ecpt5vAs2Szf7nQVqztb",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else throw new Error("Sono morto");
    })
    .then(({ photos }) => {
      console.log(photos);
    });

document.querySelector("#loadPrimary").addEventListener("click", () => {
  loadImages("cat");
});


