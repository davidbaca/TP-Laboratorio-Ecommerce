import { savetoLocalStorage } from '../../storage/storage.js';
import { contador } from './contador.js';
import { showToast } from './toast.js';

export function Modal(prod) {
  const container = document.querySelector('#productModal');
  let quantity = 1;

  if (!container) return;

  const template = `
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5">${prod.title}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body">
          <div class="row">
            <div class="col-md-6">
              <img src="${prod.image}" class="card-img-top" alt="${prod.title}" style="height: 300px; object-fit: contain;">
            </div>

            <div class="col-md-6">
              <p class="card-text">${prod.description}</p>
              ${contador(prod.id)}
            </div>
            <div class="col-md-12 d-flex justify-content-end">
              <p class="card-text">Precio: USD ${prod.price}</p>
            </div>
          </div>
        </div>

        <div class="modal-footer d-flex justify-content-between align-items-center">
          <div id="cartMessage-${prod.id}" class="text-success fw-bold" style="display: none;">Listo!</div>
          <div>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            <button type="button" class="btn btn-primary" id="addToCartBtn-${prod.id}">Agregar al Carrito</button>
          </div>
        </div>
      </div>
    </div>
  `;

  container.innerHTML = template;

  const quantitySpan = document.querySelector(`#cantidad-${prod.id}`);
  const incrementBtn = document.querySelector(`#incrementBtn-${prod.id}`);
  const decrementBtn = document.querySelector(`#decrementBtn-${prod.id}`);
  const addToCartBtn = document.querySelector(`#addToCartBtn-${prod.id}`);

  if (incrementBtn && decrementBtn && quantitySpan) {
    incrementBtn.addEventListener('click', () => {
      quantity += 1;
      quantitySpan.textContent = quantity;
    });

    decrementBtn.addEventListener('click', () => {
      if (quantity > 1) {
        quantity -= 1;
        quantitySpan.textContent = quantity;
      }
    });
  }

  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', () => {
      savetoLocalStorage({ ...prod, quantity });
      document.dispatchEvent(new Event('cart:updated'));
      const cartMessage = document.querySelector(`#cartMessage-${prod.id}`);
      if (cartMessage) {
        cartMessage.style.display = 'block';
      }
      showToast(`${prod.title} agregado al carrito`, 'dark');
    });
  }

  const bootstrapModal = new bootstrap.Modal(container);
  bootstrapModal.show();
}
