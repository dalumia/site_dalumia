document.addEventListener("DOMContentLoaded", () => {
  // Ano atual no rodapé
  document.getElementById("year").textContent = new Date().getFullYear();

  // Menu mobile
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => navLinks.classList.remove("active"));
  });

  // Filtro de Serviços (Anexos B, C e D)
  const filterBtns = document.querySelectorAll(".filter-btn");
  const serviceCards = document.querySelectorAll(".service-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      serviceCards.forEach((card) => {
        if (filter === "all" || card.getAttribute("data-category") === filter) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });

  // Pré-selecionar serviço no formulário ao clicar no card
  const serviceSelect = document.getElementById("servico-select");
  document.querySelectorAll(".service-link").forEach((link) => {
    link.addEventListener("click", () => {
      const selectedService = link.getAttribute("data-service");
      if (selectedService) {
        serviceSelect.value = selectedService;
      }
    });
  });

  // Acordeão do FAQ
  const accordionItems = document.querySelectorAll(".accordion-item");
  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header");
    header.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");

      accordionItems.forEach((i) => {
        i.classList.remove("active");
        i.querySelector(".accordion-body").style.maxHeight = null;
      });

      if (!isOpen) {
        item.classList.add("active");
        const body = item.querySelector(".accordion-body");
        body.style.maxHeight = body.scrollHeight + "px";
      }
    });
  });

  // Simulação de envio do formulário (integrável com Formspree / WhatsApp)
  const contactForm = document.getElementById("contact-form");
  const formFeedback = document.getElementById("form-feedback");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const servico = serviceSelect.value;

    formFeedback.textContent = `Obrigado, ${nome}! Recebemos seu interesse em "${servico}". Entraremos em contato em breve.`;
    contactForm.reset();
  });
});
