(function(e){function t(t){for(var r,o,c=t[0],u=t[1],s=t[2],l=0,f=[];l<c.length;l++)o=c[l],a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={8:0},a={8:0},i=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{0:"1daaeb4b",1:"f8ca2a92",2:"af4442cf",3:"41a24229",4:"70921b8f",5:"c86a7e35",6:"f0c9a298"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={1:1,2:1,3:1,4:1,5:1,6:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{0:"31d6cfe0",1:"9ea26ebd",2:"6061c4cc",3:"59366632",4:"713d09b6",5:"e4b4becd",6:"7d9ff37c"}[e]+".css",o=u.p+r,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var c=a[i],s=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(s===r||s===o))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){c=l[i],s=c.getAttribute("data-href");if(s===r||s===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.request=r,n(a)},f.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(f)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=i);var s,l=document.getElementsByTagName("head")[0],f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=c(e),s=function(t){f.onerror=f.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,n[1](i)}a[e]=void 0}};var d=setTimeout(function(){s({type:"timeout",target:f})},12e4);f.onerror=f.onload=s,l.appendChild(f)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;i.push([2,7]),n()})({2:function(e,t,n){e.exports=n("Vtdi")},"7EbL":function(e,t,n){},"9V+a":function(e,t,n){},Ifcr:function(e,t,n){"use strict";n.d(t,"b",function(){return c}),n.d(t,"a",function(){return s}),n.d(t,"c",function(){return l});n("Z2Ku"),n("VRzm");var r=[];function o(e){if(!r.includes(e)){var t=document.createElement("script");t.setAttribute("src",e),document.head.appendChild(t),r.push(e)}}var a=function(e){cast.framework.CastContext.getInstance().setOptions({receiverApplicationId:e,autoJoinPolicy:chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED})},i=!1;function c(e){i||(window["__onGCastApiAvailable"]=function(t){t&&a(e)},o("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"),i=!0)}var u=!1;function s(e){u||(o("//www.gstatic.com/cast/sdk/libs/caf_receiver/v3/cast_receiver_framework.js"),u=!0,f(function(){return console.log("checking..."),cast.framework.CastReceiverContext.getInstance()},function(t){console.log("started!"),e(t)},300))}function l(e){f(function(){return cast.framework.CastContext.getInstance().getCurrentSession()},function(t){var n=new chrome.cast.media.MediaInfo(e,"text/html"),r=new chrome.cast.media.LoadRequest(n);t.loadMedia(r).then(function(){console.log("Load succeed")},function(e){console.log("Error code: "+e)})},1e3)}function f(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3,r=null;try{r=e()}catch(e){}null==r?setTimeout(f,n,e,t):t(r)}},Vtdi:function(e,t,n){"use strict";n.r(t);n("VRzm");var r=n("Kw5r"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e.isCastUrl?[n("cast-receiver")]:n("div",{attrs:{id:"webview"}},[n("nav",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("🏠")]),e._v(" |\n        "),n("router-link",{attrs:{to:"/joyful"}},[e._v("Joyful")]),e._v(" |\n        "),n("router-link",{attrs:{to:"/lonely"}},[e._v("Lonely")]),e._v(" |\n        "),n("router-link",{attrs:{to:"/anger"}},[e._v("Anger")]),e._v(" |\n        "),n("router-link",{attrs:{to:"/pride"}},[e._v("Pride")])],1),n("router-view")],1)],2)},a=[],i=(n("OG14"),n("Z2Ku"),n("L9s1"),{components:{CastReceiver:function(){return n.e(0).then(n.bind(null,"Ejik"))}},computed:{isCastUrl:function(){return window.location.search.includes("?cast=1")}}}),c=i,u=(n("ZCWV"),n("KHd+")),s=Object(u["a"])(c,o,a,!1,null,null,null),l=s.exports,f=n("jE9Z");r["a"].use(f["a"]);var d=new f["a"]({routes:[{path:"/",name:"home",component:function(){return n.e(6).then(n.bind(null,"u1G+"))}},{path:"/about",name:"about",component:function(){return n.e(5).then(n.bind(null,"+CAJ"))}},{path:"/joyful",name:"joyful",component:function(){return n.e(4).then(n.bind(null,"+I2j"))}},{path:"/lonely",name:"lonely",component:function(){return n.e(3).then(n.bind(null,"cOvi"))}},{path:"/anger",name:"anger",component:function(){return n.e(2).then(n.bind(null,"u4oS"))}},{path:"/pride",name:"pride",component:function(){return n.e(1).then(n.bind(null,"Qm8k"))}}]}),p=n("lIOY");Object(p["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._t("default")],2)},m=[],h={},g=Object(u["a"])(h,v,m,!1,null,null,null),b=g.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},w=[],_={mounted:function(){document.title=this.$slots.default[0].text+" - Encourage"}},C=_,x=Object(u["a"])(C,y,w,!1,null,null,null),k=x.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"scripture"},[n("p",{staticClass:"verse-text",domProps:{innerHTML:e._s(e.verse.text)}}),n("p",{staticClass:"verse-verse"},[e._v("\n        "+e._s(e.verse.verse)+"\n        "),e.verse.trans?n("span",{staticClass:"translation"},[e._v("("+e._s(e.verse.trans)+")")]):e._e()]),e.showCastButton?n("cast-button",{staticClass:"cast-container",attrs:{url:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",mime:"video/mp4"}}):e._e()],1),n("button",{on:{click:function(t){return e.next()}}},[e._v("→")])])},E=[],O=(n("Vd3H"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("google-cast-launcher")}),P=[],A=n("Ifcr"),I={props:{url:{type:String,required:!0},mime:{type:String,required:!0}},mounted:function(){var e="3297334C";A["b"](e),A["c"](this.url,this.mime)}},q=I,B=Object(u["a"])(q,O,P,!1,null,null,null),S=B.exports,M={components:{CastButton:S},props:{verses:{type:Array,required:!0},showCastButton:{type:Boolean,default:!0}},data:function(){return{idx:0}},computed:{seq:function(){return this.verses.map(function(e,t){return[t,Math.random()]}).sort(function(e,t){return t[1]-e[1]}).map(function(e){return e[0]})},verse:function(){var e=this.verses[this.seq[this.idx]];return e||{}}},mounted:function(){var e=this;this.tmpIdx=Math.floor(Math.random()*this.verses.length),this._interval=setInterval(function(){return e.next()},3e5)},destroyed:function(){clearInterval(this._interval)},methods:{next:function(){this.idx=(this.idx+1)%this.verses.length}}},T=M,L=(n("qqxM"),Object(u["a"])(T,j,E,!1,null,"aef50fc8",null)),V=L.exports;r["a"].config.productionTip=!0,r["a"].config.ignoredElements=["google-cast-launcher"],r["a"].component("PageBody",b),r["a"].component("PageTitle",k),r["a"].component("ScriptureCarousel",V),new r["a"]({router:d,render:function(e){return e(l)}}).$mount("#app")},ZCWV:function(e,t,n){"use strict";var r=n("7EbL"),o=n.n(r);o.a},qqxM:function(e,t,n){"use strict";var r=n("9V+a"),o=n.n(r);o.a}});
//# sourceMappingURL=app.01ac4e6f.js.map