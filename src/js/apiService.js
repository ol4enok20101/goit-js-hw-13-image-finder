const apiKey = '19993763-16ad085b29140f4ebf2b0ae46';

export default {
  searchQuery: '',
  page: 1,
  fetchImages(searchQuery = this.searchQuery, page = this.page) {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${apiKey}`;

      this.searchQuery = searchQuery;

    return fetch(url)
      .then(response => response.json())
      .then(data => data.hits)
      .catch(error => console.log(error));
    },
  
  get query() {
    return this.searchQuery;
  },
  set query(newQuery) {
    this.searchQuery = newQuery;
  },
  incrementPage() {
    this.page += 1;
  },
  resetPage() {
    this.page = 1;
    },
    get query() {
    return this.searchQuery;
  },

  set query(value) {
    this.searchQuery = value;
  },
};
