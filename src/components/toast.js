export function showToast(message, type = 'dark') {
  const toastContainer = document.getElementById('toastContainer');

  if (!toastContainer) return;

  const toastElement = document.createElement('div');
  toastElement.className = `toast align-items-center text-bg-${type} border-0 show`;
  toastElement.setAttribute('role', 'status');
  toastElement.setAttribute('aria-live', 'polite');
  toastElement.innerHTML = `
    <div class="d-flex">
      <div class="toast-body">${message}</div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
  `;

  toastContainer.appendChild(toastElement);

  setTimeout(() => {
    toastElement.remove();
  }, 2200);
}

