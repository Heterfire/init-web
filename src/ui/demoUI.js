import { BasicUI } from './basicUI';

// eslint-disable-next-line import/prefer-default-export
export class DemoUI extends BasicUI {
  constructor(elementId) {
    super(elementId);
    this.init();
  }

  init() {
    console.log('初始化demo');
  }

  addEvent() {
    this.$context.bind('click', () => {
      this.$context.text(`id：${this.elementId}——随机种子${Math.random()}`);
    });
  }
}
