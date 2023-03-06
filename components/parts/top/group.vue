<template>
  <section id="group">
    <div class="group-title-container">
      <div class="group-info-container swiper-container">
        <swiper :options="swiperTop" ref="swiperTop" class="swiperTop">
          <swiper-slide
            class="group-slide-container"
            v-for="company in companies"
            :key="company.id"
          >
            <img :src="company.img" alt="" data-not-lazy />
            <div class="group-info-text-container">
              <div v-for="info in company.infos" :key="info.id">
                <p class="office-name">{{ info.officeName }}</p>
                <address v-for="ad in info.address" :key="ad.id">
                  {{ ad }}
                </address>
              </div>
              <div class="group-website-link">
                <div class="website-link-wrapper">
                  <div class="website-link-cover"></div>
                  <a
                    :href="company.webSite"
                    target="_blank"
                    rel="noopener noreferrer"
                    >WEBSITE</a
                  >
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <div class="swiper-thumb-container-flex">
          <span class="swiper-button-prev">
            <PartsCommonCircleChevron :direction="'left'" />
          </span>
          <swiper
            :options="swiperThumbs"
            ref="swiperThumbs"
            class="swiperThumbs"
          >
            <div class="swiper-pagination" slot="pagination"></div>
            <swiper-slide v-for="company in companies" :key="company.id">
              <img :src="company.imgMin" data-not-lazy />
            </swiper-slide>
          </swiper>
          <span class="swiper-button-next"
            ><PartsCommonCircleChevron :direction="'right'" /></span>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      companies: [
        {
          img: require("~/assets/img/slider_yabushita.jpg"),
          imgMin: require("~/assets/img/slider_yabushita_min.jpg"),
          webSite: "https://www.yabushita-kikai.co.jp/",
          infos: {
            honsya: {
              officeName: "札幌本社",
              address: [
                "〒060-0001 札幌市中央区北1条西9丁目3-1 南大通ビルN1 3階",
                "TEL:011-205-3280",
                "FAX:011-205-3285",
              ],
            },
            tokyo: {
              officeName: "東京営業所",
              address: [
                "〒108-0014 東京都港区芝5丁目20-9 東化ビル2階",
                "TEL:03-6453-6353",
                "FAX:03-6459-4660",
              ],
            },
          },
        },
        {
          img: require("~/assets/img/slider_holdings.jpg"),
          imgMin: require("~/assets/img/slider_holdings_min.jpg"),
          webSite: "https://www.yabushita-hd.co.jp/",
          infos: {
            honsya: {
              officeName: "札幌本社",
              address: [
                "〒060-0001 札幌市中央区北1条西9丁目3-1 南大通ビルN1 3階",
                "TEL:011-205-3280",
                "FAX:011-205-3285",
              ],
            },
          },
        },
        {
          img: require("~/assets/img/slider_enesys.jpg"),
          imgMin: require("~/assets/img/slider_enesys_min.jpg"),
          webSite: "https://yabushitaenesys.co.jp/",
          infos: {
            honsya: {
              officeName: "札幌本社",
              address: [
                "〒060-0001 札幌市中央区北1条西9丁目3-1 南大通ビルN1 3階",
                "TEL:011-205-3284",
                "FAX:011-205-3285",
              ],
            },
            tokyo: {
              officeName: "東京営業所",
              address: [
                "〒108-0014 東京都港区芝5丁目20-9 東化ビル2階",
                "TEL:03-6809-6606",
                "FAX:03-6459-4660",
              ],
            },
            aomori: {
              officeName: "青森営業所",
              address: [
                "〒030-0113 青森県青森市第二問屋町3丁目3-18",
                "TEL:017-718-7611",
                "FAX:017-7635346",
              ],
            },
          },
        },
        {
          img: require("~/assets/img/slider_sogo.jpg"),
          imgMin: require("~/assets/img/slider_sogo_min.jpg"),
          webSite: "	http://www.y-sogo-sekkei.com/",
          infos: {
            honsya: {
              officeName: "本社",
              address: [
                "〒060-0006 北海道札幌市中央区北6条西23丁目1-12",
                "TEL:011-624-0029",
                "FAX:011-624-9912",
              ],
            },
          },
        },
        {
          img: require("~/assets/img/slider_seisakusyo.jpg"),
          imgMin: require("~/assets/img/slider_seisakusyo_min.jpg"),
          webSite: "http://www.y-seisakusho.co.jp/",
          infos: {
            honsya: {
              officeName: "札幌工場",
              address: [
                "〒069-0804 北海道江別市野幌美幸町30-2",
                "TEL:011-391-8488",
                "FAX:011-391-8477",
              ],
            },
          },
        },
        {
          img: require("~/assets/img/slider_reinetsu.jpg"),
          imgMin: require("~/assets/img/slider_reinetsu_min.jpg"),
          webSite: "http://yabushita-reisetsu.co.jp/",
          infos: {
            honsya: {
              officeName: "本社",
              address: [
                "〒060-0006 北海道札幌市中央区北6条西23丁目1-12",
                "TEL:011-624-0025",
                "FAX:011-624-0024",
              ],
            },
            tokyo: {
              officeName: "函館営業所",
              address: [
                "〒040-0065 北海道函館市豊川町20-5",
                "TEL:0138-26-3851",
                "FAX:0138-27-6870",
              ],
            },
          },
        },
        {
          img: require("~/assets/img/slider_eng.jpg"),
          imgMin: require("~/assets/img/slider_eng_min.jpg"),
          webSite: "https://yabushita-e.co.jp/",
          infos: {
            honsya: {
              officeName: "本社",
              address: [
                "〒030-0113 青森県青森市第二問屋町3丁目3-18",
                "TEL:017-763-5345",
                "FAX:017-763-5436",
              ],
            },
          },
        },
        {
          img: require("~/assets/img/slider_kanko.jpg"),
          imgMin: require("~/assets/img/slider_kanko_min.jpg"),
          webSite: "http://www.kankou-den.co.jp/",
          infos: {
            honsya: {
              officeName: "本社",
              address: [
                "〒060-0006 北海道札幌市中央区北6条西23丁目1-12",
                "TEL:011-662-7700",
                "FAX:011-664-0963",
              ],
            },
          },
        },
        {
          img: require("~/assets/img/slider_token.jpg"),
          imgMin: require("~/assets/img/slider_token_min.jpg"),
          webSite: "/",
          infos: {
            honsya: {
              officeName: "本社",
              address: [
                "〒003-0813 北海道札幌市白石区菊水上町3条3丁目37-15",
                "TEL:011-799-1866",
                "FAX:011-799-1867",
              ],
            },
            monbetsu: {
              officeName: "紋別営業所",
              address: [
                "〒094-0015 北海道紋別市花園町1丁目4-13",
                "TEL:0158-28-8270",
                "FAX:0158-28-8271",
              ],
            },
          },
        },
        {
          img: require("~/assets/img/slider_riy.jpg"),
          imgMin: require("~/assets/img/slider_riy_min.jpg"),
          webSite: "http://riy.co.jp/",
          infos: {
            honsya: {
              officeName: "本社",
              address: [
                "〒060-0001 札幌市中央区北1条西9丁目3-1 南大通ビルN1 3階",
                "TEL:011-205-3280",
                "FAX:011-205-3285",
              ],
            },
          },
        },
        {
          img: require("~/assets/img/slider_fourwood.jpg"),
          imgMin: require("~/assets/img/slider_fourwood_min.jpg"),
          webSite: "https://four-wood.co.jp/",
          infos: {
            honsya: {
              officeName: "本社",
              address: [
                "〒108-0014 東京都港区芝5丁目20-9 東化ビル2階",
                "TEL:03-6453-6353",
                "FAX:03-6459-4660",
              ],
            },
          },
        },
        {
          img: require("~/assets/img/slider_yutec.jpg"),
          imgMin: require("~/assets/img/slider_yutec_min.jpg"),
          webSite: "https://www.yuu-tec.co.jp/",
          infos: {
            honsya: {
              officeName: "本社",
              address: [
                "〒596-0845 大阪府岸和田市阿間河滝町1839-1",
                "TEL:072-446-7755",
                "FAX:072-446-7772",
              ],
            },
          },
        },
        {
          img: require("~/assets/img/slider_myanmar.jpg"),
          imgMin: require("~/assets/img/slider_myanmar_min.jpg"),
          webSite: "https://www.yabushita-hd.co.jp/",
          infos: {
            honsya: {
              officeName: "本社",
              address: [
                "No.14, 5th Floor, Pan Chan Street, San Chaung Township, Yangon, Myanmar.",
              ],
            },
          },
        },
      ],
      swiperTop: {
        loop: true,
        loopedSlides: 8,
        effect: "fade",
        autoplay: {
          delay: 2500,
        },
      },
      swiperThumbs: {
        loop: true,
        slidesPerView: 3,
        loopedSlides: 8,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        slideToClickedSlide: true,
        breakpoints: {
          768: {
            slidesPerView: 8,
          },
        },
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper;
      const swiperThumbs = this.$refs.swiperThumbs.$swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  },
};
</script>

<style scoped lang="scss">
@use "@/assets/css/resources.scss" as *;
#group {
  max-width: 1200px;
  margin: 100px auto;
  @include pc-l {
    margin: 60px auto 20px;
    padding: 0 4%;
  }
  .group-title-container {
    margin-bottom: 20px;
    .group-title-en {
      color: gray;
      font-weight: 700;
      font-size: 64px;
      line-height: 80px;
      @include sp {
        font-size: 40px;
        line-height: 48px;
      }
    }
    .group-title {
      color: blue;
      font-size: 20px;
      line-height: 24px;
      font-weight: 700;
      margin-bottom: 48px;
      @include sp {
        font-size: 20px;
        line-height: 28px;
      }
    }
  }
  .group-info-container {
    width: 90%;
    .group-slide-container {
      display: flex;
      width: 100%;
      @include pc-l {
        flex-direction: column;
      }
      img {
        width: 60%;
        @include pc-l {
          width: 100%;
        }
      }
      .group-info-text-container {
        margin-left: 20px;
        width: 40%;
        background-color: white;
        @include pc-l {
          margin: 0;
          width: 100%;
          height: 360px;
        }
        .office-name {
          font-size: 18px;
          font-weight: 700;
          margin: 10px 0;
        }
        address {
          font-size: 14px;
          display: inline;
          margin-right: 4px;
          &:first-of-type {
            display: block;
          }
        }
        .group-website-link {
          text-align: right;
          .website-link-wrapper {
            position: relative;
            float: right;
            overflow: hidden;
            &:hover {
              .website-link-cover {
                left: 150%;
              }
              a {
                color: gray;
              }
            }
            .website-link-cover {
              position: absolute;
              height: 60px;
              width: 160px;
              color: blue;
              left: -150%;
              transform: skew(15deg);
              opacity: 0.9;
              transition: 0.6s ease;
            }
          }
          a {
            font-size: 28px;
            letter-spacing: 0.04em;
            text-decoration: underline;
            transition-duration: 0.3s;
          }
        }
      }
    }
    .swiper-thumb-container-flex {
      display: flex;
      align-items: center;
      span {
        width: 20px;
        height: 20px;
        top: -30px;
        left: 0;
        right: 0;
        position: relative;
        margin: 8px;

        &::after {
          display: none;
        }
      }
      .swiperThumbs {
        margin: 10px 0 50px;
        width: calc(100% - 56px);
        .swiper-pagination {
          position: static;
        }
        .swiper-slide {
          img {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
