<template>
  <section id="message">
    <PartsCommonSectionHeader class="center">
      <template v-slot:jp>代表挨拶</template>
      <template v-slot:en>TOP MESSAGE</template>
    </PartsCommonSectionHeader>
    <div class="content-container">
      <div class="message-flex">
        <div class="message-text-container">
            <h2 class="message-title space">お客様の満足のために<br/>的確かつ親切なコスト削減ソリューションを提供</h2>
            <p class="message-content space">ヤブシタエネシス株式会社は2014年4月4日に電気のトータルソリューションの実現のため、設立致しました。お客様の立場になり、「気づき、そして感謝と丁寧」をモットーに活動しております。</p>
            <p class="message-content space">私たちはLED照明提案、空調入れ替え、電気の見える化及び自動制御、売電を軸とした電力コンサルティングを通して企業様の経営効率の改善に寄与し、お客様の実状に合わせたソリューションのさらなる実現のために、日々提案力の強化を図っております。</p>
            <p class="message-content space">また、お客様にはいつも安心してご相談いただけるように、定期的なアフターフォローや効果検証に注力しております。今後もお客様、取引先、従業員、人と人との繋がりを大切にし、「出会えてよかった！」この言葉の数を増やしていけるよう努力していく所存でございます。</p>
            <p class="message-content space">今後ともヤブシタエネシスに一層のご支援を賜りますようお願い申しあげます。</p>
            <p class="top-name">ヤブシタエネシス株式会社</p>
            <p class="top-name"><span class="small">代表取締役社長　</span>森　忠裕</p>
        </div>
        <div class="message-img-container">
          <img src="~/assets/img/morimori2.jpg" alt="代表取締役社長　森　忠裕" />
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@use "@/assets/css/resources.scss" as *;

#message {
  .message-flex {
    display: flex;
    .message-text-container {
      width: 60%;
      max-width: 600px;
      padding: 0 2vw;
      margin-left: auto;
      .message-title{
        font-size: 24px;
        line-height: 1.2;
      }
      .message-content{
        font-size: 18px;
        line-height: 1.2;
      }
      .top-name{
        text-align: right;
        font-size: 20px;
        font-weight: bold;
        line-height: 1.4;
        .small{
            font-size: 0.6em;
        }
      }
    }
    .message-img-container {
      width: 40%;
      margin-right: auto;
      padding: 0 2vw;
      max-width: 480px;
      img {
        width: 100%;
      }
    }
  }
}
</style>
