<template>
  <div class="news-row-container">
    <tr @click="open = !open">
      <td>
        <p><slot name="date"></slot></p>
      </td>
      <td>
        <div class="news-title-container">
          <p><slot name="title"></slot></p>
          <div class="chevron-container" :class="{ 'chevron-open': !open }">
            <PartsCommonCircleChevron :direction="'up'" :color="'#12ee37'" />
          </div>
        </div>
      </td>
    </tr>
    <tr v-show="open && hasContent">
      <td></td>
      <td ref="content"></td>
    </tr>
  </div>
</template>
<script>
export default {
  data() {
    return {
      open: false,
      hasContent: false,
    };
  },
  props: {
    content: {
      type: String,
      default: "",
    },
  },
  mounted() {
    if (this.content != "") {
      this.hasContent = true;
      this.$refs.content.insertAdjacentHTML("beforeend", this.content);
    }
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/css/resources.scss" as *;
.news-row-container {
  border-bottom: 1px solid $ene-green;
  tr {
    width: 100%;
    @include sp{
      display: flex;
      flex-direction: column;
    }
    td {
      text-align: left;
      padding: 32px 0;
      @include sp{
        padding: 16px;
      }
      &:first-of-type {
        padding-right: 40px;
      }
      &:last-of-type {
        width: 100%;
      }
      p {
        font-weight: bold;
        font-size: 16px;
      }
      .news-title-container {
        display: flex;
        justify-content: space-between;
        p {
          max-width: calc(100% - 40px);
        }
        .chevron-container {
          margin-right: 20px;
          width: 20px;
          height: 20px;
          transition: transform 0.2s ease;
        }
        .chevron-open {
          transform: rotate(180deg);
        }
      }
    }

    &:hover {
      cursor: pointer;
      .news-title-container {
        p {
          color: $ene-green;
        }
      }
    }
  }
}
</style>
