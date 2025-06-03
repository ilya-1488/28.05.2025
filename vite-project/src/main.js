document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  let currentSlide = 0;
  let slideInterval;

  // Функция переключения слайда
  function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");
    currentSlide = index;
  }

  // Автопереключение каждые 5 секунд
  function startSlider() {
    slideInterval = setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }, 5000);
  }

  // Остановка автопереключения при клике на точку
  function pauseSlider() {
    clearInterval(slideInterval);
  }

  // Клик по точкам
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const slideIndex = parseInt(dot.getAttribute("data-slide"));
      pauseSlider();
      showSlide(slideIndex);
      startSlider();
    });
  });

  // Запуск слайдера
  startSlider();
});
