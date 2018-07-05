<template>
  <div id="app">
    <header>
      <h1>This is header</h1>
    </header>
    <menu-header></menu-header>
    <router-view/>
    <footer>
      <div class="left_footer">
        <h3>Contact</h3>
     </div>
    </footer>
  </div>
  
</template>

<script>

import MenuHeader from './components/MenuHeader'  

export default {
  name: 'App',
  components: {
    MenuHeader,
  },
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  /*header*/
  header {
    
  margin: 0;
    padding: 0;
  height: 200px;
  color: #ffffff;
  background-color: red;
  /*background-image: url("assets/images/mobile phone_header.jpg"); */
  background-repeat: no-repeat;
  background-position: center;

  background-size: 100%;opacity: 0.6;;
}

  /*footer */
footer{
  color: white;
  bottom: 0;
  position: fixed;
background-color: black;
height: 15%;
width: 100%;
}
.left_footer{
  width: 50%;
  color: aliceblue;
  background-color: rebeccapurple;
}
</style>
