<template>
  <div>
    <el-table id="productstable" height="750" :data="tableValues" border style="width: 100%">
      <el-table-column
        v-for="column in displayColunmns"
        :key="column"
        :prop="column"
        :label="column"
        :width="260"
      />
      <el-table-column label="SALDO INFORMADO" width="180">
        <template slot-scope="scope">
          <el-input-number
            v-model="traineeCount[scope.$index]"
            :min="0"
            :max="999999"
            :step="1"
            :precision="0"
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
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
