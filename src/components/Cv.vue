<template>
<div class="app">
<h1>Mon CV</h1>

 <img class="img_cv" src="../assets/pdf/cv.jpg">

  <p>Sur ce lien vous pouvez retrouvez mon CV</p>
</div>
</template>

<script>
import pdf from 'vue-pdf'

export default {
  name: 'Cv',
  data () {
    return {
    }
  },
   components: {
    pdf
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img_cv{
 width: 90%;
  }
</style>
