// TypeScript version of app.js

// Helper: narrow HTMLElement to a type with dataset
interface ControlElement extends HTMLElement {
  dataset: DOMStringMap & { id?: string };
}

(() => {
  const controls = Array.from(document.querySelectorAll(".control")) as ControlElement[];
  controls.forEach((button) => {
    button.addEventListener("click", function () {
      const activeBtn = document.querySelector(".active-btn");
      if (activeBtn instanceof Element) activeBtn.classList.remove("active-btn");
      this.classList.add("active-btn");

      const activeSection = document.querySelector(".active");
      if (activeSection instanceof Element) activeSection.classList.remove("active");

      const id = button.dataset.id;
      if (id) {
        const el = document.getElementById(id);
        if (el) el.classList.add("active");
      }
    });
  });

  const themeBtn = document.querySelector(".theme-btn");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
    });
  }
})();
