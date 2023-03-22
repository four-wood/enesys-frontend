<template>
  <section id="setsubi">
    <PartsCommonBusinessHeading :contentName="'setsubi'" />
    <div class="setsubi-container">
      <img class="bg-img" src="~/assets/img/aircon.jpg" alt="" />
      <div class="setsubi-flex">
        <div class="setsubi-description">
          <h3>設備のプロによるソリューションを展開</h3>
          <p>
            空調工事、電気工事、設計事務所など建物に関わる計12社のグループ会社を持つヤブシタグループの連携により、お客様に最適な設備ソリューションをご提案致します。
          </p>
        </div>
        <div class="setsubi-introduction">
          <swiper
            :options="swiperThumbs2"
            ref="swiperThumbs2"
            class="swiperThumbs2"
          >
            <swiper-slide
              class="group-slide-container"
              v-for="content in contents"
              :key="content.id"
            >
              <img :src="require('~/assets/img/' + content.img)" />
              <div class="text-container">
                <h4>{{ content.name }}</h4>
                <div v-for="supplement in content.desc" :key="supplement.id">
                  <span class="title" v-if="supplement.title !== 'undefined'">{{
                    supplement.title
                  }}</span>
                  <p>{{ supplement.sup }}</p>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import pageMaster from "@/service/pageMaster";
export default {
  data() {
    return {
      contents: pageMaster.getContents("setsubi").goods,
      swiperThumbs2: {
        loop: true,
        autoplay: {
          delay: 4000,
        },
        speed: 1000,
        slidesPerView: 1.5,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        slideToClickedSlide: true,
      },
      swiperTop2: {
        loop: true,
        effect: "fade",
        allowTouchMove: false,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/css/resources.scss" as *;
#setsubi {
  margin: 120px 0;
  .setsubi-container {
    width: 100%;
    position: relative;
    background: linear-gradient(
      rgba(white, 1),
      rgba(white, 0.9),
      rgba(white, 0.7)
    );
    .bg-img {
      filter: grayscale(100%);
      z-index: -1;
      position: absolute;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
    .swiper-container {
      height: 100%;
      img {
        box-shadow: rgba(black, 0.3) 4px 4px 4px 0px;
      }
    }

    .setsubi-flex {
      display: flex;
      height: 100%;
      width: 100%;
      .setsubi-description {
        width: 50%;
        height: 100%;
        padding: 10% 6% 0;
        h3 {
          font-size: 24px;
          color: $ene-green;
          margin-bottom: 16px;
        }
        p {
          font-size: 18px;
        }
      }
      .setsubi-introduction {
        width: 50%;
        height: 100%;
        .swiper-slide {
          padding: 20px;
          img {
            height: 50%;
            width: 100%;
            object-fit: cover;
          }
          .text-container {
            height: 50%;
            padding: 20px;
            h4 {
              font-size: 24px;
              margin-bottom: 20px;
              border-left: 4px solid $ene-green;
              padding-left: 10px;
            }
            .title {
              font-size: 16px;
              font-weight: bold;
              line-height: 20px;
            }
            p {
              font-size: 15px;
              margin-bottom: 16px;
            }
          }
        }
      }
    }
  }
}
</style>
