import refs from './refs';
import imageMarkup from '../templates/image.hbs';

function updateImageMarkup(hits) {
  const markup = imageMarkup(hits);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

export default updateImageMarkup;
