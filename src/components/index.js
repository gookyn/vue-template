// 注册组件 -- 在 main.js 引入后可以全局使用而不用多次引用
// 注意：使用标签时前缀需要加 g- 以示区别
import LayoutAside from './layoutAside'
import LayoutHeader from './layoutHeader'
import LayoutMain from './layoutMain'
import ListGrid from './listGrid'
import ManageDialog from './manageDialog'
import InputAdaptive from './inputAdaptive'
import ListSearch from './listSearch'

export default {
	LayoutAside,
	LayoutHeader,
	LayoutMain,
	ListGrid,
	ManageDialog,
	InputAdaptive,
	ListSearch
};