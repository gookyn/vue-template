<template>
	<div class="manage-dialog-wrapper">
    <el-dialog :title="view.viewTitle" :visible.sync="dialogVisible" @close="handleClose">
		  <el-form 
      ref="manageForm" 
      :model="reqData" 
      size="small" 
      :inline="false"
      label-width="80px">
        <template v-for="(col, index) in columns">
          <el-form-item :key="index" :label="col.label">
            <g-input-adaptive :column="col" @input="(val) => reqData[col.keyName] = val"></g-input-adaptive>
          </el-form-item>
        </template>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </div>
    </el-dialog>
	</div>
</template>

<script>
  export default {
    name: 'manageDialog',

    props: {
      view: {
        type: Object,
        default: () => {
          return {
            columns: [],
          }
        }
      },

      // 判断新增或编辑
      isEdit: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        dialogVisible: true,
        reqData: {},
        columns: [],
      }
    },

    mounted() {
      this.$set(this, 'columns', this.view.columns);

      this.columns.forEach(col => {
        this.$set(this.reqData, `${col.keyName}`, col.value);
      })
    },

    methods: {
      handleClose() {
        this.$emit('close');
      }
    }
  }
</script>

<style lang="scss">
  @import 'style/mixins.scss';
  
  .manage-dialog-wrapper {
    .el-select {
      width: 100%;
    }
    .el-date-editor.el-input, .el-date-editor.el-input__inner {
      width: 100%;
    }
  }
</style>