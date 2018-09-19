<template>
	<div class="g-layout-aside" :class="'g-layout-aside--' + direction">
		<div class="g-layout-aside__btn" :class="'g-layout-aside__btn--' + direction" @click="handleChangeCollapse">
			<i class="icon-arrow" :class="'el-icon-arrow-' + direction"></i>
		</div>
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
				direction: 'left'
			}
		},

		methods: {
			handleChangeCollapse() {
				this.isCollapse = !this.isCollapse;
				if(this.isCollapse) {
					this.direction = 'right';
				} else {
					this.direction = 'left';
				}
			}
		}
	}
</script>

<style lang="scss">
	@import 'style/mixins.scss';

	@include b(g-layout-aside) { 
		width: 200px;
		position: relative;
		height: 100%;
		border-right: solid 1px #e6e6e6;
		@include e(btn) {
			position: fixed;
			left: 180px;
			top: 50%;
			z-index: 10;
			transform: translateY(-50%);
			width: 20px;
			height: 40px;
			cursor: pointer;
			text-align: center;
			line-height: 40px;
			background-color: #f1f1f1;

			@include m(right) {
				left: 64px;
				z-index: 1;
			}
		}

		@include e(menu) {
			border-right: 0;
		}

		@include m(right) {
			width: auto;
		}
	}
</style>

