<template>
  <header>
    <div class="header-container">
      <div id="nav-bar">
        <div id="top-logo">
          <nuxt-link to="/">
            <img src="~/assets//img/logo.png" alt="ヤブシタエネシス" />
          </nuxt-link>
          <img src="~/assets/img/pot.png" class="pc" alt="Powerd by tepco" />
        </div>
        <ul id="main-nav" class="pc">
          <li v-for="page in pageInfo" :key="page.id">
            <nuxt-link v-if="page.header" :to="page.link">{{
              page.pageName
            }}</nuxt-link>
            <div
              v-if="page.contents != null"
              class="second-nav"
              :style="{
                background:
                  ' linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(' +
                  require('~/assets/img/' + page.src) +
                  ') center center',
              }"
            >
              <nuxt-link
                :to="'/' + page.link + '/#' + content.contentLink"
                v-for="content in page.contents"
                :key="content.id"
                >{{ content.contentName }}</nuxt-link
              >
            </div>
          </li>
          <li class="enesystem-btn">
            <a href="http://ecomame.biz/yabushita/">えねシステム ログイン</a>
          </li>
        </ul>
        <PartsCommonSpNav />
      </div>
    </div>
  </header>
</template>
<script>
import pageMaster from "~/service/pageMaster";
export default {
  data() {
    return {
      pageInfo: pageMaster.getAllPage(),
      open: false,
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
  .header-container {
    position: relative;
    height: 64px;
    z-index: 100;
    #nav-bar {
      height: inherit;
      position: fixed;
      width: 100%;
      background-color: rgba(white, 0.8);
      backdrop-filter: blur(8px);
      box-shadow: rgba(black, 0.4) 0px 4px 4px 0;
      top: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .nav-btn {
      margin-right: 40px;
    }

    .sp-nav {
      background-color: #191a1a;
      position: fixed;
      top: 0;
      right: 0;
      width: 100vw;
      height: 100vh;
      opacity: 0;
      display: none;
      transform: translateX(100%);
      transition: transform 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
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
  #top-logo a img:first-child {
    width: 240px;
    margin-right: 20px;
    margin-left: 4vw;
    transition: 0.3s ease-out;
    @include tablet {
      width: 200px;
    }
    @include sp {
      width: 180px;
    }
  }

  #top-logo img:last-child {
    width: 160px;
  }

  #main-nav {
    height: 100%;
    display: flex;
    justify-content: space-between;

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.3s ease-out;
      cursor: pointer;

      a {
        margin: 0 20px;
        font-size: 16px;
        letter-spacing: 0.5px;
        color: #000;
        font-weight: bold;
        text-align: center;
        transition: 0.2s ease-out;
      }
      .second-nav {
        cursor: initial;
        visibility: hidden;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 10%;
        opacity: 0;
        position: absolute;
        z-index: -1;
        top: 100%;
        left: 0;
        height: 0;
        width: 100vw;
        background: white;
        transition: 0.2s all ease;
        a {
          color: white;
          margin: 0 20px;
        }
      }

      &:hover {
        background-color: $ene-green;
        .second-nav {
          visibility: visible;
          opacity: 1;
          height: 100px;
        }
        & > a {
          color: white;
        }
      }
    }
    .enesystem-btn {
      background-color: rgba(white, 0.8);
      border: 2px solid $ene-green;
      cursor: pointer;
      a {
        color: $ene-green;
      }
      &:hover {
        background-color: $ene-green;

        .second-nav {
          opacity: 1;
          height: 100px;
        }
        a {
          color: white;
        }
      }
    }
  }

  .nav-hover {
    height: 120px;
    position: fixed;
    width: 100%;
    top: 106px;
    color: #000;
    display: none;
  }

  .hover-nav-wrapper ul {
    display: flex;
    justify-content: flex-end;
    position: absolute;
    right: 4vw;
    top: 40px;
    height: 34px;
    li {
      font-weight: bold;
      font-size: 14px;
      padding: 10px 2px;
      margin: 0 2vw;
      transition: 0.2s ease;
      border-bottom: 1px solid rgba(255, 255, 255, 0);
      i {
        margin-left: 10px;
      }
      &:hover {
        border-bottom: 1px solid rgba(255, 255, 255, 1);
      }
    }
  }

  .over-lay {
    position: fixed;
    top: 106px;
    width: 100%;
    height: 120px;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 10;
    display: none;
  }

  #about-nav-hover {
    background: url("@/assets/img/about-hover.jpg") no-repeat center center;
  }

  #biz-nav-hover {
    background: url("@/assets/img/business-hover.jpg") no-repeat center center;
  }

  .header-line {
    width: 40px;
    border-bottom: 2px solid #00be3a;
    margin: 60px auto 20px;
  }
}
</style>
