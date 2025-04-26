
  const toggle = document.getElementById("menu-toggle");
  const overlay = document.getElementById("overlay-bg");

  toggle.addEventListener("click", () => {
    overlay.classList.toggle("active");
  });

