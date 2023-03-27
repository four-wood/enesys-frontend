<template>
  <div>
    <PartsCommonPageFv :page="'business'" />
    <p class="business-text">「<span class="green">料金を安くしたい</span>」のご要望に応える為に、<span class="fold">最適な方法をご提案します。</span></p>
    <PartsBusinessSolar />
    <PartsBusinessSetsubi />
    <PartsBusinessSystem />
    <PartsBusinessEnergy />
  </div>
</template>
<style scoped lang="scss">
@use "@/assets/css/resources.scss" as *;
.business-text{
  color: $text-black;
  text-align: center;
  font-size: 20px;
  line-height: 1.3;
  font-weight: bold;
  margin: 120px auto;
  @include sp{
    font-size: 16px;
    margin: 80px auto;
  }
}
</style>
