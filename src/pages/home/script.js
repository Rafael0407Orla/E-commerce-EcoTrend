function carregarProdutos(data) {
  const container = document.getElementById("product-container");
  container.innerHTML = "";

  data.forEach((produto) => {
    const productHTML = `
        <div class="col">
         <a href="./src/pages/detalhes/indexDetalhes.html?id=${
           produto.id
         }" class="text-decoration-none">

          <div class="card h-100">
            <div class="card--img">
            <img src="${produto.capa}" class="card-img-top">
            </div>
            <div class="card-body">
              <h5 class="card-title">${produto.nome}</h5>
              <p class="card-text">${produto.descricao}</p>
              <p class="card-text text-primary"><strong>R$ ${produto.preco.toFixed(
                2
              )}</strong></p>
            </div>
            <div class="card-footer">
              <button href="#" class="btn btn-primary buy-button ">Comprar</button>
            </div>
          </div>
          </a>
        </div>
      `;

    container.innerHTML += productHTML;
  });
}

function getProducts() {
  fetch("./src/products.json")
    .then((response) => response.json())
    .then((data) => {
      carregarProdutos(data);
      listProducts = data;
    })
    .catch((error) => console.error("Error loading JSON file", error));
}

document.addEventListener("DOMContentLoaded", getProducts);
