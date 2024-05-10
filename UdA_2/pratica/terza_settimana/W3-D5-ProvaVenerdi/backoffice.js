const getProductData = async (productId) => {
  try {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/product/${productId}`
    );
    if (!response.ok) {
      throw new Error("Errore nel recupero dei dettagli del prodotto");
    }
    const product = await response.json();
    console.log("DETTAGLI RECUPERATI", product);

    // Popoliamo il form con i dati del prodotto
    document.getElementById("name").value = product.name;
    document.getElementById("description").value = product.description;
    document.getElementById("brand").value = product.brand;
    document.getElementById("image").value = product.imageUrl;
    document.getElementById("price").value = product.price;

    return product;
  } catch (err) {
    console.log("ERRORE", err);
  }
};

const submitProduct = async (e) => {
  e.preventDefault();

  const nameInput = document.getElementById("name");
  const descriptionInput = document.getElementById("description");
  const brandInput = document.getElementById("brand");
  const imageInput = document.getElementById("image");
  const priceInput = document.getElementById("price");

  const productFromForm = {
    name: nameInput.value,
    description: descriptionInput.value,
    brand: brandInput.value,
    imageUrl: imageInput.value,
    price: parseFloat(priceInput.value),
  };

  console.log("PRODOTTO DA INVIARE ALLE API", productFromForm);

  const productId = new URLSearchParams(location.search).get("productId");
  let URL = "https://striveschool-api.herokuapp.com/api/product";
  let methodToUse = "POST";

  if (productId) {
    URL = `https://striveschool-api.herokuapp.com/api/product/${productId}`;
    methodToUse = "PUT";
  }

  try {
    const response = await fetch(URL, {
      method: methodToUse,
      body: JSON.stringify(productFromForm),
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNlMDk4NDgxODQ0MjAwMTUzNzVhMjYiLCJpYXQiOjE3MTUzNDE3MDAsImV4cCI6MTcxNjU1MTMwMH0.2AdEt-c5ktlRNKzljjp-mNoUwWIjksN3Dsjl_DeBons",
        "Content-type": "application/json",
      },
    });
    if (response.ok) {
      alert(`Prodotto ${productId ? "modificato" : "creato"}!`);
    } else {
      throw new Error("Errore nel salvataggio della risorsa");
    }
  } catch (err) {
    console.log("ERRORE", err);
    alert(err);
  }
};

const productId = new URLSearchParams(location.search).get("productId");
if (productId) {
  getProductData(productId)
    .then(() => {
      document.querySelector(".btn-primary").innerText = "MODIFICA";
    })
    .catch((err) => console.error(err));
}

// document.getElementById('erase').addEventListener("click", function() {
//   nameInput.innerHTML = " "
//   descriptionInput.innerHTML = " "
//   brandInput.innerHTML = " "
//   imageInput.innerHTML = " "
//   price.innerHTML = " "

// })


document
  .getElementById("product-form")
  .addEventListener("submit", submitProduct);
