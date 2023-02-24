<template>
  <section id="business">
    <PartsCommonSectionHeader>
      <template v-slot:jp>省エネ事業</template>
      <template v-slot:en>ENERGY SAVING</template>
    </PartsCommonSectionHeader>
    <div class="biz-container">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="slide in slides" :key="slide.id">
          <div class="biz-slide-container">
            <div class="biz-slide-img">
              <img :src="require('~/assets/img/' + slide.srcUrl)" />
            </div>
            <div class="biz-slide-text">
              <div class="biz-slide-title">
                <h3>{{ slide.name }}</h3>
              </div>
              <p>{{ slide.desc }}</p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      nowSlideNum: 0,
      slides: {
        solar: {
          srcUrl: "top_fv_1.jpg",
          name: "太陽光発電ソリューション事業",
          desc: "法人のお客様向けに、自家消費型の太陽光発電システムやPPA契約などお客様に合った設備・料金プランをご提案いたします。",
          query: "solar",
        },
        solution: {
          srcUrl: "top_fv_2.jpg",
          name: "設備ソリューション事業",
          desc: "BCP対策・テナントビル等の運営の効率化、高効率の最新設備、省エネ関連等、幅広く対応します。",
          query: "solution",
        },
        system: {
          srcUrl: "top_fv_4.jpg",
          name: "電力見える化事業",
          desc: "クラウド電力見える化と自動制御を可能にする「えねSYSTEM」を販売しております。",
          query: "system",
        },
        retail: {
          srcUrl: "top_fv_3.jpg",
          name: "電力販売事業",
          desc: "電気の品質はそのままで、低価格の電力販売",
          query: "retail",
        },
      },
      swiperOptions: {
        loop: true,
        slidesPerView: 2.5,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: false,
        },
      },
    };
  },
};
</script>
<style scoped lang="scss">
@use "@/assets/css/resources.scss" as *;
#business {
  padding: 40px 0;
}

.biz-container {
  width: 100%;
  display: flex;
}

.swiper-container {
  padding-bottom: 20px;
}

.swiper-slide {
  height: 100%;
  .biz-slide-container {
    box-shadow: rgba(black, 0.4) 0 4px 4px 0px;
    margin: 0 20px;
    &:hover{
      .biz-slide-img {
      img {
        width: 110%;
        height: 110%;
      }
    }
    }
    .biz-slide-img {
      width: 100%;
      height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      position: relative;
      img {
        position: absolute;
        width: 100%;
        height: 100%;
        transition: 0.2s all ease;
      }
    }
    .biz-slide-text {
      height: 200px;
      width: 100%;
      padding: 30px 20px;
      .biz-slide-title {
        border-left: 2px solid $ene-green;
        padding-left: 14px;
        margin-bottom: 20px;
        h3 {
          font-size: 24px;
          line-height: 28px;
          color: $text-black;
        }
      }
      p {
        font-size: 18px;
        line-height: 1.3em;
        letter-spacing: 0.08em;
      }
    }
  }
}
</style>
