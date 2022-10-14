<template>
  <div>
    <el-table id="productsTablePDF" :data="tableValues" border :row-class-name="tableRowClassName">
      <el-table-column
        v-for="column in displayColunmns"
        :key="column"
        :prop="column"
        :label="column"
        :width="column === 'COD' || column === 'UN' || column === 'COMPLEM'? 100 : 280"
      />
      <el-table-column label="SALDO INFORMADO" width="170">
        <template slot-scope="scope">
          <span>
            {{ traineeCount[scope.$index] }}
          </span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import { mapActions } from 'vuex'
import { nextTick } from 'vue'
export default {
  name: 'ProductsTable',

  data () {
    return {
      traineeCount: []
    }
  },

  computed: {
    ...mapFields('products', ['displayColunmns', 'tableValues'])
  },

  beforeUpdate () {
    this.traineeCount = Array(this.tableValues.length).fill(0)
    nextTick(() => {
      const cloneTraineeCount = structuredClone(this.traineeCount)
      this.setTraineeCount(cloneTraineeCount)
    })
  },

  methods: {
    ...mapActions('products', [
      'setTraineeCount', 'updateTraineeCount'
    ]),

    handleTraineeCountChange (index, value) {
      this.updateTraineeCount({ index, value })
    },
    tableRowClassName ({ row, rowIndex }) {
      if (rowIndex % 19 === 0 && rowIndex !== 0) {
        return 'html2pdf__page-break'
      }
    }
  }

}
</script>

<style>

.productsTablePDF {
  color: black;
  font-size: 12px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.00938em;
  text-align: center;
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  margin-bottom: 1rem;
  background-color: transparent;
  border: 1px solid black;
}
</style>
