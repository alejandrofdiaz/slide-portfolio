import { h } from 'virtual-dom';

const CLASS_CONTAINER = 'swiper-slide';
const CLASS_ELEMENT = 'swiper-image';

interface SlideTemplateParams {
  hash: string;
  src: string;
}

interface SlideParams extends SlideTemplateParams {
  root: HTMLElement;
}

const TEMPLATE = ({ hash, src }: SlideTemplateParams) => (
  <div class={CLASS_CONTAINER} data-hash={hash} data-history={hash}>
    <img src={src} class={CLASS_ELEMENT} />
  </div>
);

class Slide {
  constructor(props: SlideParams) {}
}

export default TEMPLATE;
