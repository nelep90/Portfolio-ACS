<template>
<body>
  <div id="app">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">
    <header>      
      <h1>Hello Salut  3драво </h1> 
      <h2>My name is Nenad Pašajlić  and welcome to my portfolio page</h2>
         <menu-header></menu-header>  
    </header>
    
    <router-view/>
<section class="main">
       
         </section>
    <footer class="footer">
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
  </body>
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
    
}

  #app {   
    
    width: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;    
  }


.center{
  text-align: center;
  justify-content: center;
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
  background: url("./assets/images/header.jpg");
  background-repeat: no-repeat;
  background-position: center;
  color: white;
  
}

  /*footer */
footer{
width: 100%;
bottom:0;
right: 0;
bottom: 0;
left: 0;
height: auto;
color: white;
background-color: black;

}
footer  p{
  font-size: 9px;
}
.left_footer{ 
    text-align: left;
    width: 100%;
    color: gray;
    margin-top: 5%;
    margin-left: 5%;
    padding: 2%;
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
