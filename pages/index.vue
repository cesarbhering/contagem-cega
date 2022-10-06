<template>
  <div class="container">
    <UploadPanel />
    <ProductsTable />
    <PageFooter />
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
<style scoped>

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
