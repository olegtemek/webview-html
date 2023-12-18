function adjustTopOnScroll() {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  // Исходное значение 'top'
  const initialTop = -286; // начальное положение блока

  // Рассчитываем новое значение 'top'
  // Например, уменьшаем 'top' на количество пикселей прокрутки
  const newTop = initialTop - (scrollPosition / 2.5);

  // Обновляем значение 'top' для элемента
  const element = document.getElementById('circle');
  element.style.top = `${newTop}px`;
}

if (document.getElementById('circle')) {
  window.addEventListener('scroll', adjustTopOnScroll);
}
