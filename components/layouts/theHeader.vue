<template>
  <header>
    <div class="header-container">
      <div id="nav-bar">
        <div id="top-logo">
          <nuxt-link to="/"><img src="~/assets//img/logo.png" alt="ヤブシタエネシス" /></nuxt-link>
          <img src="~/assets/img/pot.png" class="pc" alt="Powerd by tepco" />
        </div>
        <ul id="main-nav" class="pc">
          <li v-for="page in pageInfo" :key="page.id">
            <nuxt-link v-if="page.header" :to="page.link">{{ page.pageName }}</nuxt-link>
            <div v-if="page.contents != null" class="second-nav" :style="{ background: ' linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(' + require('~/assets/img/' + page.src)+ ') center center' }">
              <a :href="content.link" v-for="content in page.contents" :key="content.id">{{ content.contentName }}</a>
            </div>
          </li>
          <li class="enesystem-btn">
            <a href="http://ecomame.biz/yabushita/">えねシステム ログイン</a>
          </li>
        </ul>
        <div class="sp nav-btn">
          <a class="menu-trigger">
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
      </div>
      <nav class="sp-nav">
        <div class="sp-nav-container">
          <ul>
            <li v-for="page in pageInfo" :key="page.id"><a href="page.link">{{ page.pageName }}</a></li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>
<script>
import pageMaster from "~/service/pageMaster";
export default {
  data() {
    return {
      pageInfo: pageMaster.getAllPage(),
    };
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
      background-color: rgba(white,0.8);
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

    .menu-trigger,
    .menu-trigger span {
      display: inline-block;
      transition: all 0.2s;
      box-sizing: border-box;
      cursor: pointer;
    }

    .menu-trigger {
      position: relative;
      width: 40px;
      height: 22px;
      top: 0;
    }

    .menu-trigger span {
      position: absolute;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #000;
    }

    .menu-trigger span:nth-of-type(1) {
      top: 0;
    }

    .menu-trigger span:nth-of-type(2) {
      top: 10px;
    }

    .menu-trigger span:nth-of-type(3) {
      bottom: 0;
    }

    .menu-trigger.active span:nth-of-type(1) {
      transform: translateY(10px) rotate(-45deg);
      background-color: #fff;
    }
    .menu-trigger.active span:nth-of-type(2) {
      opacity: 0;
    }
    .menu-trigger.active span:nth-of-type(3) {
      -webkit-transform: translateY(-10px) rotate(45deg);
      -ms-transform: translateY(-10px) rotate(45deg);
      transform: translateY(-10px) rotate(45deg);
      width: 100%;
      background-color: #fff;
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

    .sp-nav-container {
      margin: 12vw;
      font-weight: bold;
      text-align: center;
    }

    .sp-nav-container ul {
      text-align: left;
    }

    .sp-nav-container li {
      margin: 50px 0;
      font-size: 18px;
    }

    .sp-nav img {
      width: 260px;
      margin: 60px;
    }

    #top-logo a img:first-child {
      width: 240px;
      margin-right: 20px;
      margin-left: 4vw;
      transition: 0.3s ease-out;
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
          a{
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
          &>a {
            color: white;
          }
        }
      }
      .enesystem-btn {
        background-color: rgba(white,0.8);
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
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: end;
      -ms-flex-pack: end;
      justify-content: flex-end;
      position: absolute;
      right: 4vw;
      top: 40px;
      height: 34px;
    }

    .hover-nav-wrapper li {
      font-weight: bold;
      font-size: 14px;
      padding: 10px 2px;
      margin: 0 2vw;
      -webkit-transition: 0.2s ease;
      -o-transition: 0.2s ease;
      transition: 0.2s ease;
      border-bottom: 1px solid rgba(255, 255, 255, 0);
    }

    .hover-nav-wrapper li i {
      margin-left: 10px;
    }

    .hover-nav-wrapper li:hover {
      border-bottom: 1px solid rgba(255, 255, 255, 1);
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
}
</style>
