<template>
  <div class="list-search">
    <el-form 
    ref="searchForm" 
    :model="searchData" 
    :inline="true" 
    size="small" 
    label-width="60px">
      <template v-for="(col, index) in columns">
        <el-form-item :key="index" :label="col.label">
          <g-input-adaptive :column="col" @input="(val) => searchData[col.keyName] = val"></g-input-adaptive>
        </el-form-item>
      </template>
      <el-form-item label="">
        <slot name="btn"></slot>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'listSearch',
    
    props: {
      columns: {
        type: Array,
        default: () => {
          return []
        }
      }
    },

    data() {
      return {
        searchData: {},
      }
    },

    mounted() {
      this.columns.forEach(col => {
        this.$set(this.searchData, `${col.keyName}`, col.value);
      })
    },

    methods: {
      
    }
  }
</script>

<style scoped lang="scss">
  .list-search {
    padding: 10px 10px 0 10px;
    background-color: #f8f8f8;
  }
</style>