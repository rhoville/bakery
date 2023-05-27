var jumbotron = document.getElementById('jumbotron');
var images = ['images/croissants_banner.jpg', 'images/bake.gif', 'images/bake2.gif'];
var currentIndex = 0;

function changeBackground() {
  jumbotron.style.backgroundImage = `url(${images[currentIndex]})`;
  currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackground, 5000); 

const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
    const cartButton = document.querySelector('.add-to-cart');

    addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        const productName = button.getAttribute('data-product');
        // Add the product to the cart logic
        // Example: cart.add(productName);

        // Show confirmation message
        cartButton.classList.add('show');
        setTimeout(() => {
          cartButton.classList.remove('show');
        }, 2000);
      });
    });