<script>
  import { onLoad, onShow, onReady, onHide, onUnload, onPageScroll, onReachBottom, onShareAppMessage, onPullDownRefresh } from '@dcloudio/uni-app';
  // onLoad 参数为上个页面传递过来的数据
  onLoad((options) => {
    console.log('页面加载，携带参数：', options);
  });
  // onShow 页面每次出现在屏幕上都触发
  onShow(() => {
    console.log('页面显示');
  });
  // onReady 组件已经挂载完成，dom已可用
  onReady(() => {
    console.log('页面初次渲染完成');
  });
  // onHide
  onHide(() => {
    console.log('页面隐藏');
  });
  // onUnload
  onUnload(() => {
    console.log('页面卸载');
  });
  //监听用户下拉动作  
  onPullDownRefresh(() => {
    console.log("下拉了")
  });
  // onPageScroll
  onPageScroll((e) => {
    console.log('页面滚动，滚动距离：', e.scrollTop);
  });
  // onReachBottom
  onReachBottom(() => {
    console.log('页面上拉触底');
  });
  // onShareAppMessage
  onShareAppMessage(() => {
    return {
      title: '分享标题',
      path: '/pages/index/index'
    };
  });
</script>

<style>
  /*每个页面公共css */
</style>
