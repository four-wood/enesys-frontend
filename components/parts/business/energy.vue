<template>
  <section id="energy">
    <PartsCommonBusinessHeading :contentName="'energy'" />
    <div class="stop-reception">
      <p class="title">現在、電力販売事業の新規受け付けを<span class="fold">停止しています。</span></p>
      <p class="text">
        国際的な燃料高騰や電力需要ひっ迫により、新規電力販売の受付を停止しています。詳細はお問い合わせ下さい。
      </p>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@use "@/assets/css/resources" as *;
.stop-reception {
  max-width: 1100px;
  width: 80vw;
  margin: 0 auto 100px;
  padding: 30px 24px;
  background-color: white;
  text-align: center;
  border: 1px solid #000;
  @include sp{
    padding: 4vw;
    width: 92vw;
  }
  .title {
    color: red;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 14px;
  }
  .text {
    font-size: 14px;
    line-height: 20px;
    font-weight: 700;
  }
}
</style>
