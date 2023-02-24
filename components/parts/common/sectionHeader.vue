<template>
  <div class="section-wrapper">
    <div class="section-header-container">
      <h2>
        <slot name="jp"></slot>
      </h2>
      <p>
        <slot name="en"></slot>
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "@/assets/css/resources.scss" as *;
.section-header-container {
    margin-bottom: 40px;
  h2 {
    font-size: 32px;
    color: $text-black;
    font-weight: bold;
    margin-bottom: 10px;
  }
  p {
    font-size: 16px;
    font-weight: bold;
    color: $ene-green;
  }
}
</style>
