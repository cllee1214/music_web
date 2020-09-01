<template>
    <div id="recommend">
        <div class="recommend-left">
             <TitleNav title="热门推荐" :navList='navListConfig' />
            <ul class="pl">
                <li class="fl" v-for="list in playList" :key="list.id">
                    <SongSheet :picUrl='list.picUrl' :name='list.name' :playCount='list.playCount'/>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import TitleNav from '@components/titleNav.vue'
import SongSheet from '@components/songSheet.vue'
import { reactive } from 'vue'
import {getHotListCategory, getPersonalized} from '@api/index.js'
export default {
    components: {
        TitleNav,
        SongSheet
    },
    setup() {
        const navListConfig = reactive([])
        let playList = reactive([])
        getHotListCategory().then((res) => {
           // console.log(res)
            const data = res.data
            if(data.code == 200) {
                data.tags.forEach(tag => {
                    navListConfig.push(tag)
                })
            }
        }).catch(e => {
            console.log(e)
        })

        getPersonalized(8).then(res => {
            const data = res.data
            if(data.code == 200){
                data.result.forEach(r => {
                  playList.push(r)  
                })
            }
        }).catch(e => {

        })

        return {
            navListConfig,
            playList
        }
    }
}
</script>

<style lang='scss'>
    #recommend{
        width: 982px;
        margin: auto;
        background: #fff;
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc; 
        overflow: hidden;
        .recommend-left{
            width: 730px;
            float: left;
            padding-top: 20px;
            //border-right: 1px solid #ccc; 
            ul.pl{
            width: 730px;
            float: left;
            overflow: hidden;
            li{
                width: 25%;
                margin: auto;
                padding-top:20px
            }
        }
        }
    }
</style>