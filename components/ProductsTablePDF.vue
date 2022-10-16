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
      traineeCount2: []
    }
  },

  computed: {
    ...mapFields('products', ['displayColunmns', 'tableValues', 'supervisorCount', 'traineeCount'])
  },

  mounted () {
    this.$root.$on('formatPDF', () => this.formataRows())
  },

  beforeUpdate () {
    this.traineeCount2 = Array(this.tableValues.length).fill(0)
    nextTick(() => {
      const cloneTraineeCount = structuredClone(this.traineeCount2)
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
      if ((rowIndex % 19 === 0 && rowIndex !== 0 && rowIndex !== 19) || rowIndex === 18) {
        return 'html2pdf__page-break'
      }
    },

    rowClassName (rowIndex) {
      if (this.isCountCorrect[rowIndex]) {
        return 'success-row'
      } else {
        return 'warning-row'
      }
    },

    formataRows () {
      debugger
      const rows = document.getElementsByClassName('el-table__row')
      console.log(rows)
      debugger
    },

    compareValues () {
      const checkedValues = this.traineeCount.map((item, index) => {
        return item === this.supervisorCount[index]
      })
      this.isCountCorrect = checkedValues
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

.warning-row {
    background-color: #c4344e !important;
    color: #4e0817;
    font-weight: bold;

  }

.success-row {
    background-color: #82f4b1 !important;
    color: #108149;
    font-weight: bold;
 }
</style>
