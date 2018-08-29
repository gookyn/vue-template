<template>
	<div class="employee-edit">
    <el-dialog title="编辑员工" :visible.sync="dialogVisible" @close="handleClose">
		  <el-form 
      ref="searchForm" 
      :model="reqData" 
      size="small" 
      :inline="false"
      label-width="80px">
        <el-form-item label="员工姓名">
          <el-input v-model="reqData.name"></el-input>
        </el-form-item>
        <el-form-item label="所属部门">
          <el-select v-model="reqData.region" placeholder="请选择活动区域">
            <el-option label="部门一" value="shanghai"></el-option>
            <el-option label="部门二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="创建时间">
          <el-col>
            <el-date-picker type="date" placeholder="选择日期" v-model="reqData.startDate"></el-date-picker>
          </el-col>
        </el-form-item>
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
    name: 'employeeEdit',

    data() {
      return {
        dialogVisible: true,
        reqData: {
          name: '',
          region: '',
          startDate: '',
          endDate: ''
        },
      }
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
  
  .employee-edit {
    width: 500px;
    .el-select {
      width: 100%;
    }
    .el-date-editor.el-input, .el-date-editor.el-input__inner {
      width: 100%;
    }
  }
</style>