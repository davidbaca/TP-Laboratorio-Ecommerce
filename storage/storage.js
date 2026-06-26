const STORAGE_KEY = "cart";

export function initLocalStorage() {
  if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
  }
}

export function savetoLocalStorage(item) {
  const cart = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  const existingItem = cart.find((cartItem) => cartItem.id === item.id);

  if (existingItem) {
    existingItem.quantity = (existingItem.quantity || 1) + (item.quantity || 1);
  } else {
    cart.push({ ...item, quantity: item.quantity || 1 });
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}

export function getCartFromLocalStorage() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
}

export function removeFromLocalStorage(itemId) {
  const cart = getCartFromLocalStorage().filter((item) => item.id !== itemId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}

export function clearCartFromLocalStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
}


