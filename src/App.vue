<template>
  <div id="app">
      <app-nav class="navBar"></app-nav>
    <transition name="bar">
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
  height: 100vh;
}
.content{
  background-color: blue;
  flex-grow: 1;
}
.navBar{
  background-color: red;

}
.bar-enter-active, .bar-leave-active{
  animation: foo .5s;
}
.bar-enter, .bar-leave-to{
  opacity: 0;
  color:#333;
}
@keyframes foo {

  0%{
    opacity: 0;
    color: #037432;
  }
  50%{
    opacity: .5;
    color: #123093;
  }
  100%{
    opacity: 1;
    color: #121212;
  }

}
</style>
