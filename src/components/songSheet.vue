<template>
    <div class="song-sheet-container">
        <div class="song-sheet">
            <a href="" class>
                <img class="full-all" :src="picUrl"/>
            </a>
            <div class="bottom">
                <div class="inner full-all">
                    <div class="mask full-all"></div>
                    <div class="info full-all">
                        <i class="icon-headset"></i>
                        {{playCountByUnit}}
                        <i class="icon-play"></i>
                    </div>
                </div>
            </div>
        </div>
        <p class="song-sheet-name">
            {{name}}
        </p>
    </div>
</template>

<script>
import { computed } from 'vue'
export default {
    props: {
        picUrl: String,
        name: String,
        playCount: Number
    },
    setup(props) {
        const playCountByUnit = computed(() => {
            if(props.playCount > 10000) {
                return parseInt(props.playCount / 10000) + '万'
            }
            return props.playCount
        })

        return {
            playCountByUnit
        }
    }
    
}
</script>

<style lang="scss">
.song-sheet-container{
    width: 140px;
    margin: auto;
    &:hover{
        cursor: pointer;
    }
}
.song-sheet{
    width: 140px;
    height: 140px;
    position: relative;
    border:1px solid #ccc;
    .bottom{
        width: 100%;
        height: 27px;
        position: absolute;
        bottom: 0;
        .inner{
            position: relative;
            
            .mask{
                background: #000;
                opacity: 0.5;
                z-index: -1
            }
            .icon-headset{
                display: inline-block;
                width: 14px;
                height: 11px;
                background-image: url('@images/iconall.png');
                background-position: 0 -24px;
                position: absolute;
                left: 15px;
                top: 8px;
            }
            .icon-play{
                display: inline-block;
                width: 16px;
                height: 17px;
                background-image: url('@images/iconall.png');
                background-position: 0 -0px;
                //margin: 0 2px 0 10px;
                position: absolute;
                right: 15px;
                top:6px;
                &:hover{
                    background-position: 0 -60px;
                    cursor: pointer;
                }
            }
            .info{
                position: absolute;
                z-index: 1;
                left: 0;
                top: 0;
                color: #ccc;
                font-size: 12px;
                line-height: 27px;
                padding-left: 33px;
                box-sizing: border-box;
            }
        }
    }
}
.song-sheet-name{
    width: 140px;
    height: 40px;
    font-size: 13px;
    padding-top: 5px;
    margin: auto;
    
}
</style>