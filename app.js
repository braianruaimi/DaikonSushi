// ✏️ EDITAR: cargos base y claves de almacenamiento.
// Envío actualizado según pedido: 4.000
const DELIVERY_FEE = 4000;
const STORAGE_KEY = "daikon-sushi-cart";

// ✏️ EDITAR: reemplazar por el numero real de WhatsApp del negocio.
const WA_NUMBER = "2213039649";

// ✏️ EDITAR: cambiar simbolo de moneda si el negocio lo necesita.
const CURRENCY = "$";
const CHAT_TRANSITION_MS = 240;
const CART_TRANSITION_MS = 320;
// Horario de toma de pedidos: desde las 14:00 hasta las 00:00
const ORDER_OPEN_HOUR = 14;
const ORDER_CLOSE_HOUR = 0;
const ORDER_CLOSE_MINUTE = 0;
// Control para suprimir toasts cuando añadimos varios ítems programáticamente
let SUPPRESS_TOASTS = false;

// Splash init: mostrar logo al inicio y ocultarlo cuando la app esté lista
function initSplash() {
  const splash = document.getElementById('splash');
  if (!splash) return;

  const hide = () => {
    if (!splash.classList.contains('splash--hidden')) {
      splash.classList.add('splash--hidden');
      splash.addEventListener('transitionend', () => {
        try { splash.remove(); } catch (e) { /* ignore */ }
      }, { once: true });
    }
  };

  // Preferir esperar al evento load, pero no más de 1800ms
  window.addEventListener('load', () => setTimeout(hide, 700));
  // Fallback: forzar ocultado pasado un máximo razonable
  setTimeout(hide, 1800);
}

// Ejecutar inmediatamente (app.js se carga con `defer`)
initSplash();

// ✏️ EDITAR: preguntas frecuentes y respuestas del asistente local.
const chatFaqs = [
  {
    label: "Horarios",
    keywords: ["horario", "hora", "abren", "abierto", "cierran", "cerrado"],
    answer: "Estamos tomando pedidos de 18:00 a 00:30. Si querés, también podés hacer tu pedido ahora y coordinar la entrega por WhatsApp.",
  },
  {
    label: "Delivery",
    keywords: ["delivery", "envio", "envían", "envian", "zona", "la plata", "ensenada", "berisso", "llegan", "reparto"],
    answer: "Hacemos envíos en La Plata, Ensenada y Berisso. La coordinación final se hace por WhatsApp y el tiempo promedio actual es de 25 minutos, según demanda y zona.",
  },
  {
    label: "Pagos",
    keywords: ["pago", "pagar", "efectivo", "transferencia", "debito", "credito", "tarjeta"],
    answer: "Podés pagar en efectivo, por transferencia, con débito o con crédito. Elegís el medio de pago dentro del carrito antes de enviar el pedido.",
  },
  {
    label: "Promo",
    keywords: ["promo", "almuerzo", "mediodia", "mediodía", "oferta", "2x1"],
    answer: "Tenemos Promo CENA y promos rotativas. Para confirmar disponibilidad y precio del día, abrí la promo o escribinos por WhatsApp.",
  },
  {
    label: "Incluye",
    keywords: ["incluye", "palillos", "soja", "wasabi", "jengibre", "salsas"],
    answer: "SALSAS extras: Agridulce, Soja, Palillos.",
  },
  {
    label: "Cómo pedir",
    keywords: ["pedir", "pedido", "comprar", "encargar", "whatsapp", "como compro", "cómo compro"],
    answer: "Elegí tus piezas o combos, ajustá cantidades, completá nombre y dirección en el carrito, y después enviá el pedido por WhatsApp con un toque.",
  },
  {
    label: "Zonas de envío",
    keywords: ["zonas", "zona", "ensenada", "berisso", "la plata"],
    answer: "Las zonas de entrega activas son La Plata, Ensenada y Berisso.",
  },
];

// ✏️ EDITAR: contenido destacado de la promo especial del menu.
const promoLunch = {
  id: "promo-cena",
  category: "Promo CENA Daikon",
  badge: "PROMO",
  title: "Promo CENA Daikon",
  description: "HotBurger SAKURA + Combo Daikon + Eby crocante por $49.999. Coordiná tu pedido directo por WhatsApp.",
  image: "assets/products/promo-cena.jpg",
  cta: "Pedir promo",
};

const EXTRAS_CATEGORY = "Extras";

// ✏️ EDITAR: catalogo completo del menu. El cliente puede cambiar textos, precios e imagenes locales.
const products = [
  {
    id: "pancho-salmon",
    name: "Pancho Sushi de Salmón",
    category: "Destacados",
    badge: "Pancho Sushi",
    description: "Roll caliente rebozado en panko, cortado al medio. Base de queso crema, cremoso de palta y salmón rosado fresco.",
    price: 18000,
    image: "assets/products/pancho sushi salmon.jpg",
    meta: "Roll caliente / panko",
    featured: true,
  },
  {
    id: "pancho-langostinos",
    name: "Pancho Sushi de Langostinos",
    category: "Destacados",
    badge: "Top venta",
    description: "Roll caliente rebozado en panko. Base de queso crema saborizado, langostinos cocidos, cremoso de palta y topping de papas fritas.",
    price: 18000,
    image: "assets/products/pancho langostino.jpg",
    
    meta: "Roll caliente / crunchy",
    featured: true,
  },
  {
    id: "pancho-kanikama",
    name: "Pancho Sushi de Kanikama",
    category: "Destacados",
    badge: "Agridulce",
    description: "Roll caliente rebozado en panko. Base de queso crema con hondashi, kanikama y salsa agridulce.",
    price: 15000,
    image: "assets/products/kanikama.png",
    meta: "Roll caliente / hondashi",
    featured: true,
  },
  {
    id: "pancho-pollo-teriyaki",
    name: "Pancho Pollo Teriyaki",
    category: "Destacados",
    badge: "Pancho Sushi",
    description: "Roll caliente rebozado en panko. Base de queso crema saborizado, pollo salteado en salsa teriyaki, cremoso de palta y ciboulette.",
    price: 15000,
    image: "assets/products/pancho pollo.jpg",
    meta: "Roll caliente / panko",
    featured: true,
  },
  {
    id: "hotburger-lang-in-the-house",
    name: "Hotburger Lang In The House",
    category: "Sushi Hotburger",
    badge: "Top venta",
    description: "Queso Phila, palta, langostinos salteados en teriyaki, verdeo y tapas rebozadas.",
    price: 18000,
    image: "assets/products/Lang in the house.jpg",
    meta: "Hotburger / langostinos",
  },
  {
    id: "hotburger-sakura",
    name: "Hotburger Sakura",
    category: "Sushi Hotburger",
    badge: "HOT",
    description: "Queso Phila saborizado, palta cremosa, salmón fresco, ciboulette, salsa teriyaki y tapas rebozadas.",
    price: 18000,
    image: "assets/products/Sakura.jpg",
    meta: "Hotburger / salmón fresco",
  },
  {
    id: "hotburger-smoked",
    name: "Hotburger Smoked",
    category: "Sushi Hotburger",
    badge: "HOT",
    description: "Queso phila, langostinos salteados en teriyaki, salmón ahumado, lluvia de batatas y tapas rebozadas.",
    price: 18000,
    image: "assets/products/Smoked.jpg",
    meta: "Hotburger / ahumado",
  },
  {
    id: "daikon-combo",
    name: "Combo Daikon",
    category: "Combos Daikon",
    badge: "Clásico",
    description: "Philadelphia, salmón, salmón cocido, kanikama, tamago y atún.",
    price: 18000,
    image: "assets/products/combo daikon.jpg",
    meta: "Elegí la cantidad de piezas",
    comboOptions: [
      { id: "16", label: "16 piezas", price: 18000, meta: "16 piezas / combo Daikon" },
      { id: "32", label: "32 piezas", price: 36000, meta: "32 piezas / combo Daikon" },
      { id: "40", label: "40 piezas", price: 45000, meta: "40 piezas / combo Daikon" },
      { id: "48", label: "48 piezas", price: 54000, meta: "48 piezas / combo Daikon" },
      { id: "64", label: "64 piezas", price: 72000, meta: "64 piezas / combo Daikon" },
    ],
  },
  {
    id: "premium-combo",
    name: "Combo Premium",
    category: "Combos Premium",
    badge: "Premium",
    description: "Philadelphia, Feel Roll, Salmón Cocido, Langostinos, Bs.As. Roll, Tentación Roll, Placer Roll, California Especial.",
    price: 21000,
    image: "assets/products/premiun.jpg",
    meta: "Elegí la cantidad de piezas",
    comboOptions: [
      { id: "16", label: "16 piezas", price: 21000, meta: "16 piezas / combo Premium" },
      { id: "32", label: "32 piezas", price: 42000, meta: "32 piezas / combo Premium" },
      { id: "48", label: "48 piezas", price: 63000, meta: "48 piezas / combo Premium" },
      { id: "64", label: "64 piezas", price: 84000, meta: "64 piezas / combo Premium" },
    ],
  },
  {
    id: "deluxe-16",
    name: "Combo Deluxe",
    category: "Combos Deluxe",
    badge: "Deluxe",
    description: "Combo de 16 piezas con salmón crudo, salmón cocido, salmón ahumado, caviar, langostinos, Feel Roll y Soul Roll.",
    price: 24000,
    image: "assets/products/deluxe.jpg",
    meta: "16 piezas / deluxe",
  },
  {
    id: "todo-salmon-combo",
    name: "Combo Salmón",
    category: "Todo Salmón",
    badge: "Salmón",
    description: "Philadelphia, Feel Roll, Geishas, Nigiri Sake, Bs.As. Roll.",
    price: 25000,
    image: "assets/products/todo salmon 4 piezas regalo.jpg",
    meta: "Elegí la cantidad de piezas",
    comboOptions: [
      { id: "16", label: "16 piezas", price: 25000, meta: "16 piezas / combo Salmón" },
      { id: "32", label: "32 piezas", price: 50000, meta: "32 piezas / combo Salmón" },
      { id: "48", label: "48 piezas", price: 75000, meta: "48 piezas / combo Salmón" },
    ],
  },
  {
    id: "entrada-roll-caliente",
    name: "Roll Caliente",
    category: "Entradas",
    badge: "Entrada",
    description: "Roll caliente — 8 piezas.",
    price: 15000,
    image: "assets/products/Roll caliente.jpg",
    meta: "Elegí la opción",
    comboOptions: [
      { id: "salmon", label: "8 piezas (Salmon)", price: 15000, meta: "8 piezas / salmón" },
      { id: "kanikama", label: "8 piezas (Kanikama)", price: 13000, meta: "8 piezas / kanikama" },
    ],
  },
  {
    id: "entrada-spring-rolls",
    name: "Spring Rolls",
    category: "Entradas",
    badge: "Entrada",
    description: "4 unidades rellenas de carne o verdura.",
    price: 12000,
    image: "assets/products/Spring rolls.jpg",
    meta: "4 unidades / carne o verdura",
  },
  {
    id: "entrada-gyozas",
    name: "Gyozas",
    category: "Entradas",
    badge: "Entrada",
    description: "Rellenas de cerdo — 5 unidades.",
    price: 12000,
    image: "assets/products/gyozas.jpg",
    meta: "5 unidades / cerdo",
  },
  {
    id: "entrada-ebi-crocante",
    name: "Ebi Crocante",
    category: "Entradas",
    badge: "Entrada",
    description: "Langostinos rebozados — 5 unidades.",
    price: 15000,
    image: "assets/products/eby crocante.jpg",
    meta: "5 unidades / langostinos",
  },
  {
    id: "extra-salsa-agridulce",
    name: "Salsa Agridulce",
    category: EXTRAS_CATEGORY,
    badge: "Extra",
    description: "Porción extra para acompañar tu pedido.",
    price: 1500,
    image: "assets/products/salsa agridulce.jpg",
    meta: "Extra / salsa",
  },
  {
    id: "extra-salsa-soja",
    name: "Salsa de soja extra",
    category: EXTRAS_CATEGORY,
    badge: "Extra",
    description: "Porción adicional de salsa de soja.",
    price: 1500,
    image: "assets/products/salsa soja.jpg",
    meta: "Extra / soja",
  },
  {
    id: "extra-palillos",
    name: "Palillos extra",
    category: EXTRAS_CATEGORY,
    badge: "Extra",
    description: "Par adicional de palillos descartables.",
    price: 1500,
    image: "assets/products/palillos extras.jpg",
    meta: "Extra / palillos",
  },
];

const state = {
  activeCategory: "Todos",
  query: "",
  cart: loadCart(),
  productSelections: {},
};

const legacyProductVariantMap = {
  "daikon-16": { id: "daikon-combo", optionId: "16" },
  "daikon-32": { id: "daikon-combo", optionId: "32" },
  "daikon-40": { id: "daikon-combo", optionId: "40" },
  "daikon-48": { id: "daikon-combo", optionId: "48" },
  "daikon-64": { id: "daikon-combo", optionId: "64" },
  "premium-16": { id: "premium-combo", optionId: "16" },
  "premium-32": { id: "premium-combo", optionId: "32" },
  "premium-48": { id: "premium-combo", optionId: "48" },
  "premium-64": { id: "premium-combo", optionId: "64" },
  "todo-salmon-16": { id: "todo-salmon-combo", optionId: "16" },
  "todo-salmon-32": { id: "todo-salmon-combo", optionId: "32" },
  "todo-salmon-48": { id: "todo-salmon-combo", optionId: "48" },
};

const categoryChips = document.querySelector("#categoryChips");
const productGrid = document.querySelector("#productGrid");
const productCardTemplate = document.querySelector("#productCardTemplate");
const cartItemTemplate = document.querySelector("#cartItemTemplate");
const cartDrawer = document.querySelector("#cartDrawer");
const cartDrawerBody = document.querySelector(".cart-drawer__body");
const backdrop = document.querySelector("#backdrop");
const cartToggle = document.querySelector("#cartToggle");
const heroCartButton = document.querySelector("#heroCartButton");
const cartClose = document.querySelector("#cartClose");
const cartItems = document.querySelector("#cartItems");
const cartScrollUp = document.querySelector("#cartScrollUp");
const cartScrollDown = document.querySelector("#cartScrollDown");
const cartCount = document.querySelector("#cartCount");
const subtotalValue = document.querySelector("#subtotalValue");
const deliveryValue = document.querySelector("#deliveryValue");
const totalValue = document.querySelector("#totalValue");
const featuredAdd = document.querySelector("#featuredAdd");
const searchToggle = document.querySelector("#searchToggle");
const searchBar = document.querySelector("#searchBar");
const menuSearch = document.querySelector("#menuSearch");
const productCount = document.querySelector("#productCount");
const checkoutButton = document.querySelector("#checkoutButton");
const checkoutForm = document.querySelector("#checkoutForm");
const customerName = document.querySelector("#customerName");
const customerAddress = document.querySelector("#customerAddress");
const customerLocality = document.querySelector("#customerLocality");
const chatToggle = document.querySelector("#chatToggle");
const chatClose = document.querySelector("#chatClose");
const paymentMethodEl = document.querySelector('#paymentMethod');
const paymentGivenEl = document.querySelector('#paymentGiven');
const floatingMenu = document.querySelector("#floatingMenu");
const floatingMenuToggle = document.querySelector("#floatingMenuToggle");
const floatingMenuPanel = document.querySelector("#floatingMenuPanel");
const floatingCategoryChips = document.querySelector("#floatingCategoryChips");
const daikonChat = document.querySelector("#daikonChat");
const openOrdersButton = document.querySelector("#openOrdersButton");
const installAppButton = document.querySelector("#installAppButton");
const updateAppButton = document.querySelector("#updateAppButton");
const rouletteButton = document.querySelector('#rouletteButton');
const chatPanel = document.querySelector("#chatPanel");
const chatMessages = document.querySelector("#chatMessages");
const chatSuggestions = document.querySelector("#chatSuggestions");
const menuSection = document.querySelector("#menu");
const heroSection = document.querySelector("#inicio");
const heroNotice = document.querySelector(".hero__notice");

let chatCloseTimeoutId;
let cartCloseTimeoutId;
let floatingMenuCloseTimeoutId;
let cartGlowTimeoutId;
let deferredInstallPrompt = null;
let openOrdersIntervalId;

bootstrap();

function bootstrap() {
  closeChat({ immediate: true });
  closeCart({ immediate: true });
  closeFloatingMenu({ immediate: true });
  setupHeroNotice();
  renderCategories();
  renderProducts();
  updateCartUI();
  setupChat();
  setupOpenOrdersButton();
  setupInstallApp();
  setupFloatingDockVisibility();
  bindEvents();
  initRoulette();
  registerServiceWorker();
}

// Roulette / promo spinner
function initRoulette() {
  const btn = document.getElementById('rouletteButton');
  const modal = document.getElementById('rouletteModal');
  const close = document.getElementById('rouletteClose');
  const closeBtn = document.getElementById('rouletteCloseBtn');
  const wheel = document.getElementById('rouletteWheel');
  const inner = document.getElementById('rouletteInner');
  const resultWrap = document.getElementById('rouletteResult');
  const resultMsg = document.getElementById('rouletteMessage');
  const applyBtn = document.getElementById('rouletteApply');
  const thumb = document.getElementById('rouletteThumb');
  const thumbImg = document.getElementById('rouletteThumbImg');

  if (!btn || !modal || !wheel) return;

  // Solo sugerencias de producto: pancho o hotburger
  const promos = [
    { id: 'p-hot-1', message: 'Hoy te toca: Hotburger Sakura', productId: 'hotburger-sakura' },
    { id: 'p-hot-2', message: 'Hoy te toca: Hotburger Smoked', productId: 'hotburger-smoked' },
    { id: 'p-pancho-1', message: 'Hoy te toca: Pancho Sushi de Salmón', productId: 'pancho-salmon' },
    { id: 'p-pancho-2', message: 'Hoy te toca: Pancho Sushi de Langostinos', productId: 'pancho-langostinos' },
  ];

  function openModal() {
    modal.hidden = false;
    modal.setAttribute('aria-hidden', 'false');
    resultWrap.hidden = true;
    inner.textContent = 'GIRAR';
    if (thumb) thumb.hidden = true;
  }

  function closeModal() {
    modal.hidden = true;
    modal.setAttribute('aria-hidden', 'true');
  }

  function spin() {
    if (!wheel) return;
    // disable interactions during spin
    btn.disabled = true;

    // choose result index first so we can compute rotation
    const idx = Math.floor(Math.random() * promos.length);
    const promo = promos[idx];
    const slices = promos.length;
    const sliceAngle = 360 / slices;

    // number of full spins (3..6)
    const spins = Math.floor(Math.random() * 3) + 4;

    // target rotation: spins * 360 + offset so that the chosen slice lands under the needle
    // We subtract idx*sliceAngle to rotate that slice into place. Add half slice to center it.
    const targetAngle = spins * 360 + (idx * sliceAngle) + sliceAngle / 2;

    // prepare wheel for smooth transition and force repaint
    wheel.classList.remove('spin-reset');
    // ensure explicit transition in case CSS wasn't applied
    wheel.style.transition = 'transform 1800ms cubic-bezier(.15,.9,.2,1)';
    wheel.style.willChange = 'transform';
    void wheel.offsetWidth;
    wheel.style.transform = `rotate(${targetAngle}deg)`;

    function onEnd(e) {
      if (e && e.target !== wheel) return;
      wheel.removeEventListener('transitionend', onEnd);

      // normalize rotation to keep DOM tidy
      const normalized = targetAngle % 360;
      wheel.classList.add('spin-reset');
      wheel.style.transform = `rotate(${normalized}deg)`;

      // show result
      resultMsg.textContent = promo.message;
      resultWrap.hidden = false;
      inner.textContent = '';

      // show thumbnail if product exists
      if (promo.productId && thumb && thumbImg) {
        const prod = products.find((p) => p.id === promo.productId);
        if (prod && prod.image) {
          thumbImg.src = prod.image;
          thumbImg.alt = prod.name || 'Producto';
          thumb.hidden = false;
        } else {
          thumb.hidden = true;
        }
      }

      // store current promo on apply button
      applyBtn.dataset.promo = JSON.stringify(promo);
      btn.disabled = false;
    }

    wheel.addEventListener('transitionend', onEnd);
    // safety: if transitionend doesn't fire, fallback after duration
    const fallback = setTimeout(() => {
      try { onEnd(); } catch (e) { /* ignore */ }
    }, 2000);
    function clearFallback() { clearTimeout(fallback); }
    wheel.addEventListener('transitionend', clearFallback, { once: true });
  }

  btn.addEventListener('click', () => {
    openModal();
    // give a moment and spin
    setTimeout(spin, 120);
  });

  close?.addEventListener('click', closeModal);
  closeBtn?.addEventListener('click', closeModal);

  applyBtn?.addEventListener('click', (e) => {
    try {
      const p = JSON.parse(e.currentTarget.dataset.promo || null);
      if (!p) return;
      if (p.productId) {
        addToCart(p.productId, null);
        showToast(`Sugerencia agregada: ${p.message}`);
      }
    } catch (err) {
      console.debug('Apply promo error', err);
    } finally {
      closeModal();
    }
  });
}

function setupHeroNotice() {
  if (!heroNotice) {
    return;
  }

  const noticeItems = [
    "Todos los pedidos incluyen palillos, salsa de soja, wasabi y jengibre",
    "Envíos en La Plata, Ensenada y Berisso",
  ];

  heroNotice.innerHTML = noticeItems
    .map((item) => `<span class="hero__notice-item">${item}</span>`)
    .join("");
}

function bindEvents() {
  if (cartToggle) cartToggle.addEventListener("click", toggleCart);
  if (heroCartButton) heroCartButton.addEventListener("click", openCart);
  if (cartClose) cartClose.addEventListener("click", closeCart);
  if (backdrop) backdrop.addEventListener("click", closeCart);
  if (cartScrollUp) cartScrollUp.addEventListener("click", () => scrollCartItems(-180));
  if (cartScrollDown) cartScrollDown.addEventListener("click", () => scrollCartItems(180));

  if (featuredAdd) {
    featuredAdd.addEventListener("click", () => {
      addToCart("pancho-salmon");
    });
  }

  if (installAppButton) {
    installAppButton.addEventListener("click", handleInstallAppClick);
  }

  if (openOrdersButton) {
    openOrdersButton.addEventListener("click", handleOpenOrdersClick);
  }

  if (searchToggle && searchBar && menuSearch) {
    searchToggle.addEventListener("click", () => {
      const hidden = searchBar.hasAttribute("hidden");
      searchBar.toggleAttribute("hidden");

      if (hidden) {
        menuSearch.focus();
      } else {
        menuSearch.value = "";
        state.query = "";
        renderProducts();
      }
    });

    menuSearch.addEventListener("input", (event) => {
      state.query = event.target.value.trim().toLowerCase();
      renderProducts();
    });
  }

  if (customerName) customerName.addEventListener("input", () => validateRequiredField(customerName));
  if (customerLocality) customerLocality.addEventListener("change", () => validateRequiredField(customerLocality));
  if (customerAddress) customerAddress.addEventListener("input", () => validateRequiredField(customerAddress));

  if (checkoutButton) checkoutButton.addEventListener("click", openWhatsApp);

  // Disable paymentGiven when payment method is not cash
  function updatePaymentGivenVisibility() {
    if (!paymentMethodEl || !paymentGivenEl) return;
    const wrapper = paymentGivenEl.closest('label');
    const val = String(paymentMethodEl.value || '').toLowerCase();
    if (val !== 'efectivo') {
      if (wrapper) wrapper.hidden = true;
      paymentGivenEl.disabled = true;
      paymentGivenEl.value = '';
    } else {
      if (wrapper) wrapper.hidden = false;
      paymentGivenEl.disabled = false;
    }
  }

  if (paymentMethodEl) {
    paymentMethodEl.addEventListener('change', updatePaymentGivenVisibility);
    // init state
    updatePaymentGivenVisibility();
  }

  // Update scheduled note when schedule time changes
  const scheduleSelect = document.getElementById('scheduleTime');
  if (scheduleSelect) {
    scheduleSelect.addEventListener('change', (e) => {
      const scheduledNote = document.getElementById('scheduledNote');
      const scheduledTimeDisplay = document.getElementById('scheduledTimeDisplay');
      if (scheduledNote && scheduledTimeDisplay) {
        scheduledTimeDisplay.textContent = e.target.value;
        scheduledNote.hidden = false;
      }
    });
  }

  if (floatingMenuToggle) floatingMenuToggle.addEventListener("click", toggleFloatingMenu);
  if (chatToggle) chatToggle.addEventListener("click", toggleChat);
  if (chatClose) chatClose.addEventListener("click", closeChat);
  document.addEventListener("pointerdown", handleFloatingPointerDown, true);
  document.addEventListener("pointerdown", handleChatPointerDown, true);

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeFloatingMenu();
      closeChat();
      closeCart();
    }
  });

  window.addEventListener("scroll", updateFloatingDockVisibility, { passive: true });
  window.addEventListener("resize", updateFloatingDockVisibility);
}

function setupFloatingDockVisibility() {
  updateFloatingDockVisibility();
}

function updateFloatingDockVisibility() {
  if (!heroSection) {
    return;
  }

  const heroRect = heroSection.getBoundingClientRect();
  const dockReserve = 88;
  const shouldHideFloatingDock =
    window.innerWidth <= 720 && heroRect.bottom > window.innerHeight - dockReserve;

  document.body.classList.toggle("hero-focus", shouldHideFloatingDock);
}

function setupChat() {
  appendChatMessage(
    "Hola. Elegí una consulta frecuente y te respondo al instante sobre horarios, envíos, promos, pagos y pedidos."
  );

  chatFaqs.forEach((faq) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = faq.label;
    button.addEventListener("click", () => askPresetQuestion(faq));
    chatSuggestions.appendChild(button);
  });
}

function setupOpenOrdersButton() {
  updateOpenOrdersVisibility();

  if (openOrdersIntervalId) {
    window.clearInterval(openOrdersIntervalId);
  }

  openOrdersIntervalId = window.setInterval(updateOpenOrdersVisibility, 60_000);
}

function isOrderWindowOpen(now = new Date()) {
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const openMinutes = ORDER_OPEN_HOUR * 60;
  const closeMinutes = ORDER_CLOSE_HOUR * 60 + ORDER_CLOSE_MINUTE;

  return currentMinutes >= openMinutes || currentMinutes < closeMinutes;
}

function updateOpenOrdersVisibility() {
  if (!openOrdersButton) {
    return;
  }

  const isOpen = isOrderWindowOpen();
  const label = openOrdersButton.querySelector(".open-orders-button__label");

  openOrdersButton.hidden = false;
  openOrdersButton.classList.toggle("is-open", isOpen);
  openOrdersButton.classList.toggle("is-closed", !isOpen);
  openOrdersButton.setAttribute(
    "aria-label",
    isOpen ? "Pedidos abiertos de 14:00 a 00:00" : "Pedidos cerrados hasta las 14:00"
  );

  if (label) {
    label.textContent = isOpen ? "Abierto ahora" : "Cerrado ahora";
  }
  // Actualizar estado del botón de checkout según el horario
  if (checkoutButton) {
    const labelSpan = checkoutButton.querySelector("span");
    if (!isOpen) {
      if (labelSpan) labelSpan.textContent = "Programar pedido para la apertura";
      checkoutButton.removeAttribute("disabled");
      checkoutButton.classList.add('is-schedule');
      const scheduleWrapper = document.getElementById('scheduleWrapper');
      const scheduleSelect = document.getElementById('scheduleTime');
      if (scheduleWrapper) scheduleWrapper.hidden = false;
      if (scheduleSelect) scheduleSelect.value = `19:00`;
      const scheduledNote = document.getElementById('scheduledNote');
      const scheduledTimeDisplay = document.getElementById('scheduledTimeDisplay');
      if (scheduledNote && scheduledTimeDisplay) {
        scheduledTimeDisplay.textContent = scheduleSelect ? scheduleSelect.value : `19:00`;
        scheduledNote.hidden = false;
      }
    } else {
      if (labelSpan) labelSpan.textContent = "ENVIAR PEDIDO";
      checkoutButton.removeAttribute("disabled");
      checkoutButton.classList.remove('is-schedule');
      const scheduleWrapper = document.getElementById('scheduleWrapper');
      if (scheduleWrapper) scheduleWrapper.hidden = true;
      const scheduledNote = document.getElementById('scheduledNote');
      if (scheduledNote) scheduledNote.hidden = true;
    }
  }
}

function handleOpenOrdersClick() {
  if (!isOrderWindowOpen()) {
    showToast("Los pedidos se habilitan a las 14:00 y cierran a las 00:00.");
    return;
  }

  openExternalUrl(buildWhatsAppLink("Hola Daikon, están abiertos? Quiero hacer un pedido."));
}

function askPresetQuestion(faq) {
  const answer = faq.answer;
  window.setTimeout(() => {
    appendChatMessage(answer);
  }, 180);
}
function appendChatMessage(message) {
  const bubble = document.createElement("article");
  bubble.className = "chat-bubble chat-bubble--bot";

  const paragraph = document.createElement("p");
  paragraph.textContent = message;
  bubble.appendChild(paragraph);
  chatMessages.appendChild(bubble);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function toggleChat() {
  if (!daikonChat) return;
  const isOpen = daikonChat.classList.contains("is-open");
  if (!isOpen) {
    closeFloatingMenu();
    openChat();
    return;
  }

  closeChat();
}

function openChat() {
  if (!daikonChat || !chatPanel || !chatToggle) return;
  if (rouletteButton) rouletteButton.hidden = true;
  window.clearTimeout(chatCloseTimeoutId);
  chatPanel.hidden = false;
  chatPanel.setAttribute("aria-hidden", "false");
  chatToggle.setAttribute("aria-expanded", "true");
  daikonChat.classList.add("is-visible");
  window.requestAnimationFrame(() => {
    daikonChat.classList.add("is-open");
  });
}

function closeChat(options = {}) {
  const { immediate = false } = options;
  window.clearTimeout(chatCloseTimeoutId);
  if (!daikonChat || !chatPanel || !chatToggle) return;
  chatPanel.setAttribute("aria-hidden", "true");
  chatToggle.setAttribute("aria-expanded", "false");
  daikonChat.classList.remove("is-open");

  if (rouletteButton) rouletteButton.hidden = false;

  if (immediate) {
    daikonChat.classList.remove("is-visible");
    chatPanel.hidden = true;
    return;
  }

  chatCloseTimeoutId = window.setTimeout(() => {
    if (!daikonChat.classList.contains("is-open")) {
      daikonChat.classList.remove("is-visible");
      chatPanel.hidden = true;
    }
  }, CHAT_TRANSITION_MS);
}

function toggleFloatingMenu() {
  if (!floatingMenu) return;
  const isOpen = floatingMenu.classList.contains("is-open");
  if (!isOpen) {
    closeChat();
    openFloatingMenu();
    return;
  }

  closeFloatingMenu();
}

function openFloatingMenu() {
  if (!floatingMenu || !floatingMenuPanel || !floatingMenuToggle) return;
  if (rouletteButton) rouletteButton.hidden = true;
  window.clearTimeout(floatingMenuCloseTimeoutId);
  floatingMenuPanel.hidden = false;
  floatingMenuPanel.setAttribute("aria-hidden", "false");
  floatingMenuToggle.setAttribute("aria-expanded", "true");
  floatingMenu.classList.add("is-visible");
  window.requestAnimationFrame(() => {
    floatingMenu.classList.add("is-open");
  });
}

function closeFloatingMenu(options = {}) {
  const { immediate = false } = options;
  window.clearTimeout(floatingMenuCloseTimeoutId);
  if (!floatingMenu || !floatingMenuPanel || !floatingMenuToggle) return;
  floatingMenuPanel.setAttribute("aria-hidden", "true");
  floatingMenuToggle.setAttribute("aria-expanded", "false");
  floatingMenu.classList.remove("is-open");

  if (rouletteButton) rouletteButton.hidden = false;

  if (immediate) {
    floatingMenu.classList.remove("is-visible");
    floatingMenuPanel.hidden = true;
    return;
  }

  floatingMenuCloseTimeoutId = window.setTimeout(() => {
    if (!floatingMenu.classList.contains("is-open")) {
      floatingMenu.classList.remove("is-visible");
      floatingMenuPanel.hidden = true;
    }
  }, CHAT_TRANSITION_MS);
}

function toggleCart() {
  if (!cartDrawer) return;
  if (cartDrawer.classList.contains("is-open")) {
    closeCart();
    return;
  }

  openCart();
}

function openCart() {
  if (!cartDrawer || !backdrop || !cartDrawerBody || !cartItems) return;
  window.clearTimeout(cartCloseTimeoutId);
  cartDrawer.hidden = false;
  backdrop.hidden = false;
  cartDrawer.setAttribute("aria-hidden", "false");
  cartDrawer.classList.add("is-visible");
  backdrop.classList.add("is-visible");
  document.body.classList.add("cart-open");
  cartDrawerBody.scrollTop = 0;
  cartItems.scrollTop = 0;

  window.requestAnimationFrame(() => {
    cartDrawer.classList.add("is-open");
    backdrop.classList.add("is-open");
  });
}

function closeCart(options = {}) {
  const { immediate = false } = options;
  window.clearTimeout(cartCloseTimeoutId);
  if (!cartDrawer || !backdrop) return;
  cartDrawer.setAttribute("aria-hidden", "true");
  cartDrawer.classList.remove("is-open");
  backdrop.classList.remove("is-open");
  document.body.classList.remove("cart-open");

  if (immediate) {
    cartDrawer.classList.remove("is-visible");
    backdrop.classList.remove("is-visible");
    cartDrawer.hidden = true;
    backdrop.hidden = true;
    return;
  }

  cartCloseTimeoutId = window.setTimeout(() => {
    if (!cartDrawer.classList.contains("is-open")) {
      cartDrawer.classList.remove("is-visible");
      backdrop.classList.remove("is-visible");
      cartDrawer.hidden = true;
      backdrop.hidden = true;
    }
  }, CART_TRANSITION_MS);
}

function scrollCartItems(offset) {
  cartItems.scrollBy({
    top: offset,
    behavior: "smooth",
  });
}

function handleChatPointerDown(event) {
  if (chatPanel.hidden) {
    return;
  }

  const target = event.target;
  if (!(target instanceof Node)) {
    return;
  }

  if (chatPanel.contains(target) || chatToggle.contains(target)) {
    return;
  }

  closeChat();
}

function handleFloatingPointerDown(event) {
  if (floatingMenuPanel.hidden) {
    return;
  }

  const target = event.target;
  if (!(target instanceof Node)) {
    return;
  }

  if (floatingMenuPanel.contains(target) || floatingMenuToggle.contains(target)) {
    return;
  }

  closeFloatingMenu();
}

function renderCategories() {
  const categories = getVisibleCategories();

  if (!categories.includes(state.activeCategory)) {
    state.activeCategory = "Todos";
  }

  renderCategoryButtons(categoryChips, categories);
  renderCategoryButtons(floatingCategoryChips, categories, { closeOnClick: true });
}

function getVisibleCategories() {
  // ✏️ EDITAR: si queres cambiar el orden fijo de categorias, modificá este array base.
  const categories = [
    "Todos",
    ...new Set(
      products
        .map((product) => product.category)
        .filter((category) => category !== EXTRAS_CATEGORY)
    ),
  ];

  if (isPromoLunchAvailable()) {
    categories.splice(1, 0, promoLunch.category);
  }

  return categories;
}

function renderCategoryButtons(container, categories, options = {}) {
  const { closeOnClick = false } = options;
  container.innerHTML = "";

  categories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = category;
    button.classList.toggle("is-active", category === state.activeCategory);
    button.addEventListener("click", () => {
      state.activeCategory = category;
      renderCategories();
      renderProducts(category);

      if (closeOnClick) {
        closeFloatingMenu();
        menuSection?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
    container.appendChild(button);
  });
}

function renderProducts(category = state.activeCategory) {
  if (!isPromoLunchAvailable() && category === promoLunch.category) {
    state.activeCategory = "Todos";
    renderCategories();
    return renderProducts("Todos");
  }

  state.activeCategory = category;
  const showPromoCard =
    isPromoLunchAvailable() &&
    (state.activeCategory === "Todos" || state.activeCategory === promoLunch.category) &&
    matchesPromoQuery(state.query);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      state.activeCategory === "Todos" ||
      product.category === state.activeCategory ||
      product.category === EXTRAS_CATEGORY;
    const query = state.query;
    const matchesQuery =
      !query ||
      [product.name, product.description, product.category, product.meta]
        .join(" ")
        .toLowerCase()
        .includes(query);

    return matchesCategory && matchesQuery;
  });

  const visibleCount = filteredProducts.length;
  if (productCount) {
    productCount.textContent = `${visibleCount} productos`;
  }

  productGrid.innerHTML = "";

  if (!filteredProducts.length && !showPromoCard) {
    const emptyState = document.createElement("div");
    emptyState.className = "empty-state";
    emptyState.textContent = "No encontramos productos para esa busqueda. Probá otra categoria o término.";
    productGrid.appendChild(emptyState);
    return;
  }

  if (showPromoCard) {
    productGrid.appendChild(createPromoCard());
  }

  filteredProducts.forEach((product, index) => {
    const fragment = productCardTemplate.content.cloneNode(true);
    const card = fragment.querySelector(".product-card");
    const image = fragment.querySelector("img");
    const badge = fragment.querySelector(".product-card__badge");
    const media = fragment.querySelector(".product-card__media");
    const sauceOverlay = fragment.querySelector('.sauce-overlay');
    const footer = fragment.querySelector(".product-card__footer");
    const category = fragment.querySelector(".product-card__category");
    const title = fragment.querySelector("h3");
    const description = fragment.querySelector(".product-card__description");
    const meta = fragment.querySelector(".product-card__meta");
    const stepper = fragment.querySelector(".card-stepper");
    const quantity = fragment.querySelector(".card-stepper__value");
    const decreaseButton = fragment.querySelector('[data-action="decrease"]');
    const increaseButton = fragment.querySelector('[data-action="increase"]');
    const selectedOption = getSelectedProductOption(product);
    const displayPrice = selectedOption?.price ?? product.price;
    const displayMeta = selectedOption?.meta ?? product.meta;
    const selectedOptionId = selectedOption?.id;

    card.style.animationDelay = `${(showPromoCard ? index + 1 : index) * 70}ms`;
    card.classList.toggle("product-card--featured", Boolean(product.featured));
    image.src = product.image;
    image.alt = product.name;
    // Blur-up / skeleton: toggle loaded class on parent when image finishes loading
    const placeholder = media.querySelector('.image-placeholder');
    const imgEl = fragment.querySelector('.product-image') || image;
    function markLoaded() {
      media.classList.add('is-loaded');
      if (placeholder) placeholder.style.opacity = '0';
    }
    if (imgEl.complete && imgEl.naturalWidth) {
      markLoaded();
    } else {
      imgEl.addEventListener('load', markLoaded, { once: true });
      imgEl.addEventListener('error', () => { media.classList.add('is-loaded'); }, { once: true });
    }
    badge.classList.remove("product-card__badge--hot", "product-card__badge--ghost");
    // Priorizar propiedades que pueden contener etiquetas: badge, tag o flavor
    const badgeSource = product.badge ?? product.tag ?? product.flavor ?? "";
    badge.textContent = badgeSource;
    const variantClass = getProductBadgeVariantClass(badgeSource);
    badge.classList.add(variantClass);
    // Render badge content with icon
    if (badgeSource) {
      badge.innerHTML = `<span class="badge__icon" aria-hidden="true"></span><span class="badge__text">${badgeSource}</span>`;
    }
    // Posicionar badges "ghost" (ej: AGRIDULCE, CLÁSICO) sobre la imagen dentro de .product-card__media
    if (badgeSource && variantClass === "product-card__badge--ghost") {
      media.appendChild(badge);
    } else if (footer) {
      // Para badges calientes como TOP VENTA, colocarlos en el footer por compatibilidad visual
      footer.appendChild(badge);
    }
    category.textContent = product.category;

    // Assign overlay variant classes based on product id or category
    try {
      const id = String(product.id || "").toLowerCase();
      const cat = String(product.category || "").toLowerCase();
      if (id.startsWith('pancho') || cat.includes('pancho') || cat.includes('pancho sushi')) {
        media.classList.add('sauce--pancho');
      } else if (id.includes('hotburger') || cat.includes('hot') || cat.includes('hotburger')) {
        media.classList.add('sauce--hotburger');
      } else if (cat.includes('combo')) {
        media.classList.add('sauce--combo');
      } else {
        media.classList.add('sauce--default');
      }
    } catch (e) {
      media.classList.add('sauce--default');
    }
    stepper.insertAdjacentHTML("beforebegin", `<span><span class="product-card__price-label">precio unitario</span><span class="product-card__price">${formatPrice(displayPrice)}</span></span>`);
    title.textContent = product.name;
    // Microcopy: mostrar ventaja o "desde" para combos
    const micro = document.createElement('span');
    micro.className = 'product-badge__microcopy';
    let microcopyText = '';
    if (Array.isArray(product.comboOptions) && product.comboOptions.length) {
      const minPrice = Math.min(...product.comboOptions.map((o) => o.price || Infinity));
      if (Number.isFinite(minPrice)) microcopyText = `Desde ${formatPrice(minPrice)}`;
    } else if (badgeSource && /TOP\s*VENTA/i.test(badgeSource)) {
      microcopyText = 'Favorito de la casa';
    } else if (badgeSource && /HOT/i.test(badgeSource)) {
      microcopyText = 'Recomendado';
    } else if (badgeSource && /(DELUXE|PREMIUM)/i.test(badgeSource)) {
      microcopyText = 'Edición limitada';
    }
    if (microcopyText) {
      micro.textContent = microcopyText;
      title.insertAdjacentElement('afterend', micro);
    }
    description.textContent = product.description;
    meta.textContent = displayMeta;
    quantity.textContent = String(getQuantity(product.id, selectedOptionId));

    // Renderizar controles de add-ons (salsas y palillos) en todas las tarjetas
    {
      const addons = document.createElement("div");
      addons.className = "product-addons";

      const header = document.createElement('div');
      header.className = 'product-addons__header';
      header.textContent = 'SALSAS extras: Agridulce, Soja, Palillos';
      addons.appendChild(header);

      const extrasToShow = [
        { id: "extra-salsa-agridulce", label: "Agridulce", price: 1500 },
        { id: "extra-salsa-soja", label: "Soja", price: 1500 },
        { id: "extra-palillos", label: "Palillos", price: 1500 },
      ];

      extrasToShow.forEach((ex) => {
        const label = document.createElement("label");
        label.className = "addon-checkbox";
        const input = document.createElement("input");
        input.type = "checkbox";
        input.dataset.extraId = ex.id;
        input.setAttribute("aria-label", `Agregar ${ex.label}`);
        const span = document.createElement("span");
        // Etiquetado claro: mostrar el nombre de la salsa y el precio
        if (/salsa/i.test(ex.id)) {
          span.textContent = `${ex.label} por ${formatPrice(ex.price)}`;
        } else if (/palillos/i.test(ex.id)) {
          span.textContent = ex.price ? `Palillos extra por ${formatPrice(ex.price)}` : `Palillos extra`;
        } else {
          span.textContent = `${ex.label} (+${formatPrice(ex.price)})`;
        }
        label.append(input, span);
        addons.appendChild(label);
      });

      // Insertar los addons dentro del body, justo después de la descripción
      description.insertAdjacentElement("afterend", addons);
    }

    if (Array.isArray(product.comboOptions) && product.comboOptions.length) {
      // Si solo hay una variante, mostrar un badge estático con el tamaño
      if (product.comboOptions.length === 1) {
        const only = product.comboOptions[0];
        const sizeBadge = document.createElement("span");
        sizeBadge.className = "size-badge";
        sizeBadge.textContent = only.label;
        if (stepper) {
          stepper.insertAdjacentElement("beforebegin", sizeBadge);
        }
      } else {
        const selector = document.createElement("label");
        const selectorLabel = document.createElement("span");
        const select = document.createElement("select");

        selector.className = "product-card__selector";
        selectorLabel.className = "product-card__selector-label";
        selectorLabel.textContent = "Elegí el combo";
        select.setAttribute("aria-label", `Cantidad de piezas para ${product.name}`);

        product.comboOptions.forEach((option) => {
          const optionElement = document.createElement("option");
          optionElement.value = option.id;
          optionElement.textContent = `${option.label} · ${formatPrice(option.price)}`;
          optionElement.selected = option.id === selectedOptionId;
          select.appendChild(optionElement);
        });

        select.addEventListener("change", () => {
          setProductSelection(product.id, select.value);
        });

        // Agregar etiqueta de cantidad antes del stepper para separar visualmente
        const comboQtyLabel = document.createElement("span");
        comboQtyLabel.className = "combo-qty-label";
        comboQtyLabel.textContent = "Cantidad";
        if (stepper) {
          stepper.insertAdjacentElement("beforebegin", comboQtyLabel);
        }

        selector.append(selectorLabel, select);
        description.insertAdjacentElement("afterend", selector);
      }
    }

    decreaseButton.addEventListener("click", () => removeFromCart(product.id, selectedOptionId));
    increaseButton.addEventListener("click", () => {
      // Agregar el producto principal
      addToCart(product.id, selectedOptionId);
      // micro-interaction: fly image to cart
      const imgNode = card.querySelector('.product-image') || card.querySelector('img');
      if (imgNode) flyToCartFrom(imgNode);
      // Si hay addons seleccionados dentro de la card, agregarlos también como items separados
      const addonContainer = card.querySelector(".product-addons");
      if (addonContainer) {
        const checked = addonContainer.querySelectorAll('input[type="checkbox"]:checked');
        checked.forEach((chk) => {
          const extraId = chk.dataset.extraId;
          if (extraId) {
            addToCart(extraId, null);
          }
        });
      }
    });
    decreaseButton.disabled = getQuantity(product.id, selectedOptionId) === 0;
    productGrid.appendChild(fragment);
  });
}

function updateCartUI() {
  cartItems.innerHTML = "";

  if (!state.cart.length) {
    const emptyState = document.createElement("div");
    const emoji = document.createElement("div");
    const message = document.createElement("p");
    const actionButton = document.createElement("button");

    emptyState.className = "cart-empty";
    emoji.className = "cart-empty__emoji";
    emoji.textContent = "🍣";
    message.textContent = "Tu carrito está vacío";
    actionButton.className = "primary-button primary-button--wide";
    actionButton.type = "button";
    actionButton.textContent = "Ver el menú →";
    actionButton.addEventListener("click", () => {
      closeCart();
      menuSection?.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    emptyState.append(emoji, message, actionButton);
    cartItems.appendChild(emptyState);
  } else {
    state.cart.forEach((item) => {
      const cartItemDetails = getCartItemDetails(item);
      if (!cartItemDetails) {
        return;
      }

      const { product, name, meta: itemMeta, price: unitPriceValue } = cartItemDetails;

      const fragment = cartItemTemplate.content.cloneNode(true);
      const title = fragment.querySelector("h3");
      const note = fragment.querySelector(".cart-item__note");
      const unitPrice = fragment.querySelector(".cart-item__unit-price");
      const price = fragment.querySelector(".cart-item__price");
      const quantity = fragment.querySelector(".stepper__value");
      const decreaseButton = fragment.querySelector('[data-action="decrease"]');
      const increaseButton = fragment.querySelector('[data-action="increase"]');
      const cartItem = fragment.querySelector(".cart-item");

      title.textContent = name;
      note.textContent = `${itemMeta} · ${product.category}`;
      unitPrice.textContent = `Unitario: ${formatPrice(unitPriceValue)}`;
      price.textContent = typeof unitPriceValue === "number"
        ? formatCurrency(unitPriceValue * item.quantity)
        : "Consultá precio";
      quantity.textContent = String(item.quantity);

      decreaseButton.addEventListener("click", () => {
        if (item.quantity === 1) {
          cartItem.classList.add("is-removing");
          window.setTimeout(() => updateCartQuantity(item.id, 0, item.optionId), 160);
          return;
        }

        removeFromCart(item.id, item.optionId);
      });
      increaseButton.addEventListener("click", () => updateCartQuantity(item.id, item.quantity + 1, item.optionId));

      cartItems.appendChild(fragment);
    });
  }

  const summary = getCartSummary();

  cartCount.textContent = String(summary.count);
  const cartBtn = document.getElementById('cartToggle');
  if (cartBtn) {
    cartBtn.classList.remove('cart-button--glow');
    void cartBtn.offsetWidth;
    cartBtn.classList.add('cart-button--glow');
  }
  subtotalValue.textContent = formatCartSubtotal(summary);
  deliveryValue.textContent = formatCartDelivery(summary);
  totalValue.textContent = formatCartTotal(summary).label;

  // Update mobile CTA (show total only)
  const mobileCta = document.getElementById('mobileCta');
  const mobilePrice = document.getElementById('mobileCtaPrice');
  if (mobileCta && mobilePrice) {
    mobilePrice.textContent = formatCartSubtotal(summary);
    mobileCta.hidden = summary.count === 0;
  }

  saveCartToStorage();
}

function getProductBadgeVariantClass(badgeText) {
  const normalizedBadge = String(badgeText || "").toUpperCase();

  if (normalizedBadge === "TOP VENTA" || normalizedBadge.includes("PROMO")) {
    return "product-card__badge--hot";
  }

  return "product-card__badge--ghost";
}

function pulseCartButton() {
  if (!cartToggle) {
    return;
  }

  cartToggle.classList.remove("cart-button--glow");
  void cartToggle.offsetWidth;
  cartToggle.classList.add("cart-button--glow");

  if (cartGlowTimeoutId) {
    window.clearTimeout(cartGlowTimeoutId);
  }

  cartGlowTimeoutId = window.setTimeout(() => {
    cartToggle.classList.remove("cart-button--glow");
  }, 700);
}

function addToCart(productId, optionId) {
  const existingItem = state.cart.find((item) => item.id === productId && (item.optionId ?? null) === (optionId ?? null));

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    state.cart.push({ id: productId, optionId, quantity: 1 });
  }

  renderProducts();
  updateCartUI();
  pulseCartButton();
  if (!SUPPRESS_TOASTS) showToast("Producto agregado al carrito.");
}

// Oferta emergente: mostrar modal pasados 5s y añadir paquete al carrito
function initOfferModal() {
  const modal = document.getElementById('offerModal');
  const backdrop = document.getElementById('backdrop');
  if (!modal) return;

  const showModal = () => {
    modal.hidden = false;
    modal.setAttribute('aria-hidden', 'false');
    if (backdrop) { backdrop.hidden = false; backdrop.removeAttribute('aria-hidden'); }
    // Enfocar CTA para accesibilidad
    const cta = document.getElementById('offerCta');
    if (cta) cta.focus();
  };

  const hideModal = () => {
    modal.hidden = true;
    modal.setAttribute('aria-hidden', 'true');
    if (backdrop) { backdrop.hidden = true; backdrop.setAttribute('aria-hidden', 'true'); }
  };

  document.getElementById('offerClose')?.addEventListener('click', hideModal);
  document.getElementById('offerLater')?.addEventListener('click', hideModal);

  document.getElementById('offerCta')?.addEventListener('click', () => {
    // Añadir items: 1x premium-combo (16), 1x hotburger-smoked, 1x pancho-salmon
    SUPPRESS_TOASTS = true;
    try {
      addToCart('premium-combo', '16');
      addToCart('hotburger-smoked', null);
      addToCart('pancho-salmon', null);
    } finally {
      SUPPRESS_TOASTS = false;
    }
    showToast('Oferta agregada al carrito.');
    hideModal();
  });

  // Mostrar a los 5 segundos si no se mostró aún
  window.setTimeout(showModal, 5000);
}

// Hero CTA: agregar el producto actualmente mostrado en los carousels
function initHeroCtas() {
  const featuredBtn = document.getElementById('featuredAdd');
  const hotBtn = document.getElementById('hotburgerAdd');

  function findProductByImgId(imgId) {
    const img = document.getElementById(imgId);
    if (!img) return null;
    const raw = (img.currentSrc || img.src || "");
    const cleaned = raw.split("?")[0];
    const fname = decodeURIComponent((cleaned.split('/').pop() || '').trim()).toLowerCase();
    if (!fname) return null;
    return (
      products.find((p) => ((p.image || '').split('/').pop() || '').toLowerCase() === fname) || null
    );
  }

  // Mejor fallback: intentar buscar por alt text (nombre derivado) si la coincidencia por archivo falla
  function findProductByImgIdWithFallback(imgId) {
    const primary = findProductByImgId(imgId);
    if (primary) return primary;
    const img = document.getElementById(imgId);
    if (!img) return null;
    const alt = (img.alt || '').toLowerCase().trim();
    if (alt) {
      const byName = products.find((p) => p.name && p.name.toLowerCase().includes(alt));
      if (byName) return byName;
      // también probar con slug del alt
      const slug = alt.replace(/[^a-z0-9]+/g, ' ').trim();
      const bySlug = products.find((p) => ((p.image || '').toLowerCase().includes(slug)));
      if (bySlug) return bySlug;
    }
    console.debug('Hero CTA: no se identificó producto para', imgId, { src: img.currentSrc || img.src, alt: img.alt });
    return null;
  }

  if (featuredBtn) {
    featuredBtn.addEventListener('click', () => {
      const prod = findProductByImgIdWithFallback('featuredCarousel');
      if (!prod) {
        showToast('No se pudo identificar el producto.');
        return;
      }
      const option = getDefaultProductOption(prod);
      addToCart(prod.id, option ? option.id : null);
    });
  }

  if (hotBtn) {
    hotBtn.addEventListener('click', () => {
      const prod = findProductByImgIdWithFallback('hotburgerCarousel');
      if (!prod) {
        showToast('No se pudo identificar el producto.');
        return;
      }
      const option = getDefaultProductOption(prod);
      addToCart(prod.id, option ? option.id : null);
    });
  }
}

function removeFromCart(productId, optionId) {
  updateCartQuantity(productId, getQuantity(productId, optionId) - 1, optionId);
}

function updateCartQuantity(productId, quantity, optionId) {
  const previousQuantity = getQuantity(productId, optionId);

  if (quantity <= 0) {
    state.cart = state.cart.filter((item) => !(item.id === productId && (item.optionId ?? null) === (optionId ?? null)));
  } else {
    state.cart = state.cart.map((item) => {
      if (item.id !== productId || (item.optionId ?? null) !== (optionId ?? null)) {
        return item;
      }

      return { ...item, quantity };
    });
  }

  renderProducts();
  updateCartUI();

  if (previousQuantity !== quantity) {
    pulseCartButton();
  }
}

function getQuantity(productId, optionId) {
  return state.cart.find((item) => item.id === productId && (item.optionId ?? null) === (optionId ?? null))?.quantity ?? 0;
}

function formatCurrency(value) {
  const formatted = new Intl.NumberFormat("es-AR", {
    maximumFractionDigits: 0,
  }).format(value);
  return `${CURRENCY}${formatted}`;
}

function formatLegacyCurrency(value) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatPrice(value) {
  return typeof value === "number" ? formatCurrency(value) : "Consultá precio";
}

function loadCartFromStorage() {
  try {
    const rawValue = localStorage.getItem(STORAGE_KEY);
    return rawValue ? normalizeCart(JSON.parse(rawValue)) : [];
  } catch {
    return [];
  }
}

function saveCartToStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.cart));
}

function generateWhatsAppMessage(scheduledTime = null) {
  const customer = customerName.value.trim();
  const address = customerAddress.value.trim();
  const locality = (customerLocality && customerLocality.value) ? customerLocality.value.trim() : '';
  const paymentMethod = new FormData(checkoutForm).get("paymentMethod") || "Efectivo";
  const summary = getCartSummary();
  const separator = "----------------------------------------";

  const lines = state.cart
    .map((item) => {
      const cartItemDetails = getCartItemDetails(item);
      if (!cartItemDetails) return null;
      const { name, price: unitPriceValue } = cartItemDetails;
      if (typeof unitPriceValue === 'number') {
        const unitLabel = formatCurrency(unitPriceValue);
        return `• ${item.quantity}x ${name} (${unitLabel})`;
      }
      return `• ${item.quantity}x ${name} (Consultá precio)`;
    })
    .filter(Boolean);

  const deliveryLabel = formatCartDelivery(summary);
  const totalMessage = formatCartTotal(summary).label;

  // Pago: si el formulario incluye un field 'paymentGiven' (monto en efectivo), lo usamos
  const form = new FormData(checkoutForm);
  const paymentGivenRaw = form.get('paymentGiven');
  let paymentLine = paymentMethod;
  if (String(paymentMethod).toLowerCase() === 'efectivo' && paymentGivenRaw) {
    const n = Number(String(paymentGivenRaw).replace(/[^0-9\-\.]/g, ''));
    paymentLine = isFinite(n) ? `${paymentMethod} (Paga con ${formatCurrency(n)})` : `${paymentMethod} (${String(paymentGivenRaw)})`;
  }

  let scheduledNote = '';
  if (scheduledTime) {
    scheduledNote = `\n\n⏰ Pedido programado para ${scheduledTime}.`;
  }

  const header = `¡Hola Daikon! 🍣 Quiero hacer un pedido:`;

  const addressLine = `📍 Dirección: ${address || 'No indicada'}${locality ? `, ${locality}` : ''}`;
  const paymentDisplay = `💵 Pago: ${paymentLine}`;
  const deliveryDisplay = `🚴 Envío: ${deliveryLabel}`;
  const totalDisplay = `💰 Total: ${totalMessage}`;

  return [
    header,
    separator,
    ...lines,
    separator,
    addressLine,
    paymentDisplay,
    deliveryDisplay,
    totalDisplay,
  ].join("\n").concat(scheduledNote);
}

function openWhatsApp() {
  if (!state.cart.length) {
    showToast("Tu carrito esta vacio.");
    return;
  }

  const isNameValid = validateRequiredField(customerName);
  const isLocalityValid = validateRequiredField(customerLocality);
  const isAddressValid = validateRequiredField(customerAddress);

  if (!isNameValid || !isLocalityValid || !isAddressValid) {
    showToast("Completá nombre, localidad y dirección para enviar el pedido.");
    if (!isNameValid) {
      customerName.focus();
    } else if (!isLocalityValid) {
      customerLocality.focus();
    } else {
      customerAddress.focus();
    }
    return;
  }

  // Validar que la dirección esté dentro de las zonas cubiertas
  const localityVal = String((customerLocality && customerLocality.value) || "").toLowerCase();
  const addressValue = (localityVal + " " + String(customerAddress.value || "")).toLowerCase();
  const allowedZones = ["la plata", "ensenada", "berisso"];
  const inZone = allowedZones.some((z) => addressValue.includes(z));
  if (!inZone) {
    showToast("Solo hacemos envíos a La Plata, Ensenada y Berisso. Revisá tu dirección.");
    customerAddress.focus();
    return;
  }

  const isScheduling = !isOrderWindowOpen();
  let scheduledTime = null;
  if (isScheduling) {
    const scheduleSelect = document.getElementById('scheduleTime');
    scheduledTime = scheduleSelect ? scheduleSelect.value : `${String(ORDER_OPEN_HOUR).padStart(2,'0')}:00`;
    showToast(`Pedido programado. Se enviará por WhatsApp a ${scheduledTime}.`);
  } else {
    showToast("Pedido listo para confirmar por WhatsApp.");
  }

  const message = generateWhatsAppMessage(scheduledTime);
  openExternalUrl(buildWhatsAppLink(message));
}

function validateRequiredField(field) {
  const isValid = Boolean(field.value.trim());
  field.classList.toggle("is-invalid", !isValid);
  field.setAttribute("aria-invalid", String(!isValid));
  return isValid;
}

function loadCart() {
  return loadCartFromStorage();
}

function normalizeCart(rawCart) {
  if (!Array.isArray(rawCart)) {
    return [];
  }

  const quantitiesById = new Map();

  rawCart.forEach((item) => {
    if (!item || typeof item.id !== "string") {
      return;
    }

    const migratedItem = migrateLegacyCartItem(item);
    const product = products.find((entry) => entry.id === migratedItem.id);
    if (!product) {
      return;
    }

    const quantity = Number.parseInt(String(item.quantity), 10);
    if (!Number.isFinite(quantity) || quantity <= 0) {
      return;
    }

    const optionId = normalizeCartOption(product, migratedItem.optionId);
    const key = buildCartItemKey(migratedItem.id, optionId);
    const currentItem = quantitiesById.get(key);

    if (currentItem) {
      currentItem.quantity += quantity;
      return;
    }

    quantitiesById.set(key, { id: migratedItem.id, optionId, quantity });
  });

  return Array.from(quantitiesById.values());
}

function getCartSummary() {
  return state.cart.reduce(
    (summary, item) => {
      const cartItemDetails = getCartItemDetails(item);
      if (!cartItemDetails) {
        return summary;
      }

      summary.count += item.quantity;

      if (typeof cartItemDetails.price === "number") {
        summary.subtotal += cartItemDetails.price * item.quantity;
      } else {
        summary.hasQuotedItems = true;
      }

      return summary;
    },
    {
      count: 0,
      subtotal: 0,
      hasQuotedItems: false,
    }
  );
}

function formatCartSubtotal(summary) {
  if (summary.hasQuotedItems && summary.subtotal > 0) {
    return `${formatCurrency(summary.subtotal)} + items a consultar`;
  }

  if (summary.hasQuotedItems) {
    return "Items a consultar";
  }

  return formatCurrency(summary.subtotal);
}

function formatCartDelivery(summary) {
  if (summary.hasQuotedItems) {
    return "A confirmar";
  }

  return summary.subtotal ? formatCurrency(DELIVERY_FEE) : formatCurrency(0);
}

function formatCartTotal(summary) {
  if (summary.hasQuotedItems) {
    return {
      label: "Total a confirmar",
      message: summary.subtotal > 0
        ? `${formatCurrency(summary.subtotal)} + envío e items a confirmar`
        : "A confirmar",
    };
  }

  const total = summary.subtotal ? summary.subtotal + DELIVERY_FEE : 0;
  return {
    label: formatCurrency(total),
    message: formatCurrency(total),
  };
}

function persistCart() {
  saveCartToStorage();
}

function buildWhatsAppUrl() {
  return buildWhatsAppLink(generateWhatsAppMessage());
}

function buildWhatsAppLink(message) {
  const encodedMessage = encodeURIComponent(message);
  const normalizedPhone = normalizeWhatsAppNumber(WA_NUMBER);
  const baseUrl = getWhatsAppBaseUrl();
  return `${baseUrl}?phone=${normalizedPhone}&text=${encodedMessage}`;
}

function normalizeWhatsAppNumber(phoneNumber) {
  return String(phoneNumber).replace(/\D/g, "");
}

function getWhatsAppBaseUrl() {
  return isMobileDevice()
    ? "https://api.whatsapp.com/send"
    : "https://web.whatsapp.com/send";
}

function isMobileDevice() {
  return /android|iphone|ipad|ipod|mobile/i.test(window.navigator.userAgent);
}

function openExternalUrl(url) {
  const openedWindow = window.open(url, "_blank", "noopener,noreferrer");

  if (openedWindow) {
    return;
  }

  window.location.href = url;
}

function renderCategoryChips() {
  renderCategories();
}

function renderCart() {
  updateCartUI();
}

function updateQuantity(productId, quantity) {
  updateCartQuantity(productId, quantity);
}

let toastTimeoutId;

function showToast(message) {
  let toast = document.querySelector(".toast");

  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `
      <span class="toast__icon">
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round">
          <polyline points="2,6 5,9 10,3"/>
        </svg>
      </span>
      <span class="toast__text"></span>
    `;
    document.body.appendChild(toast);
  }

  toast.querySelector(".toast__text").textContent = message;
  toast.classList.add("is-visible");

  clearTimeout(toastTimeoutId);
  toastTimeoutId = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 1800);
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    return;
  }

  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js").then((registration) => {
      // If there's already a waiting worker, show update prompt when app is installed
      if (registration.waiting) {
        if (isStandaloneApp() && updateAppButton) updateAppButton.hidden = false;
      }

      registration.addEventListener('updatefound', () => {
        const installing = registration.installing;
        if (!installing) return;
        installing.addEventListener('statechange', () => {
          if (installing.state === 'installed') {
            // New update installed and waiting
            if (registration.waiting && isStandaloneApp() && updateAppButton) {
              updateAppButton.hidden = false;
            }
          }
        });
      });

    }).catch(() => {
      showToast("PWA no pudo registrarse en este entorno.");
    });
  });

window.addEventListener("load", () => {
  initFeaturedCarousel();
  initHotburgerCarousel();
  initOfferModal();
  initHeroCtas();
  // Ensure hero placeholders are removed when hero images load
  ["featuredCarousel", "hotburgerCarousel"].forEach((id) => {
    const img = document.getElementById(id);
    if (!img) return;
    const parent = img.closest('.product-card__media, .hero__panel-media, .promo-card__media') || img.parentElement;
    const placeholder = parent?.querySelector('.image-placeholder');
    function mark() {
      parent && parent.classList.add('is-loaded');
      if (placeholder) placeholder.style.opacity = '0';
    }
    if (img.complete && img.naturalWidth) mark(); else img.addEventListener('load', mark, { once: true });
  });
    // Mobile CTA removed button: no handler required
});
}

function matchesPromoQuery(query) {
  if (!query) {
    return true;
  }

  return [promoLunch.title, promoLunch.description, promoLunch.category, promoLunch.badge]
    .join(" ")
    .toLowerCase()
    .includes(query);
}

function isPromoLunchAvailable() {
  const currentHour = new Date().getHours();
  return currentHour >= 11 && currentHour <= 16;
}

function createPromoCard() {
  const card = document.createElement("article");
  card.className = "promo-card reveal-card";
  card.innerHTML = `
    <div class="promo-card__media">
      <img src="${promoLunch.image}" alt="${promoLunch.title}" loading="lazy" />
      <span class="promo-card__badge">${promoLunch.badge}</span>
    </div>
    <div class="promo-card__body">
      <p class="promo-card__eyebrow">${promoLunch.category}</p>
      <h3>${promoLunch.title}</h3>
      <p>${promoLunch.description}</p>
      <button class="primary-button promo-card__button" type="button">${promoLunch.cta}</button>
    </div>
  `;

  card.querySelector("button").addEventListener("click", () => {
    showToast("Abriendo WhatsApp para consultar la promo.");
    openExternalUrl(buildPromoWhatsAppUrl());
  });

  return card;
}

function buildPromoWhatsAppUrl() {
  // ✏️ EDITAR: mensaje rapido para consultas de la promo almuerzo.
  return buildWhatsAppLink("Hola Daikon, quiero consultar el precio de la Promo Almuerzo.");
}

function setupInstallApp() {
  updateInstallAppVisibility();

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    updateInstallAppVisibility();
  });

  window.addEventListener("appinstalled", () => {
    deferredInstallPrompt = null;
    updateInstallAppVisibility();
    showToast("App instalada correctamente.");
    // When app is installed, if there's a waiting SW, show update button
    if (navigator.serviceWorker && navigator.serviceWorker.getRegistration) {
      navigator.serviceWorker.getRegistration().then((reg) => {
        if (reg && reg.waiting && updateAppButton) {
          updateAppButton.hidden = false;
        }
      }).catch(() => {});
    }
  });
}

function isStandaloneApp() {
  return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
}

// Handle update button action: send skipWaiting to waiting SW and reload on controllerchange
if (updateAppButton) {
  updateAppButton.addEventListener('click', async () => {
    try {
      const reg = await navigator.serviceWorker.getRegistration();
      if (!reg) return;
      if (reg.waiting) {
        reg.waiting.postMessage({ type: 'SKIP_WAITING' });
      }
    } catch (e) {
      console.debug('Update action error', e);
    }
  });

  // Reload page when new SW takes control
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    window.location.reload();
  });
}

function createCarousel({imgId, images, prevId, nextId, statusId, interval = 2000}) {
  const imgEl = document.getElementById(imgId);
  if (!imgEl) return null;

  let idx = 0;
  let timer = null;

  function show(i) {
    idx = i % images.length;
    imgEl.src = images[idx];
    imgEl.alt = images[idx].split("/").pop().replace(/[-_.]/g, " ");
    const status = document.getElementById(statusId);
    if (status) status.textContent = `Mostrando ${idx + 1} de ${images.length}`;
  }

  function next() { show((idx + 1) % images.length); }
  function prev() { show((idx - 1 + images.length) % images.length); }

  function start() {
    if (timer) return;
    timer = setInterval(next, interval);
  }

  function stop() {
    if (!timer) return;
    clearInterval(timer);
    timer = null;
  }

  // Controls
  const prevBtn = document.getElementById(prevId);
  const nextBtn = document.getElementById(nextId);
  if (prevBtn) prevBtn.addEventListener("click", () => { stop(); prev(); prevBtn.blur(); });
  if (nextBtn) nextBtn.addEventListener("click", () => { stop(); next(); nextBtn.blur(); });

  // Pause on interaction and visibility change
  imgEl.addEventListener("mouseenter", stop);
  imgEl.addEventListener("mouseleave", start);
  imgEl.addEventListener("focus", stop);
  imgEl.addEventListener("blur", start);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stop(); else start();
  });

  // Keyboard support
  imgEl.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") { stop(); prevBtn && prevBtn.click(); }
    if (e.key === "ArrowRight") { stop(); nextBtn && nextBtn.click(); }
  });

  show(0);
  start();

  return {start, stop, show, next, prev};
}

function initFeaturedCarousel() {
  createCarousel({
    imgId: "featuredCarousel",
    images: [
      "assets/products/pancho pollo.jpg",
      "assets/products/pancho sushi salmon.jpg",
      "assets/products/pancho langostino.jpg",
      "assets/products/kanikama.png",
    ],
    prevId: "featuredPrev",
    nextId: "featuredNext",
    statusId: "featuredStatus",
    interval: 2000,
  });
}

function isIosDevice() {
  return /iphone|ipad|ipod/i.test(window.navigator.userAgent);
}

function updateInstallAppVisibility() {
  if (!installAppButton) {
    return;
  }

  const shouldShow = !isStandaloneApp();
  installAppButton.hidden = !shouldShow;
}

async function handleInstallAppClick() {
  if (isIosDevice() && !deferredInstallPrompt) {
    showToast("En iPhone o iPad usá Compartir y después Agregar a pantalla de inicio.");
    return;
  }

  if (!deferredInstallPrompt) {
    showToast("La instalación no está disponible todavía en este navegador.");
    return;
  }

  deferredInstallPrompt.prompt();
  const choice = await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  updateInstallAppVisibility();

  if (choice.outcome === "accepted") {
    showToast("Instalación iniciada.");
    return;
  }

  showToast("Instalación cancelada.");
}

function getDefaultProductOption(product) {
  return Array.isArray(product.comboOptions) && product.comboOptions.length
    ? product.comboOptions[0]
    : null;
}

function getSelectedProductOption(product) {
  const defaultOption = getDefaultProductOption(product);
  if (!defaultOption) {
    return null;
  }

  const selectedOptionId = state.productSelections[product.id] ?? defaultOption.id;
  return product.comboOptions.find((option) => option.id === selectedOptionId) ?? defaultOption;
}

function setProductSelection(productId, optionId) {
  state.productSelections[productId] = optionId;
  renderProducts();
}

function buildCartItemKey(productId, optionId) {
  return optionId ? `${productId}::${optionId}` : productId;
}

function normalizeCartOption(product, optionId) {
  if (!Array.isArray(product.comboOptions) || !product.comboOptions.length) {
    return undefined;
  }

  return product.comboOptions.some((option) => option.id === optionId)
    ? optionId
    : getDefaultProductOption(product)?.id;
}

function migrateLegacyCartItem(item) {
  const migration = legacyProductVariantMap[item.id];

  if (!migration) {
    return item;
  }

  return {
    ...item,
    id: migration.id,
    optionId: migration.optionId,
  };
}

function getCartItemDetails(item) {
  const product = products.find((entry) => entry.id === item.id);
  if (!product) {
    return null;
  }

  const option = normalizeCartOption(product, item.optionId)
    ? product.comboOptions.find((entry) => entry.id === normalizeCartOption(product, item.optionId))
    : null;
  const price = option?.price ?? product.price;
  const meta = option?.meta ?? product.meta;
  const name = option ? `${product.name} · ${option.label}` : product.name;

  return {
    product,
    option,
    name,
    meta,
    price,
  };
}

function initHotburgerCarousel() {
  createCarousel({
    imgId: "hotburgerCarousel",
    images: ["assets/products/Sakura.jpg", "assets/products/Smoked.jpg", "assets/products/Lang in the house.jpg"],
    prevId: "hotPrev",
    nextId: "hotNext",
    statusId: "hotStatus",
    interval: 2000,
  });
}

function flyToCartFrom(imgEl) {
  const cartBtn = document.getElementById('cartToggle');
  if (!imgEl || !cartBtn) return;

  const src = imgEl.currentSrc || imgEl.src;
  const rect = imgEl.getBoundingClientRect();
  const cartRect = cartBtn.getBoundingClientRect();

  const clone = document.createElement('img');
  clone.src = src;
  clone.className = 'fly-image';
  clone.style.left = `${rect.left}px`;
  clone.style.top = `${rect.top}px`;
  clone.style.width = `${rect.width}px`;
  clone.style.height = `${rect.height}px`;
  document.body.appendChild(clone);

  // Force layout
  void clone.offsetWidth;

  const translateX = cartRect.left + cartRect.width / 2 - (rect.left + rect.width / 2);
  const translateY = cartRect.top + cartRect.height / 2 - (rect.top + rect.height / 2);
  clone.style.transform = `translate(${translateX}px, ${translateY}px) scale(0.2)`;
  clone.style.opacity = '0.2';

  setTimeout(() => {
    clone.remove();
  }, 800);
}