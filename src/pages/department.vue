<template>
	<div class="department-wrapper">
    <el-button @click="handleInsert">新增</el-button>
    <g-list-grid :view="listView" @edit="handleEdit" @delete="handleDelete"></g-list-grid>
    <g-manage-dialog v-if="manageVisible" :view="manageView" :isEdit="isEdit" @close="handleCloseManage"></g-manage-dialog>
	</div>
</template>

<script>
  import departmentData from '@/mock/department'

  export default {
    name: 'department',

    data() {
      return {
        listView: {}, // 当前列表视图对象
        manageView: {}, // 当前新增或编辑视图对象
        manageVisible: false,
        deleteVisible: false,
        isEdit: false,
      }
    },

    created() {
      // 当前列表视图字段集合
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

      this.$set(this.listView, 'columns', columns);
      this.$set(this.listView, 'recordData', departmentData);
    },

    methods: {
      // 打开新增
      handleInsert() {
        // 当前新增视图字段集合
        let columns = [{
          keyName: 'name',
          value: '',
          label: '名称',
          type: 'input',
          placeholder: '请输入'
        }, {
          keyName: 'regiod',
          value: '',
          label: '地区',
          type: 'select',
          placeholder: '请选择',
          selectList: [{
            value: '1',
            label: '北京'
          }, {
            value: '2',
            label: '上海'
          }]
        },]

        this.$set(this.manageView, 'columns', columns);
        this.$set(this.manageView, 'viewTitle', '新增部门');
        this.isEdit = false;
        this.manageVisible = true;
      },
      
      // 打开编辑
      handleEdit() {
        // 当前编辑视图字段集合
        let columns = [{
          keyName: 'name',
          value: '一级部门',
          label: '名称',
          type: 'input',
          placeholder: '请输入'
        }, {
          keyName: 'regiod',
          value: '1',
          label: '地区',
          type: 'select',
          placeholder: '请选择',
          selectList: [{
            value: '1',
            label: '北京'
          }, {
            value: '2',
            label: '上海'
          }]
        },]

        this.$set(this.manageView, 'columns', columns);
        this.$set(this.manageView, 'viewTitle', '编辑部门');
        this.isEdit = true;
        this.manageVisible = true;
      },

      // 打开删除
      handleDelete() {
        this.deleteVisible = true;
      },

      // 关闭管理
      handleCloseManage() {
        // 销毁新增或编辑视图
        this.$set(this, 'manageView', {});
        this.manageVisible = false;
      }
    }
  }
</script>

<style scoped lang="scss">
	@import 'style/mixins.scss';
</style>