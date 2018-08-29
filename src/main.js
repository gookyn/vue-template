import Vue from 'vue'
import App from './App'
import router from './router'
import components from './components'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)

// 自定义组件格式，全局可用
Object.keys(components).forEach(key => {
	// 首字母大写
	let name = key.replace(/(\w)/, v => v.toUpperCase());

	//使用标签时前缀需要加 g- 以示区别
	Vue.component(`g${name}`, components[key]);
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
