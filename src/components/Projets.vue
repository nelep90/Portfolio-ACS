<template>
<div class="app">
   <h1> Mes projets</h1>
      <div class="text">
        <div v-bind:key="comp" v-for="comp in comps"> 
          <div class="lk" id="pj-name"><h3> {{comp.project_name}}</h3></div>
         <a :href="`${ comp.url}`" target="_blank">      <img class="image-projet" v-bind:src="`${comp.image}`" alt=""> </a>
              
        
        <div class="pj txt" id="pj-des"> <b>Description du projets :</b> <br/> {{comp.description}}</div>
		<div class="pj txt" id="pj-des"> <b>Langage de programation utilisé:</b><br/> {{comp.programing_lng}}</div>
		<div class="pj txt" id="pj-des"><b>Technologie utilisée:</b><br/> {{comp.techno}}</div>
   <div id="lk"> 
      
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
    axios.get('https://nenadp.promo-17.codeur.online/dist/static/projects.php')
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
     padding-top: 3%;
    padding-bottom: 3%;
}


.image-projet {
width: 90%;
margin: 0 auto;
	border-radius: 3px;
	box-shadow: 0 3px 6px rgba(0,0,0,0.9);
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
 
.pj {
  font-size: 0.9em;
  padding-top: 3%;
}
.icon{
  color: black;
    font-size:35px;
}
.line{
  width: 90%;
  opacity: 0.6;
}
</style>
