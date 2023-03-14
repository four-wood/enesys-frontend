<template>
  <section id="mail">
    <div class="form-container section-wrapper">
      <ValidationObserver v-slot="{ invalid }" ref="observer">
        <form
          class="hyperform"
          action="https://hyperform.jp/api/CTQvYjp9"
          method="post"
          ref="Form"
        >
          <h2 class="form-section-title">01. お客さま情報</h2>
          <ul class="contact-list">
            <li class="contact-list-item">
              <label class="contact-list-item-label" for="contact-name">
                お名前
                <span class="required-tag">必須</span>
              </label>
              <ValidationProvider
                class="list-item-right"
                rules="customed-required|max:100"
                v-slot="{ errors }"
                tag="div"
              >
                <input
                  id="contact-name"
                  type="text"
                  name="名前"
                  v-model="name"
                />
                <p class="list-item-error">{{ errors[0] }}</p>
              </ValidationProvider>
            </li>

            <li class="contact-list-item">
              <label class="contact-list-item-label" for="contact-nameKana">
                フリガナ
                <span class="required-tag">必須</span>
              </label>
              <ValidationProvider
                class="list-item-right"
                rules="customed-required|max:100"
                v-slot="{ errors }"
              >
                <input
                  id="contact-nameKana"
                  type="text"
                  name="フリガナ"
                  v-model="nameKana"
                />
                <p class="list-item-error">{{ errors[0] }}</p>
              </ValidationProvider>
            </li>

            <li class="contact-list-item">
              <label class="contact-list-item-label" for="contact-company">
                会社名
                <span class="required-tag">必須</span>
              </label>
              <ValidationProvider
                class="list-item-right"
                rules="customed-required|max:100"
                v-slot="{ errors }"
              >
                <input
                  id="contact-company"
                  type="text"
                  name="会社名"
                  v-model="company"
                />
                <p class="list-item-error">{{ errors[0] }}</p>
              </ValidationProvider>
            </li>

            <li class="contact-list-item">
              <label class="contact-list-item-label" for="contact-department"
                >部署名</label
              >
              <ValidationProvider
                class="list-item-right"
                rules="max:100"
                v-slot="{ errors }"
              >
                <input
                  id="contact-department"
                  type="text"
                  name="部署"
                  v-model="department"
                />
                <p class="list-item-error">{{ errors[0] }}</p>
              </ValidationProvider>
            </li>

            <li class="contact-list-item">
              <label class="contact-list-item-label" for="contact-role"
                >役職名</label
              >
              <ValidationProvider
                class="list-item-right"
                rules="max:100"
                v-slot="{ errors }"
              >
                <input
                  id="contact-role"
                  name="役職"
                  type="text"
                  v-model="role"
                />
                <p class="list-item-error">{{ errors[0] }}</p>
              </ValidationProvider>
            </li>

            <li class="contact-list-item">
              <label class="contact-list-item-label" for="contact-tel">
                電話番号
                <span class="required-tag">必須</span>
              </label>
              <ValidationProvider
                class="list-item-right"
                rules="phone-number|customed-required"
                v-slot="{ errors }"
              >
                <input
                  id="contact-tel"
                  name="電話番号"
                  type="text"
                  v-model="tel"
                />
                <p class="list-item-error">{{ errors[0] }}</p>
              </ValidationProvider>
            </li>

            <li class="contact-list-item">
              <label class="contact-list-item-label" for="contact-fax"
                >FAX番号</label
              >
              <ValidationProvider
                class="list-item-right"
                rules="phone-number"
                v-slot="{ errors }"
              >
                <input
                  id="contact-fax"
                  name="FAX番号"
                  type="text"
                  v-model="fax"
                />
                <p class="list-item-error">{{ errors[0] }}</p>
              </ValidationProvider>
            </li>

            <li class="contact-list-item">
              <label class="contact-list-item-label" for="contact-mail">
                E-Mail
                <span class="required-tag">必須</span>
              </label>
              <ValidationProvider
                class="list-item-right"
                rules="customed-required|customed-email"
                v-slot="{ errors }"
              >
                <input
                  id="contact-mail"
                  name="email"
                  type="email"
                  v-model="mail"
                />
                <p class="list-item-error">{{ errors[0] }}</p>
              </ValidationProvider>
            </li>
          </ul>

          <h2 class="form-section-title">02. お問い合わせ内容</h2>
          <ul>
            <li class="contact-list-item">
              <label class="contact-list-item-label" for="contact-detail">
                件名
                <span class="required-tag">必須</span>
              </label>
              <ValidationProvider
                class="list-item-right"
                rules="customed-required|max:50"
                v-slot="{ errors }"
              >
                <input id="title" type="text" name="件名" v-model="title" />
                <p class="list-item-error">{{ errors[0] }}</p>
              </ValidationProvider>
            </li>

            <li class="contact-list-item-textarea">
              <label class="contact-list-item-label" for="contact-detail">
                お問い合わせ内容
                <span class="required-tag">必須</span>
              </label>
              <ValidationProvider
                class="list-item-right"
                rules="customed-required|max:300"
                v-slot="{ errors }"
              >
                <textarea
                  id="contact-detail"
                  name="問い合わせ内容"
                  v-model="detail"
                ></textarea>
                <p class="list-item-error">{{ errors[0] }}</p>
              </ValidationProvider>
            </li>
          </ul>

          <ValidationProvider
            class="validate-button"
            :rules="{ checkboxRequired: { allowFalse: false } }"
            v-slot="{ errors }"
          >
            <div class="accept-checkbox-container">
              <div class="accept-checkbox">
                <label for="contact-accept"
                  ><nuxt-link to="/privacy" target="_blank"
                    >個人情報保護方針</nuxt-link
                  >に同意する</label
                >
                <input
                  id="contact-accept"
                  name="個人情報保護方針同意"
                  type="checkbox"
                  v-model="isAccept"
                />
              </div>
              <p class="list-item-error">{{ errors[0] }}</p>
            </div>
          </ValidationProvider>

          <button :type="!invalid ? 'submit' : 'button'" @click="submit">
            送信
          </button>
        </form>
      </ValidationObserver>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      title: "",
      detail: "",
      name: "",
      nameKana: "",
      company: "",
      department: "",
      role: "",
      tel: "",
      fax: "",
      mail: "",
      isAccept: false,
    };
  },
  methods: {
    submit() {
      //入力不足の項目を探し、表示
      this.$refs.observer.validate();
      //お問い合わせ上部までスクロール
      const element = document.getElementById("mail");
      var rect = element.getBoundingClientRect();
      var elemtop = rect.top + window.pageYOffset - 100;
      document.documentElement.scrollTop = elemtop;
    },
  },
};
</script>
<style lang="scss" scoped>
@use "@/assets/css/resources.scss" as *;
#mail-form {
  margin-top: 120px;
  padding-bottom: 120px;
  @include sp {
    margin-top: 80px;
    padding-bottom: 40px;
  }
  .mail-form-title-container {
    text-align: center;
    margin-bottom: 80px;
    .mail-form-title-en {
      color: gray;
      font-weight: 700;
      font-size: 64px;
      line-height: 82px;
      @include sp {
        font-size: 40px;
        line-height: 48px;
      }
    }
    .mail-form-title {
      color: $ene-green;
      font-weight: 700;
      font-size: 24px;
      line-height: 35px;
      @include sp {
        font-size: 20px;
        line-height: 28px;
      }
    }
  }
  .phone-number-flex {
    display: flex;
    justify-content: space-around;
    .phone-number {
      text-align: center;
      .office-name {
        color: $ene-green;
        font-size: 24px;
        font-weight: 700;
        line-height: 35px;
        letter-spacing: 0.1em;
        margin-top: 8px;
      }
      .text {
        font-size: 20px;
        font-weight: 700;
        line-height: 30px;
        letter-spacing: 0.1em;
        margin-top: 8px;
      }
      a {
        font-size: 48px;
        font-weight: 700;
        line-height: 62px;
      }
    }
  }
}
.form-section-title {
  font-size: 24px;
  color: $text-black;
  margin-bottom: 16px;
  font-weight: 700;
  @include sp {
    font-size: 16px;
  }
}
.contact-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
}
.contact-list-item {
  width: 100%;
  margin-bottom: 40px;
  @include sp {
    display: block;
    margin-bottom: 24px;
  }
}
.contact-list-item-label {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 6px;
  line-height: 1;
  font-size: 18px;
  color: $text-black;
  font-weight: 700;
  @include sp {
    margin-right: 0;
    font-size: 14px;
    margin-bottom: 8px;
  }
  .required-tag {
    margin-left: 16px;
    padding: 2px;
    font-size: 14px;
    background-color: $ene-green;
    color: white;
    font-weight: bold;
    @include sp {
      position: relative;
      top: 2px;
      font-size: 12px;
      height: 24px;
      width: 48px;
    }
  }
}
.list-item-right {
  flex: 2;
  width: 100%;
  position: relative;
  input,
  textarea {
    font-size: 18px;
    width: 100%;
    padding: 6px 10px;
    border: none;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 40%) 1px 1px 4px 0px inset;
  }
  textarea {
    height: 240px;
    box-sizing: border-box;
    resize: none;
  }
}
.list-item-caption {
  font-size: 12px;
  color: #555;
}
.list-item-error {
  position: absolute;
  font-size: 14px;
  font-weight: 700;
  color: firebrick;
  line-height: 20px;
  &:empty {
    margin-bottom: 20px;
  }
}
.validate-button {
  position: relative;
}
.accept-checkbox-container {
  max-width: 400px;
  width: 100%;
  margin: 60px auto 32px;
  .accept-checkbox {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    padding: 24px 20px;
    background-color: white;
    box-shadow: rgba(black , 0.4) 1px 1px 4px 0px ;
    border-radius: 4px;
    label {
      font-size: 16px;
      font-weight: 700;
      white-space: nowrap;
    }
    a {
      color: $ene-green;
      font-size: 16px;
      text-decoration: underline;
      margin-right: 8px;
      &:hover {
        color: $ene-green;
      }
    }
  }
}

button {
  display: flex;
  justify-content: center;
  max-width: 400px;
  width: 100%;
  margin: 0 auto 80px;
  padding: 16px;
  background-color: $ene-green;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  font-size: 20px;
  font-weight: 700;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  &.submit-button-disabled {
    background-color: gray;
    box-shadow: none;
  }
  img {
    position: relative;
    top: 3px;
    width: 24px;
    height: 24px;
    margin-right: 16px;
  }
}
.submit-error {
  margin-top: 16px;
  color: firebrick;
  text-align: center;
}
</style>
