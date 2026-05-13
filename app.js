// ✏️ EDITAR: cargos base y claves de almacenamiento.
const DELIVERY_FEE = 1500;
const STORAGE_KEY = "daikon-sushi-cart";

// ✏️ EDITAR: reemplazar por el numero real de WhatsApp del negocio.
const WA_NUMBER = "+542213039649";

// ✏️ EDITAR: cambiar simbolo de moneda si el negocio lo necesita.
const CURRENCY = "$";
const CHAT_TRANSITION_MS = 240;
const CART_TRANSITION_MS = 320;
const ORDER_OPEN_HOUR = 18;
const ORDER_CLOSE_HOUR = 0;
const ORDER_CLOSE_MINUTE = 30;

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
    answer: "Tenemos Promo Almuerzo y promos rotativas como el 2x1 after office. Para confirmar disponibilidad y precio del día, abrí la promo o escribinos por WhatsApp.",
  },
  {
    label: "Incluye",
    keywords: ["incluye", "palillos", "soja", "wasabi", "jengibre", "salsas"],
    answer: "Todo pedido incluye palillos, salsa de soja, wasabi y jengibre.",
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
  id: "promo-almuerzo",
  category: "Promo Almuerzo",
  badge: "PROMO",
  title: "Promo Almuerzo Daikon",
  description: "Consultá la promo del mediodía y coordiná tu pedido directo por WhatsApp.",
  image: "assets/products/midnight-gyoza.svg",
  cta: "Consultar promo",
};

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
    image: "assets/products/pancho sushi langostinos.jpg",
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
    image: "assets/products/tokyo-crunch.svg",
    meta: "Roll caliente / hondashi",
    featured: true,
  },
  {
    id: "daikon-16",
    name: "Daikon 16 pzas",
    category: "Combos Daikon",
    badge: "Clásico",
    description: "Philadelphia, Salmón Cocido, Kanikama, Tamago, Atún.",
    price: null,
    image: "assets/products/nigiri-lux.svg",
    meta: "16 piezas / consultar",
  },
  {
    id: "daikon-32",
    name: "Daikon 32 pzas",
    category: "Combos Daikon",
    badge: "Clásico",
    description: "Philadelphia, Salmón Cocido, Kanikama, Tamago, Atún.",
    price: null,
    image: "assets/products/midnight-gyoza.svg",
    meta: "32 piezas / consultar",
  },
  {
    id: "daikon-40",
    name: "Daikon 40 pzas",
    category: "Combos Daikon",
    badge: "Clásico",
    description: "Philadelphia, Salmón Cocido, Kanikama, Tamago, Atún.",
    price: null,
    image: "assets/products/matcha-mochi.svg",
    meta: "40 piezas / consultar",
  },
  {
    id: "daikon-48",
    name: "Daikon 48 pzas",
    category: "Combos Daikon",
    badge: "Clásico",
    description: "Philadelphia, Salmón Cocido, Kanikama, Tamago, Atún.",
    price: null,
    image: "assets/products/neon-dragon-box.svg",
    meta: "48 piezas / consultar",
  },
  {
    id: "daikon-64",
    name: "Daikon 64 pzas",
    category: "Combos Daikon",
    badge: "Clásico",
    description: "Philadelphia, Salmón Cocido, Kanikama, Tamago, Atún.",
    price: null,
    image: "assets/products/akuma-roll.svg",
    meta: "64 piezas / consultar",
  },
  {
    id: "premium-16",
    name: "Premium 16 pzas",
    category: "Combos Premium",
    badge: "Premium",
    description: "Philadelphia, Feel Roll, Salmón Cocido, Langostinos, Bs.As. Roll, Tentación Roll, Placer Roll, California Especial.",
    price: null,
    image: "assets/products/tokyo-crunch.svg",
    meta: "16 piezas / consultar",
  },
  {
    id: "premium-32",
    name: "Premium 32 pzas",
    category: "Combos Premium",
    badge: "Premium",
    description: "Ídem Premium.",
    price: null,
    image: "assets/products/nigiri-lux.svg",
    meta: "32 piezas / consultar",
  },
  {
    id: "premium-48",
    name: "Premium 48 pzas",
    category: "Combos Premium",
    badge: "Premium",
    description: "Ídem Premium.",
    price: null,
    image: "assets/products/midnight-gyoza.svg",
    meta: "48 piezas / consultar",
  },
  {
    id: "premium-64",
    name: "Premium 64 pzas",
    category: "Combos Premium",
    badge: "Premium",
    description: "Ídem Premium.",
    price: null,
    image: "assets/products/matcha-mochi.svg",
    meta: "64 piezas / consultar",
  },
  {
    id: "deluxe-16",
    name: "Deluxe 16 pzas",
    category: "Combos Deluxe",
    badge: "Deluxe",
    description: "Salmón crudo, Salmón Cocido, Salmón ahumado, Caviar, Langostinos, Feel roll, Soul roll.",
    price: null,
    image: "assets/products/neon-dragon-box.svg",
    meta: "16 piezas / consultar",
  },
  {
    id: "todo-salmon-16",
    name: "Todo Salmón 16 pzas",
    category: "Todo Salmón",
    badge: "Salmón",
    description: "Philadelphia, Feel Roll, Geishas, Nigiri Sake, Bs.As. Roll.",
    price: null,
    image: "assets/products/akuma-roll.svg",
    meta: "16 piezas / consultar",
  },
  {
    id: "todo-salmon-32",
    name: "Todo Salmón 32 pzas",
    category: "Todo Salmón",
    badge: "Salmón",
    description: "Ídem Todo Salmón.",
    price: null,
    image: "assets/products/tokyo-crunch.svg",
    meta: "32 piezas / consultar",
  },
  {
    id: "todo-salmon-48",
    name: "Todo Salmón 48 pzas",
    category: "Todo Salmón",
    badge: "Salmón",
    description: "Ídem Todo Salmón.",
    price: null,
    image: "assets/products/nigiri-lux.svg",
    meta: "48 piezas / consultar",
  },
  {
    id: "entrada-roll-caliente-salmon",
    name: "Roll Caliente Salmón",
    category: "Entradas",
    badge: "Entrada",
    description: "Relleno de salmón — 8 piezas.",
    price: null,
    image: "assets/products/neon-dragon-box.svg",
    meta: "8 piezas / consultar",
  },
  {
    id: "entrada-roll-caliente-kanikama",
    name: "Roll Caliente Kanikama",
    category: "Entradas",
    badge: "Entrada",
    description: "Relleno de kanikama — 8 piezas.",
    price: null,
    image: "assets/products/tokyo-crunch.svg",
    meta: "8 piezas / consultar",
  },
  {
    id: "entrada-spring-rolls",
    name: "Spring Rolls",
    category: "Entradas",
    badge: "Entrada",
    description: "Rellenos de carne/verdura — 4 unidades.",
    price: null,
    image: "assets/products/matcha-mochi.svg",
    meta: "4 unidades / consultar",
  },
  {
    id: "entrada-gyozas",
    name: "Gyozas",
    category: "Entradas",
    badge: "Entrada",
    description: "Rellenas de cerdo — 5 unidades.",
    price: null,
    image: "assets/products/midnight-gyoza.svg",
    meta: "5 unidades / consultar",
  },
  {
    id: "entrada-ebi-crocante",
    name: "Ebi Crocante",
    category: "Entradas",
    badge: "Entrada",
    description: "Langostinos rebozados — 5 unidades.",
    price: null,
    image: "assets/products/akuma-roll.svg",
    meta: "5 unidades / consultar",
  },
];

const state = {
  activeCategory: "Todos",
  query: "",
  cart: loadCart(),
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
const checkoutButton = document.querySelector("#checkoutButton");
const checkoutForm = document.querySelector("#checkoutForm");
const customerName = document.querySelector("#customerName");
const customerAddress = document.querySelector("#customerAddress");
const chatToggle = document.querySelector("#chatToggle");
const chatClose = document.querySelector("#chatClose");
const floatingMenu = document.querySelector("#floatingMenu");
const floatingMenuToggle = document.querySelector("#floatingMenuToggle");
const floatingMenuPanel = document.querySelector("#floatingMenuPanel");
const floatingCategoryChips = document.querySelector("#floatingCategoryChips");
const daikonChat = document.querySelector("#daikonChat");
const openOrdersButton = document.querySelector("#openOrdersButton");
const installAppButton = document.querySelector("#installAppButton");
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
  registerServiceWorker();
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
  cartToggle.addEventListener("click", toggleCart);
  heroCartButton.addEventListener("click", openCart);
  cartClose.addEventListener("click", closeCart);
  backdrop.addEventListener("click", closeCart);
  cartScrollUp.addEventListener("click", () => scrollCartItems(-180));
  cartScrollDown.addEventListener("click", () => scrollCartItems(180));

  featuredAdd.addEventListener("click", () => {
    addToCart("pancho-salmon");
  });

  if (installAppButton) {
    installAppButton.addEventListener("click", handleInstallAppClick);
  }

  if (openOrdersButton) {
    openOrdersButton.addEventListener("click", handleOpenOrdersClick);
  }

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

  customerName.addEventListener("input", () => validateRequiredField(customerName));
  customerAddress.addEventListener("input", () => validateRequiredField(customerAddress));

  checkoutButton.addEventListener("click", openWhatsApp);

  floatingMenuToggle.addEventListener("click", toggleFloatingMenu);
  chatToggle.addEventListener("click", toggleChat);
  chatClose.addEventListener("click", closeChat);
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
    isOpen ? "Pedidos abiertos de 18:00 a 00:30" : "Pedidos cerrados hasta las 18:00"
  );

  if (label) {
    label.textContent = isOpen ? "Abierto ahora" : "Cerrado ahora";
  }
}

function handleOpenOrdersClick() {
  if (!isOrderWindowOpen()) {
    showToast("Los pedidos se habilitan a las 18:00 y cierran a las 00:30.");
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
  const isOpen = daikonChat.classList.contains("is-open");
  if (!isOpen) {
    closeFloatingMenu();
    openChat();
    return;
  }

  closeChat();
}

function openChat() {
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
  chatPanel.setAttribute("aria-hidden", "true");
  chatToggle.setAttribute("aria-expanded", "false");
  daikonChat.classList.remove("is-open");

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
  const isOpen = floatingMenu.classList.contains("is-open");
  if (!isOpen) {
    closeChat();
    openFloatingMenu();
    return;
  }

  closeFloatingMenu();
}

function openFloatingMenu() {
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
  floatingMenuPanel.setAttribute("aria-hidden", "true");
  floatingMenuToggle.setAttribute("aria-expanded", "false");
  floatingMenu.classList.remove("is-open");

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
  if (cartDrawer.classList.contains("is-open")) {
    closeCart();
    return;
  }

  openCart();
}

function openCart() {
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
  // ✏️ EDITAR: si queres cambiar el orden fijo de categorias, modificá este array base.
  const categories = [
    "Todos",
    promoLunch.category,
    ...new Set(products.map((product) => product.category).filter((category) => category !== promoLunch.category)),
  ];

  renderCategoryButtons(categoryChips, categories);
  renderCategoryButtons(floatingCategoryChips, categories, { closeOnClick: true });
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
  state.activeCategory = category;
  const showPromoCard =
    (state.activeCategory === "Todos" || state.activeCategory === promoLunch.category) &&
    matchesPromoQuery(state.query);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      state.activeCategory === "Todos" || product.category === state.activeCategory;
    const query = state.query;
    const matchesQuery =
      !query ||
      [product.name, product.description, product.category, product.meta]
        .join(" ")
        .toLowerCase()
        .includes(query);

    return matchesCategory && matchesQuery;
  });

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
    const category = fragment.querySelector(".product-card__category");
    const price = fragment.querySelector(".product-card__price");
    const title = fragment.querySelector("h3");
    const description = fragment.querySelector(".product-card__description");
    const meta = fragment.querySelector(".product-card__meta");
    const quantity = fragment.querySelector(".card-stepper__value");
    const decreaseButton = fragment.querySelector('[data-action="decrease"]');
    const increaseButton = fragment.querySelector('[data-action="increase"]');

    card.style.animationDelay = `${(showPromoCard ? index + 1 : index) * 70}ms`;
    card.classList.toggle("product-card--featured", Boolean(product.featured));
    image.src = product.image;
    image.alt = product.name;
    badge.textContent = product.badge;
    category.textContent = product.category;
    price.textContent = formatPrice(product.price);
    title.textContent = product.name;
    description.textContent = product.description;
    meta.textContent = product.meta;
    quantity.textContent = String(getQuantity(product.id));

    decreaseButton.addEventListener("click", () => removeFromCart(product.id));
    increaseButton.addEventListener("click", () => addToCart(product.id));
    decreaseButton.disabled = getQuantity(product.id) === 0;
    productGrid.appendChild(fragment);
  });
}

function updateCartUI() {
  cartItems.innerHTML = "";

  if (!state.cart.length) {
    const emptyState = document.createElement("div");
    emptyState.className = "empty-state";
    emptyState.textContent = "Todavia no sumaste nada. Elegi una pieza y armá tu combo.";
    cartItems.appendChild(emptyState);
  }

  state.cart.forEach((item) => {
    const product = products.find((entry) => entry.id === item.id);
    if (!product) {
      return;
    }

    const fragment = cartItemTemplate.content.cloneNode(true);
    const title = fragment.querySelector("h3");
    const note = fragment.querySelector(".cart-item__note");
    const unitPrice = fragment.querySelector(".cart-item__unit-price");
    const price = fragment.querySelector(".cart-item__price");
    const quantity = fragment.querySelector(".stepper__value");
    const decreaseButton = fragment.querySelector('[data-action="decrease"]');
    const increaseButton = fragment.querySelector('[data-action="increase"]');
    const cartItem = fragment.querySelector(".cart-item");

    title.textContent = product.name;
    note.textContent = `${product.meta} · ${product.category}`;
    unitPrice.textContent = `Unitario: ${formatPrice(product.price)}`;
    price.textContent = typeof product.price === "number"
      ? formatCurrency(product.price * item.quantity)
      : "Consultá precio";
    quantity.textContent = String(item.quantity);

    decreaseButton.addEventListener("click", () => {
      if (item.quantity === 1) {
        cartItem.classList.add("is-removing");
        window.setTimeout(() => updateCartQuantity(item.id, 0), 160);
        return;
      }

      removeFromCart(item.id);
    });
    increaseButton.addEventListener("click", () => updateCartQuantity(item.id, item.quantity + 1));

    cartItems.appendChild(fragment);
  });

  const summary = getCartSummary();

  cartCount.textContent = String(summary.count);
  subtotalValue.textContent = formatCartSubtotal(summary);
  deliveryValue.textContent = formatCartDelivery(summary);
  totalValue.textContent = formatCartTotal(summary).label;

  saveCartToStorage();
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

function addToCart(productId) {
  const existingItem = state.cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    state.cart.push({ id: productId, quantity: 1 });
  }

  renderProducts();
  updateCartUI();
  pulseCartButton();
  showToast("Producto agregado al carrito.");
}

function removeFromCart(productId) {
  updateCartQuantity(productId, getQuantity(productId) - 1);
}

function updateCartQuantity(productId, quantity) {
  const previousQuantity = getQuantity(productId);

  if (quantity <= 0) {
    state.cart = state.cart.filter((item) => item.id !== productId);
  } else {
    state.cart = state.cart.map((item) => {
      if (item.id !== productId) {
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

function getQuantity(productId) {
  return state.cart.find((item) => item.id === productId)?.quantity ?? 0;
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

function generateWhatsAppMessage() {
  const customer = customerName.value.trim();
  const address = customerAddress.value.trim();
  const paymentMethod = new FormData(checkoutForm).get("paymentMethod") || "Efectivo";
  const summary = getCartSummary();
  const lines = state.cart
    .map((item) => {
      const product = products.find((entry) => entry.id === item.id);
      if (!product) {
        return "";
      }

      const itemSubtotal = typeof product.price === "number"
        ? formatCurrency(product.price * item.quantity)
        : "Consultá precio";
      return typeof product.price === "number"
        ? `- ${item.quantity}x ${product.name} — ${itemSubtotal}`
        : `- ${item.quantity}x ${product.name} — Consultá precio`;
    })
    .filter(Boolean);

  const totalLabel = formatCartTotal(summary).message;
  const deliveryLabel = formatCartDelivery(summary);
  return `🍣 *NUEVO PEDIDO - DAIKON SUSHI*\n\n👤 *Cliente:* ${customer}\n📍 *Dirección:* ${address}\n\n🛒 *Detalle del pedido:*\n${lines.join("\n")}\n\n🚚 *Envío:* ${deliveryLabel}\n💰 *Total:* ${totalLabel}\n💳 *Medio de pago:* ${paymentMethod}`;
}

function openWhatsApp() {
  if (!state.cart.length) {
    showToast("Tu carrito esta vacio.");
    return;
  }

  const isNameValid = validateRequiredField(customerName);
  const isAddressValid = validateRequiredField(customerAddress);

  if (!isNameValid || !isAddressValid) {
    showToast("Completá nombre y dirección para enviar el pedido.");
    (isNameValid ? customerAddress : customerName).focus();
    return;
  }

  showToast("Pedido listo para confirmar por WhatsApp.");
  openExternalUrl(buildWhatsAppUrl());
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

    const product = products.find((entry) => entry.id === item.id);
    if (!product) {
      return;
    }

    const quantity = Number.parseInt(String(item.quantity), 10);
    if (!Number.isFinite(quantity) || quantity <= 0) {
      return;
    }

    quantitiesById.set(item.id, (quantitiesById.get(item.id) ?? 0) + quantity);
  });

  return Array.from(quantitiesById, ([id, quantity]) => ({ id, quantity }));
}

function getCartSummary() {
  return state.cart.reduce(
    (summary, item) => {
      const product = products.find((entry) => entry.id === item.id);
      if (!product) {
        return summary;
      }

      summary.count += item.quantity;

      if (typeof product.price === "number") {
        summary.subtotal += product.price * item.quantity;
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
    document.body.appendChild(toast);
  }

  toast.textContent = message;
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
    navigator.serviceWorker.register("service-worker.js").catch(() => {
      showToast("PWA no pudo registrarse en este entorno.");
    });
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
  });
}

function isStandaloneApp() {
  return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
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