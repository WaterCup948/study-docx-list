// <script>
// 	export default {
// 		onLaunch: function() {
// 			console.log('App Launch')
// 		},
// 		onShow: function() {
// 			console.log('App Show')
// 		},
// 		onHide: function() {
// 			console.log('App Hide')
// 		}
// 	}
// </script>
<script setup>
import { onLaunch } from "@dcloudio/uni-app"
onLaunch(()=>{
	console.log('App Launch')
})
</script>
<style>
	/*每个页面公共css */
</style>
