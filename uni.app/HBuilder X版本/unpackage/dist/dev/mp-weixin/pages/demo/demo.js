"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_calendar2 = common_vendor.resolveComponent("uni-calendar");
  const _easycom_my_list2 = common_vendor.resolveComponent("my-list");
  const _easycom_my_nav2 = common_vendor.resolveComponent("my-nav");
  (_easycom_uni_calendar2 + _easycom_my_list2 + _easycom_my_nav2)();
}
const _easycom_uni_calendar = () => "../../uni_modules/uni-calendar/components/uni-calendar/uni-calendar.js";
const _easycom_my_list = () => "../../components/my-list/my-list.js";
const _easycom_my_nav = () => "../../components/my-nav/my-nav.js";
if (!Math) {
  (_easycom_uni_calendar + _easycom_my_list + _easycom_my_nav)();
}
const _sfc_main = {
  __name: "demo",
  setup(__props) {
    return (_ctx, _cache) => {
      return {};
    };
  }
};
wx.createPage(_sfc_main);
