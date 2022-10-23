<template>
  <div>
    <el-input
      v-model="search"
      size="mini"
      placeholder="Procurar por denominação ou código"
      class="search-input"
    />
    <el-table
      id="productstable"
      :data="tableValues.filter(data => !search ||
        data.DENOMINACAO.toLowerCase().includes(search.toLowerCase()) ||
        data.COD.toLowerCase().includes(search.toLowerCase()))"
      border
      height="700"
    >
      <el-table-column
        v-for="column in displayColunmns"
        :key="column"
        :prop="column"
        :label="column"
        :width="column === 'DENOMINACAO' ? 280 : 120"
        align="center"
      />
      <el-table-column label="SALDO INFORMADO" width="210">
        <template slot-scope="scope">
          <el-input
            v-model="traineeCount[scope.$index]"
            :step-strictly="true"
            type="number"
            size="mini"
            :min="0"
            :max="999999"
            :step="1"
            :precision="0"
            align="center"
            @change="handleTraineeCountChange(scope.$index, traineeCount[scope.$index])"
          />
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
      traineeCount: [],
      search: ''
    }
  },

  computed: {
    ...mapFields('products', ['displayColunmns', 'tableValues'])
  },

  mounted () {
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
    }
  }

}
</script>

<style scoped>
#productstable {
  width: 100%;
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

 .search-input {
    margin-bottom: 10px;
    width: 230px;
 }

</style>
