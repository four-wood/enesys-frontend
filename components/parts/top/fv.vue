<template>
  <section id="fv">
    <div class="fv-bg">
      <div class="swiper-container">
        <div class="fv-cover"></div>
        <div class="swiper-wrapper">
          <div v-for="slide in slides" :key="slide.id" class="swiper-slide">
            <img :src="require('~/assets/img/' + slide.srcUrl)" />
          </div>
        </div>
      </div>
      <div class="fv-enesys">
        <img src="~/assets/img/ENESYS.svg" />
      </div>
      <div class="swiper-container-text">
        <div class="swiper-wrapper">
          <div v-for="slide in slides" :key="slide.id" class="swiper-slide">
            <nuxtlink :to="'/business#' + slide.query">
              <p class="link-text">{{ slide.name }}</p>
            </nuxtlink>
          </div>
        </div>
        <nuxtlink :to="'/business#' + nowSlideNum" id="link-to-biz">
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 10L4.34375 9.32812L8.20312 5.46875H0V4.53125H8.20312L4.34375 0.671875L5 0L10 5L5 10Z"
              fill="#F2F2F2"
            />
          </svg>
        </nuxtlink>
      </div>
      <div class="swiper-pagination-wrapper">
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="fv-catch">
      <div class="fv-catch-text">
        <div class="pc">
          <div class="title">
            <div class="den-hon">
              <img src="~/assets/img/denki_pc.svg" width="107" height="56" />
            </div>
            <img
              class="honki"
              src="~/assets/img/honki_pc.svg"
              width="195"
              height="39"
            />
          </div>
          <div class="text">
            <img
              class="goteian"
              src="~/assets/img/fv-catch_text_pc.svg"
              width="686"
              height="25"
            />
          </div>
        </div>
        <div class="sp">
          <div class="title">
            <div class="den-hon">
              <img src="~/assets/img/denki.svg" />
              <img src="~/assets/img/denki_border.svg" />
            </div>
            <img class="honki" src="~/assets/img/honki.svg" />
          </div>
          <div class="text">
            <img class="goteian" src="~/assets/img/fv-catch_text.svg" />
          </div>
        </div>
      </div>
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
          query: "solar",
        },
        solution: {
          srcUrl: "top_fv_2.jpg",
          name: "設備ソリューション事業",
          query: "solution",
        },
        retail: {
          srcUrl: "top_fv_3.jpg",
          name: "電力販売事業",
          query: "retail",
        },
        system: {
          srcUrl: "top_fv_4.jpg",
          name: "電力見える化事業",
          query: "system",
        },
      },
      swiperOptions: {
        loop: true,
        effetc: 'fade',
        speed: 3000,
        slidesPerView: "auto",
        onSlideChangeEnd() {
          console.log("slide changed!");
          console.log("now slide number is " + this.NowSlideNum);
        },
      },
    };
  },
};
</script>
