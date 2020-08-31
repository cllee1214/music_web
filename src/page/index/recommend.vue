<template>
    <div id="recommend">
        <TitleNav title="热门推荐" :navList='navListConfig' />
    </div>
</template>

<script>
import TitleNav from '@components/titleNav.vue'
export default {
    components: {
        TitleNav
    },
    setup() {
        const navListConfig = [
            {
                name: '华语',
                href: ''
            },
             {
                name: '流行',
                href: ''
            },
             {
                name: '摇滚',
                href: ''
            },
             {
                name: '民谣',
                href: ''
            },
             {
                name: '电子',
                href: ''
            },
        ]

        return {
            navListConfig
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
        padding-top: 20px;
    }
</style>