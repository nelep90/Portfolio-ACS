<template>
<div>
<h1>Mes projets</h1>
<main>
		
		<figure class="image_2">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample33.jpg">
			<figcaption>Image 2</figcaption>
		</figure>

    <figure class="image_2">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample33.jpg">
			<figcaption>Image 2</figcaption>
		</figure>
    
    <figure class="image_2">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample33.jpg">
			<figcaption>Image 2</figcaption>
		</figure>
		
	</main>
</div>
</template>

<script>
export default {
  name: 'Projects',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
	font-family: 'Raleway';
}

main{
	display: flex;
	flex-direction: row;
	justify-content: space-around;
}

figure{
	position: relative;
	height: 150px;
	margin-right: 10px;
	margin-left: 10px;
}

figcaption{
	text-align: center;
	position: absolute;
	width: 100%;
	bottom: -30px;
}

figure:hover figcaption{
	visibility: visible;
}


.image_2{
	overflow: hidden;
}

.image_2 img{
	transition: 0.8s;
	filter: blur(5px);
}

.image_2 img:hover{
  	transform: scale(1.15);
  	filter: blur(0px);
}



</style>
