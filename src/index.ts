const _SwiperModule = require('swiper');
import 'swiper/dist/css/swiper.css';
import './styles';
const _Swiper = _SwiperModule.default;

const $Swiper = new _Swiper('#main', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
  autoHeight: true, //enable auto height

  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false
  },
  autoplay: {
    delay: 5000
  },
  slideToClickedSlide: true,
  mousewheel: {
    invert: false
  },
});



console.log(test);
