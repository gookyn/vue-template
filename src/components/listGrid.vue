<template>
	<div class="list-grid">
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
</template>

<script>
  import tableData from '@/mock/employee'

  export default {
    name: 'listGrid',

    data() {
      return {
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
</style>