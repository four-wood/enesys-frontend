<template>
  <section id="access">
    <PartsCommonSectionHeader class="center">
      <template v-slot:jp>アクセス</template>
      <template v-slot:en>ACCESS</template>
    </PartsCommonSectionHeader>
    <div class="access-container">
      <div class="access-flex">
        <div class="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2915.1040660464528!2d141.3406907!3d43.0602788!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b29b908c5c0bf%3A0x4d751b0c906704ef!2z44ix44Ok44OW44K344K_!5e0!3m2!1sja!2sjp!4v1650796413038!5m2!1sja!2sjp"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="lazyLoad isLoaded"
          ></iframe>
        </div>
        <div class="info-container">
          <p>【 本社 】</p>
          <p>〒060-0001 札幌市中央区北1条西9丁目3番1号 南大通ビルN1 ３階</p>
          <p>TEL 011-205-3284 FAX 011-205-3285</p>
        </div>
      </div>
      <div class="access-flex">
        <div class="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2915.1040660464528!2d141.3406907!3d43.0602788!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b29b908c5c0bf%3A0x4d751b0c906704ef!2z44ix44Ok44OW44K344K_!5e0!3m2!1sja!2sjp!4v1650796413038!5m2!1sja!2sjp"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="lazyLoad isLoaded"
          ></iframe>
        </div>
        <div class="info-container">
          <p>【 本社 】</p>
          <p>〒060-0001 札幌市中央区北1条西9丁目3番1号 南大通ビルN1 ３階</p>
          <p>TEL 011-205-3284 FAX 011-205-3285</p>
        </div>
      </div>
      <div class="access-flex">
        <div class="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2915.1040660464528!2d141.3406907!3d43.0602788!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b29b908c5c0bf%3A0x4d751b0c906704ef!2z44ix44Ok44OW44K344K_!5e0!3m2!1sja!2sjp!4v1650796413038!5m2!1sja!2sjp"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="lazyLoad isLoaded"
          ></iframe>
        </div>
        <div class="info-container">
          <p>【 本社 】</p>
          <p>〒060-0001 札幌市中央区北1条西9丁目3番1号 南大通ビルN1 ３階</p>
          <p>TEL 011-205-3284 FAX 011-205-3285</p>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@use "@/assets/css/resources.scss" as *;

#access {
  .access-container {
    margin: 0 auto 100px;
    max-width: 1200px;
    width: 92vw;
    .access-flex {
      display: flex;
      border-top: 1px solid $gray;
      width: 100%;
      height: 400px;
      &:last-of-type {
        border-bottom: 1px solid $gray;
      }
      .map-container,
      .info-container {
        padding: 30px;
        width: 100%;
        height: 100%;
      }
      .map-container {
        iframe {
          width: 100%;
          height: 100%;
        }
      }
      .info-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        p {
          font-weight: bold;
          font-size: 20px;
          margin-bottom: 20px;
        }
      }
    }
  }
}
</style>
