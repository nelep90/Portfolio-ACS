<template>
<div class="#app">

 <img class="img_cv" src="https://nenadp.promo-17.codeur.online/dist/static/assets/images/cv.jpg" alt="cv">
  
<a href="/static/assets/pdf/cv.pdf" class="button" download><button class="btn"><i class="fa fa-download"></i> Telecharger</button> </a> 

   
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
  padding: 5%;
  width: 90%;
}
.btn {
    margin-bottom: 4%;
    background-color: DodgerBlue;
    border: none;
    color: white;
    padding: 12px 30px;
    cursor: pointer;
    font-size: 20px;
}

cv_css{
  margin: 5%;
}
/* Darker background on mouse-over */
.btn:hover {
    background-color: RoyalBlue;
}

</style>
