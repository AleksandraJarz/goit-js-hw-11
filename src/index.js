import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  '41317945-acab9cda76c10391861f2909141317945-acab9cda76c10391861f29091';

//zmienne
let page;
let searchQuery;
let imageCounter = 0;
const imagesPerPage = 40;
let lightbox;

//elementy DOM
const searchForm = document.querySelector('#search');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load');

// sumbit
const handleSubmit = event => {
  event.preventDefault();
  gallery.innetHTML = '';
  page = 1;
  imageCounter = 0;
  searchQuery = search.Form.searchQuery.value;
  fetchImages(page);
};

// ukrycie przycisku Load More
loadMoreBtn.style.display = 'none';

// obsługa przycisku Load More
function handleLoadMore() {
  fetchImages(++page);
}

// API
async function fetchImages(currentpage) {
  const baseUrl = "'https://pixabay.com/api/";
  const searchParams = new URLSearchParams({
    key: '41317945-acab9cda76c10391861f29091',
    q: searchQuery,
    imageType: 'photo',
    orientation: 'hotizontal',
    safesearch: 'true',
    page: currentpage,
    per_page: imagesPerPage,
  });
  loadMoreBtn.style.display = 'none';
}
