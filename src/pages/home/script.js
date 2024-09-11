// Função para carregar os produtos
function carregarProdutos(data) {
  const container = document.getElementById("product-container"); // Seleciona o contêiner onde os produtos serão inseridos
  container.innerHTML = ""; // Limpa o conteúdo anterior

  data.forEach((produto) => {
    // Cria o HTML do card do produto
    const productHTML = `
        <div class="col">
                      <a href="../detalhes/index.html?id=${produto.id}">

          <div class="card h-100">
            <img src="${produto.capa}" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">${produto.nome}</h5>
              <p class="card-text">${produto.descricao}</p>
              <p class="card-text text-primary"><strong>R$ ${produto.preco.toFixed(
                2
              )}</strong></p>
            </div>
            <div class="card-footer bg-white">
              <a href="#" class="btn btn-primary buy-button">Comprar</a>
            </div>
          </div>
          </a>
        </div>
      `;

    // Adiciona o produto ao contêiner
    container.innerHTML += productHTML;
  });
}

// Função para buscar os produtos
function getProducts() {
  fetch("../../products.json")
    .then((response) => response.json())
    .then((data) => {
      carregarProdutos(data);
      listProducts = data;
    })
    .catch((error) => console.error("Error loading JSON file", error));
}

// Quando a página carregar, chamar getProducts()
document.addEventListener("DOMContentLoaded", getProducts);
