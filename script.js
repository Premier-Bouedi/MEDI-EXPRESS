// MEDI-EXPRESS — interactions de la page (démo côté navigateur, sans serveur)

function toast(message) {
  let el = document.querySelector('.toast');
  if (!el) {
    el = document.createElement('div');
    el.className = 'toast';
    el.setAttribute('role', 'status');
    document.body.appendChild(el);
  }
  el.textContent = message;
  el.classList.add('show');
  clearTimeout(el._timer);
  el._timer = setTimeout(() => el.classList.remove('show'), 3000);
}

// Panier : le nombre d'articles est gardé dans le navigateur
function getCart() {
  try { return Number(localStorage.getItem('medi-cart')) || 0; } catch (e) { return 0; }
}
function setCart(n) {
  try { localStorage.setItem('medi-cart', String(n)); } catch (e) {}
  const count = document.getElementById('cart-count');
  if (count) count.textContent = n > 0 ? n : '';
}

document.addEventListener('DOMContentLoaded', () => {
  setCart(getCart());

  // « Commander maintenant » mène à l'envoi d'ordonnance
  document.querySelectorAll('.btn-primary').forEach(btn => {
    if (btn.closest('form')) return;
    btn.addEventListener('click', () => { window.location.href = 'ordonnance.html'; });
  });

  // « En savoir plus » fait défiler jusqu'aux avantages
  document.querySelectorAll('.hero .btn-outline').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.querySelector('.features');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // « Toutes les catégories » fait défiler jusqu'aux cartes
  document.querySelectorAll('.categories .btn-outline').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.querySelector('.category-cards');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // « Voir les produits » ajoute un article au panier (en attendant le catalogue)
  document.querySelectorAll('.btn-small').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const name = link.closest('.category-card')?.querySelector('h3')?.textContent || 'Produit';
      setCart(getCart() + 1);
      toast(name + ' : ajouté au panier');
    });
  });

  const cart = document.querySelector('.cart');
  if (cart) {
    cart.style.cursor = 'pointer';
    cart.addEventListener('click', () => {
      const n = getCart();
      toast(n ? n + ' article(s) dans le panier' : 'Votre panier est vide');
    });
  }

  const login = document.querySelector('.btn-login');
  if (login) login.addEventListener('click', () => toast('Espace client bientôt disponible'));

  // Formulaires des pages de service
  document.querySelectorAll('form.form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      toast(form.dataset.message || 'Demande envoyée');
      form.reset();
    });
  });
});
