<template>
  <section id="profile">
    <PartsCommonSectionHeader class="center">
      <template v-slot:jp>企業概要</template>
      <template v-slot:en>COMPANY PROFILE</template>
    </PartsCommonSectionHeader>
    <div class="profile-container">
      <table>
        <tbody>
          <tr>
            <td><p>商号</p></td>
            <td><p>ヤブシタエネシス株式会社</p></td>
          </tr>
          <tr>
            <td><p>所在地</p></td>
            <td>
              <p>【 本社 】</p>
              <p>〒060-0001 札幌市中央区北1条西9丁目3番1号 南大通ビルN1 ３階</p>
              <p class="space">TEL 011-205-3284 FAX 011-205-3285</p>
              <p>【 青森営業所 】</p>
              <p>〒030-0113 青森県青森市第二問屋町3丁目3-18</p>
              <p class="space">TEL 017-718-7611 FAX 017-763-5346</p>
              <p>【 東京営業所 】</p>
              <p>〒108-0014 東京都港区芝5丁目20-9 東化ビル2階</p>
              <p>TEL 03-6809-6606 FAX 03-6459-4660</p>
            </td>
          </tr>
          <tr>
            <td><p>代表者</p></td>
            <td><p>代表取締役社長　森　忠裕</p></td>
          </tr>
          <tr>
            <td><p>事業内容</p></td>
            <td>
              <p>電力販売</p>
              <p>LED照明販売</p>
              <p>電力エネルギーコンサルティング</p>
              <p>空調設備販売</p>
              <p>各種電気工事</p>
              <p>太陽光発電所 EPC事業</p>
            </td>
          </tr>
          <tr>
            <td><p>取引銀行</p></td>
            <td><p>北洋銀行、北海道銀行</p></td>
          </tr>
          <tr>
            <td><p>主要取引先（五十音順）</p></td>
            <td>
              <p>岩崎電気株式会社</p>
              <p>株式会社OPTILED LIGHTING</p>
              <p>株式会社HTD</p>
              <p>株式会社フォレストエンジニアリング</p>
              <p>大光電機株式会社</p>
              <p>テプコカスタマーサービス株式会社</p>
              <p>東京電力エナジーパートナー株式会社</p>
              <p>東芝ライテック株式会社</p>
              <p>ニッシン・トーア株式会社</p>
              <p>パナソニック株式会社</p>
              <p>三菱電機照明株式会社</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@use "@/assets/css/resources.scss" as *;

#profile {
  .profile-container {
    margin: 0 auto;
    max-width: 1200px;
    width: 92vw;
    table {
      width: 100%;
      tbody {
        width: 100%;
        tr {
          border-top: 1px solid $gray;
          border-bottom: 1px solid $gray;
          td {
            padding: 30px 50px;
            @include sp{
              padding: 3vw 2vw;
            }
            p {
              font-size: 18px;
              line-height: 1.3;
              font-weight: bold;
              color: $text-black;
              @include sp{
                font-size: 14px;
              }
            }
            .space {
              margin-bottom: 20px;
            }
          }
        }
      }
    }
  }
}
</style>
