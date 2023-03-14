<template>
  <section id="simulation">
    <PartsCommonBusinessHeading :contentName="'solar'"/>
    <div id="map">
      <PartsCommonJapan />
    </div>
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
        <swiper :options="swiperThumbs" ref="swiperThumbs" class="swiperThumbs">
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
                  <p>
                    年間<span class="bold">{{
                      simulationData.result.generationPerYear
                    }}</span
                    ><span>kWh</span>の発電量
                  </p>
                  <p>
                    電気料金を年間<span class="bold">{{
                      simulationData.result.cutPerYear
                    }}</span
                    ><span>万円</span>削減
                  </p>
                  <p>
                    CO2を年間約<span class="bold">{{
                      simulationData.result.curbonPerYear
                    }}</span
                    ><span>t</span>削減
                  </p>
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
              class="motion delighter started"
              data-delighter=""
            >
              <h3>契約種別：{{ simulationData.area }}エリア 高圧電力S</h3>
              <div class="data-table">
                <div class="line">
                  <p>基本料金単価</p>
                  <span
                    >{{ simulationData.basePrice
                    }}<span style="font-size: 10px">円</span></span
                  >
                </div>

                <div class="line">
                  <p>電力量単価</p>
                  <span></span>
                </div>

                <div class="line">
                  <p>　夏季</p>
                  <span>{{ simulationData.summer }}</span>
                </div>

                <div class="line">
                  <p>　その他季</p>
                  <span>{{ simulationData.otherSeasons }}</span>
                </div>

                <div class="line">
                  <p>燃料調整費単価（円/1kWh）</p>
                  <span>{{ simulationData.fuelAdjustmentCost }}</span>
                </div>

                <div class="line">
                  <p>再エネ賦課金単価（円/1kWh）</p>
                  <span>{{ simulationData.greenEnergyInpost }}</span>
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
              class="motion delighter started ended"
              data-delighter=""
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
              class="motion delighter started ended"
              data-delighter=""
            >
              <h3>導入シミュレーション</h3>
              <div class="data-table">
                <div class="line">
                  <p>年間発電電力量</p>
                  <span>{{ simulationData.generationPerYear }}</span>
                </div>
                <div class="line">
                  <p>年間削減料金</p>
                  <span>{{ simulationData.cutPerYear }}</span>
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
  </section>
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
#aabb {
  background-image: url("@/assets/img/business.jpg");
  mask-image: url("@/assets/img/businessHeading_bg.svg");
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
          justify-content: center;
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
          background-color: #00be3a;
        }
        h4 {
          font-family: "Noto Sans JP";
          font-weight: 700;
          font-size: 32px;
          color: #00be3a;
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
              color: #00be3a;
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
          }
        }
      }
    }
  }
}
</style>
