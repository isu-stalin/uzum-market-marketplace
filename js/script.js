fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => renderProducts(data.products));

function renderProducts(products) {
  const container = document.getElementById("product-list");
  container.innerHTML = "";

  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
  <a href="../pages/product.html?id=${product.id}" class="product-image-link">
    <img src="${product.thumbnail}" alt="${product.title}" />
  </a>
  <h2>${product.title}</h2>
  <mark>$${product.price}</mark>
`;
    container.appendChild(card);
  });
}
