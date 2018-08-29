<template>
	<el-container class="layout-wrapper">
    <el-header class="g-layout-header-wrapper">
      <g-layout-header></g-layout-header>
    </el-header>
    <el-container>
      <el-aside width="200px" class="g-layout-aside-wrapper">
        <g-layout-aside></g-layout-aside>
      </el-aside>
      <el-main class="g-layout-main-wrapper">
          <g-layout-main></g-layout-main>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped lang="scss">
</style>