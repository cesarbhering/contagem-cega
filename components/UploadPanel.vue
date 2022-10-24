<template>
  <div
    v-if="!computado"
    v-loading="loading"
    class="form-container"
    element-loading-text="Gerando Tabela..."
  >
    <PageHeader />
    <div>
      <el-form
        ref="form"
        :model="trainee"
        label-width="120px"
        class="form"
        label-position="top"
      >
        <el-form-item
          label="Nome"
          prop="name"
          :rules="[
            { required: true, min: 3 , message: 'Por favor, insira seu nome', trigger: 'blur' }
          ]"
        >
          <el-input v-model="trainee.name" />
        </el-form-item>
        <el-form-item
          label="ID"
          prop="id"
          :rules="[
            { required: true, message: 'Por favor, insira seu ID', trigger: 'blur' }
          ]"
        >
          <el-input v-model="trainee.id" />
        </el-form-item>
        <!--         <el-form-item>
          <el-button type="primary" @click="handleSubmit('form')">Enviar</el-button>
        </el-form-item> -->
      </el-form>
    </div>
    <div class="upload-buttons">
      <el-upload
        ref="upload"
        :auto-upload="false"
        :limit="1"
        :on-exceed="handleExceed"
        :before-upload="beforeTextUpload"
        :on-success="handleTextUploadSuccess"
        :on-change="handleOnChange"
      >
        <el-button slot="trigger" size="small" type="primary">
          Selecionar Gabarito
        </el-button>
        <el-button
          style="margin-left: 10px"
          size="small"
          type="success"
          :disabled="disableUpload"
          @click="submitUpload"
        >
          Gerar Tabela
        </el-button>
        <div slot="tip" class="el-upload__tip">
          Arquivo de texto contendo os dados do estoque
        </div>
      </el-upload>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'UploadPanel',

  data () {
    return {
      trainee: {
        name: '',
        id: '',
        countStartTimestamp: ''
      },
      constructTableValues: [],
      supervisorInformedCount: [],
      computado: false,
      loading: false,
      disableUpload: true
    }
  },

  methods: {

    handleOnChange (file, fileList) {
      fileList.length > 0 ? this.disableUpload = false : this.disableUpload = true
    },

    ...mapActions('products', [
      'setTableValues', 'setSupervisorCount', 'setTraineePersonalInfo'
    ]),

    beforeTextUpload (file) {
      const isText = file.type === 'text/plain'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isText) {
        this.$message.error('O arquivo deve ser um arquivo de texto')
        this.$nuxt.refresh()
      }
      if (!isLt2M) {
        this.$message.error('O tamanho do arquivo deve ser menor que 2MB')
        this.$nuxt.refresh()
      }
      return isText && isLt2M
    },

    submitUpload () {
      console.log('cheguei aqui no submit')
      this.loading = true
      // takes the uploaded file and creates a span element for every line
      const file = this.$refs.upload.uploadFiles[0].raw
      const reader = new FileReader()
      reader.onload = (e) => {
        const text = e.target.result
        const lines = text.split('\n')
        lines.forEach((line) => {
          if (line.trim().match(/^\d/)) {
            this.constructTableValues.push({
              COD: line.substring(0, 11).trim(),
              DENOMINACAO: line.substring(11, 42).trim(),
              COMPLEM: line.substring(42, 53).trim(),
              UN: line.substring(53, 57).trim(),
              'SALDO ATUAL': line.substring(117, 127).trim()
            })
            this.supervisorInformedCount.push(parseInt(line.substring(117, 127).trim()))
          }
        })
        this.setTableValues(this.constructTableValues)
        this.setSupervisorCount(this.supervisorInformedCount)
        this.trainee.countStartTimestamp = new Date().getTime()
        this.setTraineePersonalInfo(this.trainee)
        this.$refs.upload.submit()
        this.loading = false
        this.computado = true
      }

      reader.readAsText(file)
      console.log('cheguei aqui no fim do submit')
    },

    handleTextUploadSuccess (response, file, fileList) {
      console.log('cheguei aqui')
      this.$router.push('/tableView')
    },

    handleExceed (files, fileList) {
      this.$message.warning(
        'Apenas 1 arquivo pode ser utilizado como gabarito, você pode excluir o arquivo inicialmente selecionado e selecionar outro'
      )
    }
  }
}
</script>

<style scoped>

.form-container {
  width: 50%;
  margin: 0 auto;
}

.el-form--label-top .el-form-item__label {
  padding-bottom: 0 !important;
}

.upload-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
}

.el-upload__tip {
  text-align: center;
}
</style>
