import './styles.css';
import throttle from 'lodash.throttle';
import refs from './js/refs';
import updateImageMarkup from './js/update-image-markup';
import fetchImages from './js/fetch-images';
import scroll from './js/scroll.js';

refs.searchForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  refs.gallery.innerHTML = '';

  const form = event.currentTarget;
  const inputValue = form.elements.query.value;

  handleFormSubmit(console.log('hi'));

  fetchImages(inputValue).then(updateImageMarkup);
  fetchImages.incrementPage();

  form.resetPage();
}
