<template>
<div>
     <router-link to="/">
     <section class="x">
  <h1 class="white">Home</h1>    
   </section>
   </router-link>
    
   <router-link to="/Cv">
<section class="y">
  <h1 class="white">CV</h1>
</section>
  </router-link>
  
<router-link to="/Projects">
<section class="x">
  <h1 class="white">Projects</h1>
</section>
</router-link>

<router-link to="/About">
<section class="y">
  <h1 class="white">About</h1>
</section>
</router-link>

<router-link to="/Contact">
<section class="x">
  <h1 class="white">Contact</h1>
</section>
</router-link>
    
    </div>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
        menuElements : [
            {
                url: '/',
                name: 'Home'
            },
            {
                url: '/cv',
                name: 'CV'
            },
            {
                url: '/projets',
                name: 'Projets'
            },
              {
                url: '/about',
                name: 'About'
            },
            {
                url: '/contact',
                name: 'Contact'
            },
        ]
    }
  }
}
</script>

<style lang="scss" scoped>
    ul {
        display: flex;
        justify-content: space-between;
        list-style-type: none;
        max-width:1300px;
        margin: 0 auto;
    }

    @media screen and (max-width: 640px) {
        ul {
            display: block;
        }
         /*slider */
    .white{
  color: white;
}
.x {
float:left;
width:10%;
height:150px;
background: url('http://bedirhan.hol.es/wp-content/gallery/Resimler/manzara-resim-4.jpg') no-repeat local;
transition: all 0.5s linear;
-webkit-transition: all 0.5s linear;
-moz-transition: all 0.5s linear;
margin:0;
padding:0;
}

.x:hover {
transition: all 0.5s linear;
-webkit-transition: all 0.5s linear;
-moz-transition: all 0.5s linear;
width:150px;
height:150px;

}
.y {
float:left;
width:10%;
height:150px;
background:url('https://www.qdtricks.net/wp-content/uploads/2016/05/hd-road-wallpaper.jpg') no-repeat local;
transition: all 0.5s linear;
-webkit-transition: all 0.5s linear;
-moz-transition: all 0.5s linear;
}
.y:hover {
transition: all 0.5s linear;
-webkit-transition: all 0.5s linear;
-moz-transition: all 0.5s linear;
width:150px;
height:150px;
}

    }
 @media screen and (min-width: 640px){
    /* min width 768px */
    /*slider */
    .white{
  color: white;
}
.x {
float:left;
 width:100px;
 height:600px;
background: url('http://bedirhan.hol.es/wp-content/gallery/Resimler/manzara-resim-4.jpg') no-repeat local;
transition: all 0.5s linear;
 -webkit-transition: all 0.5s linear;
 -moz-transition: all 0.5s linear;
 margin:0;
 padding:0;
 }

 .x:hover {
 transition: all 0.5s linear;
 -webkit-transition: all 0.5s linear;
 -moz-transition: all 0.5s linear;
 width:400px;
 height:600px;

 }
 .y {
 float:left;
width:100px;
height:600px;
 background:url('https://www.qdtricks.net/wp-content/uploads/2016/05/hd-road-wallpaper.jpg') no-repeat local;
 transition: all 0.5s linear;
 -webkit-transition: all 0.5s linear;
 -moz-transition: all 0.5s linear;
 }
 .y:hover {
 transition: all 0.5s linear;
 -webkit-transition: all 0.5s linear;
 -moz-transition: all 0.5s linear;
 width:400px;
 height:600px;
 }
}

</style>
