<template>
  <div class="hello">
    <nav>
      <ul>
        <li><router-link to="/" exact>first</router-link></li>
        <li><router-link to="/second" exact>second</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

  data(){
    return{
    msg:'Welcome to the new version of Vue'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{
  margin: 0;
  padding: 5px;
}
li{
  list-style: none;
  padding: 10px;
}
</style>
