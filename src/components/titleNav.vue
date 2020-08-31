<template>
    <div class="title-nav">
        <i class="red-cicle"></i>
        <span class="fl big-title">{{title}}</span>
        <ul class="nav-container fl">
            <li v-for="nav in navList" :key="nav.name">
                <a :href="nav.href">{{nav.name}}</a>
            </li>
        </ul>
        <a href="" class="more">
            <a href="">更多 </a>
            <i></i>
        </a>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        navList: Array
    }
}
</script>

<style lang="scss">
    @import "@style/common.scss";
    .title-nav{
        background: #fff;
        overflow: hidden;
        margin: 0 20px;
        border-bottom: 2px solid $primeRed;
        .big-title{
            font-size: 20px;
            line-height: 50px;
        }
        .red-cicle{
            height: 20px;
            width: 20px;
            border:5px solid $primeRed;
            border-radius: 20px;
            box-sizing: border-box;;
            margin: 15px;
            float: left;
        }
        .nav-container{
            overflow: hidden;
            li{
                float: left;
                font-size: 12px;
               
                line-height: 50px;
                margin-left: 15px;
                a{
                     color: #666;
                }
            }
        }
        .more{
            
            float: right;
            height: 50px;
            a{
                font-size:10px;
                color: #333;
                line-height: 50px;
            }
            i{
                width: 12px;
                height: 12px;
                display: inline-block;
                background-repeat: no-repeat;
                background-position: 0 -240px;
                background-image: url('@images/index.png');
            }
        }
    }
</style>