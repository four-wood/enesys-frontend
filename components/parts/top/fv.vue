<template>
  <section id="fv">
    <div class="fv-bg">
      <div class="swiper-container">
        <div class="fv-cover"></div>
        <div class="swiper-wrapper">
          <div v-for="slide in slides" :key="slide.id" class="swiper-slide">
            <img
              :src="'~/assets/img/' + slide.url"
            />
          </div>
        </div>
      </div>
      <div class="fv-enesys">
        <img src="<?php echo get_template_directory_uri()?>/img/ENESYS.svg" />
      </div>
      <div class="swiper-container-text">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="<?php echo home_url('/business'); ?>#solar">
              <p class="link-text">太陽光発電ソリューション事業</p>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="<?php echo home_url('/business'); ?>#solution">
              <p class="link-text">設備ソリューション事業</p>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="<?php echo home_url('/business'); ?>#retail">
              <p class="link-text">電力販売事業</p>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="<?php echo home_url('/business'); ?>#system">
              <p class="link-text">電力見える化事業</p>
            </a>
          </div>
        </div>
        <a href="<?php echo home_url('/business'); ?>#solar" id="link-to-biz">
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
              <img
                src="<?php echo get_template_directory_uri()?>/img/denki_pc.svg"
                width="107"
                height="56"
              />
            </div>
            <img
              class="honki"
              src="<?php echo get_template_directory_uri()?>/img/honki_pc.svg"
              width="195"
              height="39"
            />
          </div>
          <div class="text">
            <img
              class="goteian"
              src="<?php echo get_template_directory_uri()?>/img/fv-catch_text_pc.svg"
              width="686"
              height="25"
            />
          </div>
        </div>
        <div class="sp">
          <div class="title">
            <div class="den-hon">
              <img
                src="<?php echo get_template_directory_uri()?>/img/denki.svg"
              />
              <img
                src="<?php echo get_template_directory_uri()?>/img/denki_border.svg"
              />
            </div>
            <img
              class="honki"
              src="<?php echo get_template_directory_uri()?>/img/honki.svg"
            />
          </div>
          <div class="text">
            <img
              class="goteian"
              src="<?php echo get_template_directory_uri()?>/img/fv-catch_text.svg"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
    data() {
        return{
            slides:{
                sliide1:{
                    url:'top_fv_1.jpg'
                },
                sliide1:{
                    url:'top_fv_2.jpg'
                },
                sliide1:{
                    url:'top_fv_3.jpg'
                },
                sliide1:{
                    url:'top_fv_4.jpg'
                },
            }
        }
        
    },
}
</script>
