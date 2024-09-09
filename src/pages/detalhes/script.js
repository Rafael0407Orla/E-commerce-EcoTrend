function getProductIdFromURL() {
      const params = new URLSearchParams(window.location.search);
      return params.get('id');
  }
  
  // Função para carregar os detalhes do produto
  function loadProductDetails() {
      fetch('../../products.json')
          .then(response => response.json())
          .then(products => {
              const productId = getProductIdFromURL();
              const product = products.find(p => p.id == productId);
  
              if (product) {
                const imgSlider = document.getElementsByClassName('carousel-item');
                const productTitle = document.getElementById('productNameTitle');
                const price = document.getElementById('labelPrice');
                const type = document.getElementById('typeTag');
                const marca = document.getElementById('marcaTag');
                const category = document.getElementById('categoryTag');
                const title = document.title;

                imgSlider.innerHTML = `
                <img class="d-block w-100" src="${product.img}">
                `;
                productTitle.innerText = product.nome;
                price.innerText = "R$"+product.preco;
                type.innerText = product.tipo;
                marca.innerText = product.marca;
                category.innerText = product.categoria;
                title.innerText = product.nome;

              }
          })
          .catch(error => console.error('Error loading product details:', error));
  }
  
  // Carregar os detalhes do produto ao carregar a página
  window.onload = loadProductDetails;