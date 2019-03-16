<template>
    <div class="home-movie-box">
        <ul class="movie-list">
            <HomeMovieItem></HomeMovieItem>
            <div class="more-button">更多{{ title }}电影</div>            
        </ul>
        {{ films }}
    </div>
</template>
<script>
import HomeMovieItem from "./MovieItem"
export default {
    name: 'HomeMovieBox',
    props: ["type", "count", "title"],
    components: {
        HomeMovieItem
    },
    data () {
        return {
            films: []
        }
    },
    // 方法
    methods: {
        getFilms () {
            // https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=9305437
            let { count , type } = this
            this.$http.get('/json/moviebox_'+ type +'.json', {
                params: {
                    type: type,
                    count: count,
                    _t: Date.now()
                }
            }).then(res =>{
                console.log(type,  res.data)
                this.films = res.data
            })
        }
    },
    created () {
        // 这里进行初始数据获取
        this.getFilms()
    }
}
</script>
<style lang="less">
.home-movie-box {
    .movie-list {
        padding-top: 18px;
        margin-bottom: 10px;
    }
    .more-button {
        width: 160px;
        height: 30px;
        border: 1px solid #aaa;
        border-radius: 15px;
        margin: 10px auto 30px;
        text-align: center;
        line-height: 30px;
        font-size: 12px;
        color: #616161;
        cursor: pointer;
    }
}
</style>
