<template>
  <div>
    <el-table
      id="productsTablePDF"
      :data="tableValues"
      border
      :row-class-name="tableRowClassName"
      header-cell-class-name="header-cell-style"
    >
      <el-table-column
        v-for="column in displayColunmns"
        :key="column"
        :prop="column"
        :label="column"
        :width="columnSize(column)"
      />
      <el-table-column label="SALDO INFORMADO" width="120">
        <template slot-scope="scope">
          <span>
            {{ traineeCount[scope.$index] }}
          </span>
        </template>
      </el-table-column>
      <el-table-column label="SALDO SISTEMA" width="110">
        <template slot-scope="scope">
          <span>
            {{ supervisorCount[scope.$index] }}
          </span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'

export default {
  name: 'ProductsTablePDF',

  data () {
    return {
      traineeCountPDF: [],
      isCountCorrect: []
    }
  },

  computed: {
    ...mapFields('products', ['displayColunmns', 'tableValues', 'supervisorCount', 'traineeCount'])
  },

  mounted () {
    this.$root.$on('formatPDF', () => { this.compareValues(); this.formataRows() })
  },

  beforeUpdate () {
    this.traineeCountPDF = Array(this.tableValues.length).fill(0)
  },

  methods: {
    columnSize (column) {
      if (column === 'COD') {
        return 80
      } else if (column === 'DENOMINACAO') {
        return 285
      } else if (column === 'UN') {
        return 60
      } else if (column === 'COMPLEM') {
        return 100
      } else {
        return 100
      }
    },

    handleTraineeCountChange (index, value) {
      this.updateTraineeCount({ index, value })
    },

    tableRowClassName ({ row, rowIndex }) {
      if ((rowIndex % 19 === 0 && rowIndex !== 0 && rowIndex !== 19) || rowIndex === 18) {
        return 'html2pdf__page-break PDFtableRow'
      }
      return 'PDFtableRow'
    },

    rowClassName (rowIndex) {
      if (this.isCountCorrect[rowIndex]) {
        return 'success-row'
      } else {
        return 'warning-row'
      }
    },

    formataRows () {
      const rows = document.getElementsByClassName('PDFtableRow')
      for (let i = 0; i < rows.length; i++) {
        rows[i].classList.add(this.rowClassName(i))
      }
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

.header-cell-style {
    color: black;
    font-weight: bold;
    text-align: center !important;
    word-break: break-word !important;
 }
 .el-table .cell {
    word-break: break-word;
}
</style>
