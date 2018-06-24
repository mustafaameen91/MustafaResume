<template>
  <div id="app">
      <app-nav class="navBar"></app-nav>
    <transition name="bar" mode="out-in">
      <router-view class="content"></router-view>
    </transition>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import appNav from './components/navBar.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    'app-nav':appNav
  },
  data(){
    return{}
  }
}
</script>

<style>
*{
  box-sizing: border-box;
}
body{
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
}
.content{
  background-color: #999;
  flex-grow: 1;
}
.navBar{
  background-color: #eee
}
.bar-enter-active, .bar-leave-active {
  transition: opacity 1s
}
.bar-enter, .bar-leave-to {
  opacity: 0;
  color: #e34567
}
</style>
