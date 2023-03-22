<template>
  <footer>
    <div class="footer-container">
      <div class="logo-container">
        <nuxt-link to="/"><img src="~/assets//img/logo-w.png" alt="ヤブシタエネシス"/></nuxt-link>
      </div>
      <div class="link-container">
        <div v-for="page in siteMap" :key="page.id" class="link-column">
          <nuxt-link :to="page.link">{{ page.pageName }}</nuxt-link>
          <ul class="link-flex">
            <li v-for="content in page.contents" :key="content.id">
              <a :href="page.link + '#' + content.contentLink">{{ content.contentName }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="copy-container">
      <p class="copy">(C)2020 YABUSHITA ENESYS Co.,Ltd All Right Reserved.</p>
    </div>
  </footer>
</template>
<script>
import pageMaster from "~/service/pageMaster";
export default {
  data() {
    return {
      siteMap: pageMaster.getAllPage(),
    };
  },
};
</script>
<style scoped lang="scss">
@use "@/assets/css/resources.scss" as *;
footer {
  background-color: #191a1a;
  padding: 50px;
  .footer-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    .logo-container {
      width: 300px;
      img {
        width: 100%;
      }
    }
    .link-container {
      display: flex;
      width: 800px;
      justify-content: space-between;
    }
    .link-column {
      a {
        display: block;
        margin-bottom: 20px;
        font-size: 16px;
        color: white;
        &:hover {
          color: $ene-green;
        }
      }
      .link-flex {
        a {
          margin-left: 20px;
        }
      }
    }
  }

  .copy-container {
    display: flex;
    justify-content: flex-end;
    .copy {
      color: white;
    }
  }
}
</style>
