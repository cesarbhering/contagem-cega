<template>
  <div>
    <el-table height="750" :data="actualStockValues" border style="width: 100%">
      <el-table-column
        v-for="column in displayColunmns"
        :key="column"
        :prop="column"
        :label="column"
        :width="260"
      />
      <el-table-column label="SALDO ATUAL INFORMADO" width="180">
        <template slot-scope="scope">
          <el-input-number
            v-model="traineeInsertedValues[scope.$index]"
            :min="0"
            :max="999999"
            :step="1"
            :precision="0"
          />
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
export default {
  name: 'ProductsTable',

  data () {
    return {
      traineeInsertedValues: []
    }
  },

  computed: {
    ...mapFields('products', ['displayColunmns', 'actualStockValues'])
  },

  beforeUpdate () {
    this.traineeInsertedValues = this.actualStockValues.map((item) => {
      return 0
    })
  }
}
</script>

<style scoped>
.table-column {
  text-align: center;
  background-color: red;
}
</style>
