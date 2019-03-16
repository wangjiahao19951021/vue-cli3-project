<template>
    <div class='home page'>
        <banner></banner>
        <HomeMovieBox v-for="type in types" :key="type.id" :type="type.url_type" :count="type.count" :title="type.title"></HomeMovieBox>    
    </div>
</template>
<script>
import Banner from "./Banner"
import HomeMovieBox from "./MovieBox"
export default {
    name: 'Home',
    components: {
        Banner,
        HomeMovieBox
    },
    data () {
        return {
            types: [
                {id: 1, url_type: "now-playing", title: '正在热映', count: 2},
                {id: 2, url_type: "coming-soon", title: '即将上映', count: 3}
            ]
        }
    }
}
</script>
<style lang='less'>

</style>


