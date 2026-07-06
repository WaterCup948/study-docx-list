"use strict";
const common_vendor = require("../../common/vendor.js");
common_vendor.onShow(() => {
  const pages = getCurrentPages();
  console.log(pages);
});
const _sfc_main = {};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
