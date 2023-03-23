<template>
  <footer>
    <small>(C)2020 YABUSHITA ENESYS Co.,Ltd</small>
  </footer>
</template>
<style lang="scss" scoped>
$sp: 768px;
$aqua: #3fa4f0;
$flex-margin: 4vw;

@mixin sp {
  @media only screen and (max-width: $sp) {
    @content;
  }
}

footer {
  background: $aqua;
  padding: 50px;
  text-align: center;

  @include sp {
    padding: 30px $flex-margin;
  }

  img {
    width: 220px;
    margin-bottom: 30px;

    @include sp {
      width: 180px;
    }
  }

  small {
    display: block;
    color: #fff;
    font-size: 13px;
    font-weight: 900;
  }
}
</style>
