import { RenderCards } from './components/cards.js';
import { cartList } from './components/cartList.js';
import { clearCartFromLocalStorage, initLocalStorage } from '../storage/storage.js';
import { getProducts } from './services/api.js';
import { showToast } from './components/toast.js';

function clearCart() {
  clearCartFromLocalStorage();
  document.dispatchEvent(new Event('cart:updated'));
}

initLocalStorage();

let allProducts = [];

getProducts().then((products) => {
  allProducts = products;
  RenderCards(allProducts);

  const inputSearch = document.getElementById('inputSearch');
  const categoryButtons = [
    { id: 'all', value: '' },
    { id: 'electronics', value: 'electronics' },
    { id: 'jewelery', value: 'jewelery' },
    { id: 'mens-clothing', value: "men's clothing" },
    { id: 'women-s-clothing', value: "women's clothing" }
  ];

  if (inputSearch) {
    inputSearch.addEventListener('input', (event) => {
      const query = event.target.value.trim().toLowerCase();
      const filteredProducts = allProducts.filter((p) =>
        p.title.toLowerCase().includes(query)
      );

      RenderCards(filteredProducts);
    });
  }

  categoryButtons.forEach((category) => {
    const button = document.getElementById(category.id);

    if (button) {
      button.addEventListener('click', () => {
        const filteredProducts = allProducts.filter((p) => {
          if (!category.value) return true;
          return p.category === category.value;
        });

        RenderCards(filteredProducts);
      });
    }
  });
});



cartList();

const finishPurchaseBtn = document.getElementById('finishPurchaseBtn');
const clearCartBtn = document.getElementById('clearCartBtn');

if (finishPurchaseBtn) {
  finishPurchaseBtn.addEventListener('click', () => {
    clearCart();
    showToast('Compra realizada!', 'success');
  });
}

if (clearCartBtn) {
  clearCartBtn.addEventListener('click', () => {
    clearCart();
  });
}

document.addEventListener('cart:updated', () => {
  cartList();
});