function getProductIdFromURL() {
      const params = new URLSearchParams(window.location.search);
      return params.get('id');
  }
  
function loadProductDetails() {
    fetch('../../products.json')
        .then(response => response.json())
        .then(products => {
            const productId = getProductIdFromURL();
            const product = products.find(p => p.id == productId);

            if (product) {
            const imgSlider = document.querySelector('.carousel-inner');
            const productTitle = document.getElementById('productNameTitle');
            const price1 = document.getElementById('labelPrice1');
            const price2 = document.getElementById('labelPrice2');
            const type = document.getElementById('typeTag');
            const marca = document.getElementById('marcaTag');
            const category = document.getElementById('categoryTag');
            const description = document.getElementById('productDescription')
            document.title = product.nome

            imgSlider.innerHTML = '';

            product.img.forEach((imgSrc, index) => {
                const activeClass = index === 0 ? 'active' : '';
                const item = `
                    <div class="carousel-item ${activeClass}">
                        <img class="d-block w-100" src="${imgSrc}" alt="Imagem ${index + 1}">
                    </div>
                `;
                imgSlider.innerHTML += item;
            });

            productTitle.innerText = product.nome;
            price1.innerText = "R$"+product.preco;
            price2.innerText = "R$"+(product.preco/12).toFixed(2);
            type.innerText = "Tipo:  " + product.tipo;
            marca.innerText = "Marca:  " + product.marca;
            category.innerText = "Categoria:  " +product.categoria;
            description.innerText = product.descricao

            }
        })
        .catch(error => console.error('Error loading product details:', error));
}

window.onload = loadProductDetails;

function selectRadio(value) {
    const allMethods = document.querySelectorAll('.paymentMethod');
    allMethods.forEach(method => method.classList.remove('selected'));
    const selected = document.getElementById('radio' + value);
    selected.checked = true;
    const paymentDiv = selected.closest('.paymentMethod');
    paymentDiv.classList.add('selected');
}