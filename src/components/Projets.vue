<template>
<div class="#app">
   <h1> Mes projets</h1>
      <div class="text">
        <div v-bind:key="comp" v-for="comp in comps"> 
          <div class="lk" id="pj-name"><h3> {{comp.project_name}}</h3></div>
         <a :href="`${ comp.url}`" target="_blank">      <img class="image-projet" v-bind:src="`${comp.image}`" alt=""> </a>
               <!-- <div v-bind:key="im" v-for="im in lol"> 
              <img class="image-projet" v-bind:src="`${im.picture_2}`" alt=""> -->
        
        <div class="pj txt" id="pj-des"> <b>Description du projets :</b> <br/> {{comp.description}}</div>
		<div class="pj txt" id="pj-des"> <b>Langage de programation utilisé:</b><br/> {{comp.programing_lng}}</div>
		<div class="pj txt" id="pj-des"><b>Technologie utilisée:</b><br/> {{comp.techno}}</div>
   <div id="lk"> 
       <!-- <button class="mybtn">  <a :href="`${ comp.url}`" target="_blank"> <p class="decouvrir" >Lien vers le site WEB</p></a></button> 
      <button class="mybtn">  <a :href="`${ comp.url_git}`" target="_blank"> <p class="decouvrir" >Lien vers le Github</p></a></button>  -->
      <a :href="`${ comp.url_git}`" target="_blank"> <i class="icon fab fa-github-square"> </i></a>
      <hr class="line">
      </div>

        </div>
      </div>
    </div>

</template>

<script>
import axios from 'axios'
export default {
  name: 'projects',
  data () {
    return {
      comps: {}
    }
  },
  created () {
    axios.get('http://localhost/PWA/static/projects.php')
      .then(response => {
        this.comps = response.data
        console.log(response.data);
      })
      .catch(Err => {
      })
  },
  

}
</script>

<style>
#lk {
     padding-top: 5%;
    padding-bottom: 5%;
}
/* .mybtn {
     text-decoration: none;
    color: #333;
    background-color: #fff;
    border-color: #ccc;
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
    display: flex;
    margin: auto;
} */
.image-projet {
width: 98%;
margin: 0 auto;
	border-radius: 3px;
	box-shadow: 0 3px 6px rgba(0,0,0,0.9);
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
.pj {
  font-size: 12px;
  padding-top: 5%;
}
.icon{
  color: black;
    font-size:35px;
}
.line{
  width: 80%;
  opacity: 0.6;
}
</style>
