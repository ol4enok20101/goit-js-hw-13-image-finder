import './styles.css';
import throttle from 'lodash.throttle';
import refs from './js/refs';
import updateImageMarkup from './js/update-image-markup';
import apiService from './js/apiService';

refs.searchButton.addEventListener('click', event => {

  event.preventDefault();

  apiService.query = refs.searchForm.value;

  //  searchForm.value = "";

  apiService.resetPage();
  apiService.fetchImages().then(hits => {
    updateImageMarkup(hits);
    apiService.incrementPage();
  });
});

// бесконечный скролл с тротлом
window.addEventListener('scroll', throttle(endlessScroll, 1000));
function endlessScroll() {
  const block = document.querySelector('.gallery');
  let counter = 1;
  let contentHeight = block.offsetHeight; // 1) высота блока контента вместе с границами
  let yOffset = window.pageYOffset; // 2) текущее положение скролбара
  let window_height = window.innerHeight; // 3) высота внутренней области окна документа
  let y = yOffset + window_height;
  // если пользователь достиг конца
  if (y >= contentHeight) {
    // загружаем новое содержимое в элемент
    apiService.fetchImages().then(hits => {
      updateImageMarkup(hits);
      apiService.incrementPage();
    });
    apiService.incrementPage();
  }
}
