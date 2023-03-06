<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    :fill="color"
    :style="{transform:'rotate(' + rotate + 'deg)'}"
  >
    <path
      d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM377 271c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-87-87-87 87c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L239 167c9.4-9.4 24.6-9.4 33.9 0L377 271z"
    />
  </svg>
</template>
<script>
export default {
  props: {
    direction: {
      type: String,
      default: "up",
    },
    color: {
      type: String,
      default: "#333",
    },
  },
  data() {
    return {
      rotate: "0",
    };
  },
  mounted() {
    switch (this.direction) {
      case "up":
        this.rotate = "0";
        break;
      case "right":
        this.rotate = "90";
        break;
      case "down":
        this.rotate = "180";
        break;
      case "left":
        this.rotate = "-90";
        break;
    }
  },
};
</script>
