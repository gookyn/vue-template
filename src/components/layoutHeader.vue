<template>
	<div class="g-layout-header">
		<div class="g-layout-header__left">
			<i class="el-icon-upload logo"></i>
			<span class="title">CRM</span>
		</div>
		<div class="g-layout-header__right">
			<ul class="operations">
				<li class="operations-item">管理员</li>
				<li class="operations-item" @click="handleExit">退出</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		// 退出
		handleExit() {
			this.$confirm('是否要退出?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
			}).then(() => {
				this.$router.push({ name: 'login' });
			}).catch(() => {
				return false;         
			});
		}
	}
}
</script>

<style scoped lang="scss">
	@import 'style/mixins.scss';

	@include b(g-layout-header) {
		@include e(left) {
			float: left;
			.logo {
				display: inline-block;
				font-size: 40px;
				vertical-align: middle;
			}
			.title {
				display: inline-block;
				font-size: 18px;
				vertical-align: middle;
				margin-left: 5px;
			}
		}

		@include e(right) {
			float: right;
			.operations-item {
				display: inline-block;
				cursor: pointer;
				padding: 0 10px;
			}
		}
	}
</style>