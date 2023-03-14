import Vue from "vue";
import {
  ValidationProvider,
  ValidationObserver,
  extend,
  setInteractionMode,
} from "vee-validate";
import { required, email, max } from "vee-validate/dist/rules";

extend("customed-required", {
  ...required,
  message: "必須項目です",
});

extend("checkboxRequired", {
  ...required,
  message: "プライバシーポリシーに同意してください",
});

extend("customed-email", {
  ...email,
  message: "正しいメールアドレスを入力してください",
});

extend("phone-number", {
  message: "正しい電話番号を入力してください",
  validate(value) {
    if (value.match(/[0-9]/) && value.length >= 7 && value.length < 15) {
      return true;
    }
  },
});
extend("max", {
  ...max,
  params: ["length"],
  message: "入力できるのは{length}文字までです。",
});

setInteractionMode("aggressive");

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
