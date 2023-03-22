<template>
  <div>
    <PartsCommonPageFv :page="'business'" />
    <p class="business-text">「<span class="green">料金を安くしたい</span>」のご要望に応える為に、最適な方法をご提案します。</p>
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
  font-weight: bold;
  margin: 120px auto;
}
</style>
