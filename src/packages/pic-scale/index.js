// 引入组件
import PicScale from './pic-scale.vue'

PicScale.install = Vue => Vue.component(PicScale.name, PicScale);

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(PicScale);
}

export default PicScale