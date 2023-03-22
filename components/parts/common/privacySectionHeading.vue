<template>
  <div class="privacy-section-heading">
    <h2>
      <slot name="title"></slot>
    </h2>
  </div>
</template>
<style lang="scss" scoped>
.privacy-section-heading {
  border-left: 2px solid #12ee37;
  padding-left: 14px;
  margin: 40px 0 20px;
  h2 {
    font-size: 20px;
    line-height: 1.4;
    color: #555;
    transition: color 0.3s ease;
  }
}
</style>
