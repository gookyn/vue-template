<template>
	<div class="list-grid">
    <el-table :data="recordData" stripe size="medium" style="width: 100%">
      <template v-for="(col, index) in columns">
        <el-table-column
        :key="index"
        :prop="col.prop"
        :label="col.label">
        </el-table-column>
      </template>
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
  export default {
    name: 'listGrid',

    props: {
      // 当前视图对象
      view: {
        type: Object,
        default: () => {
          return {
            recordData: [], // 当前视图数据集合
            columns: [], // 当前视图字段集合
          };
        }
      }
    },

    data() {
      return {
        recordData: [], // 当前视图数据集合
        columns: [], // 当前视图字段集合
      }
    },

    mounted() {
      this.$set(this, 'recordData', this.view.recordData);
      this.$set(this, 'columns', this.view.columns);
    },

    methods: {
      handleEdit() {
        this.$emit('edit');
      },

      handleDelete() {
        this.$emit('delete');
      }
    }
  }
</script>

<style scoped lang="scss">
</style>