

function getProducts() {
  fetch("../../products.json")
    .then((response) => response.json())
    .then((data) => {
      mostrarProdutosPorCategoria(data, categoria);
      console.log(data);
    })
    .catch((error) => console.error("Error loading JSON file", error));
}

var categoria;
var maxPrice;

function getCategoriaFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("categoria");
}

function mostrarProdutosPorCategoria(data,
  categoria,
  precoMaximo = Infinity,
  marcaSelecionada = "Todas"
) {
  // Filtra produtos pela categoria
  const produtosFiltrados = data.filter(
    (produto) => produto.categoria === categoria
  );

  // Aplica filtros de preço e marca
  const produtosFiltradosPorFiltros = produtosFiltrados.filter((produto) => {
    const dentroDoIntervaloDePreco = produto.preco <= precoMaximo;
    const marcaCorreta =
      marcaSelecionada === "Todas" || produto.marca === marcaSelecionada;
    return dentroDoIntervaloDePreco && marcaCorreta;
  });

  const categoriaNomeElement = document.getElementById("categoria-nome");
  const produtosListaElement = document.getElementById("produtos-lista");

  categoriaNomeElement.textContent = categoria || "Todas";

  produtosListaElement.innerHTML = "";

  if (produtosFiltradosPorFiltros.length > 0) {
    produtosFiltradosPorFiltros.forEach((produto) => {
      const produtoHtml = `
                  <div class="product-card">
                      <div class="product-image">
                          <img src="defaultImage.jpg" alt="Imagem do ${produto.nome}">
                      </div>
                      <div class="product-info">
                          <h2 class="product-title">${produto.nome}</h2>
                          <p class="product-description">${produto.descricao}</p>
                          <p class="product-price">R$ ${produto.preco}</p>
                          <p class="product-price">R$ ${produto.categoria}</p>
                          <p class="product-price">R$ ${produto.marca}</p>
                          <button class="buy-button">Comprar</button>
                      </div>
                  </div>
              `;
      produtosListaElement.innerHTML += produtoHtml;
    });
  } else {
    produtosListaElement.innerHTML =
      "<p>Nenhum produto encontrado para esta categoria.</p>";
  }
}

function aplicarFiltros() {
  const precoMaximo = parseFloat(document.getElementById("preco-maximo").value);
  const marcaSelecionada = document.getElementById("marca-selecionada").value;
  mostrarProdutosPorCategoria(categoria, precoMaximo, marcaSelecionada);
}
function atualizarValorRange() {
  const precoMaximoInput = document.getElementById("preco-maximo");
  const precoMaximoValor = document.getElementById("preco-maximo-valor");
  precoMaximoValor.textContent = precoMaximoInput.value;
}

document
  .getElementById("preco-maximo")
  .addEventListener("input", atualizarValorRange);

// Chame a função para definir o valor inicial
atualizarValorRange();

addEventListener("DOMContentLoaded", function () {
  categoria = getCategoriaFromURL();
  getProducts();
});
