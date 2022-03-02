(function(){"use strict";var t={8660:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var r=n(144),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("QuotePage")],1)},i=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"background-wrapper"},[n("div",{staticClass:"background",style:t.imageStyle},[n("AdditionalTextFields"),n("WordContainer")],1)])},s=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition-group",{attrs:{name:"fade"}},[t.isMounted?n("div",{key:"title",staticClass:"app-title text-bubble",on:{click:function(e){return t.$store.dispatch("loadWord")}}},[t._v(" Word of the Day ")]):t._e(),t._v(" Photo by Xan Griffin on Unsplash "),t.isMounted?n("span",{key:"author",staticClass:"author text-bubble"},[t._v(" Photo by "),n("a",{attrs:{href:"https://unsplash.com/@alfonsmc10?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}},[t._v("Alfons Morales")]),t._v(" on "),n("a",{attrs:{href:"https://unsplash.com/s/photos/library?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}},[t._v("Unsplash")])]):t._e(),t.isMounted?n("div",{key:"link-list",staticClass:"link-list text-bubble"},t._l(t.links,(function(t,e){return n("a",{key:"icon".concat("_",e),attrs:{href:t.url,target:"_blank"}},[n("em",{class:t.icon})])})),0):t._e()])},l=[],c={name:"AdditionalTextFields",data:function(){return{image:"https://source.unsplash.com/YLSwjSy7stw/1920x1125",isMounted:!1,links:[{icon:"fab fa-github",url:"https://github.com/MrTimeey/word-of-the-day"},{icon:"fab fa-twitter",url:"https://twitter.com/tim_siegler"}]}},computed:{imageStyle:function(){return{backgroundImage:"url(".concat(this.image,")")}}},mounted:function(){this.isMounted=!0}},d=c,f=n(1001),p=(0,f.Z)(d,u,l,!1,null,null,null),m=p.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fullscreen-centered"},[n("div",{staticClass:"word-wrapper"},[n("transition",{attrs:{name:"fade"}},[t.$store.getters["wordLoaded"]?n("div",{key:"quote-card",staticClass:"word-card"},[n("span",{staticClass:"word"},[t._v(t._s(t.$store.state.word))]),n("span",{staticClass:"word-definition"},[t._v(t._s(t.$store.state.definition))])]):t._e()])],1)])},v=[],_={name:"WordContainer",mounted:function(){this.$store.dispatch("loadWord")}},w=_,g=(0,f.Z)(w,h,v,!1,null,"03679427",null),b=g.exports,y={name:"QuotePage",components:{AdditionalTextFields:m,WordContainer:b},data:function(){return{image:"https://source.unsplash.com/YLSwjSy7stw/1920x1125"}},computed:{imageStyle:function(){return{backgroundImage:"url(".concat(this.image,")")}}}},k=y,x=(0,f.Z)(k,a,s,!1,null,"2316cede",null),C=x.exports,O={name:"App",components:{QuotePage:C}},Z=O,$=(0,f.Z)(Z,o,i,!1,null,null,null),P=$.exports,T=n(6198),j=(n(5666),n(629)),M=n(9669),S=n.n(M);r.Z.use(j.ZP);var W=new j.ZP.Store({state:{word:"",definition:""},mutations:{setData:function(t,e){var n,r,o,i;t.word=null!==(n=null===e||void 0===e||null===(r=e.result)||void 0===r?void 0:r.word)&&void 0!==n?n:"",t.definition=null!==(o=null===e||void 0===e||null===(i=e.result)||void 0===i?void 0:i.definition)&&void 0!==o?o:""}},actions:{loadWord:function(t){return(0,T.Z)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,n("setData",{}),e.next=4,M.get("https://word-of-the-day.de/api/random/de");case 4:r=e.sent,n("setData",r.data);case 6:case"end":return e.stop()}}),e)})))()}},getters:{wordLoaded:function(t){return t.word&&t.definition}},modules:{}});r.Z.config.productionTip=!1,r.Z.prototype.$axios=S(),new r.Z({store:W,render:function(t){return t(P)}}).$mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,i){if(!r){var a=1/0;for(c=0;c<t.length;c++){r=t[c][0],o=t[c][1],i=t[c][2];for(var s=!0,u=0;u<r.length;u++)(!1&i||a>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[u])}))?r.splice(u--,1):(s=!1,i<a&&(a=i));if(s){t.splice(c--,1);var l=o();void 0!==l&&(e=l)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[r,o,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,i,a=r[0],s=r[1],u=r[2],l=0;if(a.some((function(e){return 0!==t[e]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(u)var c=u(n)}for(e&&e(r);l<a.length;l++)i=a[l],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(c)},r=self["webpackChunkword_of_the_day"]=self["webpackChunkword_of_the_day"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(8660)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.99561ad2.js.map