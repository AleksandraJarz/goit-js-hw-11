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

const searchForm = document.querySelector('#search');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load');
