<template>
  <div
    class="container"
    v-if="!computado"
  >
    <el-upload
      ref="upload"
      class="upload-demo"
      action="nada"
      :auto-upload="false"
      :limit="1"
      :on-exceed="handleExceed"
    >
      <el-button slot="trigger" size="small" type="primary">
        Selecionar Gabarito
      </el-button>
      <el-button
        style="margin-left: 10px"
        size="small"
        type="success"
        @click="submitUpload"
      >
        Gerar Tabela
      </el-button>
      <div slot="tip" class="el-upload__tip">
        Arquivo de texto contendo os dados do estoque
      </div>
    </el-upload>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'TutorialTeste',

  data () {
    return {
      data: [],
      correctStockValues: [],
      computado: false
    }
  },

  methods: {

    ...mapActions('products', [
      'setActualStockValues', 'setCorrectStockValues'
    ]),

    submitUpload () {
      // takes the uploaded file and creates a span element for every line
      const file = this.$refs.upload.uploadFiles[0].raw
      const reader = new FileReader()
      reader.onload = (e) => {
        const text = e.target.result
        const lines = text.split('\n')
        lines.forEach((line) => {
          if (line.trim().match(/^\d/)) {
            this.data.push({
              COD: line.substring(0, 11).trim(),
              DENOMINACAO: line.substring(11, 42).trim(),
              COMPLEM: line.substring(42, 53).trim(),
              UN: line.substring(53, 57).trim(),
              'SALDO ATUAL': line.substring(117, 127).trim()
            })
            this.correctStockValues.push(parseInt(line.substring(117, 127).trim()))
          }
        })
        this.setCorrectStockValues(this.correctStockValues)
        this.setActualStockValues(this.data)
        this.$refs.upload.submit()
        this.computado = true
      }

      reader.readAsText(file)
    },

    handleExceed (files, fileList) {
      this.$message.warning(
        'Only 1 file can be uploaded at a time'
      )
    }
  }
}
</script>

<style scoped>

.container {
  width: 350px;
  text-align: center  ;
}
</style>
