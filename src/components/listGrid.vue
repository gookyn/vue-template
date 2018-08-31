<template>
	<div class="list-grid">
    <!-- 列表 -->
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

    <!-- 分页 -->
    <el-pagination
      class="list-pagination"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="pageSizes"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      :pager-count="5">
    </el-pagination>
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
            datasource: {}, // 当前列表视图数据源
            recordData: [], // 当前视图数据集合
            columns: [], // 当前视图字段集合
            pageInfo: {}, // 当前列表视图分页信息
          };
        }
      }
    },

    data() {
      return {
        datasource: {}, // 当前列表视图数据源
        recordData: [], // 当前视图数据集合
        columns: [], // 当前视图字段集合
        currentPage: 1, // 当前页
        pageSize: 10, // 每页数量
        pageSizes: [10, 30, 50], // 每页数量配置集合
        total: 0, // 总数量
      }
    },

    watch: {
      'datasource.reload'(val) {
        if(val) {
          console.log(`reload: ${val} 重新请求数据`);
          this.$set(this, 'datasource', this.view.datasource);
          this.$set(this, 'recordData', this.view.recordData);
          this.$set(this.datasource, 'reload', false);
          // TODO 改变分页配置
        }
      }
    },

    mounted() {
      this.$set(this, 'datasource', this.view.datasource);
      this.$set(this, 'recordData', this.view.recordData);
      this.$set(this, 'columns', this.view.columns);

      if(this.view.pageInfo) {
        let pageInfo = this.view.pageInfo;
        this.$set(this, 'currentPage', pageInfo.currentPage);
        this.$set(this, 'pageSize', pageInfo.pageSize);
        this.$set(this, 'total', pageInfo.total);
      }
    },

    methods: {
      handleEdit() {
        this.$emit('edit');
      },

      handleDelete() {
        this.$emit('delete');
      },

      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);

        this.$set(this.datasource, 'pageSize', val);
        this.$set(this.datasource, 'reload', true);
        this.$emit('changePageSize', val);
      },

      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);

        this.$set(this.datasource, 'currentPage', val);
        this.$set(this.datasource, 'reload', true);
        this.$emit('changeCurrentPage', val);
      }
    }
  }
</script>

<style scoped lang="scss">
  .list-grid {
    margin-top: 20px;
    .list-pagination {
      margin-top: 20px;
      text-align: center;
    }
  }
</style>