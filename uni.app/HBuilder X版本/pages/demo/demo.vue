<template>
	<view>
		<text>Demo</text>
		<navigator url="/pages/index/index" open-type="switchTab">跳转首页</navigator>
		<navigator url="/packageA/info/info" open-type="navigate">跳转</navigator>
		<!-- <button @click="jump">跳转</button> -->
		<uni-calendar></uni-calendar>
	</view>
	
	<my-list></my-list>
	
	<my-nav></my-nav>
</template>

<script setup>
	function jump(){
		uni.navigateTo({
			url:"/packageA/info/info"
		})
	}
</script>

<style></style>