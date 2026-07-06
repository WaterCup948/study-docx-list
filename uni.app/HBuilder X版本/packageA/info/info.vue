<template>
	<text>info</text>
</template>

<script>
	import { onShow } from "@dcloudio/uni-app"
	onShow(() => {
		const pages = getCurrentPages();
		console.log(pages)
	})
</script>

<style>
</style>