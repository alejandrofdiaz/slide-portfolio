import Swiper from 'swiper';
import Component from './utils/component';
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

// const $Swiper: Swiper = new Swiper('#main', SWIPER_CONF);

interface State {
  value: string;
}

class Foo extends Component<State> {
  constructor(entry: HTMLElement) {
    super(entry);
    this.state = {
      value: 'test'
    };
  }

  changeValue() {
    const foo = 'Funciona';
    this.setState({ ...this.state, value: foo });
  }

  render() {
    return (<button onclick={this.changeValue.bind(this)}>{this.state.value}</button>);
  }
}

new Foo(document.getElementById('main'));