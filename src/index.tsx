import Swiper from 'swiper';
import { h, create } from 'virtual-dom';
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

const TEST = <div>{'dsdasda'}</div>;

const $Swiper: Swiper = new Swiper('#main', SWIPER_CONF);

console.log(create(TEST));
