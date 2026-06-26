import { getCartFromLocalStorage, removeFromLocalStorage } from '../../storage/storage.js';

export function cartList() {
  const offcanvasBody = document.querySelector('.offcanvas-body');

  if (!offcanvasBody) return;

  const dataStorage = getCartFromLocalStorage();

  if (!dataStorage.length) {
    offcanvasBody.innerHTML = '<p class="text-muted">Tu carrito está vacío.</p>';
    return;
  }

  const template = dataStorage.map((item) => `
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${item.image}" class="img-fluid rounded-start" alt="${item.title}">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title text-truncate">${item.title}</h5>
            <p class="card-text">Precio: USD ${item.price}</p>
            <p class="card-text">Cantidad: ${item.quantity || 1}</p>
            <button class="btn btn-sm btn-outline-secondary mt-2" data-id="${item.id}" aria-label="Eliminar producto" title="Eliminar producto">
              <i class="bi bi-trash3"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  offcanvasBody.innerHTML = template;

  offcanvasBody.querySelectorAll('button[data-id]').forEach((button) => {
    button.addEventListener('click', () => {
      const itemId = Number(button.getAttribute('data-id'));
      removeFromLocalStorage(itemId);
      document.dispatchEvent(new Event('cart:updated'));
    });
  });
}
