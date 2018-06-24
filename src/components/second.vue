<template>
  <div class="page">
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

</style>
