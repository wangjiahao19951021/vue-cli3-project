<template>
    <div class="swiper-container banner">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for = 'banner in banners' :key = "banner.bannerId">
                <!-- 使用:绑定 -->
                <img :src="banner.imgUrl" alt="">
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>
<script> 
// 引入 swiper
import Swiper from "swiper"
import '../../../../node_modules/_swiper@4.5.0@swiper/dist/css/swiper.min.css'

import Vue from 'vue'

export default {
    name: 'Banner',
    data () {
        return {
            banners: [],
            
        }
    },
    mounted () {
        var Datee = Date.now()
        var c = Datee.toString()
        // console.log(Datee)
        // console.log(c)
        // console.log(typeof c)
        var b = c.substr(5, 7)
        // console.log(b)
        
        
        // mounted钩子函数，此时，组件已经出现在页面中，数据、真实dom都已经处理好了,事件都已经挂载好了，可以在这里操作真实dom等事情...
        // https://m.maizuo.com/gateway?type=2&cityId=110100&k=5568277
        this.$http.get('/json/banner.json', {
            // 参数
            params: {
            
            cityId: 110100,
            type: 2,
            k: b,}
        }).then(res => {
            console.log("banner", res.data);
            // 将数据绑定到banners上
            this.banners = res.data.data
            // 此处 nextTick里面的代码会在DOM更新后执行
            Vue.nextTick(() => {
                new Swiper('.banner', {
                    pagination: {
                        el: '.swiper-pagination'
                    }
                }) 
            })
        })

        // this.$http.get("/mzs/youpin/doGetMianxiList").then(res => {
        //     console.log(res.data)
        // }, res => {
        //     console.info("失败")
        //         // })
        //         this.$http.get('/apis/ithil_j/activity/movie_annual2017').then(res => {
        // 	console.log(res.data)
        // }, res => {
        //     console.info('调用失败');
        // })
    }
}
</script>
<style lang="less">
.swiper-container{
    .swiper-slide ,.swiper-wrapper{
        height: 2.1094rem;
        img {
            width: 100%;
            height: 100%;
        }
    }
}
</style>
