import { EVENT } from '../events/EVENTS';
import { locale } from '../locale';
import { BasicUI } from './basicUI';
import { DemoUI } from './demoUI';

// eslint-disable-next-line import/prefer-default-export
export class UI extends BasicUI {
  constructor(elementId) {
    super(elementId);
    this.init();
    this.initEvent();
  }

  init() {
    setTimeout(() => {
      // 事件推送
      this.app.event.emit(EVENT.INIT_LEFT_TREE);
    }, 1000);
  }

  initEvent() {
    // 事件注册
    this.app.event.on(EVENT.INIT_LEFT_TREE, this.initTree.bind(this));
  }

  initTree() {
    this.$context.text(`国际化${locale.OPEN}示例`);
    const demoUI = new DemoUI('demo');
    demoUI.show();
  }

  /**
   * 显示时添加的事件
   */
  addEvent() {

  }

  /**
 * 隐藏时添加的事件
 */
  removeEvent() {

  }

  /**
 * 窗口重新绘画
 */
  resize() {
    console.log('窗口变动');
  }
}
