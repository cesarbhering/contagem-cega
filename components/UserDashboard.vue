<template>
  <div>
    <div class="container">
      <ProductsTable />
      <el-button type="primary" @click="handleSubmitCount">
        Enviar Contagem
      </el-button>
    </div>
    <div class="container">
      <h1>
        Você acertou {{ acertos }} de {{ erros+acertos }} produtos
      </h1>
      <el-button type="primary" @click="handleResetCount">
        Refazer Contagem
      </el-button>
    </div>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import { mapActions } from 'vuex'
import ProductsTable from '~/components/ProductsTable.vue'

export default {
  name: 'UserDashboard',

  components: {
    ProductsTable
  },

  data () {
    return {
      isCountCorrect: [],
      erros: 0,
      acertos: 0,
      computado: false
    }
  },

  computed: {
    ...mapFields('products', ['supervisorCount', 'traineeCount'])
  },

  methods: {
    ...mapActions('products', [
      'setTraineeInsertedValues'
    ]),

    // a function that assigns a new class to a row bases on the reutrn
    // of the isCountCorrect function
    rowClassName (rowIndex) {
      if (this.isCountCorrect[rowIndex]) {
        this.acertos += 1
        return 'success-row'
      } else {
        this.erros += 1
        return 'warning-row'
      }
    },

    // a function that compares values from traineeCountValues and correctStockValues
    // and returns an array of booleans
    compareValues () {
      const checkedValues = this.traineeCount.map((item, index) => {
        return item === this.supervisorCount[index]
      })
      this.isCountCorrect = checkedValues
    },

    handleSubmitCount () {
      this.compareValues() // Compara os valores inseridos pelo funcionário com os valores corretos

      const x = document.getElementsByClassName('el-table__row')
      for (let i = 0; i < x.length; i++) {
        x[i].classList.add(this.rowClassName(i))
      }
      this.computado = true
    },

    handleResetCount () {
      this.setTraineeInsertedValues([])
      this.computado = false
      this.acertos = 0
      this.erros = 0
      const x = document.getElementsByClassName('el-table__row')
      for (let i = 0; i < x.length; i++) {
        x[i].classList.remove('success-row')
        x[i].classList.remove('warning-row')
      }
    }
  }

}

// https://stackoverflow.com/questions/68119011/vuejs-vue-html2pdf-window-is-not-defined
// https://stackoverflow.com/questions/66645775/how-to-download-a-vue-file-as-pdf-file-in-vuejs/66646059#66646059
// https://stackoverflow.com/questions/69350528/vuehtml2pdf-download-pdf-blank-page
// https://stackoverflow.com/questions/71465593/exporting-bootstrap-table-to-excel-or-pdf/71623881#71623881
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.warning-row {
    background-color: oldlace !important;
  }

.success-row {
    background-color: #f0f9eb !important;
 }

.el-button {
  margin-top: 20px;
}
</style>
