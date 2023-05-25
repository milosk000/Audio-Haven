
// Fetch the product data from the JSON file
fetch('products.json')
  .then(response => response.json())
  .then(products => {
    // Process the product data
    displayProducts(products);
  })
  .catch(error => {
    console.error('Error fetching product data:', error);
  });

// Display the products on the page
function displayProducts(products) {
  const shopContainer = document.getElementById('shop');

  products.forEach(product => {
    const productDiv = createProductElement(product);
    shopContainer.appendChild(productDiv);
  });
}

// Create an individual product element
function createProductElement(product) {
  const productDiv = document.createElement('div');
  productDiv.classList.add('product');

  const productImage = document.createElement('img');
  productImage.src = product.image;

  const productName = document.createElement('h3');
  productName.textContent = product.name;

  const productPrice = document.createElement('p');
  productPrice.textContent = product.price;

  productDiv.appendChild(productImage);
  productDiv.appendChild(productName);
  productDiv.appendChild(productPrice);

  return productDiv;
}