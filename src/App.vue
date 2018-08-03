<template>

  <div id="app">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">
    <header>      
      <h1 class="pad">Hello Salut  3драво </h1> 
      <h2>My name is Nenad Pašajlić  and welcome to my portfolio page</h2>
         <menu-header></menu-header>  
    </header>
    
    <router-view/>
<!-- <section class="main">
       
         </section> -->
    <!-- <footer class="footer">
      <div class="left_footer">
        <h4>Contact</h4>        
        <p><img class="cnt_logo_footer"  src="/static/assets/images/png/placeholder.png" alt="contact">18 Rue de la Cassotte 25000 Besancon France</p>
       <p><img class="cnt_logo_footer" src="/static/assets/images/png/smartphone-call.png" alt="contact">+33 7 69 21 70 65</p>
         <p><img class="cnt_logo_footer" src="/static/assets/images/png/message-closed-envelope.png" alt="contact">nenad.p@protonmail.com</p>
 <a href="https://www.linkedin.com/in/nenadpasajlic/"> <i class="fab fa-linkedin-in size:4x cnt_logo_footer"></i></a>
 <a href="https://github.com/nelep90"> <i class="fab fa-github size:4x cnt_logo_footer"></i> </a>
     </div> 
<br/>
 <p class="center gray">Copyright Nenad Pasajlic</p>
   </footer> -->
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
html,body {  
  margin: 0;
    padding: 0;   
    width: 100%;
    height: 100%;
}

  #app {       
    width: 100%;  
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;    
  }

.pad{
  padding: 0;
  margin: 0;
  padding: 4%;
}
.center{
  text-align: center;
  justify-content: center;
  padding: 2%;
}
.gray{
color: gray;
}
  .main{
    width: 100%;
  margin: 0 auto;
  padding: 0 auto;
     }
  /*header*/
  header {    
  width: 100%;
  height: 200px; 
  margin: 0;
  padding: 0;   
  background-image: url("https://nenadp.promo-17.codeur.online/dist/static/assets/images/header.jpg");
  background-repeat: no-repeat;
  background-position: center;
  color: white;
}

header > h1,h2{
  margin: 2%;
}
.navbar {
  justify-content: center;
  overflow: hidden;
  background-color: black;
  position: fixed;
  bottom: 0;
  width: 100%;
}

.navbar a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.navbar a:hover {
  background: white;
  color: black;
}

.navbar a.active {
  background-color: #4CAF50;
  color: white;
}

.main {
  padding: 16px;
  margin-bottom: 30px;
}
  /* footer
footer{
width: 100%;
padding: 0;
margin: 0;
bottom:0;
right: 0;
left: 0;
height: auto;
color: white;
background-color: black;

}
footer  p{
  font-size: 10px;  
}
.left_footer{ 
      width: auto;
  padding-top: 2%;
    margin-left: 7%;
    text-align: left;
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
} */
</style>
