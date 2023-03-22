<template>
  <div class="business-section-heading">
    <div class="business-section-heading-bg">
      <div class="business-title-container">
        <p>{{ content.num }}</p>
        <h3>{{ content.contentName }}</h3>
      </div>
    </div>
    <img :src="require('~/assets/img/' + content.contentImg)" alt="" />
  </div>
</template>
<script>
import pageMaster from "~/service/pageMaster";
export default {
  data() {
    return {
      content: pageMaster.getContents(this.contentName),
    };
  },
  props: {
    contentName: {
      type: String,
      default: "",
    },
  },
};
</script>
<style scoped lang="scss">
@use "@/assets/css/resources.scss" as *;
.business-section-heading {
  height: 400px;
  width: 88%;
  margin-left: auto;
  position: relative;
  margin-bottom: 100px;
  .business-section-heading-bg {
    z-index: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(black, 0.6);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 100px;
    .business-title-container {
      p {
        color: $ene-green;
        font-size: 48px;
        margin-bottom: 20px;
      }
      h3 {
        color: white;
        font-weight: normal;
        font-size: 40px;
      }
    }
  }
  img {
    z-index: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%);
  }
}
</style>
