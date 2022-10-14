<template>
  <div>
    <div class="container">
      <ProductsTable />
      <vue-html2pdf
        ref="html2Pdf"
        :show-layout="false"
        :enable-download="false"
        :preview-modal="false"
        :paginate-elements-by-height="1400"
        :manual-pagination="true"
        pdf-content-width="800px"
        margin="20"
        :html-to-pdf-options="{ margin: 0.2, filename: `hehehe.pdf`, image: { type: 'jpeg', quality: 2 }, html2canvas: { scale: 2, letterRendering: true }, jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' } }"
        @beforeDownload="beforeDownload($event)"
      >
        <section slot="pdf-content">
          <!-- second usage of ProductsTable: this is for putting the contents of table to final pdf  -->
          <ProductsTablePDF />
        </section>
      </vue-html2pdf>
    </div>
    <div>
      <el-button type="primary" @click="handleSubmitCount">
        Enviar Contagem
      </el-button>
      <el-button type="primary" @click="handleDownloadPDF">
        Download PDF
      </el-button>

      <div v-if="computado" class="container">
        <h1>
          {{ traineePersonalInfo.name }}  você acertou {{ acertos }} de {{ erros+acertos }} produtos
        </h1>
        <el-button type="primary" :disabled="computado" @click="handleResetCount">
          Refazer Contagem
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import { mapActions } from 'vuex'
import VueHtml2pdf from 'vue-html2pdf'
import ProductsTable from '~/components/ProductsTable.vue'
import ProductsTablePDF from '~/components/ProductsTablePDF.vue'

export default {
  name: 'UserDashboard',

  components: {
    ProductsTable,
    ProductsTablePDF,
    VueHtml2pdf
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
    ...mapFields('products', ['supervisorCount', 'traineeCount', 'traineePersonalInfo'])
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

    handleDownloadPDF () {
      this.$refs.html2Pdf.downloadPdf()
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
    },

    async beforeDownload ({ html2pdf, options, pdfContent }) {
      await html2pdf().set(options).from(pdfContent).toPdf().get('pdf').then((pdf) => {
        const totalPages = pdf.internal.getNumberOfPages()
        for (let i = 1; i <= totalPages; i++) {
          pdf.setPage(i)

          pdf.text('Página ' + i + ' de ' + totalPages, (pdf.internal.pageSize.getWidth() * 0.68), (pdf.internal.pageSize.getHeight() - 0.3))
        }
      }).save()
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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

.el-button {
  margin-top: 20px;
}
</style>
