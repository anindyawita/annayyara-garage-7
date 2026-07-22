/* =============================================
   LUXURY RENT CAR SURABAYA — main.js
   ============================================= */

document.addEventListener("DOMContentLoaded", function () {
  /* -----------------------------------------------
     1. NAVBAR — floating with scroll effect
  ----------------------------------------------- */
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  /* -----------------------------------------------
     2. SMOOTH SCROLL — semua anchor link internal
  ----------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (!target) return;

      e.preventDefault();

      const navHeight = navbar.offsetHeight;
      const targetTop =
        target.getBoundingClientRect().top + window.scrollY - navHeight - 16;

      window.scrollTo({ top: targetTop, behavior: "smooth" });

      // Tutup mobile menu jika terbuka
      closeMobileMenu();
    });
  });

  /* -----------------------------------------------
     3. HAMBURGER MENU (mobile)
  ----------------------------------------------- */
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  function closeMobileMenu() {
    hamburger.classList.remove("open");
    mobileMenu.classList.remove("open");
  }

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("open");
    mobileMenu.classList.toggle("open");
  });

  /* -----------------------------------------------
     4. FADE-IN ON SCROLL (Intersection Observer)
  ----------------------------------------------- */
  const fadeEls = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry, i) {
        if (entry.isIntersecting) {
          // Stagger: delay berdasarkan urutan dalam parent
          const siblings = Array.from(
            entry.target.parentElement.querySelectorAll(".fade-in"),
          );
          const index = siblings.indexOf(entry.target);
          const delay = index * 80;

          setTimeout(function () {
            entry.target.classList.add("visible");
          }, delay);

          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px",
    },
  );

  fadeEls.forEach(function (el) {
    observer.observe(el);
  });

  /* -----------------------------------------------
     5. GALERI MOBIL — klik card buka modal
  ----------------------------------------------- */
  const modalOverlay = document.getElementById("modalOverlay");
  const modalClose = document.getElementById("modalClose");
  const modalImg = document.getElementById("modalImg");
  const modalPlaceholder = document.getElementById("modalPlaceholder");
  const modalType = document.getElementById("modalType");
  const modalName = document.getElementById("modalName");
  const modalDesc = document.getElementById("modalDesc");

  function openModal(card) {
    const name = card.getAttribute("data-name") || "";
    const type = card.getAttribute("data-type") || "";
    const desc = card.getAttribute("data-desc") || "";

    const cardImg = card.querySelector(".mobil-img");
    const imgSrc = cardImg ? cardImg.getAttribute("src") : "";

    modalType.textContent = type;
    modalName.textContent = name;
    modalDesc.textContent = desc;

    if (imgSrc) {
      modalImg.src = imgSrc;
      modalImg.alt = name;
      modalImg.style.display = "block";
      modalPlaceholder.style.display = "none";

      // Jika gambar error, tampilkan placeholder
      modalImg.onerror = function () {
        modalImg.style.display = "none";
        modalPlaceholder.style.display = "flex";
      };
    } else {
      modalImg.style.display = "none";
      modalPlaceholder.style.display = "flex";
    }

    modalOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modalOverlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  // Klik card
  document.querySelectorAll(".mobil-card").forEach(function (card) {
    card.addEventListener("click", function () {
      openModal(this);
    });

    // Keyboard accessibility
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(this);
      }
    });
  });

  // Tombol tutup
  modalClose.addEventListener("click", closeModal);

  // Klik di luar modal
  modalOverlay.addEventListener("click", function (e) {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  // Tombol Escape
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeModal();
    }
  });
});
