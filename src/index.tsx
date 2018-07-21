import Swiper from 'swiper';
import { h, app } from 'hyperapp';
import 'swiper/dist/css/swiper.css';
import './styles';

const SWIPER_CONF: SwiperOptions = {
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
  }
};

const $Swiper: Swiper = new Swiper('#main', SWIPER_CONF);

