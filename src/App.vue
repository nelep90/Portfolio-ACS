<template>
  <div id="app">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">
    <header>
      <img class="header" src="./assets/images/mobile phone_header.jpg"> 
    </header>
     <menu-header></menu-header>
    <router-view/>
<section class="main">
        <h1>this is main</h1>
         </section>
    <footer>
      <div class="left_footer">
        <h4>Contact</h4>
        <p><img class="cnt_logo_footer" src="./assets/images/png/placeholder.png" alt="contact">18 Rue de la Cassotte 25000 Besancon France</p>
       <p><img class="cnt_logo_footer" src="./assets/images/png/smartphone-call.png" alt="contact">+33 7 69 21 70 65</p>
         <p><img class="cnt_logo_footer" src="./assets/images/png/message-closed-envelope.png" alt="contact">nenad.p@protonmail.com</p>
 <a href="https://www.linkedin.com/in/nenadpasajlic/"> <i class="fab fa-linkedin-in size:4x cnt_logo_footer"></i></a>
 <a href="https://github.com/nelep90"> <i class="fab fa-github size:4x cnt_logo_footer"></i> </a>
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
html{
  padding: 0;
  margin: 0;
}
body{
  height: 100%;
}

.center{
  text-align: center;
  justify-content: center;
}
.gray{
color: gray;
}
  #app {
    padding: 0;
    margin: 0;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0;
    padding: 0;
  }
  /*header*/
  .header {    
  width: 100%;
  margin: 0;
  padding: 0;
  height: 150px;
  color: #ffffff; 
  /* background-image:url('./assets/images/mobile phone_header.jpg');  */
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
}

  /*footer */
footer{
width: 100%;
bottom: 0;
position: absolute;
height: auto;
color: white;
background-color: black;
}
footer p{
  font-size: 9px;
}
.left_footer{
  text-align: left; 
  width: 100%;
  color: gray;

  height: auto;
}

.cnt_logo_footer{
  width: 15px;
  height: 15px;
  float: left;
  padding-right: 10px;
  font-size:22px;
  color: gray; 
}
</style>
