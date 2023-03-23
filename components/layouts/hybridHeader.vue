<template>
  <header>
    <div id="hyb-nav" class="clearfix">
      <div id="hyb-header-logo">
        <nuxt-link to="/"
          ><img src="~/assets/img/logo.png" alt="ヤブシタエネシス"
        /></nuxt-link>
        <img src="~/assets/img/pot.png" alt="Powerd by tepco" class="pc" />
      </div>
    </div>
    <div>
      <div id="hyb-header-tel" class="pc">
        <p>お電話でお問い合わせ</p>
        <p>0120-142-462</p>
        <p>受付時間 平日9:00～17:00</p>
      </div>
    </div>
  </header>
</template>
<style lang="scss" scoped>
@font-face {
  font-family: "D-DIN-Bold";
  src: url("@/assets/fonts/D-DIN-Bold.woff");
}

%clearfix {
  zoom: 1;
  &:after {
    display: block;
    content: "";
    clear: both;
  }
}

$pc-m: 1366px;
$tablet: 1024px;
$sp: 768px;

$w-fix: 1000px;
$w-flex: 92vw;
$flex-margin: 4vw;

$bg-color: #fce5e4;
$black: #333;
$aqua: #3fa4f0;
$gray: #f5f5f5;
$subtle-gray: #f2f2f2;
$light-aqua: #d9edfc;

$din: "D-DIN-Bold";
$h1-size: 82px;
$h2-size: 44px;
$h3-size: 28px;
$p-size: 16px;

$space: 30px;

$opacity: 0.75;
@mixin pc-m {
  @media only screen and (max-width: $pc-m) {
    @content;
  }
}

@mixin tablet {
  @media only screen and (max-width: $tablet) {
    @content;
  }
}

@mixin sp {
  @media only screen and (max-width: $sp) {
    @content;
  }
}

@mixin ie {
  @media all and (-ms-high-contrast: none) {
    @content;
  }
}

header {
  height: 74px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 2;

  #hyb-header-logo {
    float: left;
    margin-left: 2vw;
    margin-top: 20px;

    @include sp {
      margin-top: 28px;
    }

    a img {
      width: 260px;

      @include sp {
        width: 200px;
      }
    }
    img {
      margin-left: 10px;
      width: 160px;
    }
  }

  #hyb-header-tel {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 100%;
    background-color: $aqua;

    p {
      text-align: center;
      color: #fff;
    }

    p:first-child {
      margin-top: 2px;
      font-size: 13px;
      letter-spacing: 1px;

      @include ie {
        margin-top: 4px;
      }
    }

    p:nth-child(2) {
      font-size: 34px;
      line-height: 0.8;
      font-family: "D-DIN-Bold";

      @include ie {
        font-size: 36px;
        margin-top: -4px;
      }
    }

    p:last-child {
      font-size: 13px;
      letter-spacing: 1px;
      margin-top: 2px;

      @include ie {
        margin-top: 4px;
      }
    }
  }
}
</style>
