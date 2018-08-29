<template>
	<div class="department-wrapper">
    <g-list-grid :view="view"></g-list-grid>
	</div>
</template>

<script>
  import departmentData from '@/mock/department'

  export default {
    name: 'department',

    data() {
      return {
        view: {}, // 当前视图对象
        editVisible: false,
        deleteVisible: false,
      }
    },

    created() {
      // 当前视图字段集合
      let columns = [{
        prop: 'name',
        label: '名称'
      }, {
        prop: 'date',
        label: '日期'
      }, {
        prop: 'address',
        label: '地址'
      }]

      this.$set(this.view, 'columns', columns);
      this.$set(this.view, 'recordData', departmentData);
    },

    methods: {
      handleEdit() {
        this.editVisible = true;
      },

      handleDelete() {
        this.deleteVisible = true;
      }
    }
  }
</script>

<style scoped lang="scss">
	@import 'style/mixins.scss';
</style>