<template>
  <a class="btn" :href="href" :text="text">
    {{ text }}
    <span class="btn-bg"></span>
  </a>
</template>
<script>
export default {
  props: {
    href: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/css/resources.scss" as *;
.btn {
  width: 200px;
  padding: 12px 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  border-radius: 6px;
  border: 2px solid $ene-green;
  overflow: hidden;
  transition: 0.3s background-color ease;
  z-index: 0;
  &:hover {
    cursor: pointer;
    color: $ene-green;
    .btn-bg{
        opacity: 0;
    }
  }
  .btn-bg {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: $ene-grad;
    opacity: 1;
    transition: opacity 0.2s ease;
  }
}
</style>
