<template>
	<div class="department-wrapper">
    
	</div>
</template>

<script>
  import tableData from '@/mock/department'

  export default {
    name: 'department',

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
	@import 'style/mixins.scss';
</style>