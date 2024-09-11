# Integrantes
- Rafael Panhoca        || RM: 555014
- Victor Hugo Xavier    || RM: 559094
- João Leodoro          || RM: 555052
- Guilherme de Oliveira || RM: 558797
- Tatiana Thamye Oseko  || RM: 554605

# EcoTrend E-commerce

**EcoTrend** é uma plataforma de e-commerce que exibe produtos de forma dinâmica, permitindo fácil gerenciamento de produtos através de um arquivo `JSON`. O design é construído utilizando **Bootstrap** para garantir uma experiência responsiva e consistente em diferentes dispositivos.

## Funcionalidades Principais

### 1. Carregamento Dinâmico de Produtos
- Os produtos são gerenciados e carregados dinamicamente a partir do arquivo `JSON` localizado em `src/products.json`. Isso facilita a atualização e manutenção dos itens exibidos sem a necessidade de modificar diretamente o código HTML.
- O arquivo JSON contém informações essenciais como nome do produto, preço, imagem, e descrição.

### 2. Design Responsivo com Bootstrap
- A interface do usuário é construída utilizando **Bootstrap**, proporcionando um layout responsivo que se adapta automaticamente a diferentes tamanhos de tela.
- Componentes reutilizáveis como navegação, grid e cards são integrados para oferecer uma experiência consistente.

### 3. Páginas de E-commerce
- **Página Inicial**: Exibe uma visão geral dos produtos disponíveis.
- **Página de Categorias**: Lista os produtos organizados por categoria, oferecendo filtros fáceis de usar.
- **Página de Detalhes do Produto**: Mostra informações detalhadas sobre um produto selecionado, incluindo imagem, preço, descrição, e avaliações.
- **Página de Contato**: Formulário para que os usuários entrem em contato com a equipe de suporte ou vendas.

### 4. Navegação e Estrutura
- A barra de navegação, localizada no topo de cada página, permite aos usuários navegar facilmente entre as principais seções do site.
- O rodapé contém informações de contato e links adicionais.

## Estrutura do Projeto

O projeto está estruturado de forma organizada para facilitar o desenvolvimento, manutenção e escalabilidade.

```
E-commerce-EcoTrend/
│
├── src/
│   ├── assets/
│   │   └── images/                # Imagens usadas no site, incluindo produtos e ícones
│   ├── pages/
│   │   ├── home/                  # Página inicial (home)
│   │   ├── categoria/             # Página de categorias
│   │   ├── detalhes/              # Página de detalhes do produto
│   │   └── contato/               # Página de contato
│   ├── products.json              # Arquivo JSON com informações dos produtos
│   └── utils/
│       ├── bootstrap.css          # Estilos do Bootstrap
│       ├── navBar.css             # Estilos personalizados para a barra de navegação
│       └── footer.css             # Estilos personalizados para o rodapé
│
└── READ.ME                        # Este arquivo
```

### Arquivo JSON de Produtos
O arquivo `products.json` segue uma estrutura simples para definir os produtos, que inclui informações como:
```json
[
  {
    "id": 1,
    "nome": "Produto Exemplo",
    "preco": 100.00,
    "imagem": "assets/images/produto1.jpg",
    "descricao": "Uma breve descrição do produto."
  },
  {
    "id": 2,
    "nome": "Outro Produto",
    "preco": 150.00,
    "imagem": "assets/images/produto2.jpg",
    "descricao": "Descrição do segundo produto."
  }
]
```

### Estilização e Responsividade
- **Bootstrap** é utilizado como base para a estilização, garantindo que o site seja **responsivo** em diferentes dispositivos (desktop, tablet e mobile).
- Estilos adicionais são aplicados para personalizar a aparência das páginas (localizados em `utils/navBar.css` e `utils/footer.css`).

## Como Executar o Projeto

1. **Clonar o Repositório**
   ```bash
   git clone https://github.com/seu-usuario/E-commerce-EcoTrend.git
   cd E-commerce-EcoTrend
   ```

2. **Visualizar o Site**
   - Abra o arquivo `index.html` no root do projeto em um navegador web.
   - Você também pode visualizar o site pelo GitHub Pages [clicando aqui](https://rafael0407orla.github.io/E-commerce-EcoTrend/)

3. **Alterar Produtos**
   - Para atualizar os produtos exibidos, edite o arquivo `src/products.json`. Basta adicionar ou remover entradas no formato JSON, conforme necessário.

## Requisitos

- **Navegador Web**: O projeto pode ser executado diretamente em um navegador moderno, sem a necessidade de um servidor.
- **Bootstrap**: Já incluído localmente no projeto para estilos responsivos.

## Tecnologias Utilizadas

- **HTML5**: Estrutura semântica do projeto.
- **CSS3 & Bootstrap**: Para estilização responsiva e layout.
- **JavaScript**: Manipulação dinâmica dos produtos e interatividade.
- **JSON**: Formato de dados para o carregamento dos produtos.

---

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para fazer um _fork_ do projeto, criar um novo branch, e abrir um _pull request_ com suas melhorias.

---
