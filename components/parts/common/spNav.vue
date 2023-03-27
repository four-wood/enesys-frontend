<template>
  <div class="header-nav-container sp">
    <div
      class="sp-modal"
      :class="{ 'sp-modal-open': open }"
      @click="closeNav()"
    >
      <div class="sp-modal-container">
        <ul>
          <li>
            <nuxt-link to="/">TOP</nuxt-link>
          </li>
          <li v-for="page in pageInfo" :key="page.id">
            <nuxt-link v-if="page.header" :to="page.link">{{
              page.pageName
            }}</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="sp-nav-btn-container" @click="updateNavBtn()">
      <svg
        id="sp-nav-btn"
        width="100%"
        height="100%"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="1"
          y1="4"
          x2="19"
          y2="4"
          stroke="black"
          stroke-linecap="round"
          :class="{ 'first-line-opend': open }"
        />
        <line
          x1="1"
          y1="10"
          x2="19"
          y2="10"
          stroke="black"
          stroke-linecap="round"
          :class="{ 'second-line-opend': open }"
        />
        <line
          x1="1"
          y1="16"
          x2="19"
          y2="16"
          stroke="black"
          stroke-linecap="round"
          :class="{ 'last-line-opend': open }"
        />
      </svg>
    </div>
  </div>
</template>
<script>
import pageMaster from "~/service/pageMaster";
export default {
  data() {
    return {
      open: false,
      pageInfo: pageMaster.getAllPage(),
    };
  },
  methods: {
    updateNavBtn() {
      this.open = !this.open;
    },
    closeNav() {
      this.open = false;
    },
  },
};
</script>
<style scoped lang="scss">
@use "@/assets/css/resources.scss" as *;
header {
  .sp-modal {
    width: 100vw;
    height: 100vh;
    position: absolute;
    right: 0;
    top: 0;
    background-color: rgba(black, 0.9);
    transform: translateX(100%);
    transition: 0.3s all ease;
    .sp-modal-container {
      padding: 30px;
      li {
        margin: 40px 0;
        a {
          color: white;
          font-size: 20px;
          font-weight: bold;
        }
      }
    }
  }
  .sp-modal-open {
    transform: translateX(0%);
  }
  .sp-nav-btn-container {
    cursor: pointer;
    width: 24px;
    height: 24px;
    margin-right: 20px;
    line {
      transition: transform 0.3s;
      transform-origin: center;
    }
    .first-line-opend {
      transform: translate(-4px, -4.35px) rotate(-225deg);
    }
    .second-line-opend {
      opacity: 0;
    }
    .last-line-opend {
      transform: translate(-4px, 4.25px) rotate(225deg);
    }
  }
}
</style>
