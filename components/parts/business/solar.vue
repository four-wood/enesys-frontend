<template>
  <div id="solar">
    <PartsCommonBusinessHeading :contentName="'solar'" />
    <section id="desc">
      <div class="env-flex delighter started ended" data-delighter="">
        <div
          class="env-flex-content"
        >
          <h4>電気は買うよりつくって・つかうがお得です。</h4>
          <p>
            燃料代の高騰や再エネ構成比率拡大により、今後も電気代は継続的な値上がりが予想されています。
          </p>
          <p>
            これからの電気代高騰時代に向けて、価格変動の影響を受けない自家消費型の太陽光発電システムで電気代の削減をしませんか？
          </p>
        </div>
        <div
          class="env-flex-content "
        >
          <img decoding="async" src="~/assets/img/installed_solar.jpg" alt="" />
        </div>
      </div>
      <div class="env-flex delighter started ended" data-delighter="">
        <div
          class="env-flex-content"
        >
          <img decoding="async" src="~/assets/img/graph_fuel.jpg" alt="" />
        </div>
        <div
          class="env-flex-content"
        >
          <h4>太陽光発電がお得な理由<span>１</span></h4>
          <h3>電力会社の電気代が毎月上昇しています</h3>
          <p>
            火力発電の燃料代を調整する「燃料調整費」の単価は、ガス・石炭などの値上がりや電力需要拡大、火力発電所の縮小などにより毎月のように上昇しています。
          </p>
          <p>
            電力会社の電気を利用するより、自前の太陽光発電で発電し使う方がお得な状況になりました。
          </p>
        </div>
      </div>

      <div class="env-flex delighter started" data-delighter="">
        <div
          class="env-flex-content"
        >
          <h4>太陽光発電がお得な理由<span>２</span></h4>
          <h3>再エネ拡大の負担が増えています</h3>
          <p>
            再生エネルギー（太陽光、地熱、水力、風力など）を促進するための費用を電気代の一部に賦課する「再生可能エネルギー発電促進賦課金（再エネ賦課金）」も年々上昇しています。
          </p>
          <p>
            日本として今後も再生エネルギーの促進を加速していく方針なので、今後も再エネ賦課金は上昇し続ける見込みです。
          </p>
        </div>
        <div class="env-flex-content">
          <img decoding="async" src="~/assets/img/graph_energy.jpg" alt="" />
        </div>
      </div>
      <div class="env-flex delighter" data-delighter="">
        <div class="env-flex-content" data-delighter="">
          <img src="~/assets/img/graph_goal.jpg" />
        </div>
        <div class="env-flex-content">
          <h4>太陽光発電がお得な理由<span>３</span></h4>
          <h3>日本も再エネ拡大に舵をきっています</h3>
          <p>
            脱炭素社会に向け、日本は再生可能エネルギーの電力構成比を36%～38%まで引き上げる計画を打ち出しています。
          </p>
          <p>
            再生可能エネルギーの代表である太陽光発電の普及を促進させるため、様々な税制優遇や導入補助が用意される見込みです。
          </p>
          <p>※参照”KYODONEWS”</p>
        </div>
      </div>
    </section>
    <section id="simulation">
      <div class="simulation-flex">
        <div class="img-container">
          <swiper :options="swiperTop" ref="swiperTop" class="swiperTop">
            <swiper-slide
              class="group-slide-container"
              v-for="simulationData in simulationDatas"
              :key="simulationData.id"
            >
              <img :src="require('~/assets/img/' + simulationData.src)" />
            </swiper-slide>
          </swiper>
        </div>
        <div class="result-container">
          <swiper
            :options="swiperThumbs"
            ref="swiperThumbs"
            class="swiperThumbs"
          >
            <div class="swiper-pagination" slot="pagination"></div>
            <swiper-slide
              v-for="simulationData in simulationDatas"
              :key="simulationData.id"
            >
              <div class="board">
                <p class="catch-color">シミュレーション</p>
                <h4>{{ simulationData.result.targetName }}の場合</h4>
                <p>水産加工工場を所有している事業者様が購入型で導入した場合</p>
                <p>※電気料金:104,000,000円/年</p>
                <div class="melit">
                  <img class="melit-img" src="~assets/img/icon_good.png" />
                  <div class="melit-text">
                    <p>年間<span class="bold">{{ simulationData.result.generationPerYear }}</span><span>kWh</span>の発電量</p>
                    <p>電気料金を年間<span class="bold">{{ simulationData.result.cutPerYear }}</span><span>万円</span>削減</p>
                    <p>CO2を年間約<span class="bold">{{ simulationData.result.curbonPerYear }}</span><span>t</span>削減</p>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div id="data">
        <swiper
          :options="swiperThumbsSec"
          ref="swiperThumbsSec"
          class="swiperThumbsSec"
        >
          <swiper-slide
            class="group-slide-container"
            v-for="simulationData in simulationDatas"
            :key="simulationData.id"
          >
            <div class="data-container">
              <div
                id="situation"
              >
                <h3>契約種別：{{ simulationData.area }}エリア 高圧電力S</h3>
                <div class="data-table">
                  <div class="line">
                    <p>基本料金単価</p>
                    <span>{{ simulationData.basePrice }}<span class="yen">円</span></span>
                  </div>

                  <div class="line">
                    <p>電力量単価</p>
                    <span></span>
                  </div>

                  <div class="line">
                    <p>　夏季</p>
                    <span>{{ simulationData.summer }}<span class="yen">円</span></span>
                  </div>

                  <div class="line">
                    <p>　その他季</p>
                    <span>{{ simulationData.otherSeasons }}<span class="yen">円</span></span>
                  </div>

                  <div class="line">
                    <p>燃料調整費単価（円/1kWh）</p>
                    <span>{{ simulationData.fuelAdjustmentCost }}<span class="yen">円</span></span>
                  </div>

                  <div class="line">
                    <p>再エネ賦課金単価（円/1kWh）</p>
                    <span>{{ simulationData.greenEnergyInpost }}<span class="yen">円</span></span>
                  </div>

                  <div class="line">
                    <p>契約電力</p>
                    <span>{{ simulationData.contractDemand }}</span>
                  </div>

                  <div class="line">
                    <p>年間消費電力量</p>
                    <span>{{ simulationData.consumptionPerYear }}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="data-container">
              <div
                id="equipment"
              >
                <h3>設備容量</h3>
                <div class="data-table">
                  <div class="line">
                    <p>太陽光パネル</p>
                    <span>{{ simulationData.solarPanel }}</span>
                  </div>
                  <div class="line">
                    <p>PCS</p>
                    <span>{{ simulationData.pcs }}</span>
                  </div>
                </div>
              </div>
              <div
                id="result"
              >
                <h3>導入シミュレーション</h3>
                <div class="data-table">
                  <div class="line">
                    <p>年間発電電力量</p>
                    <span>{{ simulationData.generationPerYear }}</span>
                  </div>
                  <div class="line">
                    <p>年間削減料金</p>
                    <span>{{ simulationData.cutPerYear }}<span class="yen">円</span></span>
                  </div>
                  <div class="line">
                    <p>年間CO2削減量</p>
                    <span>{{ simulationData.curbonPerYear }}</span>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div id="map">
        <PartsCommonJapan />
      </div>
    </section>
  </div>
</template>
<script>
import simulationMaster from "~/service/simulationMaster";
export default {
  data() {
    return {
      simulationDatas: simulationMaster.getAllData(),
      swiperThumbs: {
        loop: true,
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        slideToClickedSlide: true,
      },
      swiperTop: {
        loop: true,
        effect: "fade",
        allowTouchMove: false,
      },
      swiperThumbsSec: {
        loop: true,
        effect: "fade",
        allowTouchMove: false,
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper;
      const swiperThumbs = this.$refs.swiperThumbs.$swiper;
      const swiperThumbsSec = this.$refs.swiperThumbsSec.$swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
      swiperTop.controller.control = swiperThumbsSec;
    });
  },
};
</script>
<style lang="scss" scoped>
@use "@/assets/css/resources.scss" as *;

.page-top-overlay h1:before {
  font-family: Arial, Helvetica, "sans-serif";
  font-size: 64px;
  margin-bottom: 20px;
  letter-spacing: 2px;
  content: "Business";
  display: block;
}

.page-nav {
  width: 100%;
  position: relative;
}

.biz-nav-wrapper {
  margin: 0 auto 40px;
  transform: translateY(-8vh);
  width: 60vw;
  display: flex;
  gap: 2.4vw;
  flex-wrap: wrap;
}

.biz-nav-btn {
  width: 48%;
  height: 260px;
  color: #fff;
  position: relative;
  overflow: hidden;
}

.biz-nav-btn:hover .page-btn-overlay {
  left: -35%;
}

.biz-nav-btn h2 {
  position: absolute;
  bottom: 8%;
  left: 8%;
  font-size: 16px;
  font-weight: bold;
}

#solar {
  background-color: white;
}
#retail {
  padding-bottom: 40px;
}

#biz-message {
  position: relative;
}

.biz-message-container {
  position: absolute;
  top: -220px;
  width: 100%;
}
.biz-message-container p {
  max-width: 96vw;
  margin: 0 auto;
}

#biz-message p {
  width: 100%;
  text-align: center;
  font-weight: bold;
  letter-spacing: 3px;
  font-size: 22px;
}

#biz-message p {
  font-weight: bold;
  letter-spacing: 3px;
  font-size: 22px;
  white-space: nowrap;
}
#biz-message p .wrap-delimiter {
  display: none;
}

.biz-header {
  position: relative;
  margin-bottom: 160px;
}

.biz-header-img {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  height: 400px;
  width: 100%;
}

.biz-header-img img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.biz-header > img {
  width: 100%;
}

.biz-header-title {
  position: absolute;
  top: 300px;
  left: 18vw;
  width: 420px;
  height: 120px;
  background: #fff;
  font-weight: bold;
  padding: 40px;
  -webkit-box-shadow: 2px 2px 5px #000;
  box-shadow: 2px 2px 5px #000;
}

.biz-header-text p {
  font-size: 32px;
  color: $ene-green;
  font-family: Arial, Helvetica, "sans-serif";
  margin-bottom: 16px;
}

.biz-header-text h2 {
  font-size: 32px;
  margin-bottom: 16px;
  letter-spacing: 3px;
}

.biz-header-text img {
  width: 160px;
}

article {
  width: 68vw;
  margin: 0 auto;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.scheme-text {
  width: 42%;
  padding: 0 46px;
}

.scheme-chart {
  width: 50%;
}

.scheme-text h3 {
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 38px;
  color: $ene-green;
}

.scheme-text p {
  line-height: 24px;
  margin-bottom: 28px;
}

.partner {
  width: 100%;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.ep,
.tcs {
  width: 49%;
  background: #fff;
  text-align: center;
}

.partner img {
  margin-bottom: 20px;
}

.partner p,
.heisya p {
  width: 100%;
  color: #fff;
  background-color: #191a1a;
  line-height: 32px;
  text-align: center;
  margin-bottom: 20px;
  font-weight: bold;
}

.scheme-chart > img {
  display: block;
  width: 20px;
  margin: 20px auto;
}

.heisya {
  width: 100%;
  background-color: #fff;
  text-align: center;
}

.heisya img {
  width: 260px;
  margin-bottom: 20px;
}

#feature {
  width: 100%;
  margin: 60px 0 0;
  background: #daede0;
  padding: 40px 0 120px;
  display: block;
}

.feature-container {
  width: 64vw;
  margin: 0 auto;
}

.cases,
.options {
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
}

.case {
  width: 32%;
  height: 320px;
}

.feature-container > p {
  width: 78%;
  margin: 20px auto;
  text-align: right;
  font-size: 12px;
}

.price {
  width: 64vw;
  margin: 0 auto;
  text-align: center;
}

.price p:first-child {
  font-size: 22px;
  font-weight: bold;
  margin: 80px 0 20px;
}

.price p:nth-child(2) {
  font-size: 16px;
  margin: 0 0 40px;
}

.price img {
  width: 80%;
}

.option {
  width: 32%;
  height: 240px;
  margin: 60px 0 120px;
  position: relative;
}

.option p {
  margin-top: 220px;
  font-size: 16px;
  line-height: 22px;
  font-weight: bold;
  width: 88%;
  margin: 260px auto 20px;
}

.product-container {
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 72%;
  margin: 30px auto;
  background: #fff;
  -webkit-box-shadow: 2px 2px 5px #000;
  box-shadow: 2px 2px 5px #000;
  position: relative;
  padding: 2% 4%;
}

.product-img {
  width: 15%;
  text-align: center;
}

.product-img img {
  width: 100%;
}

.product-text {
  width: 80%;
  padding: 0 20px;
}

.product-container h4 {
  font-size: 20px;
  font-weight: bold;
  margin: 18px 0 10px;
  color: $ene-green;
}

.product-container small {
  font-size: 14px;
  margin-left: 20px;
}

.product-container p {
  line-height: 18px;
  font-size: 14px;
}

.papy {
  width: 25% !important;
}

.solution-feature {
  margin: 100px auto;
  width: 59vw;
}

.board #price-increase {
  text-align: center;
  padding: 30px 0 20px;
}

.board .env-flex-content img {
  height: 100%;
}

.env-flex {
  display: flex;
  height: 350px;
  max-width: 1000px;
  margin: 0 auto;
  justify-content: space-between;
  padding: 30px 0;
  .env-flex-content {
    width: 48%;
    float: left;
    &:first-of-type {
      float: right;
    }
    img {
      height: 100%;
    }
  }
}

.env-flex .env-flex-content:last-of-type {
  float: left;
}

.env-flex .env-flex-content:first-of-type img {
  float: right;
}

.env-flex .env-flex-content:last-of-type img {
  float: left;
}

.env-flex-content h4 {
  color: $ene-green;
  font-family: "Noto Sans JP";
  font-weight: 900;
  font-size: 20px;
  line-height: 30px;
}

.env-flex-content h4 span {
  font-size: 40px;
  font-family: "Poppins", "arial";
  position: relative;
  top: 4px;
}

.env-flex h3 {
  color: black;
  font-weight: 700;
  font-size: 24px;
  margin-top: 8px;
}

.env-flex p {
  font-family: "Noto Sans JP";
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  margin-top: 16px;
}

.goal-increase {
  position: relative;
  z-index: 10;
}

.board .env-flex-content .goal-increase-img {
  position: absolute;
  height: auto;
  top: -110px;
  left: 0;
  width: 170px;
}

#simulation {
  margin-top: 40px;
  padding-bottom: 10px;
}

#simulation .wrapper .sim-header-container {
  height: 35vw;
  display: flex;
  align-items: center;
}

#simulation .wrapper .sim-header-container .simulation-header {
  height: 100%;
}

#simulation .wrapper .sim-header-container .simulation-header img {
  width: 60vw;
  height: 100%;
  object-position: 0 center;
  object-fit: cover;
  top: 0;
  left: 0;
}

#simulation .wrapper .sim-header-container .simulation-text {
  transform: translate(-14vh, 0);
  height: 100%;
  display: flex;
  align-items: center;
}

#simulation .wrapper .board {
  width: 460px;
  position: absolute;
  z-index: 2;
  padding: 40px 60px;
  text-align: left;
  margin-right: 0;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  box-shadow: 4px 4px 8px rgba(0 0 0 / 40%);
}

#simulation .wrapper .board .catch-color {
  padding: 5px 20px;
  display: inline-block;
  font-family: "Noto Sans JP";
  font-weight: 700;
  color: white;
  font-size: 16px;
  background-color: $ene-green;
}
#simulation .wrapper .board h4 {
  font-family: "Noto Sans JP";
  font-weight: 700;
  font-size: 32px;
  color: $ene-green;
  letter-spacing: 0.1em;
  margin: 16px 0;
}
#simulation .wrapper .board p {
  font-family: "Noto Sans JP";
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 12px;
}
.melit {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.melit .melit-img {
  margin-right: 20px;
}
#simulation .wrapper .board .melit-text p {
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  margin: 0;
}
#simulation .wrapper .board .melit-text span {
  font-size: 20px;
  color: $ene-green;
}
#simulation .wrapper .board .melit-text .bold {
  font-size: 36px;
  line-height: 52px;
}

#simulation .wrapper .data-title {
  text-align: center;
  margin: 36px 0;
}
#simulation .wrapper .data-title h4 {
  font-family: "Noto Sans JP";
  font-weight: 700;
  color: $ene-green;
  font-size: 24px;
}
#data {
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
  gap: 4%;
  justify-content: space-between;
}

#data .data-container {
  width: 48%;
}
#simulation .wrapper #data .data-container .data-table {
  border-radius: 16px;
  background-color: #daede0;
  padding: 0 24px;
}
#simulation .wrapper #data .data-container h3 {
  font-size: 20px;
  font-weight: 700;
  font-family: "Noto Sans JP";
  letter-spacing: 0.1em;
  margin: 10px 0;
}
.data-container .data-table {
  margin-bottom: 24px;
}
#simulation .wrapper #data .data-container .data-table .line {
  padding: 16px 0;
  width: 100%;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
}
#simulation .wrapper #data .data-container .data-table .line:last-of-type {
  border: none;
}
.data-table p,
.data-table span {
  font-size: 14px;
  font-family: "Noto Sans JP";
  font-weight: 700;
}
.supplement {
  max-width: 1000px;
  margin: 0 auto;
}
.supplement p {
  font-size: 14px;
  font-family: "Noto Sans JP";
  line-height: 20px;
  font-weight: 400;
}
.sim-btn-container {
  margin: 50px auto 90px;
  text-align: center;
}
.sim-btn-container button {
  cursor: pointer;
  padding: 25px 110px;
  background-color: $ene-green;
  border: none;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  transition: background-color 0.2s;
}
.sim-btn-container button:hover {
  background-color: $ene-green;
}
.sim-btn-container button p {
  color: white;
  font-family: "Noto Sans JP";
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
}

.solution-feature p:first-child {
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 2px;
  margin-bottom: 20px;
}

.solution-feature p:last-child {
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 24px;
}

.solution-container {
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 80px;
}

.sol-img {
  width: 60%;
}

.sol-img img {
  width: 100%;
}

.sol-text-wrapper {
  width: 40%;
  position: relative;
}

.sol-text-container {
  width: 42vw;
  position: absolute;
  height: 24vw;
  top: 8vw;
  left: -18vw;
  background: #fff;
  -webkit-box-shadow: 2px 2px 5px #000;
  box-shadow: 2px 2px 5px #000;
}

.anshin-wrapper {
  display: flex;
  justify-content: space-between;
  flex-flow: row;
}

.anshin-container {
  width: 49%;
}

.anshin-h5 {
  margin-bottom: 20px !important;
}

.iframe-wrapper {
  padding-top: 56.25%;
  position: relative;
  margin-bottom: 20px;
}

.iframe-wrapper iframe {
  position: absolute;
  top: 0;
  width: 0;
  width: 100%;
  height: 100%;
}

.sol-text-inner {
  width: 80%;
  height: 80%;
  margin: 4vw auto;
}

.sol-text-inner h3 {
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 2vw;
  letter-spacing: 2px;
}

.sol-text-inner h4 {
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0;
}

.sol-text-inner h4 span {
  color: $ene-green;
  margin-right: 20px;
}

.sol-text-inner p {
  margin-bottom: 14px;
  margin-left: 42px;
  font-size: 15px;
}

.left {
  -webkit-box-ordinal-group: 3;
  -ms-flex-order: 2;
  order: 2;
}

.left-text {
  left: 36vw;
}

#hyb .btn-container {
  margin-top: 0;
}

.sol-text-inner img {
  width: 320px;
  margin: 10px 0 20px;
}

.sol-text-inner h5 {
  line-height: 24px;
  margin-bottom: 40px;
}

#system {
  margin: 120px 0 0;
  background-color: #fff;
  padding-bottom: 120px;
}

.system-wrapper {
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin: 60px auto;
}

.system-text-container {
  width: 50%;
  position: relative;
}

.system-text-inner {
  width: 60%;
  position: absolute;
  right: 0;
}

.system-text-inner h3 {
  font-size: 28px;
  font-weight: bold;
  margin: 80px 0 30px;
}

.system-text-inner p {
  line-height: 22px;
  margin: 20px 0;
}

.system-img {
  width: 50%;
}

.system-img img {
  width: 100%;
}

.auto-wrapper {
  width: 58vw;
  margin: 0 auto;
}

.auto-row {
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 40px;
}

.auto-content {
  width: 45%;
  text-align: center;
  background: #fff;
  -webkit-box-shadow: 2px 2px 5px #000;
  box-shadow: 2px 2px 5px #000;
  height: 320px;
}

.auto-content img {
  width: 60%;
}

.auto-content h4 {
  font-size: 24px;
  font-weight: bold;
  width: 80%;
  margin: 30px auto 20px;
}

.auto-content h4 span {
  font-size: 16px;
  margin-left: 10px;
}

.auto-content p {
  width: 80%;
  margin: 20px auto 30px;
  text-align: left;
}

@media screen and (max-width: 1600px) {
  .scheme-text h3 {
    font-size: 22px;
    letter-spacing: -1px;
  }

  .biz-header-title {
    left: 10vw;
  }

  article,
  .feature-container {
    width: 80vw;
  }

  .cases,
  .options,
  .price {
    width: 100%;
  }

  .product-container {
    width: 82%;
  }

  .sol-text-inner h3 {
    margin-bottom: 1vw;
  }

  .sol-text-inner h4 {
    font-size: 18px;
    margin: 6px 0;
  }

  .system-text-inner {
    width: 74%;
  }

  .auto-wrapper {
    width: 72vw;
  }
}

@media screen and (max-width: 1366px) {
  .biz-nav-btn {
    height: 180px;
  }

  #biz-message p {
    letter-spacing: 2px;
  }

  .biz-message-container {
    top: -250px;
  }

  .partner {
    display: block;
  }

  .ep,
  .tcs {
    width: 100%;
    margin-bottom: 20px;
  }

  .scheme-text {
    width: 52%;
    padding: 0 46px;
  }

  .scheme-chart {
    width: 40%;
  }

  .price p:nth-child(2) {
    font-size: 15px;
  }

  .sol-text-container {
    width: 56vw;
    height: auto;
    top: 6vw;
  }

  .sol-text-inner p {
    margin-bottom: 6px;
  }

  .left-text {
    left: 28vw;
  }

  .system-text-inner h3 {
    font-size: 23px;
    margin: 30px 0 30px;
  }
}

@media screen and (max-width: 1200px) {
  .env-flex {
    flex-direction: column-reverse;
    height: auto;
  }

  .env-flex:nth-of-type(odd) {
    flex-direction: column;
    height: auto;
  }

  .pc-s-only {
    display: none;
  }
  .env-flex-content {
    width: 100%;
  }

  .env-flex-content p {
    margin-bottom: 20px;
  }

  .board,
  #data,
  .supplement {
    padding: 0 80px;
  }
  .board .env-flex-content img {
    height: auto;
    width: 100%;
  }
  .simulation-header {
    width: 100%;
  }

  #simulation .wrapper .board h4 {
    font-size: 24px;
    margin: 10px 0;
  }

  #simulation .wrapper .board .melit-text .bold {
    font-size: 32px;
    line-height: 46px;
  }

  .melit .melit-img {
    display: none;
  }

  #simulation .wrapper .sim-header-container .simulation-text {
    width: 100%;
    height: 250px;
    transform: translate(0, -8vw);
    justify-content: center;
    align-items: inherit;
  }

  #simulation .wrapper .board {
    max-width: 560px;
    width: 80%;
    padding: 4vw;
  }

  #simulation .wrapper .sim-header-container {
    height: auto;
  }

  #simulation .wrapper .sim-header-container .simulation-header img {
    width: 80%;
  }

  #simulation .wrapper .sim-header-container {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media screen and (max-width: 1024px) {
  #biz-message p {
    font-size: 18px;
  }

  .scheme-text {
    width: 52%;
    padding: 0 4px;
  }

  .scheme-chart {
    width: 44%;
  }

  #simulation .wrapper .sim-header-container .simulation-text {
    height: 300px;
  }
  #data {
    flex-direction: column;
  }

  #data .data-container {
    width: 100%;
  }

  .solution-feature {
    width: 78vw;
  }

  .solution-container {
    width: 100%;
    display: block;
    margin-bottom: -30px;
  }

  .sol-img {
    width: 80%;
  }

  .sol-text-wrapper {
    width: 100%;
  }

  .sol-text-container {
    width: 80vw;
    position: relative;
    padding: 20px 0;
    top: -20vw;
    left: 10vw;
  }

  .anshin-wrapper {
    display: block;
  }

  .anshin-container {
    width: 100%;
  }

  .left-text {
    left: 0vw;
  }

  .system-text-inner h3 {
    font-size: 22px;
    margin: 0px 0 30px;
  }

  .papy {
    width: 50% !important;
  }
}

@media screen and (max-width: 768px) {
  .biz-nav-wrapper {
    display: none;
  }

  .biz-message-container {
    top: -170px;
  }

  #biz-message p {
    line-height: 30px;
  }

  .biz-header {
    position: relative;
    margin-bottom: 100px;
  }

  .biz-header-title {
    left: 6vw;
    width: 88vw;
    height: 140px;
    padding: 0px;
  }

  article {
    width: 88vw;
  }

  .biz-header-text p {
    font-size: 32px;
    width: 90%;
    margin: 20px auto 6px;
  }

  .biz-header-text h2 {
    font-size: 28px;
    width: 90%;
    letter-spacing: 0px;
    margin: 0 auto 12px;
  }

  .biz-header-text img {
    margin-left: 5%;
  }

  .biz-header-img {
    position: relative;
  }

  .biz-header-img > img {
    position: absolute;
  }
  #biz-message p .wrap-delimiter {
    display: block;
  }
  #simulation .wrapper .board .melit-text p {
    font-size: 16px;
  }
  #simulation .wrapper .board .melit-text span {
    font-size: 18px;
  }

  .board,
  #data,
  .supplement {
    padding: 0 20px;
  }
  #simulation .wrapper #data .data-container h3 {
    font-size: 18px;
    letter-spacing: 0.08em;
  }
  .sim-btn-container button {
    padding: 4vw 14vw;
  }

  .sim-btn-container button p {
    font-size: 16px;
  }

  article,
  .feature-container {
    width: 88vw;
    display: block;
  }

  .scheme-text,
  .scheme-chart {
    width: 100%;
  }

  .scheme-text h3 {
    font-size: 20px;
    letter-spacing: -1px;
    margin-bottom: 28px;
  }

  .cases,
  .options {
    display: block;
    width: 88%;
  }

  .case {
    width: 100%;
  }

  .price {
    width: 88vw;
  }

  .price img {
    width: 100%;
  }

  .option {
    width: 100%;
    height: 240px;
    margin: 100px 0 100px;
    position: relative;
  }
  .option:last-of-type {
    margin-bottom: 0;
  }

  .option p {
    font-size: 16px;
    width: 100%;
    margin: -60px auto 120px;
    position: absolute;
  }

  .product-container {
    display: block;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 88%;
    margin: 30px auto;
    background: #fff;
    -webkit-box-shadow: 2px 2px 5px #000;
    box-shadow: 2px 2px 5px #000;
    position: relative;
    padding: 2% 4%;
  }

  .product-img {
    width: 40%;
    margin: 0 auto;
  }

  .product-text {
    width: 80%;
    margin: 0 auto;
  }

  .solution-feature {
    width: 84vw;
    margin: 100px auto 60px;
  }

  .solution-feature p:first-child {
    font-size: 20px;
    letter-spacing: 1px;
  }

  .solution-feature p:last-child {
    font-size: 16px;
    letter-spacing: 0px;
    line-height: 22px;
  }

  .sol-text-container {
    width: 84vw;
    height: auto;
  }

  .sol-text-inner {
    width: 90%;
    margin: 5vw auto;
  }

  .sol-text-inner h4 span {
    margin-right: 10px;
  }

  .sol-text-inner img {
    width: 220px;
  }

  .sol-text-inner h3 {
    font-size: 20px;
    letter-spacing: -2px;
  }

  .sol-text-inner p {
    font-size: 13px;
  }

  .system-wrapper {
    display: block;
    margin: 60px auto;
  }

  .system-text-container {
    width: 88vw;
    margin: 0 auto;
  }

  .system-text-inner {
    width: 100%;
    position: static;
  }

  .system-img {
    width: 100%;
    margin-top: 20px;
  }

  .auto-row {
    display: block;
  }

  .auto-content {
    width: 100%;
    margin: 0 auto;
    padding-top: 20px;
    margin-bottom: 40px;
  }
}

#simulation {
  #map {
    width: 500px;
    height: 500px;
  }
  .simulation-flex {
    display: flex;
    height: 600px;
    .img-container {
      width: 50%;
      .swiper-container {
        height: 100%;
        width: 120%;
        .swiper-wrapper {
          height: 100%;
          width: 100%;
          img {
            height: 100%;
            width: 100%;
            object-fit: cover;
          }
        }
      }
    }
    .result-container {
      width: 50%;
      .swiper-container {
        width: 100%;
        height: 100%;
        .swiper-slide {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
        }
      }

      .board {
        z-index: 2;
        max-width: 540px;
        padding: 40px 60px;
        text-align: left;
        margin-right: 0;
        background-color: rgba(255, 255, 255, 0.9);
        border-radius: 16px;
        box-shadow: 4px 4px 8px rgb(0 0 0 / 40%);
        .catch-color {
          padding: 5px 20px;
          display: inline-block;
          font-family: "Noto Sans JP";
          font-weight: 700;
          color: white;
          font-size: 16px;
          margin-bottom: 30px;
          background-color: $ene-green;
        }
        h4 {
          font-family: "Noto Sans JP";
          font-weight: 700;
          font-size: 32px;
          color: $ene-green;
          letter-spacing: 0.1em;
          margin-bottom: 16px;
        }
        p {
          font-family: "Noto Sans JP";
          font-weight: 400;
          font-size: 16px;
          margin-bottom: 12px;
        }
        .melit {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          .melit-img {
            margin-right: 20px;
          }
          .melit-text {
            p {
              font-family: "Noto Sans JP";
              font-size: 20px;
              font-weight: 700;
              line-height: 30px;
              margin: 0;
            }
            span {
              font-size: 20px;
              color: $ene-green;
            }
            .bold {
              font-size: 36px;
              line-height: 52px;
            }
          }
        }
      }
    }
  }
  #data {
    max-width: 1000px;
    margin: 50px auto;
    .swiper-slide {
      display: flex;
      justify-content: space-between;
      .data-container {
        background-color: white;
        width: 48%;
        #equipment {
          margin-bottom: 20px;
        }
        h3 {
          font-size: 16px;
          line-height: 20px;
        }
        .data-table {
          border-radius: 16px;
          background-color: #daede0;
          padding: 0 24px;
          .line {
            padding: 16px 0;
            width: 100%;
            border-bottom: 1px solid black;
            display: flex;
            justify-content: space-between;
            &:last-of-type {
              border-bottom: none;
            }
            p,
            span {
              font-size: 14px;
              font-family: "Noto Sans JP";
              font-weight: 700;
            }
            .yen {
              font-size: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
