
<template>
    <div id='index'>
        <Header />
        <Nav />
        <Banner />
        <Recommend />
    </div> 
</template>

<script>
import Header from '@components/header.vue'
import Banner from '@components/banner.vue'
import Nav from '@components/nav.vue'

import Recommend from './recommend.vue'
export default {
    components: {
        Header,
        Banner,
        Nav,
        Recommend
    }
}
</script>