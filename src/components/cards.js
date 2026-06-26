import { Modal } from './modal.js';

function getFakeRating(productId) {
  return (4.2 + (productId % 8) * 0.1).toFixed(1);
}

export function RenderCards(products = []) {
  const productList = document.querySelector('#product-list');

  if (!productList) return;

  if (!products.length) {
    productList.innerHTML = '<div class="col-12"><p class="text-muted">No se encontraron productos.</p></div>';
    return;
  }

  let template = '';

  products.forEach((p) => {
    const fakeRating = getFakeRating(p.id);

    template += `
      <div class="col">
        <div class="card" style="width: 300px;">
          <img src="${p.image}" class="card-img-top" alt="${p.title}" style="height: 300px; object-fit: contain;">
          <div class="card-body">
            <h5 class="card-title text-truncate">${p.title}</h5>
            <p class="card-rating"><span class="star">★</span> ${fakeRating}</p>
          </div>
          <div class="card-footer">
            <button type="button" class="btn btn-dark" id="btn-${p.id}">Ver más</button>
          </div>
        </div>
      </div>
    `;
  });

  productList.innerHTML = template;

  products.forEach((p) => {
    const button = document.querySelector(`#btn-${p.id}`);
    if (button) {
      button.addEventListener('click', () => {
        Modal(p);
      });
    }
  });
}

