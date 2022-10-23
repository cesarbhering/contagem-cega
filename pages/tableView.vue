<template>
  <div>
    <PageHeader />
    <div
      v-if="tableValues.length > 0"
      v-loading="loading"
      element-loading-text="Gerando Tabela..."
    >
      <UserDashboard @changeLoading="handleLoading" />
    </div>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
export default {
  data () {
    return {
      loading: true
    }
  },

  computed: {
    ...mapFields('products', ['tableValues'])
  },

  methods: {
    handleLoading (desiredState) {
      this.loading = desiredState
    }
  }

}
</script>

<style scoped>

</style>
