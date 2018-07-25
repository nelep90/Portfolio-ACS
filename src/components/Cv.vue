<template>
<div>

<img class="img_cv" src="/static/pdf/cv.jpg" alt="cv">
  <p>Sur ce lien vous pouvez retrouvez mon CV</p>
<a href="./static/pdf/cv.pdf"><button class="btn"><i class="fa fa-download"></i> Telecharger</button> </a>
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
