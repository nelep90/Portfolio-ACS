<template>
  <div class="realisations">
    <h3>Projets</h3>
    <div class="container">
      <div class="liste">
        <li v-bind:key="real.image" v-for="real in reals">
          <figure>
            <router-link class="desc" v-bind:to="`/Projet/${real.project_id}`"><img class="logoReal" v-bind:src="real.image">
            <figcaption class="titre">{{real.project_name}}</figcaption></router-link>
          </figure>

		   <figure>
            <router-link class="desc" v-bind:to="`/Projet/${real.project_id}`"><img class="logoReal" v-bind:src="real.image">
            <figcaption class="titre">{{real.project_name}}</figcaption></router-link>
          </figure>
        </li>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Projets',
  data () {
    return {
      reals: {}
    }
  },
  created () {
	  console.log('coucou');
        axios.get('http://localhost/PWA/static/projects.php')
      .then(response => {
        console.log(response)
        this.reals = response.data
        // this.comp = JSON.parse(response.data)
      })
      .catch(Err => {
        // console.log(err)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


@media screen and (max-width: 640px){
.nav{
 display: flex;
 justify-content: space-around;
 position: fixed;
 width: 100%;
 padding-top: 3%;
 bottom: 0;
 background-color: #ddf2ff;
 border-top: #003150 solid 2px;
}
.desc{
  width: 50px;
  height: 50px;
}
.logo{
  width: 90%;
  height: 90%;
}
h4{
  font-family: "blue";
  font-size: 18px;
  color: #003150;
  margin-left: 10%;
}
.liste{
  list-style: none;
  text-align: center;
  display: inline;
}
li{
  display: inline;
}
figure{
  width: 50%;
  height: 50%;
  margin: auto;
  margin-bottom: 20%;
  display: inline-block;
  position: relative;
}
.logoReal{
  width: 50%;
  height: 50%;
  margin: auto;
  border-radius: 15px;
}
.titre{
  color: #003150;
  text-align: center;
  height: 40%;
  width: 100%;
  margin: auto;
  position: absolute;
}
a{
  text-decoration: none;
  font-family: "blue";
  font-size: 22px;
}
.container{
  width: 90%;
  text-align: justify;
  margin: auto;
}
.realisations{
  margin-bottom: 25%;
}
}
</style>
