(function(e){function t(t){for(var r,a,o=t[0],i=t[1],s=t[2],l=0,p=[];l<o.length;l++)a=o[l],c[a]&&p.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(p.length)p.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==c[o]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},c={app:0},u=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-25ce3486":"8fea2867","chunk-27b21d38":"aefcd041","chunk-3280c30a":"21542686","chunk-38a07828":"8ae6c8a9","chunk-42045b4a":"7f9e1b7f","chunk-49ef06f2":"56c61dc6","chunk-64e8a3cd":"05d33e60","chunk-7f571f8a":"5c88c63a","chunk-9d792504":"265f0fd5","chunk-ef7c2950":"cdc8dc9c"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-25ce3486":1,"chunk-27b21d38":1,"chunk-3280c30a":1,"chunk-38a07828":1,"chunk-42045b4a":1,"chunk-49ef06f2":1,"chunk-64e8a3cd":1,"chunk-7f571f8a":1,"chunk-9d792504":1,"chunk-ef7c2950":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-25ce3486":"4f52cfcf","chunk-27b21d38":"d12d6c79","chunk-3280c30a":"fca80d98","chunk-38a07828":"6be583cf","chunk-42045b4a":"21631a89","chunk-49ef06f2":"b7d2d83f","chunk-64e8a3cd":"bb057007","chunk-7f571f8a":"e6db545f","chunk-9d792504":"1adae6b2","chunk-ef7c2950":"29faf5b9"}[e]+".css",c=i.p+r,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var s=u[o],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===c))return t()}var p=document.getElementsByTagName("style");for(o=0;o<p.length;o++){s=p[o],l=s.getAttribute("data-href");if(l===r||l===c)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||c,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],d.parentNode.removeChild(d),n(u)},d.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(d)}).then(function(){a[e]=0}));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise(function(t,n){r=c[e]=[t,n]});t.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=o(e),s=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");u.type=r,u.request=a,n[1](u)}c[e]=void 0}};var p=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var d=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2856:function(e,t,n){},"488b":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("96cf");var r=n("3b8d"),a=(n("cadf"),n("551c"),n("f751"),n("097d"),n("2b0e")),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("navbar"),n("router-view")],1)},u=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"navbar"}},[n("div",{staticClass:"container"},[n("router-link",{attrs:{to:"/tweets",tag:"h3"}},[e._v("Simple Twitter")]),n("img",{attrs:{src:e.user.avatar,alt:"logo"}}),n("span",{on:{click:e.logout}},[e._v("Logout")])],1)])},i=[],s=n("cebc"),l=n("2f62"),p={name:"navbar",computed:Object(s["a"])({},Object(l["c"])("account",{user:function(e){return e}})),methods:{logout:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$store.dispatch("account/logout");case 3:this.$router.push("/login"),e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),console.log(e.t0);case 9:case"end":return e.stop()}},e,this,[[0,6]])}));function t(){return e.apply(this,arguments)}return t}()}},d=p,f=(n("5cb9"),n("2877")),h=Object(f["a"])(d,o,i,!1,null,"1eb73d43",null),m=h.exports,v={components:{Navbar:m}},g=v,w=(n("5c0b"),Object(f["a"])(g,c,u,!1,null,null,null)),b=w.exports,k=n("8c4f"),T=n("bc3a"),x=n.n(T),y={baseURL:"http://localhost:3000",headers:{"Content-Type":"text/plain"},withCredentials:!0},E=x.a.create(y);E.defaults.timeout=5e3,E.interceptors.request.use(function(e){return e}),E.interceptors.response.use(function(e){return e});var O=E,R={},S={},U={SET_USER:function(e,t){Object.assign(e,t)}},j={getUser:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O("/users/".concat(n),{method:"get"});case 3:r=e.sent,t.commit("SET_USER",r.data),e.next=10;break;case 7:throw e.prev=7,e.t0=e["catch"](0),e.t0;case 10:case"end":return e.stop()}},e,null,[[0,7]])}));function t(t,n){return e.apply(this,arguments)}return t}()},_={namespaced:!0,state:R,getters:S,mutations:U,actions:j},A=(n("55dd"),{tweet:{id:1,description:"今天天氣真好",UserId:2,createdAt:"2019-06-30T13:18:31.000Z",updatedAt:"2019-06-30T13:18:31.000Z",User:{id:2,name:"user1",email:"user1@example.com",avatar:null,introduction:"Hello world",role:null,createdAt:"2019-06-30T13:17:40.000Z",updatedAt:"2019-06-30T13:17:40.000Z"},Replies:[{id:1,UserId:2,TweetId:1,comment:"對啊！真的很熱",createdAt:"2019-06-30T19:06:26.000Z",updatedAt:"2019-06-30T19:06:26.000Z",User:{id:2,name:"user1",email:"user1@example.com",avatar:null,introduction:"Hello world",role:null,createdAt:"2019-06-30T13:17:40.000Z",updatedAt:"2019-06-30T13:17:40.000Z"}}],LikedUsers:[]},tweets:[{id:1,description:"今天天氣真好",UserId:2,createdAt:"2019-06-30T13:18:31.000Z",updatedAt:"2019-06-30T13:18:31.000Z",User:{id:2,name:"user1",email:"user1@example.com",avatar:null,introduction:"Hello world",role:null,createdAt:"2019-06-30T13:17:40.000Z",updatedAt:"2019-06-30T13:17:40.000Z"},Replies:[{id:1,UserId:2,TweetId:1,comment:"對啊！真的很熱",createdAt:"2019-06-30T19:06:26.000Z",updatedAt:"2019-06-30T19:06:26.000Z",User:{id:2,name:"user1",email:"user1@example.com",avatar:null,introduction:"Hello world",role:null,createdAt:"2019-06-30T13:17:40.000Z",updatedAt:"2019-06-30T13:17:40.000Z"}}],LikedUsers:[]}]}),C={},P={SET_TWEETS:function(e,t){e.tweets=t},SET_TWEET:function(e,t){t.Replies.sort(function(e,t){return new Date(t.createdAt)-new Date(e.createdAt)}),e.tweet=t},PUSH_TWEET:function(e,t){e.tweets.unshift(t),console.log(e.tweets)},PUSH_REPLY:function(e,t){e.tweet.Replies.unshift(Object(s["a"])({},t.reply,{User:Object(s["a"])({},t.account)}))}},Z={getTweets:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O("/tweets",{method:"get"});case 3:n=e.sent,t.commit("SET_TWEETS",n.data),e.next=10;break;case 7:throw e.prev=7,e.t0=e["catch"](0),e.t0;case 10:case"end":return e.stop()}},e,null,[[0,7]])}));function t(t){return e.apply(this,arguments)}return t}(),getTweet:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O("/tweets/".concat(n,"/replies"));case 3:return r=e.sent,t.commit("SET_TWEET",r.data),e.abrupt("return",r.data.UserId);case 8:throw e.prev=8,e.t0=e["catch"](0),e.t0;case 11:case"end":return e.stop()}},e,null,[[0,8]])}));function t(t,n){return e.apply(this,arguments)}return t}(),postTweet:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O("/tweets",{method:"post",data:JSON.stringify({description:n.description})});case 3:r=e.sent,console.log(r),t.commit("PUSH_TWEET",r.data),e.next=11;break;case 8:throw e.prev=8,e.t0=e["catch"](0),e.t0;case 11:case"end":return e.stop()}},e,null,[[0,8]])}));function t(t,n){return e.apply(this,arguments)}return t}(),postReply:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O("/tweets/".concat(n.id,"/replies"),{method:"post",data:JSON.stringify({comment:n.comment})});case 3:r=e.sent,t.commit("PUSH_REPLY",{reply:r.data,account:n.account}),e.next=10;break;case 7:throw e.prev=7,e.t0=e["catch"](0),e.t0;case 10:case"end":return e.stop()}},e,null,[[0,7]])}));function t(t,n){return e.apply(this,arguments)}return t}()},N={namespaced:!0,state:A,getters:C,mutations:P,actions:Z},H={},L={},I={SET_ACCOUNT:function(e,t){Object.assign(e,t)}},J={login:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O("/login",{method:"post",data:JSON.stringify(n)});case 3:return r=e.sent,t.commit("SET_ACCOUNT",r.data),e.abrupt("return",!0);case 8:throw e.prev=8,e.t0=e["catch"](0),e.t0;case 11:case"end":return e.stop()}},e,null,[[0,8]])}));function t(t,n){return e.apply(this,arguments)}return t}(),logout:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O("/logout",{method:"get"});case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e["catch"](0),e.t0;case 8:case"end":return e.stop()}},e,null,[[0,5]])}));function t(t){return e.apply(this,arguments)}return t}(),getUser:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O("/users",{method:"get"});case 2:n=e.sent,t.commit("SET_ACCOUNT",n.data);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}(),putUser:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.commit("SET_ACCOUNT",n),e.next=4,O("/users",{method:"put",data:JSON.stringify(n)});case 4:e.next=9;break;case 6:throw e.prev=6,e.t0=e["catch"](0),e.t0;case 9:case"end":return e.stop()}},e,null,[[0,6]])}));function t(t,n){return e.apply(this,arguments)}return t}()},W={namespaced:!0,state:H,getters:L,mutations:I,actions:J},$={},D={},M={SET_USERS:function(e,t){Object.assign(e,t)}},q={getTopUsers:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O("/users/top",{method:"get"});case 3:n=e.sent,t.commit("SET_USERS",n.data),e.next=10;break;case 7:throw e.prev=7,e.t0=e["catch"](0),e.t0;case 10:case"end":return e.stop()}},e,null,[[0,7]])}));function t(t){return e.apply(this,arguments)}return t}()},B={namespaced:!0,state:$,getters:D,mutations:M,actions:q};a["a"].use(l["a"]);var Y=new l["a"].Store({modules:{user:_,tweet:N,account:W,topUsers:B}});a["a"].use(k["a"]);var F=new k["a"]({routes:[{path:"/",beforeEnter:function(e,t,n){n({path:"/tweets"})}},{path:"/tweets",name:"Home",component:function(){return n.e("chunk-38a07828").then(n.bind(null,"bb51"))},beforeEnter:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n,r){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Y.dispatch("tweet/getTweets");case 3:return e.next=5,Y.dispatch("topUsers/getTopUsers");case 5:r(),e.next=12;break;case 8:throw e.prev=8,e.t0=e["catch"](0),r({path:"/login"}),e.t0;case 12:case"end":return e.stop()}},e,null,[[0,8]])}));function t(t,n,r){return e.apply(this,arguments)}return t}()},{path:"/users/:id/tweets",name:"Profile",component:function(){return n.e("chunk-25ce3486").then(n.bind(null,"c66d"))},beforeEnter:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n,r){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Y.dispatch("user/getUser",t.params.id);case 3:r(),e.next=9;break;case 6:throw e.prev=6,e.t0=e["catch"](0),e.t0;case 9:case"end":return e.stop()}},e,null,[[0,6]])}));function t(t,n,r){return e.apply(this,arguments)}return t}()},{path:"/users/:id/edit",name:"ProfileEdit",component:function(){return n.e("chunk-9d792504").then(n.bind(null,"ff46"))}},{path:"/logout",name:"logout",component:function(){return n.e("chunk-27b21d38").then(n.bind(null,"c100"))}},{path:"/signup",name:"signup",component:function(){return n.e("chunk-64e8a3cd").then(n.bind(null,"34c3"))}},{path:"/login",name:"login",component:function(){return n.e("chunk-42045b4a").then(n.bind(null,"a55b"))}},{path:"/tweets/:id/replies",name:"reply",component:function(){return n.e("chunk-3280c30a").then(n.bind(null,"b0c6"))},beforeEnter:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n,r){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,console.log("success"),e.next=4,Y.dispatch("tweet/getTweet",t.params.id);case 4:return a=e.sent,e.next=7,Y.dispatch("user/getUser",a);case 7:r(),e.next=13;break;case 10:throw e.prev=10,e.t0=e["catch"](0),e.t0;case 13:case"end":return e.stop()}},e,null,[[0,10]])}));function t(t,n,r){return e.apply(this,arguments)}return t}()},{path:"/users/:id/followings",name:"following",component:function(){return n.e("chunk-7f571f8a").then(n.bind(null,"768e"))}},{path:"/users/:id/followers",name:"follower",component:function(){return n.e("chunk-49ef06f2").then(n.bind(null,"390f"))}},{path:"/users/:id/likes",name:"like",component:function(){return n.e("chunk-ef7c2950").then(n.bind(null,"7c2a"))}}]});a["a"].config.productionTip=!1,F.beforeEach(function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n,r){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if("/login"!==t.path){e.next=4;break}return console.log("success"),r(),e.abrupt("return");case 4:return e.prev=4,e.next=7,Y.dispatch("account/getUser");case 7:r(),e.next=15;break;case 10:throw e.prev=10,e.t0=e["catch"](4),console.log("login"),r({path:"/login"}),e.t0;case 15:case"end":return e.stop()}},e,null,[[4,10]])}));return function(t,n,r){return e.apply(this,arguments)}}()),new a["a"]({router:F,store:Y,render:function(e){return e(b)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("2856"),a=n.n(r);a.a},"5cb9":function(e,t,n){"use strict";var r=n("488b"),a=n.n(r);a.a}});
//# sourceMappingURL=app.41357a12.js.map