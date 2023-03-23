<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    viewBox="0 0 100 100"
    class="plmy"
    :class="{'open':isOpen}"
  >
    <circle cx="50" cy="50" r="50" fill="#3fa4f0" stroke="none" />
    <line x1="20" x2="80"  y1="50" y2="50" stroke="white" stroke-width="10px"></line>
    <line class="line2" x1="50"  x2="50" y1="20" y2="80" stroke="white" stroke-width="10px"></line>
  </svg>
</template>
<script>
export default{
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
<style lang="scss" scoped>
.plmy{
  transform:rotate(0deg);
  transition: 0.4s all ease;
  .line2{
    transform:rotate(0deg);
  }
}
.open{
  transform:rotate(360deg);
  .line2{
    transform:rotate(90deg)
  }
}
</style>

