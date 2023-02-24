<template>
  <section id="reason">
    <div class="section-header motion" data-delighter="">
      <div class="header-line"></div>
      <h3>Reason Why</h3>
      <h3>ヤブシタエネシスが選ばれる理由</h3>
    </div>
    <div class="reason-container motion" data-delighter="">
      <div class="reason-img reason-1"></div>
      <div class="reason-text">
        <div class="reason-text-inner">
          <div class="reason-text-title">
            <span></span>
            <h4>電気のことを知り尽くしたプロフェッショナル</h4>
          </div>
          <img alt="powerd by tepco" src="~/assets/img/pot.png" />
          <p class="space">
            日本最大手の電力会社である東京電力グループ（東京電力エナジーパートナー株式会社、テプコカスタマーサービス株式会社）と連携し、1,000社以上のお客様の電気代削減に貢献してきました。また、設備機器メーカーとも密に連携しており、お客様に合った最新・最適な設備からお得な料金プランや運用方法をご提案することが可能です。
          </p>
          <p class="space">
            加えて、太陽光発電から照明・空調・電気設備など、電気に関わる総合的なご提案と工事実施の実績があります。
          </p>
          <div class="btn-container">
            <a class="btn" href="business">
              <span>事業内容を見る</span><i class="fas fa-angle-right"></i>
              <div class="transition"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="reason-container motion" data-delighter="">
      <div class="reason-img reason-2"></div>
      <div class="reason-text reason-text-2">
        <div class="reason-text-inner">
          <div class="reason-text-title">
            <span></span>
            <h4>設備工事のヤブシタグループ</h4>
          </div>
          <img alt="ヤブシタグループ" src="~/assets/img/yabushita-g.png" />
          <p class="space">
            BCP （災害対策）対策のアイテムである V2X
            やコジェネ、テナントビルや複合施設に対応したクラウド検針システム、高効率設備のハイブリッド給湯器や空調設備、省エネに関連する
            LED
            照明や太陽光発電のコンサルテーションと販売・施工をワンストップで行います。
          </p>
          <div class="btn-container">
            <a class="btn" href="about"><span>会社情報を見る</span><i class="fas fa-angle-right"></i><div class="transition"></div></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
#reason {
  margin: 120px 0 0;
  .reason-container {
    display: flex;
    background-color: white;
  }

  .reason-img ,.reason-text{
    width: 50%;
    height: 420px;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .reason-text {
    display: flex;
    align-items: center;
    .btn-container {
      margin: 0;
    }
    h4 {
      font-family: "Noto Sans JP";
      font-size: 20px;
      font-weight: 900;
      line-height: 30px;
      padding-left: 12px;
    }
    img {
      width: 200px;
      margin: 16px 0;
    }
    p {
      line-height: 22px;
      font-size: 16px;
    }
  }
}

.reason-1 {
  background-image: url("@/assets/img/reason-1.jpg");
}

.reason-2 {
  background-image: url("@/assets/img/reason-2.jpg");
  order: 2;
}

.reason-text-inner {
  max-width: 640px;
  width: 100%;
  padding: 0 40px;
}

.reason-text-title {
  display: flex;

  span {
    display: block;
    width: 4px;
    background-color: #00be3a;
  }
}

.reason-text-2 {
  justify-content: end;
}
</style>
