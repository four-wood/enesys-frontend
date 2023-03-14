<template>
  <section id="phone">
    <p class="phone-text">
      弊社に関する電話でのお問い合わせは<span class="fold">こちらからお願いいたします</span>
    </p>
    <div class="phone-number-container">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
          d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
        />
      </svg>
      <a :href="'tel:' + phoneNumber">{{ phoneNumber }}</a>
    </div>
    <p class="phone-text">受付時間：9:00～17:00（土日祝休み）</p>
    <p>お問い合わせ・ご相談は下記のフォームにご入力後、<span class="fold">プライバシーポリシーに同意して頂き送信ボタンを押してください。</span></p>
  </section>
</template>
<script>
import pageMaster from "~/service/pageMaster";
export default {
  data() {
    return {
      phoneNumber: pageMaster.getPage("contact").phoneNumber,
    };
  },
};
</script>
<style scoped lang="scss">
@use "@/assets/css/resources.scss" as *;
#phone {
  p {
    font-size: 20px;
    line-height: 28px;
    font-weight: bold;
    color: $text-black;
    text-align: center;
  }
  .phone-number-container {
    margin: 40px 0 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 40px;
      fill: $ene-green;
    }
    a {
      color: $ene-green;
      font-weight: bold;
      font-size: 40px;
    }
  }
}
</style>
