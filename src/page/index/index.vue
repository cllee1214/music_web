
<template>
    <div id='index'>
        <Header />
        <Nav />
        <Banner />
        <div class='index-main'>
             <div class="index-left">
                <Recommend />
                <NewRecord />
                <RankList />
            </div>
        </div>
       
    </div> 
</template>

<script>
import Header from '@components/header.vue'
import Banner from '@components/banner.vue'
import Nav from '@components/nav.vue'

import Recommend from './recommend.vue'
import NewRecord from './newRecord.vue'
import RankList from './rankList.vue'
export default {
    components: {
        Header,
        Banner,
        Nav,
        Recommend,
        NewRecord,
        RankList
    }
}
</script>

<style lang="scss">
    #index {
        .index-main{
            width: 983px;
            margin: auto;
            overflow: hidden;
            .index-left{
                float: left;
                width: 730px;
            }
        }
        
    }
</style>