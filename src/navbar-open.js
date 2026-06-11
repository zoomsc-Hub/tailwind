document.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.querySelector('.burger-menu');
  const navbar = document.querySelector('.navbar');

  if (burgerMenu && navbar) {
    burgerMenu.addEventListener('click', () => {
      // Переключаем класс открытого состояния для меню и самого бургера
      navbar.classList.toggle('is-open');
      burgerMenu.classList.toggle('is-open');
    });
  }
});