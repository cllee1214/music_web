<template>
  <div @mouseenter="switchScroll" @mouseleave="switchScroll" class="banner-container">
    <div class="banner-center-wrap">
      <div v-for="(banner, index) in bannerObj.banners" :key="banner.imageUrl" class="banner-image-item" :class="{'cur': bannerObj.index == index}">
        <img :src="banner.imageUrl" />
       </div>
    </div>
    <div class='points'>
      <ul>
        <li v-for="(banner, index) in bannerObj.banners" :class="{'cur': bannerObj.index == index}" :key="banner.imageUrl"></li>
      </ul>
    </div>
    <a @click="scrollBanner(-1)" href="javascript:" class="control left-control"></a>
    <a @click="scrollBanner(1)" href="javascript:" class="control right-control"></a>
    <div :style="bgImageStyle" class="banner-bottom-cover"></div>
  </div>
</template>

<script>
import {getBanner} from '@api/index.js'
import { reactive, computed } from 'vue';
export default {
  setup() {

    const bannerObj = reactive({
      banners: [],
      index: 0,
      stopScroll: false
    })

    const bgImageStyle = computed(() => {
      return {
        'background-image': `url(${bannerObj.banners[bannerObj.index] && bannerObj.banners[bannerObj.index].imageUrl})`
      }
    })

    function scrollTimer(target) {
      setTimeout(() => {
        //console.log(target.stopScroll)
        if(!target.stopScroll){
            target.index++
            if (target.index > target.banners.length - 1) {
              target.index = 0
            }
        } 
        scrollTimer(target)
        console.log('index:',target.index)
      }, 3000)
    }

    function scrollBanner(change) {
      bannerObj.index = bannerObj.index + change
      if(bannerObj.index > bannerObj.banners.length - 1){
        bannerObj.index = 0
      }
      if(bannerObj.index < 0) {
        bannerObj.index = bannerObj.banners.length - 1
      }
    }

    function switchScroll() {
      bannerObj.stopScroll = !bannerObj.stopScroll
      console.log(bannerObj.stopScroll)
    }

    getBanner().then((res) => {
      console.log(res)
      bannerObj.banners = res.data.banners
      scrollTimer(bannerObj)
    }).catch((err) => {

    })

    return {
      bannerObj,
      switchScroll,
      bgImageStyle,
      scrollBanner
    }
  }
};
</script>

<style lang="scss">
@import "@style/common.scss";

.banner-container{
    width: 100%;
    height: 285px;
    position: relative;
    border-bottom: 1px solid #f2f2f2;
    overflow: hidden;
    .banner-bottom-cover{
      position:absolute;
      width: 100%;
      height: 100%;
      filter: blur(20px);
      z-index: -1;
      background-size: cover; 
      background-position: center center;
      left: 0;
      top: 0;
    }
    
    .banner-center-wrap{
        width: 982px;
        height: 100%;
        margin: auto;
        .banner-image-item{
            width: 100%;
            height: 100%;
            display: none;
            &.cur{
              display: block;
            }
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    .points{
      position: absolute;
      left:50%;
      bottom: 10px;
      transform: translateX(-50%);
      ul{
        overflow: hidden;
        li{
          background-color: #fff;
          width: 10px;
          height: 10px;
          float: left;
          margin-left: 10px;
          border-radius: 10px;
          &.cur{
            background-color: $primeRed;
          }
        }
      }
    }
    .control{
      position: absolute;
      width: 37px;
      height: 63px;
      top: 50%;
      transform: translateY(-50%);
      &.left-control{
        left: 50px;
        background-image: url('@images/arrl.png');
      }
      &.right-control{
        right: 50px;
        background-image: url('@images/arrr.png');
      }
    }
}
</style>