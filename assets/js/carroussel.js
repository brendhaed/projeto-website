// Clona o carrossel e insere onde quiser
const modelo = document.getElementById('carousel-modelo');
const clone = modelo.cloneNode(true);
clone.removeAttribute('id'); 
document.getElementById('area-do-clone').appendChild(clone);

// Função para iniciar carrossel em um container
function iniciarCarrossel(wrapper) {
  const carousel = wrapper.querySelector(".custom-carousel");
  const next = wrapper.querySelector(".next");
  const prev = wrapper.querySelector(".prev");
  const dots = wrapper.querySelectorAll('.carousel-dot');

  const card = carousel.querySelector(".card");
  const cardStyle = window.getComputedStyle(card);
  const cardWidth = card.offsetWidth + parseInt(cardStyle.marginRight);
  const scrollStep = cardWidth * 2;

  let indiceAtual = 0;
  const totalSlides = Math.ceil(carousel.scrollWidth / scrollStep);

  function updateDots(index) {
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  function scrollCarousel(direction) {
    if (direction === 1) {
      if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth) {
        carousel.scrollLeft = 0;
        indiceAtual = 0;
      } else {
        carousel.scrollBy({ left: scrollStep, behavior: "smooth" });
        indiceAtual = (indiceAtual + 1) % totalSlides;
      }
    } else {
      if (carousel.scrollLeft <= 0) {
        carousel.scrollLeft = carousel.scrollWidth;
        indiceAtual = totalSlides - 1;
      } else {
        carousel.scrollBy({ left: -scrollStep, behavior: "smooth" });
        indiceAtual = (indiceAtual - 1 + totalSlides) % totalSlides;
      }
    }
    updateDots(indiceAtual);
  }

  next.addEventListener("click", () => scrollCarousel(1));
  prev.addEventListener("click", () => scrollCarousel(-1));
  setInterval(() => scrollCarousel(1), 3000);
}

// Inicializa carrossel original e clone
document.querySelectorAll(".custom-carousel-wrapper").forEach(wrapper => {
  // Evita iniciar duplicado caso já tenha sido iniciado
  if (!wrapper.dataset.iniciado) {
    iniciarCarrossel(wrapper);
    wrapper.dataset.iniciado = true;
  }
});
