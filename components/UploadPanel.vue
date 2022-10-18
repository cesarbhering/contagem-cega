<template>
  <div
    v-if="!computado"
    class="container"
  >
    <div>
      <!-- A EL-FORM THAT ASKS FOR NAME AND ID -->
      <el-form
        ref="form"
        :model="trainee"
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-form-item
          label="Nome"
          prop="name"
          :rules="[
            { required: true, message: 'Por favor, insira seu nome', trigger: 'blur' }
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
      computado: false
    }
  },

  methods: {

    ...mapActions('products', [
      'setTableValues', 'setSupervisorCount', 'setTraineePersonalInfo'
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

        this.computado = true
      }

      reader.readAsText(file)
    },

    handleExceed (files, fileList) {
      this.$message.warning(
        'APenas 1 arquivo pode ser utilizado como gabarito, você pode excluir o arquivo inicialmente selecionado e selecionar outro'
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
