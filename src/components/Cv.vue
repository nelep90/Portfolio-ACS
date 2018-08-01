<template>
<div>

<!-- <img class="img_cv" src="/static/pdf/cv.jpg" alt="cv">
  
<a href="./static/pdf/cv.pdf"><button class="btn"><i class="fa fa-download"></i> Telecharger</button> </a> -->

  <pdf src="./static/pdf/cv.pdf"></pdf>
<p>Sur ce lien vous pouvez telecharger mon CV</p>

             <a href="../static/pdf/cv.pdf" class="button" download><i class="fa fa-download"></i>Telecharger</a>
          
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
.btn {
    background-color: DodgerBlue;
    border: none;
    color: white;
    padding: 12px 30px;
    cursor: pointer;
    font-size: 20px;
}

/* Darker background on mouse-over */
.btn:hover {
    background-color: RoyalBlue;
}

</style>
