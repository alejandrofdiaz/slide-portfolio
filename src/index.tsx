import Swiper from 'swiper';
import { h, create, diff, patch } from 'virtual-dom';
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

function consoleMe() {
  console.log('233213');
}

const TEST = (
  <button onclick={consoleMe} value="32131223">
    {'dsdasda'}
  </button>
);

const $Swiper: Swiper = new Swiper('#main', SWIPER_CONF);
const _TEST = create(TEST);

console.log(_TEST);

document.body.appendChild(_TEST);
