import PhotoSwipeLightbox from './photoswipe-lightbox.esm.min.js';
import PhotoSwipe from './photoswipe.esm.min.js';

const lightbox = new PhotoSwipeLightbox({
  // may select multiple "galleries"
  gallery: '#gallery--getting-started',

  // Elements within gallery (slides)
  children: 'a',
  spacing: 0.8,

  // setup PhotoSwipe Core dynamic import
  pswpModule: PhotoSwipe
});
lightbox.init();