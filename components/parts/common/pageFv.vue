<template>
  <div id="fv">
    <div class="page-fv-container">
      <img :src="require('~/assets/img/' + pageInfo.src)" />
      <div class="page-fv-text">
        <h2 class="page-title">{{ pageInfo.pageName }}</h2>
        <p class="page-title-en">{{ pageInfo.pageNameEn }}</p>
        <ul class="page-content-list-contaienr">
          <li v-for="content in pageInfo.contents" :key="content.id">
            <a href="">{{ content["contentName"] }}</a>
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
  background: linear-gradient(to right, rgba(black, 0.6), transparent);
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
      object-fit: cover;
    }
    .page-fv-text {
      padding-left: 12vw;
      .page-title {
        font-size: 32px;
        line-height: 1.3;
        color: white;
      }
      .page-title-en {
        font-size: 20px;
        line-height: 1.2;
        font-weight: bold;
        color: $ene-green;
      }
      .page-content-list-contaienr {
        margin-top: 10px;
        display: flex;
        li {
          padding: 0 10px;
          border-right: 1px solid white;
          border-collapse: collapse;
          a{
            color: white;
            font-size: 16px;
            line-height: 1.2;
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
