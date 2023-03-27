<template>
  <li class="qa-container">
    <div class="question-container">
      <div class="question-row-container">
        <span class="q">Q.</span>
        <p>{{ question }}</p>
      </div>
      <div class="plmy-container" @click="updateShowAnswer">
        <PartsCommonPlusminus :isOpen="isOpen" />
      </div>
    </div>
    <div class="answer-container" :class="{ show: isOpen }">
      <p>
        {{ answer }}
      </p>
    </div>
  </li>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false,
      num: 0,
    };
  },
  props: {
    question: {
      type: String,
      default: "",
    },
    answer: {
      type: String,
      default: "",
    },
  },
  methods: {
    updateShowAnswer() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
<style lang="scss" scoped>
.qa-container {
  background-color: white;
  padding: 10px;
  transition: all ease 0.4s;
  margin-bottom: 20px;
  .question-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    .question-row-container {
      height: 100%;
      display: flex;
      align-items: center;
      .q {
        width: 80px;
        display: flex;
        justify-content: center;
        font-size: 42px;
        font-weight: 900;
        font-family: "D-DIN-Bold";
      }
      P {
        font-size: 20px;
        font-weight: bold;
      }
    }
    .plmy-container {
      display: flex;
      width: 80px;
      justify-content: center;
      svg {
        width: 30px;
        height: 30px;
      }
    }
  }
  .answer-container {
    display: none;
    p {
      margin-top: 10px;
      font-size: 16px;
      line-height: 1.2em;
      text-align: left;
      padding: 0 80px;
    }
  }
  .show {
    display: block;
  }
}
</style>
