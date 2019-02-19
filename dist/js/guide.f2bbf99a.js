(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["guide"],{2161:function(t,e,o){},"59f2":function(t,e,o){"use strict";var s=o("8718"),a=o.n(s);a.a},"65d1":function(t,e,o){"use strict";var s=o("efc8"),a=o.n(s);a.a},8718:function(t,e,o){},a0e7:function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"full-page guide-main"},[o("div",{staticClass:"margin-top"},[o("van-cell",{staticStyle:{background:"transparent"},attrs:{"arrow-direction":"down","is-link":""},on:{click:t.toSetLanguage}},[o("span",{attrs:{slot:"title"},slot:"title"}),o("span",{staticClass:"text-tip-color"},[t._v(t._s(t.languages[t.$store.state.setting.language]))])])],1),t._m(0),o("div",{staticClass:"text-center big-font guide-middle-text text-tip-color",domProps:{innerHTML:t._s(t.$t("wallet.guideTip"))}}),o("div",{staticClass:"guide-container"},[o("van-button",{attrs:{size:"large",round:"",loading:t.loading,type:"primary"},domProps:{textContent:t._s(t.$t("wallet.createWallet"))},on:{click:t.createWallet}}),o("br"),o("br"),o("van-button",{staticClass:"border-color text-primary",attrs:{size:"large",round:"",loading:t.loading},domProps:{textContent:t._s(t.$t("wallet.recoverWallet"))},on:{click:t.toRecoveryWallet}})],1),o("div",{staticClass:"text-center text-tip-color guide-protocol-text"},[t._v("\n    "+t._s(t.$t("wallet.guideText"))+" "),o("span",{staticClass:"text-primary",on:{click:t.showUserProtocol}},[t._v(t._s(t.$t("wallet.guideProto")))])]),o("coin-type-select",{ref:"coinTypeSelect"}),o("user-protocol",{ref:"userProtocol"}),o("language-setting",{ref:"languageSetting"})],1)},a=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"guide-img"},[o("img",{attrs:{src:"static/img/guide.png"}})])}],n=o("db49"),i=o("afed"),l=o("cd12"),c=o("ab0b"),r=o("6119"),u={components:{coinTypeSelect:i["a"],userProtocol:c["a"],languageSetting:l["a"]},data:function(){return{loading:!1,languages:r["c"].languages}},methods:{createWallet:function(){this.$refs.coinTypeSelect.show("1")},toRecoveryWallet:function(){this.$refs.coinTypeSelect.show("2")},go:function(){this.$router.push(n["a"].defaultRoute())},showUserProtocol:function(){this.$refs.userProtocol.showPopup()},toSetLanguage:function(){this.$refs.languageSetting.show()}},created:function(){}},g=u,p=(o("65d1"),o("048f")),f=Object(p["a"])(g,s,a,!1,null,"f5936a0a",null);f.options.__file="guide.vue";e["default"]=f.exports},ab0b:function(t,e,o){"use strict";var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("van-popup",{staticStyle:{width:"100%",height:"100%"},attrs:{position:"bottom"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[o("van-nav-bar",{attrs:{title:t.$t("setting.userProtocol")},on:{"click-left":t.closePopup}},[o("span",{attrs:{slot:"left"},slot:"left"},[o("i",{staticClass:"ultfont ult-left"})])]),o("pl-content-block",{attrs:{offsetTop:46,offsetBottom:0}},[o("iframe",{staticStyle:{border:"none"},attrs:{src:t.protocolUrl,width:"100%",height:t.height}})])],1)},a=[],n={data:function(){return{show:!1,height:0,protocolUrl:"static/protocol/utoken-protocol-zh-CN.htm"}},methods:{closePopup:function(){this.show=!1},showPopup:function(){this.protocolUrl="static/protocol/utoken-protocol-".concat(this.$store.state.setting.language,".htm"),this.setHeight(),this.show=!0},setHeight:function(){this.height=document.documentElement.clientHeight-46+"px"}}},i=n,l=(o("bfc5"),o("048f")),c=Object(l["a"])(i,s,a,!1,null,"18af4ba7",null);c.options.__file="user-protocol.vue";e["a"]=c.exports},bfc5:function(t,e,o){"use strict";var s=o("2161"),a=o.n(s);a.a},cd12:function(t,e,o){"use strict";var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"currency-select"},[o("van-popup",{staticClass:"popup-wapper",staticStyle:{width:"100%",height:"100%"},attrs:{position:"right"},model:{value:t.showPop,callback:function(e){t.showPop=e},expression:"showPop"}},[o("van-nav-bar",{attrs:{title:t.$t("setting.languages")},on:{"click-left":t.close,"click-right":t.onClickRight}},[o("span",{attrs:{slot:"left"},slot:"left"},[o("i",{staticClass:"ultfont ult-left"})]),o("span",{staticClass:"normal-font text-primary",attrs:{slot:"right"},domProps:{textContent:t._s(t.$t("common.save"))},slot:"right"})]),o("div",{staticClass:"item-block"},[o("van-radio-group",{model:{value:t.activeItem,callback:function(e){t.activeItem=e},expression:"activeItem"}},[o("van-cell-group",{attrs:{border:!1}},t._l(t.languages,function(e,s){return o("van-cell",{key:s,attrs:{title:e,clickable:""},on:{click:function(e){t.onItemSelect(s)}}},[o("van-radio",{attrs:{name:s}})],1)}),1)],1)],1)],1)],1)},a=[],n=(o("ff66"),o("ea23"),o("dbff"),o("6119")),i={data:function(){return{showPop:!1,activeItem:"",languages:n["d"]}},methods:{show:function(){this.activeItem=this.$store.state.setting.language,this.showPop=!0},close:function(){this.showPop=!1},onItemSelect:function(t){this.activeItem=t},onClickRight:function(){var t=this;this.$collecitons.setting.updateSetting(function(e){return e.language=t.activeItem,t.$store.dispatch("setLanguage",t.activeItem),t.$store.dispatch("setCurrencyUnit",n["e"][t.activeItem]),t.$i18n.locale=t.activeItem,e.language=t.activeItem}),this.close()}}},l=i,c=(o("59f2"),o("048f")),r=Object(c["a"])(l,s,a,!1,null,"67af9567",null);r.options.__file="language-setting-pop.vue";e["a"]=r.exports},efc8:function(t,e,o){}}]);