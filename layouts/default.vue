<template>
  <div>
    <LayoutsTheTopBar />
    <LayoutsTheHeader />
    <Nuxt />
    <LayoutsTheFooter />
  </div>
</template>
<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 1000);
    });
  },
};
</script>
<style lang="scss">
@use "@/assets/css/resources" as *;
body {
  margin: 0;
  .page-enter-active,
  .page-leave-active {
    transition: opacity 0.4s ease;
  }
  .page-enter,
  .page-leave-to {
    opacity: 0;
  }
}
</style>