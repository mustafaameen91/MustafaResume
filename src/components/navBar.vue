<template>
  <div class="hello">
    <nav>
      <ul>
        <li><router-link to="/" exact>Home</router-link></li>
        <li><router-link to="/projects" exact>Projects</router-link></li>
        <li><router-link to="/contact" exact>Contact</router-link></li>
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
  padding:0 ;
  height: 100vh;
  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
}
li{
  flex-grow: 1;
  list-style-type: none;
  padding: 0;
}
li a {
  text-decoration: none;
  color: #000;
}
.router-link-active{
  background-color: #123;
  color: #eee;
}
</style>
