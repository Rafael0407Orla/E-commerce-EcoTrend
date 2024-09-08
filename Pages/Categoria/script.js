const produtos = [
    {
      id: 1,
      nome: "Camiseta de Algodão Orgânico",
      preco: 89.9,
      descricao: "Camiseta feita de algodão 100% orgânico, suave ao toque e sustentável.",
      tipo: "Roupas",
      marca: "EcoWear",
      categoria: "roupas"
    },
    {
      id: 2,
      nome: "Bolsa de Linho Reciclado",
      preco: 129.9,
      descricao: "Bolsa estilosa e funcional feita de linho reciclado, com alças de fibra de bambu.",
      tipo: "Acessórios",
      marca: "GreenStyle",
      categoria: "roupas"
    },
    {
      id: 3,
      nome: "Shampoo Natural com Óleo de Coco",
      preco: 34.5,
      descricao: "Shampoo sem químicos agressivos, com óleo de coco e fragrância natural.",
      tipo: "Beleza",
      marca: "PureCare",
      categoria: "cuidados"
    },
    {
      id: 4,
      nome: "Desodorante Vegano de Lavanda",
      preco: 24.9,
      descricao: "Desodorante vegano e natural, com extrato de lavanda, livre de alumínio.",
      tipo: "Cuidados Pessoais",
      marca: "NaturalScent",
      categoria: "cuidados"
    },
    {
      id: 5,
      nome: "Escova de Dentes de Bambu",
      preco: 19.9,
      descricao: "Escova de dentes ecológica feita de bambu biodegradável.",
      tipo: "Cuidados Pessoais",
      marca: "EcoDent",
      categoria: "cuidados"
    },
    {
      id: 6,
      nome: "Toalhas de Algodão Orgânico",
      preco: 99.9,
      descricao: "Toalhas super macias e feitas de algodão orgânico, ideal para o uso diário.",
      tipo: "Casa",
      marca: "GreenLiving",
      categoria: "casa"
    },
    {
      id: 7,
      nome: "Lâmpada LED de Baixo Consumo",
      preco: 39.9,
      descricao: "Lâmpada LED com alta durabilidade e baixo consumo de energia.",
      tipo: "Tecnologia Verde",
      marca: "EcoTech",
      categoria: "casa"
    },
    {
      id: 8,
      nome: "Carregador Solar Portátil",
      preco: 149.9,
      descricao: "Carregador portátil alimentado por energia solar, ideal para viagens.",
      tipo: "Tecnologia Verde",
      marca: "SunCharge",
      categoria: "casa"
    },
    {
      id: 9,
      nome: "Copo Reutilizável de Fibra de Bambu",
      preco: 24.9,
      descricao: "Copo leve e reutilizável, feito de fibra de bambu, ideal para o dia a dia.",
      tipo: "Casa",
      marca: "EcoHome",
      categoria: "casa"
    },
    {
      id: 10,
      nome: "Óculos de Sol de Madeira Reciclada",
      preco: 199.9,
      descricao: "Óculos de sol feitos com armação de madeira reciclada, com proteção UV.",
      tipo: "Acessórios",
      marca: "WoodVision",
      categoria: "roupas"
    }
  ]
  

function getCategoriaFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("categoria");
}

//function loadJSON() {
fetch("products.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Erro ao carregar o arquivo JSON");
    }
    return response.json(); // Convertendo a resposta para JSON
  })
  .then((data) => {
    console.log(data);
    //displayData(data);
  })
  .catch((error) => {
    console.error("Erro:", error);
  });
//}

function mostrarProdutosPorCategoria(categoria) {
  const produtosFiltrados = produtos.filter(
    (produto) => produto.categoria === categoria
  );

  const categoriaNomeElement = document.getElementById("categoria-nome");
  const produtosListaElement = document.getElementById("produtos-lista");

  categoriaNomeElement.textContent = categoria || "Todas";

  produtosListaElement.innerHTML = "";

  if (produtosFiltrados.length > 0) {
    produtosFiltrados.forEach((produto) => {
      const produtoHtml = `
                <div class="product-card">
                    <div class="product-image">
                        <img src="${produto.imagem}" alt="Imagem do ${produto.nome}">
                    </div>
                    <div class="product-info">
                        <h2 class="product-title">${produto.nome}</h2>
                        <p class="product-description">${produto.descricao}</p>
                        <p class="product-price">R$ ${produto.preco}</p>
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

window.onload = function () {
  const categoria = getCategoriaFromURL();
  //loadJSON();
  console.log(categoria);
  mostrarProdutosPorCategoria(categoria);
};
