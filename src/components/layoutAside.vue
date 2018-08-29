<template>
	<div class="g-layout-aside">
		<!-- <div class="g-layout-aside__btn" @click="handleChangeCollapse">
			<i class="icon-arrow" :class="iconClass"></i>
		</div> -->
		<el-menu 
		default-active="1" 
		:collapse="isCollapse" 
		class="g-layout-aside__menu"
		:router="true">
			<template v-for="(item, index) in menu">
				<el-submenu  v-if="item.children && item.children.length" :key="index" :index="item.path">
					<template slot="title">
						<i :class="item.icon"></i>
						<span>{{item.title}}</span>
					</template>
					<template>
						<el-menu-item v-for="(child, current) in item.children" :key="current" :index="child.path">{{child.title}}</el-menu-item>
					</template>
				</el-submenu>
				<el-menu-item :index="item.path" :key="index" v-else>
					<i :class="item.icon"></i>
					<span>{{item.title}}</span>
				</el-menu-item>
			</template>
    </el-menu>
	</div>
</template>

<script>
	import menu from '@/mock/menu';
	export default {
		data() {
			return {
				menu: menu,
				isCollapse: false,
				iconClass: 'el-icon-arrow-left'
			}
		},

		methods: {
			handleChangeCollapse() {
				this.isCollapse = !this.isCollapse;
				if(this.isCollapse) {
					this.iconClass = 'el-icon-arrow-left';
				} else {
					this.iconClass = 'el-icon-arrow-right';
				}
			}
		}
	}
</script>

<style lang="scss">
	@import 'style/mixins.scss';

	@include b(g-layout-aside) { 
		position: relative;
		height: 100%;
		@include e(btn) {
			position: absolute;
			right: 0;
			top: 50%;
			z-index: 10;
			transform: translateY(-50%);
			width: 20px;
			height: 40px;
			cursor: pointer;
			text-align: center;
			line-height: 40px;
			background-color: #f1f1f1;
		}

		@include e(menu) {
			height: 100%;
		}
	}
</style>

