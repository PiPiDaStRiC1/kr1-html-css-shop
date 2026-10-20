const orderDialog = document.getElementById("order-dialog");
const orderForm = document.getElementById("order-form");
const successMessage = document.getElementById("success-message");
const selectedProductInput = document.getElementById("selected-product");

const productDetails = {
  focus: {
    title: "Органайзер «Фокус»",
    badge: "Популярное",
    image: "https://images.unsplash.com/photo-1616627561950-9f746e330187?auto=format&fit=crop&w=1000&q=85",
    alt: "Деревянный органайзер на рабочем столе",
    description: "Модульный органайзер из светлой березы помогает собрать ручки, заметки и небольшие аксессуары в одном месте. Подходит для рабочего стола дома или в офисе.",
    material: "Березовая фанера",
    size: "28 × 18 × 8 см",
    rating: "4.9 из 5 ★",
    availability: "В наличии",
    price: "1 490 ₽",
  },
  rhythm: {
    title: "Термокружка «Ритм»",
    badge: "Скидка 20%",
    image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=700",
    alt: "Стальная термокружка с горячим напитком",
    description: "Стальная термокружка с герметичной крышкой сохраняет температуру напитка во время дороги, учебы или рабочего дня.",
    material: "Нержавеющая сталь",
    size: "450 мл",
    rating: "4.7 из 5 ★",
    availability: "Осталось 7 шт.",
    price: "1 190 ₽",
  },
  mayak: {
    title: "Лампа «Маяк»",
    badge: "Новинка",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=85",
    alt: "Настольная лампа на рабочем столе",
    description: "Настольная лампа с мягким светом, тремя режимами яркости, USB-C и таймером для комфортной работы вечером.",
    material: "Металл и пластик",
    size: "32 × 14 × 14 см",
    rating: "4.8 из 5 ★",
    availability: "В наличии",
    price: "2 790 ₽",
  },
  plan: {
    title: "Блокнот «План»",
    badge: "Новинка",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1000&q=85",
    alt: "Открытый блокнот с ручкой",
    description: "Недатированный планер формата A5 для задач, заметок и планирования учебной недели.",
    material: "Плотная бумага 100 г/м²",
    size: "A5, 96 страниц",
    rating: "4.6 из 5 ★",
    availability: "В наличии",
    price: "890 ₽",
  },
  evening: {
    title: "Диффузор «Тихий вечер»",
    badge: "Для дома",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1000&q=85",
    alt: "Ароматический диффузор в интерьере",
    description: "Легкий аромат хвои и цитруса для спокойной атмосферы дома или небольшого рабочего пространства.",
    material: "Ароматическая композиция",
    size: "100 мл",
    rating: "4.8 из 5 ★",
    availability: "В наличии",
    price: "2 190 ₽",
  },
  route: {
    title: "Рюкзак «Маршрут»",
    badge: "Популярное",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=85",
    alt: "Городской рюкзак на фоне стены",
    description: "Легкий городской рюкзак с отдельным отделением для ноутбука и карманами для ежедневных мелочей.",
    material: "Полиэстер",
    size: "20 л",
    rating: "4.9 из 5 ★",
    availability: "3 цвета в наличии",
    price: "3 490 ₽",
  },
  angle: {
    title: "Подставка «Угол»",
    badge: "Новинка",
    image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=700",
    alt: "Ноутбук на рабочем столе с подставкой",
    description: "Эргономичная подставка помогает поднять экран ноутбука на удобную высоту и освободить место на столе.",
    material: "Алюминий",
    size: "24 × 22 × 6 см",
    rating: "4.8 из 5 ★",
    availability: "В наличии",
    price: "1 590 ₽",
  },
  break: {
    title: "Набор «Перерыв»",
    badge: "Выгодная цена",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85",
    alt: "Набор для чайного перерыва",
    description: "Небольшой набор для короткого отдыха: чай, печенье и открытка в аккуратной упаковке.",
    material: "Чай, печенье, картон",
    size: "3 позиции",
    rating: "4.7 из 5 ★",
    availability: "В наличии",
    price: "990 ₽",
  },
  point: {
    title: "Наушники «Точка»",
    badge: "Новинка",
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1000&q=85",
    alt: "Беспроводные наушники",
    description: "Беспроводная гарнитура для учебы, звонков и музыки с зарядом до 20 часов.",
    material: "Пластик и силикон",
    size: "До 20 часов работы",
    rating: "4.6 из 5 ★",
    availability: "В наличии",
    price: "2 490 ₽",
  },
};

const itemId = new URLSearchParams(window.location.search).get("product") || "focus";
const item = productDetails[itemId] || productDetails.focus;
const itemElements = {
  title: document.getElementById("product-title"),
  image: document.querySelector(".product-detail__image"),
  badge: document.querySelector(".product-detail .product-card__badge"),
  description: document.querySelector(".product-detail__description"),
  specs: document.querySelectorAll(".product-specs dd"),
  price: document.querySelector(".product-detail__price"),
  breadcrumb: document.querySelector(".breadcrumbs__current"),
};
if (itemElements.title && itemElements.image && itemElements.specs.length === 4) {
  itemElements.title.textContent = item.title;
  itemElements.image.src = item.image;
  itemElements.image.alt = item.alt;
  itemElements.badge.textContent = item.badge;
  itemElements.description.textContent = item.description;
  itemElements.specs[0].textContent = item.material;
  itemElements.specs[1].textContent = item.size;
  itemElements.specs[2].textContent = item.rating;
  itemElements.specs[3].textContent = item.availability;
  itemElements.price.textContent = item.price;
  itemElements.breadcrumb.lastChild.textContent = ` / ${item.title}`;
  document.title = `${item.title} — ShopProject`;
  document.querySelector(".product-detail .product-card__button").dataset.product = item.title;
}

document.querySelectorAll(".product-card__button").forEach((button) => {
  button.addEventListener("click", () => {
    if (!orderDialog || !selectedProductInput) return;
    selectedProductInput.value = button.dataset.product || "";
    orderDialog.showModal();
  });

  document.querySelectorAll(".product-card[data-product-id]").forEach((card) => {
    card.setAttribute("tabindex", "0");
    const openItem = () => {
      window.location.href = `item.html?product=${card.dataset.productId}`;
    };
    card.addEventListener("click", (event) => {
      if (!event.target.closest("a, button, input, label")) openItem();
    });
    card.addEventListener("keydown", (event) => {
      if ((event.key === "Enter" || event.key === " ") && !event.target.closest("a, button, input, label")) {
        event.preventDefault();
        openItem();
      }
    });
  });
});

document.getElementById("close-order-dialog")?.addEventListener("click", () => {
  orderDialog?.close();
});

orderForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElements = Array.from(orderForm.elements);
  formElements.forEach((element) => {
    if (element.willValidate) element.removeAttribute("aria-invalid");
  });
  if (!orderForm.checkValidity()) {
    formElements.forEach((element) => {
      if (element.willValidate && !element.checkValidity()) element.setAttribute("aria-invalid", "true");
    });
    orderForm.reportValidity();
    return;
  }
  if (successMessage) successMessage.hidden = false;
  orderForm.reset();
  orderDialog?.close();
});

const filterForm = document.querySelector(".filters-form");
const filterCards = document.querySelectorAll("[data-category][data-price]");
filterForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const min = Number(document.getElementById("price-from")?.value || 0);
  const maxValue = document.getElementById("price-to")?.value;
  const max = maxValue ? Number(maxValue) : Infinity;
  const categories = [...filterForm.querySelectorAll('input[name="category"]:checked')].map((input) => input.value);
  let visibleCount = 0;
  filterCards.forEach((card) => {
    const categoryMatch = !categories.length || categories.includes("all") || categories.some((category) => card.dataset.category.includes(category));
    const price = Number(card.dataset.price);
    const visible = categoryMatch && price >= min && price <= max;
    card.hidden = !visible;
    if (visible) visibleCount += 1;
  });
  const emptyMessage = document.querySelector(".filter-empty");
  if (emptyMessage) emptyMessage.hidden = visibleCount !== 0;
});

document.querySelector(".filters-form__reset")?.addEventListener("click", () => {
  filterForm?.reset();
  filterCards.forEach((card) => { card.hidden = false; });
  const emptyMessage = document.querySelector(".filter-empty");
  if (emptyMessage) emptyMessage.hidden = true;
});

const backToTop = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
  backToTop?.classList.toggle("is-visible", window.scrollY > 420);
});
backToTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
