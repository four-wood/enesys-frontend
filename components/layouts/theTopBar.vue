<template>
  <div id="top-bar">
    <div id="top-bar-wrapper">
      <img src="~/assets/img/free.gif" alt="free-dial" />
      <p><a href="tel:0120-142-462">0120-142-462</a></p>
      <a href="http://ecomame.biz/yabushita/" class="pc"
        ><p>えねシステム　ログイン</p></a
      >
    </div>
  </div>
</template>
<style scoped lang="scss">
#top-bar {
  position: fixed;
  display: block;
  background-color: #191a1a;
  height: 32px;
  width: 100%;
  z-index: 10;
  top: 0;
}

#top-bar-wrapper {
  position: absolute;
  right: 6vw;
  img {
    height: 20px;
    margin-top: 6px;
  }
  p {
    display: inline-block;
    font-size: 14px;
    letter-spacing: 1px;
    color: #fff;
    line-height: 32px;
    vertical-align: top;

    &:last-child {
      border-right: 1px solid #fff;
      border-left: 1px solid #fff;
      padding: 0 20px;
      margin-left: 20px;
      transition: 0.3s ease-out;
    }
    &:last-child:hover {
      background-color: #00be3a;
    }
  }
}
</style>
