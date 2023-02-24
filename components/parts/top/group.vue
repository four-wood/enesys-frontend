<template>
  <section id="yabu-g">
    <PartsCommonSectionHeader class="center">
      <template v-slot:jp>ヤブシタグループ</template>
      <template v-slot:en>YABUHSITA GROUP</template>
    </PartsCommonSectionHeader>
    <div class="yabu-g-container motion" data-delighter="">
      <a
        href="https://www.yabushita-kikai.co.jp/"
        target="_blank"
        rel="noopener noreferrer"
        ><img alt="株式会社ヤブシタ" src="~/assets/img/00.png"
      /></a>
      <a
        href="https://yabushita-hd.co.jp/"
        target="_blank"
        rel="noopener noreferrer"
        ><img alt="ヤブシタホールディングス株式会社" src="~/assets/img/01.png"
      /></a>
      <a
        href="http://www.y-sogo-sekkei.com/"
        target="_blank"
        rel="noopener noreferrer"
        ><img alt="ヤブシタ総合設計株式会社" src="~/assets/img/02.png"
      /></a>
      <a
        href="https://enesys.four-wood.co.jp"
        target="_blank"
        rel="noopener noreferrer"
        ><img alt="ヤブシタエネシス株式会社" src="~/assets/img/03.png"
      /></a>
      <a
        href="http://www.y-seisakusho.co.jp/"
        target="_blank"
        rel="noopener noreferrer"
        ><img alt="株式会社ヤブシタ製作所" src="~/assets/img/04.png"
      /></a>
      <a
        href="http://www.yabushita-e.co.jp/"
        target="_blank"
        rel="noopener noreferrer"
        ><img alt="株式会社ヤブシタエンジニアリング" src="~/assets/img/05.png"
      /></a>
      <a
        href="http://yabushita-reisetsu.co.jp/"
        target="_blank"
        rel="noopener noreferrer"
        ><img alt="ヤブシタ冷熱設備株式会社" src="~/assets/img/06.png"
      /></a>
      <a
        href="http://www.kankou-den.co.jp/"
        target="_blank"
        rel="noopener noreferrer"
        ><img alt="関光電設株式会社" src="~/assets/img/07.png"
      /></a>
      <a href="http://riy.co.jp/" target="_blank" rel="noopener noreferrer"
        ><img alt="株式会社Riy制作室" src="~/assets/img/08.png"
      /></a>
      <a
        href="https://four-wood.co.jp/"
        target="_blank"
        rel="noopener noreferrer"
        ><img alt="株式会社フォーウッド" src="~/assets/img/09.png"
      /></a>
      <a href="#" target="_blank" rel="noopener noreferrer"
        ><img alt="東研冷機工業株式会社" src="~/assets/img/10.png"
      /></a>
      <a
        href="https://www.yuu-tec.co.jp/"
        target="_blank"
        rel="noopener noreferrer"
        ><img alt="株式会社ユーテック" src="~/assets/img/yuutec.png"
      /></a>
      <a href="#" target="_blank" rel="noopener noreferrer"
        ><img alt="ヤブシタミャンマー" src="~/assets/img/11.png"
      /></a>
    </div>
  </section>
</template>
<style scoped lang="scss">
@use "@/assets/css/resources.scss" as *;
#yabu-g{
  background-color: #fff;
  padding: 60px 0;
}

.yabu-g-container {
  display: flex;
  flex-wrap: nowrap;
  width: 88vw;
  height: 230px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: flex-end;
}

.yabu-g-container img {
  width: 100%;
}

.yabu-g-container a {
  flex: 1;
  transition: 0.3s ease;
}
</style>
