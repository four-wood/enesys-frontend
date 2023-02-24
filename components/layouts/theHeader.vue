<template>
  <header>
    <div class="header-container">
      <div id="nav-bar">
        <div id="top-logo">
          <a href=""
            ><img src="~/assets//img/logo.png" alt="ヤブシタエネシス"
          /></a>
          <img src="~/assets/img/pot.png" alt="Powerd by tepco" class="pc" />
        </div>
        <ul id="main-nav" class="pc">
          <li id="com-nav"><a href="about">会社情報</a></li>
          <li id="biz-nav"><a href="business">事業内容</a></li>
          <li><a href="archives">導入実績</a></li>
          <li><a href="contact">お問い合わせ</a></li>
        </ul>
        <div class="sp nav-btn">
          <a class="menu-trigger">
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
      </div>
      <div class="nav-hover" id="about-nav-hover">
        <div class="hover-nav-wrapper">
          <ul>
            <a href="about#top-message"
              ><li>代表挨拶<i class="fas fa-long-arrow-alt-right"></i></li
            ></a>
            <a href="about#com"
              ><li>企業概要<i class="fas fa-long-arrow-alt-right"></i></li
            ></a>
            <a href="about#com-g"
              ><li>グループ会社<i class="fas fa-long-arrow-alt-right"></i></li
            ></a>
            <a href="about#access"
              ><li>アクセス<i class="fas fa-long-arrow-alt-right"></i></li
            ></a>
          </ul>
        </div>
      </div>
      <div class="nav-hover" id="biz-nav-hover">
        <div class="hover-nav-wrapper">
          <ul>
            <a href="business#solar"
              ><li>
                太陽光発電ソリューション<i
                  class="fas fa-long-arrow-alt-right"
                ></i></li
            ></a>
            <a href="business#solution"
              ><li>
                設備ソリューション<i
                  class="fas fa-long-arrow-alt-right"
                ></i></li
            ></a>
            <a href="business#retail"
              ><li>電力販売<i class="fas fa-long-arrow-alt-right"></i></li
            ></a>
            <a href="business#system"
              ><li>
                電力見える化システム<i
                  class="fas fa-long-arrow-alt-right"
                ></i></li
            ></a>
          </ul>
        </div>
      </div>
      <nav class="sp-nav">
        <div class="sp-nav-container">
          <ul>
            <a href=""><li>TOP</li></a>
            <a href="about"><li>会社情報</li></a>
            <a href="business"><li>事業内容</li></a>
            <a href="archives"><li>導入実績</li></a>
            <a href="contact"><li>お問い合わせ</li></a>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>
<style scoped lang="scss">
header {
  .header-container {
    position: relative;
    z-index: 100;
    #nav-bar {
      height: 74px;
      position: fixed;
      width: 100%;
      top: 32px;
      background-color: #fff;
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

    #top-logo img:first-child:hover {
      opacity: 0.8;
    }

    #top-logo img:last-child {
      width: 160px;
    }

    #main-nav {
      position: absolute;
      height: 100%;
      right: 6vw;
      display: flex;
      justify-content: space-between;

      li {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 120px;
        transition: 0.3s ease-out;

        a {
          font-size: 14px;
          letter-spacing: 0.5px;
          color: #000;
          font-weight: bold;
          text-align: center;
          transition: 0.3s ease-out;
        }

        &:hover {
          background-color: #00be3a;
          a {
            color: #fff;
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
