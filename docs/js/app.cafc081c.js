(function(){"use strict";var t={263:function(t,n,e){var i=e(144),o=function(){var t=this,n=t._self._c;return n("div",{attrs:{id:"app"}},[n("TMain")],1)},r=[],u=function(){var t=this,n=t._self._c;return n("div",[n("THeader"),n("TContents"),n("TFooter")],1)},a=[],s=function(){var t=this,n=t._self._c;return n("div",[t._v(" TAYLAB 이것저것 실험하기 ")])},c=[],l=e(1),h={},f=(0,l.Z)(h,s,c,!1,null,null,null),v=f.exports,d=function(){var t=this,n=t._self._c;return n("div",[n("div",[n("button",{on:{click:function(n){return t.adjustDate(0)}}},[t._v("오늘")]),n("i",{staticClass:"fas fa-trash-alt"}),n("div",[n("button",{on:{click:function(n){return t.adjustDate(-1)}}},[t._v("←")]),n("h1",[t._v(t._s(t.year+"."+t.month+"."+t.date+" "+t.day))]),n("button",{on:{click:function(n){return t.adjustDate(1)}}},[t._v("→")])])]),n("hr"),n("div",[n("button",{on:{click:function(n){return t.adjustWeight(65)}}},[t._v("65")]),n("button",{on:{click:function(n){return t.adjustWeight(70)}}},[t._v("70")]),n("button",{on:{click:function(n){return t.adjustWeight(75)}}},[t._v("75")]),n("div",[n("button",{on:{click:function(n){return t.adjustWeight(-.1)}}},[t._v("전")]),n("h1",[t._v(" "+t._s(t.myWeight)+" ")]),n("button",{on:{click:function(n){return t.adjustWeight(.1)}}},[t._v("후")])])]),n("hr"),n("button",[t._v(":)")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.myComment,expression:"myComment"}],attrs:{type:"text"},domProps:{value:t.myComment},on:{input:function(n){n.target.composing||(t.myComment=n.target.value)}}}),n("button",{on:{click:function(n){return t.saveMyComment()}}},[t._v("저장")]),n("button",[t._v("분석")])])},m=[],y={data:function(){return{nowDate:{},year:"",month:"",date:"",day:"",dayList:["일","월","화","수","목","금","토"],myWeight:0,myComment:""}},created(){this.nowDate=new Date,this.init()},methods:{init(){this.initDate(),this.initWeight()},initDate(){this.year=this.nowDate.getFullYear(),this.month=("0"+(this.nowDate.getMonth()+1)).slice(-2),this.date=("0"+this.nowDate.getDate()).slice(-2),this.day=this.dayList[this.nowDate.getDay()]},adjustDate(t){0==t?this.nowDate=new Date:this.nowDate.setDate(this.nowDate.getDate()+t),this.initDate()},initWeight(){this.myWeight=70},adjustWeight(t){this.myWeight=t>=60?t:Math.round(10*(this.myWeight+=t))/10},saveMyComment(){alert(this.year+""+this.month+this.date+" / "+this.myWeight+" / "+this.myComment)}}},p=y,g=(0,l.Z)(p,d,m,!1,null,null,null),_=g.exports,b=function(){var t=this,n=t._self._c;return n("div",[t._v("테이랩")])},D=[],w={},j=(0,l.Z)(w,b,D,!1,null,null,null),W=j.exports,k={Data:function(){return{myWeight:""}},components:{THeader:v,TContents:_,TFooter:W}},C=k,T=(0,l.Z)(C,u,a,!1,null,null,null),x=T.exports,O={data:function(){return{myWeight:""}},components:{TMain:x}},Z=O,M=(0,l.Z)(Z,o,r,!1,null,null,null),P=M.exports;i.ZP.config.productionTip=!1,new i.ZP({render:t=>t(P)}).$mount("#app")}},n={};function e(i){var o=n[i];if(void 0!==o)return o.exports;var r=n[i]={exports:{}};return t[i](r,r.exports,e),r.exports}e.m=t,function(){var t=[];e.O=function(n,i,o,r){if(!i){var u=1/0;for(l=0;l<t.length;l++){i=t[l][0],o=t[l][1],r=t[l][2];for(var a=!0,s=0;s<i.length;s++)(!1&r||u>=r)&&Object.keys(e.O).every((function(t){return e.O[t](i[s])}))?i.splice(s--,1):(a=!1,r<u&&(u=r));if(a){t.splice(l--,1);var c=o();void 0!==c&&(n=c)}}return n}r=r||0;for(var l=t.length;l>0&&t[l-1][2]>r;l--)t[l]=t[l-1];t[l]=[i,o,r]}}(),function(){e.d=function(t,n){for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,i){var o,r,u=i[0],a=i[1],s=i[2],c=0;if(u.some((function(n){return 0!==t[n]}))){for(o in a)e.o(a,o)&&(e.m[o]=a[o]);if(s)var l=s(e)}for(n&&n(i);c<u.length;c++)r=u[c],e.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return e.O(l)},i=self["webpackChunktaylab"]=self["webpackChunktaylab"]||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))}();var i=e.O(void 0,[998],(function(){return e(263)}));i=e.O(i)})();
//# sourceMappingURL=app.cafc081c.js.map