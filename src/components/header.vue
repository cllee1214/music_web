<template>
  <div id="header" class="header-container-prime-black">
    <div class="header-container-inner">
      <div class="header-logo"></div>
      <ul class="header-nav">
        <li v-for="nav in navList" :key="nav.content">
          <a href="#">{{nav.content}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { reactive } from 'vue'
export default {
    setup() {
        const navList = reactive([
            {
                content: '发现音乐',
                url: ''
            },
            {
                content: '我的音乐',
                url: ''
            },
            {
                content: '朋友',
                url: ''
            },
            {
                content: '商城',
                url: ''
            },
            {
                content: '音乐人',
                url: ''
            },
            {
                content: '下载客户端',
                url: ''
            }
        ])
        return {
            navList
        }
    }
};
</script>

<style lang="scss">
@import "@style/common.scss";

.header-container-prime-black {
  width: 100%;
  height: 70px;
  background-color: $primeBlack;
  .header-container-inner {
    width: 1100px;
    height: 100%;
    margin: auto;
    overflow: hidden;
    .header-logo {
      width: 157px;
      height: 100%;
      padding-right: 20px;
      float: left;
      background: url("@images/topbar.png");
    }
    .header-nav {
      float: left;
      overflow: hidden;
      li {
        float: left;
        &:hover {
          background: #000;
        }
        a {
          color: #ccc;
          padding: 0 20px;
          line-height: 70px;
          font-size: 14px;
          display: inline-block;
          &:hover {
            color: #fff;
          }
        }
      }
    }
  }
}
</style>