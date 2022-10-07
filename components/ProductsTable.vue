<template>
  <div>
    <el-table id="productstable" height="750" :data="actualStockValues" border style="width: 100%">
      <el-table-column
        v-for="column in displayColunmns"
        :key="column"
        :prop="column"
        :label="column"
        :width="260"
      />
      <el-table-column label="SALDO INFORMADO" width="180" :fixed="right">
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
    <div class="container" v-if="!computado">
      <el-button type="primary" @click="handleSubmitCount">
        Enviar Contagem
      </el-button>
    </div>
    <div class="container" v-else>
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

export default {
  name: 'ProductsTable',

  data () {
    return {
      traineeInsertedValues: [],
      isCountCorrect: [],
      erros: 0,
      acertos: 0,
      computado: false
    }
  },

  computed: {
    ...mapFields('products', ['displayColunmns', 'actualStockValues', 'correctStockValues', 'traineeCountValues'])
  },

  beforeUpdate () {
    this.traineeInsertedValues = this.actualStockValues.map((item) => {
      return 0
    })
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
      const checkedValues = this.traineeInsertedValues.map((item, index) => {
        return item === this.correctStockValues[index]
      })
      this.isCountCorrect = checkedValues
    },

    handleSubmitCount () {
      this.setTraineeInsertedValues(this.traineeInsertedValues) // Envia contagem do funcionário para a store
      this.compareValues() // Compara os valores inseridos pelo funcionário com os valores corretos

      const x = document.getElementsByClassName('el-table__row')
      for (let i = 0; i < x.length; i++) {
        x[i].classList.add(this.rowClassName(i))
      }
      this.computado = true
    },

    handleResetCount () {
      this.traineeInsertedValues = this.actualStockValues.map((item) => {
        return 0
      })
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
