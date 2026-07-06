"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    common_vendor.onLoad((options) => {
      console.log("页面加载，携带参数：", options);
    });
    common_vendor.onShow(() => {
      console.log("页面显示");
      const pages = getCurrentPages();
      console.log("1111", pages);
    });
    common_vendor.onReady(() => {
      console.log("页面初次渲染完成");
    });
    common_vendor.onHide(() => {
      console.log("页面隐藏");
    });
    common_vendor.onUnload(() => {
      console.log("页面卸载");
    });
    common_vendor.onPullDownRefresh(() => {
      console.log("下拉了");
    });
    common_vendor.onPageScroll((e) => {
      console.log("页面滚动，滚动距离：", e.scrollTop);
    });
    common_vendor.onReachBottom(() => {
      console.log("页面上拉触底");
    });
    common_vendor.onShareAppMessage(() => {
      return {
        title: "分享标题",
        path: "/pages/index/index"
      };
    });
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.t(_ctx.title)
      };
    };
  }
};
_sfc_main.__runtimeHooks = 3;
wx.createPage(_sfc_main);
