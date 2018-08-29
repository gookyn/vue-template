<template>
	<div class="employee-wrapper">
		<div class="search-wrapper">
      <el-form 
      ref="searchForm" 
      :model="searchData" 
      :inline="true" 
      size="small" 
      label-width="80px">
        <el-form-item label="员工姓名">
          <el-input v-model="searchData.name"></el-input>
        </el-form-item>
        <el-form-item label="所属部门">
          <el-select v-model="searchData.region" placeholder="请选择活动区域">
            <el-option label="部门一" value="shanghai"></el-option>
            <el-option label="部门二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="创建时间">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="searchData.startDate"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="">
          <el-button icon="el-icon-search" type="primary">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="table-wrapper">
      <el-table :data="tableData" stripe size="medium" style="width: 100%">
        <el-table-column prop="date" label="日期"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-dialog title="提示" :visible.sync="deleteVisible" width="30%">
      <span>确认删除该项？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="deleteVisible = false">取 消</el-button>
        <el-button type="primary" @click="deleteVisible = false">确 定</el-button>
      </span>
    </el-dialog>

    <employee-edit v-if="editVisible" @close="editVisible = false"></employee-edit>
	</div>
</template>

<script>
  import tableData from '@/mock/employee'
  import employeeEdit from './edit';

  export default {
    name: 'employee',

    components: {
      employeeEdit
    },

    data() {
      return {
        searchData: {
          name: '',
          region: '',
          startDate: '',
          endDate: ''
        },
        tableData: tableData,
        editVisible: false,
        deleteVisible: false,
      }
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