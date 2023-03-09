<template>
  <section id="news">
    <PartsCommonSectionHeader class="center">
      <template v-slot:jp>新着情報</template>
      <template v-slot:en>NEWS</template>
    </PartsCommonSectionHeader>
    <div class="news-container motion" data-delighter="">
      <table>
        <tbody>
          <PartsCommonAccordion v-for="post in posts" :key="post.id" :content="post.content.rendered">
            <template v-slot:date>{{ formatDate(post.date) }}</template>
            <template v-slot:title>{{ post.title.rendered }}</template>
          </PartsCommonAccordion>
        </tbody>
      </table>

      <div class="btn-container">
        <PartsCommonButton :href="'news'" :text="'もっと見る'" />
      </div>
    </div>
  </section>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    axios
      .get("https://backend.fw-dev-test.link/wp-json/wp/v2/posts?_fields=date,title,content&per_page=3")
      .then(
        (response) => ((this.posts = response.data), console.log(this.posts))
      );
  },
  methods: {
    formatDate: function (date) {
      const formatted = date.substr(0, 10).split("-").join("/");
      return formatted;
    },
  },
};
</script>
<style scoped lang="scss">
@use "@/assets/css/resources.scss" as *;
#news {
  background-color: #fff;
  margin: 60px 0;
  .news-container {
    width: 64vw;
    margin: 0 auto;
    table {
      width: 100%;
    }
  }
}

.btn-container {
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
}
</style>
