<template>
    <div id="projets">
        <div v-for="project in projects">
            <h2>{{projet.title}}</h2>
            <p>{{projet.description}}</p>
            <a :href="projet.github">Voir sur github</a>
        </div>
    </div>
</template>

<script>

import {globalStore} from '../main.js'

export default {
  data () {
    return {
       projects : [
            {
                title: 'Project1',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                github: 'https://www.github.com'
            },
            {
                title: 'Project2',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                github: 'https://www.github.com'
            },
        ],
        baseUrl: globalStore.baseUrl
    }
        
  }
  ,
  methods: {
      fetchProjets () {
        var projetComponent = this; //J'enregistre le "this" actuel (qui correspond au component projets") dans une variable , car dans le .then le this ne correspondra plus à ce que je veux (undefined)
        fetch(this.baseUrl+'src/php/projets.php')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            projetComponent.projets = myJson;
        });
      }
  },
  created: function() {
      this.projets = this.fetchProjets()
  }
}
</script>