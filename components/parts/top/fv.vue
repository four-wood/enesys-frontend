<template>
  <div id="fv">
    <div class="fv-bg">
      <div class="swiper-container">
        <div class="fv-cover"></div>
        <swiper :options="swiperOptions">
          <swiper-slide v-for="slide in slides" :key="slide.id">
            <img :src="require('~/assets/img/' + slide.srcUrl)" />
          </swiper-slide>
        </swiper>
      </div>
      <div class="fv-enesys">
        <img src="~/assets/img/ENESYS.svg" />
      </div>
      <div class="swiper-container-text">
        <swiper :options="swiperOptions_1">
          <swiper-slide v-for="slide in slides" :key="slide.id">
            <a :href="'/business#' + slide.query">
              <p class="link-text">{{ slide.name }}</p>
            </a>
          </swiper-slide>
        </swiper>
        <a :href="'/business#'" id="link-to-biz">
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
        </a>
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
  </div>
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
        effect: "fade",
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        speed: 2000,
        allowTouchMove: false,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: false,
        },
      },
      swiperOptions_1: {
        loop: true,
        effect: "fade",
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        speed: 2000,
        allowTouchMove: false,
      },
    };
  },
};
</script>
<style scoped>
#fv {
  margin-left: 6.25%;
  height: 100vh;
  max-height: 700px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
}

.fv-bg {
  position: absolute;
  width: 100%;
  height: 100%;
}

.fv-cover {
  z-index: 2;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    270deg,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0.6) 100%
  );
}
.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.swiper-container-text {
  z-index: 2;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  bottom: 45px;
  left: 50px;
  height: 35px;
  width: 320px;
}

.swiper-container-text .swiper-wrapper {
  width: 240px;
  height: 100%;
}

.swiper-container-text .swiper-slide {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
@keyframes fade-in-link-to-biz {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
#link-to-biz {
  opacity: 0;
  animation-name: fade-in-link-to-biz;
  animation-duration: 1s;
  animation-delay: 1.6s;
  animation-fill-mode: forwards;
  z-index: 1;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid white;
  transition-duration: 0.3s;
}

.swiper-container-text p {
  font-family: "Hiragino Gothic", "ヒラギノ角ゴ ProN W3", "Yu Gothic";
  font-weight: 800;
  letter-spacing: 0.1em;
  opacity: 0;
  font-size: 16px;
  line-height: 32px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  color: white;
  transition: color 0.2s;
}

.swiper-container-text p:hover {
  cursor: pointer;
  color: #00be3a;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.swiper-container-text .swiper-slide-active p {
  animation-name: fade-in;
  animation-duration: 1s;
  animation-fill-mode: both;
}

.swiper-pagination {
  text-align: left !important;
  left: 50px !important;
  bottom: 25px !important;
}

@keyframes pagenation-fade-in {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

.swiper-pagination-bullet {
  animation-name: pagenation-fade-in;
  animation-duration: 1.6s;
  animation-fill-mode: forwards;
  border-radius: inherit !important;
  margin: 0 !important;
  margin-right: 8px !important;
  width: 40px !important;
  height: 2px !important;
  background-color: #f2f2f2 !important;
  transition: background-color 1s ease;
  opacity: 1 !important;
}
.swiper-pagination-bullet:nth-of-type(2) {
  animation-delay: 0.1s;
}
.swiper-pagination-bullet:nth-of-type(3) {
  animation-delay: 0.2s;
}
.swiper-pagination-bullet:nth-of-type(4) {
  animation-delay: 0.3s;
}
.swiper-pagination-bullet-active {
  background-color: #00c03a !important;
}

.fv-catch {
  z-index: 2;
  margin-left: 50px;
}
.fv-enesys {
  z-index: 2;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 67vw;
  height: 15.34vw;
  max-width: 959px;
  max-height: 220px;
}
@keyframes slide-in-enesys {
  0% {
    transform: translateX(10%);
    opacity: 0;
  }
  50% {
    opacity: 0.1;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.fv-enesys img {
  opacity: 0;
  animation-name: slide-in-enesys;
  animation-duration: 1.8s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
  width: 100%;
  height: 100%;
}
.fv-catch-text .pc {
  display: block;
}
.fv-catch-text .sp {
  display: none;
}
.fv-catch-text .sp .title {
  height: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.fv-catch-text .pc .title {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}
.fv-catch-text .pc .honki {
  margin-top: 8px;
  margin-left: 12px;
}

.fv-catch-text .sp .den-hon {
  height: 100%;
  width: 30%;
  position: relative;
}
.fv-catch-text .sp .den-hon img {
  width: 100%;
  position: absolute;
}
.fv-catch-text .sp .den-hon img:first-of-type {
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.8));
}
.fv-catch-text .sp .honki {
  margin-top: 3%;
  margin-left: 4%;
  width: 55%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.8));
}
.fv-catch-text .sp .goteian {
  width: 90%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.8));
}
@keyframes slide-in-from-left {
  0% {
    transform: translateX(-5%);
    opacity: 0;
  }
  50% {
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.fv-catch-text .title {
  opacity: 0;
  animation-name: slide-in-from-left;
  animation-fill-mode: forwards;
  animation-duration: 1.2s;
}
.fv-catch-text .text {
  opacity: 0;
  animation-name: slide-in-from-left;
  animation-duration: 1.2s;
  animation-fill-mode: forwards;
  animation-delay: 0.4s;
}
#num {
  width: 100%;
  position: relative;
}

#num:after {
  content: "";
  display: block;
  padding-top: 400px;
}

.num-container {
  position: absolute;
  width: 64vw;
  left: 18vw;
  top: -16vh;
  background-color: #fff;
  box-shadow: 2px 2px 5px #000;
  text-align: center;
  font-weight: bold;
}

.num-container h2 {
  font-size: 26px;
  margin: 40px 0 20px;
}

.jisseki-container {
  display: flex;
  justify-content: space-between;
  width: 40%;
  margin: 0 auto;
}

.jisseki-com,
.jisseki-kuchi {
  width: 50%;
}

.jisseki-com,
.jisseki-kuchi p {
  font-size: 20px;
}

.counter-jisseki,
.counter-total {
  color: #00be3a;
  font-size: 64px;
  font-family: Arial, Helvetica, "sans-serif";
  font-style: oblique;
  margin-right: 6px;
}

.counter-total {
  font-size: 30px;
  letter-spacing: -1.5px;
}

.totals {
  display: flex;
  justify-content: space-between;
  width: 72%;
  margin: 40px auto;
}

.total-container {
  width: 30%;
}

.total-container img {
  width: 50%;
}

.total-container p:first-of-type {
  margin: 14px 0;
}

#total-per {
  margin-top: -30px;
}

.per p:first-of-type {
  margin-top: 44px;
}

.timer {
  font-family: Arial;
  font-style: oblique;
  letter-spacing: -4px;
}

.percent {
  font-size: 14px;
}

.date {
  text-align: right;
  margin-right: 30px;
  margin-bottom: 20px;
}

.sottonet {
  background-color: #fff;
  text-align: center;
  position: absolute;
  bottom: 50px;
  right: 5vw;
  width: 300px;
  z-index: 12;
  padding: 20px 20px 0;
  box-shadow: 2px 2px 5px #000;
}

.sottonet p {
  font-size: 16px;
  font-weight: 800;
  margin: 0 0 10px;
}

.sottonet h2 {
  font-weight: 800;
  font-size: 20px;
  margin-bottom: -5px;
}

.cinema-scope {
  margin: 20px 0;
  padding: 0 3vw;
  position: relative;
  background-color: #000;
}

.cinema-scope:before,
.cinema-scope:after {
  content: "";
  background-color: #000;
  display: block;
  width: 100%;
  height: 20px;
}

.cinema-scope:after {
  position: relative;
  top: -1px;
}

.youtubesm a {
  display: block;
  position: relative;
}

.youtubesm a:hover {
  opacity: 0.8;
}

.youtubesm a:before {
  background: url("@/assets/img/play.svg") center center / 100px 64px no-repeat;
  content: "";
  display: block;
  width: 100%;
  height: 60px;
  margin: -32px auto 0;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  z-index: 1;
}

.sottonet .btn {
  margin-top: -10px;
  width: 100%;
  box-sizing: border-box;
}

.sottonet .btn::after {
  width: 32%;
}

@media screen and (max-width: 1600px) {
  .fv-catch h1 {
    font-size: 40px;
    line-height: 80px;
  }

  .jisseki-container {
    width: 50%;
  }

  .counter-total {
    font-size: 30px;
    letter-spacing: -1.2px;
  }
}

@media screen and (max-width: 1366px) {
  .num-container {
    width: 88vw;
    left: 6vw;
  }

  .sottonet {
    right: 1vw;
    bottom: 100px;
    width: 240px;
  }

  .sottonet h2 {
    font-size: 16px;
  }

  .sottonet p {
    font-size: 14px;
  }

  .sottonet .btn {
    padding-left: 10px;
  }

  .biz-text-container,
  .biz-text-container-odd {
    width: 44vw;
  }

  .yabu-g-container {
    width: 100vw;
    height: 160px;
  }

  .news-container {
    width: 88vw;
  }

  #yabu-g,
  #news {
    background-color: #fff;
    padding: 40px 0;
  }
}

@media screen and (max-width: 1200px) {
  .fv-left-bg {
    width: 72vw;
  }

  .reason-text p {
    line-height: 20px;
  }

  .biz-text p:last-of-type {
    margin-top: 10px;
  }
}

@media screen and (max-width: 1024px) {
  .fv-catch {
    margin-left: 18px;
  }
  #reason {
    margin: 80px 0 0;
  }

  .jisseki-container,
  .totals {
    width: 80%;
  }

  .section-header h3:last-of-type {
    font-size: 20px;
  }

  .reason-container {
    display: block;
  }

  .reason-img,
  .reason-text {
    width: 100%;
    height: auto;
  }

  .sottonet {
    position: relative;
    width: 82vw;
    right: auto;
    margin: 0 auto;
  }

  .sottonet p {
    font-size: 15px;
  }

  .sottonet h2 {
    font-size: 20px;
  }

  .sottonet .btn {
    width: 260px;
    margin-bottom: 12px;
  }

  .reason-img {
    width: 100%;
    height: 420px;
  }

  .reason-2 {
    order: 1;
  }

  .reason-text-inner {
    width: 92%;
    margin: 20px auto 0;
    padding: 0 0 20px;
  }

  .biz-container {
    width: 92%;
    display: block;
    margin-bottom: 200px;
    max-height: 36vh;
  }

  .biz-img {
    width: 90%;
    height: 100%;
  }

  .biz-text-wrapper {
    width: 90%;
    position: relative;
  }

  .biz-text-container,
  .biz-text-container-odd {
    width: 100%;
    height: auto;
    left: 16vw;
    top: -10vw;
    box-shadow: 2px 2px 3px #000;
  }

  .biz-container:nth-child(odd) {
    margin-bottom: 180px;
  }

  .biz-text-inner {
    width: 80%;
  }

  #sottonet-text {
    margin: 5vw auto;
  }

  #sottonet-text p {
    margin-bottom: 2px;
  }

  .biz-text {
    width: 100%;
    padding: 40px 0;
  }

  .biz-text h3 {
    font-size: 20px;
    letter-spacing: 0;
    margin-right: 0;
  }

  .biz-arrow {
    display: none;
  }

  .yabu-g-container {
    flex-wrap: wrap;
    justify-content: space-around;
    height: auto;
    width: 92vw;
    margin: 0 auto;
  }

  .yabu-g-container a {
    text-align: center;
  }

  .yabu-g-container img {
    width: 150px;
  }

  .news-container tr {
    height: 40px;
  }

  .news-container td {
    display: block;
    padding: 10px 0;
  }

  .news-container td:first-child {
    text-align: left;
  }

  .news-container td:last-child {
    display: none;
  }

  .news-container td p {
    display: block;
  }
}

@media screen and (max-width: 768px) {
  #fv {
    margin-top: 106px;
    height: 67vw;
    width: 100%;
    margin-left: 0;
    align-items: flex-start;
  }

  .fv-left-bg {
    width: 110vw;
    background-position: left;
  }

  .fv-right-bg {
    display: none;
  }

  .fv-catch {
    position: absolute;
    top: 20px;
    left: 16px;
    margin: 0 auto;
  }
  .fv-catch-text .sp {
    width: 60vw;
    height: 10vw;
    display: block;
  }
  .fv-catch-text .sp img {
    height: 100%;
    width: 100%;
  }
  .fv-catch-text .pc {
    display: none;
  }
  .swiper-container-text {
    bottom: 18px;
    left: 17px;
    width: 260px;
  }
  .swiper-container-text p {
    font-size: 14px;
  }
  .swiper-container-text .swiper-wrapper {
    width: 220px;
    height: 100%;
  }
  #link-to-biz {
    height: 20px;
    width: 20px;
  }
  #link-to-biz svg {
    width: 6px;
  }
  .swiper-pagination {
    left: 17px !important;
    bottom: 15px !important;
  }
  .swiper-pagination .swiper-pagination-bullet {
    width: 20px !important;
  }

  #num:after {
    display: none;
  }
  .num-container {
    width: 92vw;
    margin: 0 auto;
    box-shadow: 2px 2px 2px #000;
    position: static;
    padding: 20px 0;
    margin-top: 20px;
  }

  .sottonet {
    width: 92vw;
    top: 4vw;
    padding: 20px 30px 0;
    box-sizing: border-box;
  }

  #reason {
    margin: 120px 0 0;
  }

  .jisseki-container {
    width: 80%;
  }

  .jisseki-com,
  .jisseki-kuchi {
    display: inline-block;
  }

  .jisseki-com,
  .jisseki-kuchi p {
    font-size: 16px;
  }

  .num-container h2 {
    font-size: 22px;
    margin: 20px 0 20px;
  }

  .counter-jisseki,
  .counter-total {
    font-size: 34px;
  }

  .totals {
    display: block;
    width: 80%;
  }

  .total-container {
    width: 100%;
    margin: 20px 0;
  }

  .total-container:last-child {
    width: 65%;
    margin: 0 auto;
  }

  .total-container img {
    width: 40%;
  }

  .per p:first-of-type {
    margin-top: 44px;
  }

  .news-container td:first-child {
    margin-top: 30px;
    font-size: 13px;
    padding: 0;
  }
}
</style>
