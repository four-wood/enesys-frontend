<template>
  <div id="fv">
    <div class="page-fv-container">
      <img :src="require('~/assets/img/' + pageInfo.src)" />
      <svg
        class="page-fv-rect"
        viewBox="-50 -15 57.848872 38.755343"
        version="1.1"
        id="svg5"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:svg="http://www.w3.org/2000/svg"
      >
        <defs id="defs2" />
        <g id="layer1" transform="translate(-170.21907,-135.36698)">
          <path
            style="fill: #00ff14; fill-opacity: 0.4; stroke: none"
            d="m 120.21907,159.12232 h 57.84887 v -16.67181 z"
            id="path6731"
          />
          <path
            style="fill: #00a7ff; fill-opacity: 0.4; stroke: none"
            d="m 157.53119,159.12232 h 20.53675 v -38.75534 h -10.20409 z"
            id="path6733"
          />
        </g>
      </svg>
      <div class="page-fv-text">
        <p class="page-title-en">{{ pageInfo.pageNameEn }}</p>
        <h2 class="page-title">{{ pageInfo.pageName }}</h2>
        <ul class="page-content-list-contaienr">
          <li v-for="content in pageInfo.contents" :key="content.id">
            <nuxt-link :to="'/' + pageInfo.link + '#' + content['contentLink']">{{ content["contentName"] }}</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import pageMaster from "~/service/pageMaster";
export default {
  props: {
    page: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      pageInfo: pageMaster.getPage(this.page),
    };
  },
};
</script>
<style lang="scss" scoped>
@use "@/assets/css/resources.scss" as *;
#fv {
  height: 30vw;
  background: linear-gradient(to right, rgba(black, 0.8), transparent);
  @include sp{
    height: 45vw;
  }
  .page-fv-container {
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    img {
      z-index: -1;
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .page-fv-rect {
      position: absolute;
      height: 100%;
      top: 0;
      right: 0;
    }
    .page-fv-text {
      padding-left: 12vw;
      z-index: 2;
      @include sp{
        padding-left: 8vw;
      }
      .page-title {
        font-size: 32px;
        line-height: 1.3;
        color: white;
        @include sp{
          font-size: 24px;
        }
      }
      .page-title-en {
        font-size: 20px;
        line-height: 1.2;
        font-weight: bold;
        color: $ene-green;
        margin-bottom: 10px;
        @include sp{
          font-size: 16px;
        }
      }
      .page-content-list-contaienr {
        margin-top: 20px;
        display: flex;
        @include sp{
          display: none;
        }
        li {
          padding: 0 10px;
          border-right: 1px solid white;
          border-collapse: collapse;
          a {
            color: white;
            font-size: 16px;
            line-height: 1.2;
          }
          &:first-of-type{
            padding-left: 0;
          }
          &:last-of-type {
            border: none;
          }
        }
      }
    }
  }
}
</style>
