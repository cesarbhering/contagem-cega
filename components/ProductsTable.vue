<template>
  <div>
    <el-table
      height="750"
      :data="actualStockValues"
      border
      style="width: 100%"
    >
      <el-table-column
        v-for="column in displayColunmns"
        :key="column"
        :prop="column"
        :label="column"
        :width="260"
      />
    </el-table>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
export default {
  name: 'ProductsTable',

  computed: {
    ...mapFields('products', ['displayColunmns', 'actualStockValues'])
  }
}
</script>

<style scoped>

.table-column {
  text-align: center;
  background-color: red;
}

</style>
