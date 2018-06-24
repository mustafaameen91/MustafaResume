<template>
  <div class="hello">
    <transition name="foo">
      <h1 v-if="show">{{ msg }}</h1>
    </transition>
    <button v-on:click="show = !show">first animate</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

  data(){
    return{
    msg:'Welcome to Second page',
    show:true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
.foo-enter-active, .foo-leave-active {
  transition: opacity .5s;
}
.foo-enter, .foo-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
