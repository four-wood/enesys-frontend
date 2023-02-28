<template>
  <section id="reason">
    <PartsCommonSectionHeader>
      <template v-slot:jp>ヤブシタエネシスが選ばれる理由</template>
      <template v-slot:en>REASON WHY</template>
    </PartsCommonSectionHeader>
    <div class="reason-container motion" data-delighter="">
      <div class="reason-img reason-1">
        <img src="@/assets/img/reason-1.jpg" alt="" />
      </div>
      <div class="reason-text">
        <div class="reason-text-inner">
          <div class="reason-text-title">
            <h4>電気のことを知り尽くした<br /><span class="green">プロフェッショナル</span></h4>
          </div>
          <img alt="powerd by tepco" src="~/assets/img/pot.png" />
          <p class="space">日本最大手の電力会社である東京電力グループ（東京電力エナジーパートナー株式会社、テプコカスタマーサービス株式会社）と連携し、1,000社以上のお客様の電気代削減に貢献してきました。また、設備機器メーカーとも密に連携しており、お客様に合った最新・最適な設備からお得な料金プランや運用方法をご提案することが可能です。</p>
          <p class="space">加えて、太陽光発電から照明・空調・電気設備など、電気に関わる総合的なご提案と工事実施の実績があります。</p>
          <div class="btn-container">
            <PartsCommonButton :href="'business'" :text="'事業内容を見る'" />
          </div>
        </div>
      </div>
    </div>
    <div class="reason-container motion" data-delighter="">
      <div class="reason-img reason-1">
        <img src="@/assets/img/reason-2.jpg" alt="" />
      </div>
      <div class="reason-text">
        <div class="reason-text-inner">
          <div class="reason-text-title">
            <h4>設備工事の<br /><span class="green">ヤブシタグループ</span></h4>
          </div>
          <img alt="powerd by tepco" src="~/assets/img/yabushita-g.png" />
          <p class="space">BCP（災害対策）対策のアイテムである V2Xやコジェネ、テナントビルや複合施設に対応したクラウド検針システム、高効率設備のハイブリッド給湯器や空調設備、省エネに関連するLED照明や太陽光発電のコンサルテーションと販売・施工をワンストップで行います。</p>
          <div class="btn-container">
            <PartsCommonButton :href="'about'" :text="'会社情報を見る'" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
@use "@/assets/css/resources.scss" as *;
#reason {
  margin-top: 80px;
  .reason-container {
    display: flex;
    background-color: white;
    &:nth-of-type(odd) {
      flex-direction: row-reverse;
      .reason-text-inner{
        margin-left: auto;
      }
    }
  }

  .reason-img,
  .reason-text {
    width: 100%;
  }
  .reason-img {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .reason-text {
    .btn-container {
      display: flex;
      justify-content: flex-end;
      margin-top: 30px;
    }
    img {
      width: 200px;
      margin: 20px 0;
    }
    p {
      line-height: 22px;
      font-size: 16px;
      letter-spacing: 0.1em;
    }
  }
}

.reason-text-inner {
  max-width: 600px;
  padding: 30px;
  @include pc-l{
    max-width: none;
    width: 28vw;
  }
}

.reason-text-title {
  border-left: 4px solid $ene-green;
  padding-left: 14px;
  h4 {
    font-size: 32px;
    line-height: 1.3;
    color: $text-black;
    @include pc-l{
      font-size: 2rem;
    }
  }
}
</style>
