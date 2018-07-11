<template>
  <div id="app">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">
    <header>
      <h1>This is header</h1>
    </header>
    <menu-header>
      
    </menu-header>
    <router-view/>
    <footer>
      <div class="left_footer">
        <h3>Contact</h3>
        <p><img class="cnt_logo_footer" src="./assets/images/png/placeholder.png" alt="contact">18 Rue de la Cassotte 25000 Besancon France</p>
       <p><img class="cnt_logo_footer" src="./assets/images/png/smartphone-call.png" alt="contact">+33 7 69 21 70 65</p>
         <p><img class="cnt_logo_footer" src="./assets/images/png/message-closed-envelope.png" alt="contact">nenad.p@protonmail.com</p>
 <a href="https://www.linkedin.com/in/nenadpasajlic/"> <i class="fab fa-linkedin-in size:5x cnt_logo_footer"></i></a>
 <a href="https://github.com/nelep90"> <i class="fab fa-github size:5x cnt_logo_footer"></i> </a>
     </div> 
<br/>
 <p class="center gray">Copyright Nenad Pasajlic</p>
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
.center{
  text-align: center;
  justify-content: center;
}
.gray{
color: gray;
}
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
width: 100%;
height: auto;
padding:  0 2%; 
color: white;
bottom: 0;
position: fixed;
background-color: black;

}
.left_footer{
  text-align: left; 
  width: 70%;
  color: gray;
 
  height: auto;
}

.cnt_logo_footer{
  width: 25px;
  height: 25px;
  float: left;
  padding-right: 10px;
  font-size:32px;
  color: gray; 
}
</style>
