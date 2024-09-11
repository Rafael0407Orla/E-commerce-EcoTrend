var listProducts;

function getProducts() {
  fetch("../../products.json")
    .then((response) => response.json())
    .then((data) => {
      mostrarProdutosPorCategoria(data, categoria);
      listProducts = data;
    })
    .catch((error) => console.error("Error loading JSON file", error));
}

var categoria;

function getCategoriaFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("categoria");
}

function mostrarProdutosPorCategoria(
  data,
  categoria,
  precoMaximo = Infinity,
  marcaSelecionada = "Todas"
) {
  const produtosFiltrados = data.filter(
    (produto) => produto.categoria === categoria || categoria === null
  );

  const produtosFiltradosPorFiltros = produtosFiltrados.filter((produto) => {
    const dentroDoIntervaloDePreco = produto.preco <= precoMaximo;
    const marcaCorreta =
      marcaSelecionada === "Todas" || produto.marca === marcaSelecionada;
    return dentroDoIntervaloDePreco && marcaCorreta;
  });

  const categoriaNomeElement = document.getElementById("categoria-nome");
  const produtosListaElement = document.getElementById("produtos-lista");

  produtosListaElement.innerHTML = "";

  if (produtosFiltradosPorFiltros.length > 0) {
    produtosFiltradosPorFiltros.forEach((produto) => {
      const produtoHtml = `
          <div class="product-card">
            <div class="card h-100">
              <div id="productImg">
                <a href="../detalhes/indexDetalhes.html?id=${produto.id}">
                  <img src="${produto.capa}" class="card-img-top" alt="Imagem do ${produto.nome}">
                </a>
              </div>
              <div class="card-body">
                <h5 class="card-title">${produto.nome}</h5>
                <p class="card-text">${produto.descricao}</p>
                <p class="card-text text-muted">R$ ${produto.preco}</p>
                <p class="card-text text-muted">Marca: ${produto.marca}</p>
              </div>
              <div class="card-footer text-center">
                <a href="" class="btn btn-success">Adicionar ao carrinho</a>
              </div>
            </div>
            </a>
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
  mostrarProdutosPorCategoria(
    listProducts,
    categoria,
    precoMaximo,
    marcaSelecionada
  );
}
function atualizarValorRange() {
  const precoMaximoInput = document.getElementById("preco-maximo");
  const precoMaximoValor = document.getElementById("preco-maximo-valor");
  precoMaximoValor.textContent = `R$:${precoMaximoInput.value},00`;
}

document
  .getElementById("preco-maximo")
  .addEventListener("input", atualizarValorRange);

atualizarValorRange();

addEventListener("DOMContentLoaded", function () {
  categoria = getCategoriaFromURL();
  getProducts();
});