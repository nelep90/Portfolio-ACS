<template>
	<li :style="liStyles">
		<a :href="item.url" :style="aStyles">
			<h2 v-text="item.title" :style="h2Styles"></h2>
			<p v-text="item.text" :style="pStyles"></p>
		</a>
    </li>
</template>
<script>
	export default {
		props: {
			item: {
				type: Object
			},
			styles: {
				type: Object
			}
		},
		computed: {
			liStyles() {
				const li = {
					backgroundImage: 'url(' + this.item.image + ')'
				};

				if(this.styles && this.styles.li)
					Object.assign(li, this.styles.li);

				return li;
			},
			aStyles() {
				return this.styles && this.styles.a ? this.styles.a : {};
			},
			h2Styles() {
				return this.styles && this.styles.h2 ? this.styles.h2 : {};
			},
			pStyles() {
				return this.styles && this.styles.p ? this.styles.p : {};
			}
		}
	}
</script>
<style>

</style>