<template>
  <div id='app'>
    <app-header></app-header>    
    <home></home>
  </div>
</template>
<script>


import Home from './components/pages/Home/Home';
import AppHeader from './components/commons/Header/Header'

export default {
  name: 'App',
  components: {
    Home,
    AppHeader
  }
}
</script>

<style lang='less'>

</style>
