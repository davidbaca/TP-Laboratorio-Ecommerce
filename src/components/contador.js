export function contador(Id) {
  return `
    <div class="contador d-flex align-items-center gap-2 mt-3">
      <button type="button" id="decrementBtn-${Id}" class="btn btn-outline-dark btn-sm">-</button>
      <div>
        <p class="mb-0">Cantidad: <span id="cantidad-${Id}">1</span></p>
      </div>
      <button type="button" id="incrementBtn-${Id}" class="btn btn-outline-dark btn-sm">+</button>
    </div>
  `;
}