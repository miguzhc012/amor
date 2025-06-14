window.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.carousel-slide');
  let index = 0;

  function nextSlide() {
    index = (index + 1) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  setInterval(nextSlide, 4000); // troca a cada 4 segundos
});