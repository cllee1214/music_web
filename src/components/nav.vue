<template>
  <div class="nav-container-prime">
    <ul class="nav-container-inner">
      <li>
        <a href="#">推荐</a>
      </li>
      <li>
        <a href="#">排行榜</a>
      </li>
      <li>
        <a href="#">歌单</a>
      </li>
      <li>
        <a href="#">主播电台</a>
      </li>
      <li>
        <a href="#">歌手</a>
      </li>
      <li>
        <a href="#">新碟上架</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@style/common.scss";

.nav-container-prime {
  width: 100%;
  height: 34px;
  background-color: $primeRed;
  .nav-container-inner {
    width: 1100px;
    margin: auto;
    overflow: hidden;
    padding-left: 180px;
    box-sizing: border-box;
    li {
      float: left;
      a {
        color: #fff;
        line-height: 34px;
        font-size: 12px;
        padding: 2px 17px;
        border-radius: 20px;
        margin: 0 17px;
        &:hover {
          background: #9b0909;
        }
      }
    }
  }
}
</style>