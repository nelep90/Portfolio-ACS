<template>
  <div class="Projet">
    <h3>Projet</h3>
    <h4>{{real.project_name}}</h4>
    <h5>Description</h5>
    <p class="descrip">{{des.description}}</p>
    <div>
    </div>
    <!-- <ul>
      <li v-bind:key="img.image" v-for="img in imgs.image">
        <img class="imgProjet" v-bind:src="img.image">
      </li>
    </ul>   
    -->
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Projet',
  data () {
   return{
    real:{'project_name':''},
    des:{'description':''},
    // img:{'image':''},
    // pgr:{'programing_lng':''},   
    // tec:{'techno':''},
    // link:{'url':''}
    }
  }, 
    created () {  
    this.id = this.$route.params
      console.log('lol' + this.$route.params.id);
    
    axios.get('http://localhost/PWA/static/projects.php/' + this.id)
      .then(response => {       
        //  console.log(project_name)
        // console.log(response.data)
        this.real.project_name = response.data.project_name
        this.des.description = response.data.description
        // this.img.image = response.data.image            
                 
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
  font-size: 24px;
  color: black;
  text-align: center;
}
h5{
  color: #003150;
  font-family: "blue";
  font-size: 20px;
  margin-left: 6%;
}
.descrip{
  color: black;
}
a{
  text-decoration: none;
}
ul{
  padding: 0;
  -webkit-padding-start: 0;
  text-align: center;
  margin: 0;
}
li{
  list-style: none;
  display: inline;
  margin: auto;
}
.imgProjet{
  width: 40%;
  height: 40%;
  margin: 1%;
}
.imgComp{
  width: 30%;
  height: 30%;
  margin: 1%;
}
.projet{
  margin-bottom: 25%;
}
}
</style>
