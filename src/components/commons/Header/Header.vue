<template>
    <header class='app-header'>
        <nav>
            <div class='left'>
                <div class='title-icon' @click = 'isNavShow = !isNavShow'><i class='fa fa-navicon'></i></div>
                <div class='title'>卖座电影</div>
            </div>
            <div class='right'>
                <div class='city'>北京</div>
                <div class='user'><i class='fa fa-user-o'></i></div>
            </div>
        </nav>
        <!-- 如果是驼峰的话 必须使用 横杠  -->
        <!-- <nav-list v-if='isNavShow'></nav-list> -->
        <nav-list :is-nav-show = 'isNavShow' :close-nav = 'closeNav'></nav-list>
    </header>
</template>
<script>
import NavList from './NavList'
export default {
    name: 'AppHeader',
    components: {
        NavList
    },
    data () {
        return {
            isNavShow: false
        }
    },
    // 方法
    methods: {
        // 点击遮罩关闭方法
        closeNav () {
            this.isNavShow = false;
        }
    }
}
</script>
<style lang='less'>
.app-header{
    position: fixed;
    z-index: 500;
    top: 0;
    right: 0;
    left: 0;
    width: auto;
    height: 50px;
    line-height: 50px;
    overflow: hidden;
    background: #282828;
        nav {
            overflow: hidden;
            z-index: 999;
            position: relative;
            background: #282828;
        }
        .left {
            color: #fff;
            font-size: 16px;
            line-height: 50px;
            text-align: left;
            text-shadow: 0 -1px 0 rgba(0,0,0,0.8);
            width: auto;
            height: 50px;
            margin: 0 auto;
            float: left;
                .title-icon {
                    float: left;
                    width: 48px;
                    text-align: center;
                    border-right: 1px solid #222;
                    box-shadow: 1px 0 1px #363636;
                    color: #999;
                }
                .title {
                    padding: 0 1em;
                    float: left;
                    font-size: 14px;
                    color: #efefef;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    dispplay: inline-block;
                    overflow: hidden;
                }
            }
        .right {
            float: right;
            color: #999;
                .city {
                    float: left;
                    font-size: 14px;
                    padding: 0 6px;
                }
                .user {
                    float: left;
                    font-size: 16px;
                    width: 48px;
                    text-align: center;
                }
        }
  }
</style>

