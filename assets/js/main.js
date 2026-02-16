/* =========================================================
   JAVASCRIPT: assets/js/main.js
   Purpose: tiny interactions for teaching
   ========================================================= */

(function () {
  // Helper: safely get elements (so this file works on both pages)
  const el = (id) => document.getElementById(id);

  const labelToggle = el("labelToggle");
  const themeButton = el("themeButton");
  const menuButton = el("menuButton");
  const navList = el("navList");

  const scrollTopButton = el("scrollTopButton");
  const primaryAction = el("primaryAction");
  const secondaryAction = el("secondaryAction");

  const demoForm = el("demoForm");
  const formStatus = el("formStatus");

  const demoModal = el("demoModal");
  const openModalButton = el("openModalButton");
  const closeModalButton = el("closeModalButton");

  // ---------------------------
  // Teaching Labels Toggle
  // ---------------------------
  if (labelToggle) {
    labelToggle.addEventListener("change", () => {
      document.body.classList.toggle("labels-hidden", !labelToggle.checked);
    });
  }

  // ---------------------------
  // Theme Toggle (Light/Dark)
  // ---------------------------
  const applyTheme = (theme) => {
    // We store theme on <html> so CSS can switch variables
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) applyTheme(savedTheme);

  if (themeButton) {
    themeButton.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      applyTheme(next);
    });
  }

  // ---------------------------
  // Mobile Menu Toggle
  // ---------------------------
  if (menuButton && navList) {
    menuButton.addEventListener("click", () => {
      const isOpen = navList.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });
  }

  // ---------------------------
  // Demo Buttons
  // ---------------------------
  if (primaryAction) {
    primaryAction.addEventListener("click", () => {
      alert("Primary Action clicked (demo).");
    });
  }

  if (secondaryAction) {
    secondaryAction.addEventListener("click", () => {
      alert("Secondary Action clicked (demo).");
    });
  }

  // ---------------------------
  // Scroll to Top Button
  // ---------------------------
  if (scrollTopButton) {
    scrollTopButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // ---------------------------
  // Demo Form Handling
  // ---------------------------
  if (demoForm && formStatus) {
    demoForm.addEventListener("submit", (event) => {
      event.preventDefault(); // prevents real page reload

      // FormData reads all input values from the form
      const data = new FormData(demoForm);

      // Convert to a plain object for easy display
      const obj = {};
      for (const [key, value] of data.entries()) {
        obj[key] = value;
      }

      formStatus.textContent =
        "STATUS: Demo form submitted (no real submission). Collected values: " +
        JSON.stringify(obj);
    });

    demoForm.addEventListener("reset", () => {
      formStatus.textContent = "STATUS: Form reset.";
    });
  }

  // ---------------------------
  // Modal (Dialog) Demo
  // ---------------------------
  if (demoModal && openModalButton && closeModalButton) {
    openModalButton.addEventListener("click", () => {
      demoModal.showModal();
    });

    closeModalButton.addEventListener("click", () => {
      demoModal.close();
    });
  }
})();
