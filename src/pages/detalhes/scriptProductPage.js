function getProductIdFromURL() {
      const params = new URLSearchParams(window.location.search);
      return params.get('id');
  }
  
  // Função para carregar os detalhes do produto
  function loadProductDetails() {
      fetch('products.json')
          .then(response => response.json())
          .then(products => {
              const productId = getProductIdFromURL();
              const product = products.find(p => p.id == productId);
  
              if (product) {
                  const productDetailDiv = document.getElementById('product-detail');
                  document.title = product.nome
                  productDetailDiv.innerHTML = `
                      <h2>${product.nome}</h2>
                      <p>Price: $${product.preco}</p>
                      <p>${product.descricao}</p>
                      <p>${product.tipo}</p>
                      <p>${product.marca}</p>
                      <p>${product.categoria}</p>
                  `;
              } else {
                  document.getElementById('product-detail').innerHTML = '<p>Product not found.</p>';
              }
          })
          .catch(error => console.error('Error loading product details:', error));
  }
  
  // Carregar os detalhes do produto ao carregar a página
  window.onload = loadProductDetails;