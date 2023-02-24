<template>
  <section id="news">
    <div class="section-header motion" data-delighter="">
      <div class="header-line"></div>
      <h3>News</h3>
      <h3>新着情報</h3>
    </div>
    <div class="news-container motion" data-delighter="">
      <table>
        <tbody>
          <tr  v-for="post in posts" :key="post.id">
            <td>{{ post.title.rendered }}</td>
            <td></td>
            <td><i class="fas fa-chevron-circle-down"></i></td>
          </tr>
        </tbody>
      </table>

      <div class="btn-container">
        <a href="news" class="btn">
          <span>過去の新着情報</span><i class="fas fa-angle-right"></i>
          <div class="transition"></div>
        </a>
      </div>
    </div>
  </section>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
        posts:[],
    };
  },
  mounted() {
    axios
      .get("https://backend.fw-dev-test.link/wp-json/wp/v2/posts?per_page=3")
      .then((response) => (this.posts = response.data));
  },
};
</script>
<style scoped lang="scss">
#news {
  background-color: #fff;
  padding: 60px 0;
}

.news-container {
  width: 64vw;
  margin: 0 auto;
}

.news-container table {
  width: 100%;
}

.news-container tr {
  border-bottom: 1px solid #00be3a;
  height: 80px;
}

.news-container td {
  padding: 32px 0;
  font-weight: 800;
  font-size: 16px;
}

.news-container td:nth-child(2):hover,
.news-container td i:hover {
  opacity: 0.7;
  color: #00be3a;
  cursor: pointer;
}

.news-container td p:first-child {
  margin-top: 30px;
}

.news-container td p {
  line-height: 22px;
  font-size: 14px;
  font-weight: 400;
  display: none;
  cursor: pointer;
}

.news-container iframe {
  opacity: 1 !important;
  margin: 20px 0;
}

.news-container td i {
  color: #00be3a;
  transition: 0.2s ease;
  font-size: 22px;
  cursor: pointer;
}

.rotate {
  transform: rotate(180deg);
}

.news-container td:first-child {
  font-weight: bold;
  text-align: center;
  width: 240px;
}

.news-container td:last-child {
  width: 60px;
}
</style>
