(function(e){function t(t){for(var r,a,s=t[0],u=t[1],i=t[2],l=0,p=[];l<s.length;l++)a=s[l],c[a]&&p.push(c[a][0]),c[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==c[s]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},c={app:0},o=[];function s(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-35427306":"149c433a","chunk-3e33e80c":"747024a6","chunk-468e8462":"7090ac7a","chunk-574630cd":"61843ad2","chunk-659175f0":"c3ea0997","chunk-6edd125c":"40a7d9b5","chunk-7487d0f0":"26240884","chunk-7909a2e8":"afe6e417","chunk-ba1a64e6":"49bbed18"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-35427306":1,"chunk-3e33e80c":1,"chunk-468e8462":1,"chunk-574630cd":1,"chunk-659175f0":1,"chunk-6edd125c":1,"chunk-7487d0f0":1,"chunk-7909a2e8":1,"chunk-ba1a64e6":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-35427306":"f688e68b","chunk-3e33e80c":"ed7b9254","chunk-468e8462":"52221b2a","chunk-574630cd":"9055aa35","chunk-659175f0":"5ee9969d","chunk-6edd125c":"313bfd39","chunk-7487d0f0":"4d20af92","chunk-7909a2e8":"01aaa000","chunk-ba1a64e6":"f276382c"}[e]+".css",c=u.p+r,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var i=o[s],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===c))return t()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){i=p[s],l=i.getAttribute("data-href");if(l===r||l===c)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],d.parentNode.removeChild(d),n(o)},d.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(d)}).then(function(){a[e]=0}));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise(function(t,n){r=c[e]=[t,n]});t.push(r[2]=o);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(e),i=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");o.type=r,o.request=a,n[1](o)}c[e]=void 0}};var p=setTimeout(function(){i({type:"timeout",target:l})},12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var p=0;p<i.length;p++)t(i[p]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2856:function(e,t,n){},"487f":function(e,t,n){"use strict";var r=n("723b"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("96cf");var r=n("3b8d"),a=(n("cadf"),n("551c"),n("f751"),n("097d"),n("2b0e")),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},["/login"!==e.$route.path?n("navbar"):e._e(),n("router-view"),n("notification",{attrs:{error:e.errorMsg,success:e.successMsg}})],1)},o=[],s=n("cebc"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return"/login"!==e.$route.path?n("div",{attrs:{id:"navbar"}},[n("div",{staticClass:"container"},[n("router-link",{staticClass:"home",attrs:{to:"/tweets"}},[n("i",{staticClass:"fas fa-home"})]),n("router-link",{staticClass:"logo",attrs:{to:"/tweets"}},[n("i",{staticClass:"fab fa-twitter twitter-icon"})]),"admin"===e.account.role?n("router-link",{staticClass:"admin far fa-user-cog",attrs:{to:"/admin/tweets",tag:"i"}}):e._e(),e.account.isLogin?[n("router-link",{staticClass:"user-profile-img",attrs:{to:"/users/"+e.account.id+"/tweets"}},[n("img",{attrs:{src:e.account.avatar,alt:e.account.name}})]),n("span",{staticClass:"logout",on:{click:e.logout}},[e._v("Logout")])]:e._e()],2)]):e._e()},i=[],l=n("2f62"),p={name:"navbar",computed:Object(s["a"])({},Object(l["c"])("account",{account:"getAccount"})),methods:Object(s["a"])({},Object(l["b"])("notification",["addSuccess"]),{logout:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$store.dispatch("account/logout");case 3:this.$router.push("/login"),this.addSuccess("Successfully Log Out!"),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(){return e.apply(this,arguments)}return t}()})},d=p,f=(n("487f"),n("2877")),h=Object(f["a"])(d,u,i,!1,null,"3c1191a4",null),m=h.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.success?n("span",{staticClass:"success",on:{click:e.DELETE_MESSAGE}},[e._v(e._s(e.success))]):e.error?n("span",{staticClass:"error",on:{click:e.DELETE_MESSAGE}},[e._v(e._s(e.error))]):e._e()},g=[],v={name:"notification",props:{error:String,success:String},methods:Object(s["a"])({},Object(l["d"])("notification",["DELETE_MESSAGE"]))},b=v,E=(n("efd0"),Object(f["a"])(b,w,g,!1,null,"7f07d3b4",null)),k=E.exports,T={components:{Navbar:m,Notification:k},computed:Object(s["a"])({},Object(l["e"])("notification",{successMsg:function(e){return e.successMsg},errorMsg:function(e){return e.errorMsg}}))},x=T,O=(n("5c0b"),Object(f["a"])(x,c,o,!1,null,null,null)),R=O.exports,S=n("8c4f"),_=(n("20d6"),n("7514"),n("55dd"),n("bc3a")),U=n.n(_),y={baseURL:"http://localhost:3000",headers:{"Content-Type":"text/plain"},withCredentials:!0},L=U.a.create(y);L.defaults.timeout=5e3,L.interceptors.request.use(function(e){return e}),L.interceptors.response.use(function(e){return e});var A=L,j={user:{isLogin:!1,id:0,email:"",name:"",avatar:"",introduction:"",role:null,createdAt:"",updatedAt:"",Tweets:[],Followers:[],Followings:[],LikedTweets:[]},users:[{isLogin:!1,id:0,email:"",name:"",avatar:"",introduction:"",role:null,createdAt:"",updatedAt:"",Tweets:[],Followers:[],Followings:[],LikedTweets:[]}]},C={},I={SET_USER:function(e,t){Object.assign(e.user,t)},SET_USERS:function(e,t){t.sort(function(e,t){return t.Tweets.length-e.Tweets.length}),Object.assign(e.users,t)},ADD_USER_TWEET_LIKE:function(e,t){var n=e.user.Tweets.find(function(e){return e.id===t.tweetId});console.log("tweet.LikedUsers",n.LikedUsers),n.LikedUsers.push({id:t.accountId})},REMOVE_USER_TWEET_LIKE:function(e,t){var n=e.user.Tweets.find(function(e){return e.id===t.tweetId});console.log("tweet.LikedUsers",n.LikedUsers);var r=n.LikedUsers.findIndex(function(e){return e.id===t.accountId});n.LikedUsers.splice(r,1)}},M={getUser:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A("/users/".concat(n),{method:"get"});case 3:r=e.sent,t.commit("SET_USER",r.data),e.next=10;break;case 7:throw e.prev=7,e.t0=e["catch"](0),e.t0;case 10:case"end":return e.stop()}},e,null,[[0,7]])}));function t(t,n){return e.apply(this,arguments)}return t}(),getAllUsers:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A("/admin/users",{method:"get"});case 3:n=e.sent,t.commit("SET_USERS",n.data),e.next=10;break;case 7:throw e.prev=7,e.t0=e["catch"](0),e.t0;case 10:case"end":return e.stop()}},e,null,[[0,7]])}));function t(t){return e.apply(this,arguments)}return t}()},N={namespaced:!0,state:j,getters:C,mutations:I,actions:M},D={tweet:{id:1,description:"今天天氣真好",UserId:2,createdAt:"2019-06-30T13:18:31.000Z",updatedAt:"2019-06-30T13:18:31.000Z",User:{id:2,name:"user1",email:"user1@example.com",avatar:null,introduction:"Hello world",role:null,createdAt:"2019-06-30T13:17:40.000Z",updatedAt:"2019-06-30T13:17:40.000Z"},Replies:[{id:1,UserId:2,TweetId:1,comment:"對啊！真的很熱",createdAt:"2019-06-30T19:06:26.000Z",updatedAt:"2019-06-30T19:06:26.000Z",User:{id:2,name:"user1",email:"user1@example.com",avatar:null,introduction:"Hello world",role:null,createdAt:"2019-06-30T13:17:40.000Z",updatedAt:"2019-06-30T13:17:40.000Z"}}],LikedUsers:[]},tweets:[{id:1,description:"今天天氣真好",UserId:2,createdAt:"2019-06-30T13:18:31.000Z",updatedAt:"2019-06-30T13:18:31.000Z",User:{id:2,name:"user1",email:"user1@example.com",avatar:null,introduction:"Hello world",role:null,createdAt:"2019-06-30T13:17:40.000Z",updatedAt:"2019-06-30T13:17:40.000Z"},Replies:[{id:1,UserId:2,TweetId:1,comment:"對啊！真的很熱",createdAt:"2019-06-30T19:06:26.000Z",updatedAt:"2019-06-30T19:06:26.000Z",User:{id:2,name:"user1",email:"user1@example.com",avatar:null,introduction:"Hello world",role:null,createdAt:"2019-06-30T13:17:40.000Z",updatedAt:"2019-06-30T13:17:40.000Z"}}],LikedUsers:[]}]},W={},P={SET_TWEETS:function(e,t){e.tweets=t},SET_TWEET:function(e,t){t.Replies.sort(function(e,t){return new Date(t.createdAt)-new Date(e.createdAt)}),Object.assign(e.tweet,t)},PUSH_TWEET:function(e,t){e.tweets.unshift(t),console.log(e.tweets)},PUSH_REPLY:function(e,t){e.tweet.Replies.unshift(Object(s["a"])({},t.reply,{User:Object(s["a"])({},t.account)}))},ADD_TWEET_LIKE:function(e,t){e.tweet.LikedUsers.push({id:t.accountId})},REMOVE_TWEET_LIKE:function(e,t){var n=e.tweet.LikedUsers.findIndex(function(e){return e.id===t.accountId});e.tweet.LikedUsers.splice(n,1)},ADD_TWEETS_LIKE:function(e,t){var n=e.tweets.find(function(e){return e.id===t.tweetId});n.LikedUsers.push({id:t.accountId})},REMOVE_TWEETS_LIKE:function(e,t){var n=e.tweets.find(function(e){return e.id===t.tweetId}),r=n.LikedUsers.findIndex(function(e){return e.id===t.accountId});n.LikedUsers.splice(r,1)},DELETE_TWEET:function(e,t){var n=e.tweets.findIndex(function(e){return e.id===t.id});e.tweets.splice(n,1)}},F={getTweets:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A("/tweets",{method:"get"});case 3:n=e.sent,t.commit("SET_TWEETS",n.data),e.next=10;break;case 7:throw e.prev=7,e.t0=e["catch"](0),e.t0;case 10:case"end":return e.stop()}},e,null,[[0,7]])}));function t(t){return e.apply(this,arguments)}return t}(),getTweet:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A("/tweets/".concat(n,"/replies"));case 3:return r=e.sent,t.commit("SET_TWEET",r.data),e.abrupt("return",r.data.UserId);case 8:throw e.prev=8,e.t0=e["catch"](0),e.t0;case 11:case"end":return e.stop()}},e,null,[[0,8]])}));function t(t,n){return e.apply(this,arguments)}return t}(),postTweet:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A("/tweets",{method:"post",data:JSON.stringify({description:n.description})});case 3:r=e.sent,t.commit("PUSH_TWEET",r.data),e.next=10;break;case 7:throw e.prev=7,e.t0=e["catch"](0),e.t0;case 10:case"end":return e.stop()}},e,null,[[0,7]])}));function t(t,n){return e.apply(this,arguments)}return t}(),postReply:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A("/tweets/".concat(n.id,"/replies"),{method:"post",data:JSON.stringify({comment:n.comment})});case 3:r=e.sent,t.commit("PUSH_REPLY",{reply:r.data,account:n.account}),e.next=10;break;case 7:throw e.prev=7,e.t0=e["catch"](0),e.t0;case 10:case"end":return e.stop()}},e,null,[[0,7]])}));function t(t,n){return e.apply(this,arguments)}return t}(),addLike:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A("/tweets/".concat(n.tweetId,"/like"),{method:"post"});case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e["catch"](0),e.t0;case 8:case"end":return e.stop()}},e,null,[[0,5]])}));function t(t,n){return e.apply(this,arguments)}return t}(),removeLike:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A("/tweets/".concat(n.tweetId,"/unlike"),{method:"post"});case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e["catch"](0),e.t0;case 8:case"end":return e.stop()}},e,null,[[0,5]])}));function t(t,n){return e.apply(this,arguments)}return t}(),deleteTweet:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A("/admin/tweets/".concat(n.id),{method:"delete"});case 3:t.commit("DELETE_TWEET",n),e.next=9;break;case 6:throw e.prev=6,e.t0=e["catch"](0),e.t0;case 9:case"end":return e.stop()}},e,null,[[0,6]])}));function t(t,n){return e.apply(this,arguments)}return t}()},Z={namespaced:!0,state:D,getters:W,mutations:P,actions:F},H=(n("456d"),n("ac6a"),{isLogin:!1,id:2,email:"",name:"",avatar:"",introduction:"",role:null,createdAt:"",updatedAt:"",Tweets:[],Followers:[],Followings:[],LikedTweets:[]}),K={getAccount:function(){return H},getIsLogin:function(){return H.isLogin}},G={SET_ACCOUNT:function(e,t){Object.keys(t).forEach(function(n){e[n]=t[n]}),a["a"].set(e,"isLogin",!0)},CLEAR_ACCOUNT:function(e){Object.keys(e).forEach(function(t){e[t]=""}),a["a"].set(e,"isLogin",!1),console.log("logout")},ADD_FOLLOWING:function(e,t){e.Followings.push({id:t.UserId})},REMOVE_FOLLOWING:function(e,t){var n=e.Followings.findIndex(function(e){return e.id===t.UserId});e.Followings.splice(n,1)},ADD_ACCOUNT_LIKE:function(e,t){e.LikedTweets.push(t),console.log("add like to account")},REMOVE_ACCOUNT_LIKE:function(e,t){var n=e.LikedTweets.findIndex(function(e){return e.id===t.tweetId});e.LikedTweets.splice(n,1),console.log("remove like from account")}},$={signup:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A("/register",{method:"post",data:JSON.stringify(n)});case 3:return r=e.sent,t.commit("SET_ACCOUNT",r.data),e.abrupt("return",!0);case 8:throw e.prev=8,e.t0=e["catch"](0),e.t0;case 11:case"end":return e.stop()}},e,null,[[0,8]])}));function t(t,n){return e.apply(this,arguments)}return t}(),login:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A("/login",{method:"post",data:JSON.stringify(n)});case 3:return r=e.sent,t.commit("SET_ACCOUNT",r.data),e.abrupt("return",!0);case 8:throw e.prev=8,e.t0=e["catch"](0),e.t0;case 11:case"end":return e.stop()}},e,null,[[0,8]])}));function t(t,n){return e.apply(this,arguments)}return t}(),logout:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.commit("CLEAR_ACCOUNT"),e.next=4,A("/logout",{method:"get"});case 4:e.next=9;break;case 6:throw e.prev=6,e.t0=e["catch"](0),e.t0;case 9:case"end":return e.stop()}},e,null,[[0,6]])}));function t(t){return e.apply(this,arguments)}return t}(),getUser:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,A("/users",{method:"get"});case 2:n=e.sent,t.commit("SET_ACCOUNT",n.data);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}(),putUser:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n){var r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A("/users",{method:"put",headers:{"Content-Type":"multipart/form-data"},data:n});case 3:r=e.sent,a=r.data,t.commit("SET_ACCOUNT",a),N.mutations.SET_USER(N.state,a),e.next=12;break;case 9:throw e.prev=9,e.t0=e["catch"](0),e.t0;case 12:case"end":return e.stop()}},e,null,[[0,9]])}));function t(t,n){return e.apply(this,arguments)}return t}(),addFollowing:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.commit("ADD_FOLLOWING",n),e.next=4,A("/followships",{method:"post",data:JSON.stringify(n)});case 4:e.next=9;break;case 6:throw e.prev=6,e.t0=e["catch"](0),e.t0;case 9:case"end":return e.stop()}},e,null,[[0,6]])}));function t(t,n){return e.apply(this,arguments)}return t}(),removeFollowing:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.commit("REMOVE_FOLLOWING",n),e.next=4,A("/followships/".concat(n.UserId),{method:"delete"});case 4:e.next=9;break;case 6:throw e.prev=6,e.t0=e["catch"](0),e.t0;case 9:case"end":return e.stop()}},e,null,[[0,6]])}));function t(t,n){return e.apply(this,arguments)}return t}()},J={namespaced:!0,state:H,getters:K,mutations:G,actions:$},V={},q={},B={SET_USERS:function(e,t){Object.assign(e,t)}},Y={getTopUsers:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A("/users/top",{method:"get"});case 3:n=e.sent,t.commit("SET_USERS",n.data),e.next=10;break;case 7:throw e.prev=7,e.t0=e["catch"](0),e.t0;case 10:case"end":return e.stop()}},e,null,[[0,7]])}));function t(t){return e.apply(this,arguments)}return t}()},z={namespaced:!0,state:V,getters:q,mutations:B,actions:Y},Q={successMsg:"",errorMsg:""},X={},ee={SET_SUCCESS:function(e,t){e.successMsg=t},SET_ERROR:function(e,t){e.errorMsg=t},DELETE_MESSAGE:function(e){e.successMsg="",e.errorMsg=""}},te={addSuccess:function(e,t){e.commit("SET_SUCCESS",t),setTimeout(function(){e.commit("SET_SUCCESS","")},3e3)},addError:function(e,t){e.commit("SET_ERROR",t),setTimeout(function(){e.commit("SET_ERROR","")},3e3)}},ne={namespaced:!0,state:Q,getters:X,mutations:ee,actions:te};a["a"].use(l["a"]);var re=new l["a"].Store({modules:{user:N,tweet:Z,account:J,topUsers:z,notification:ne}});a["a"].use(S["a"]);var ae=new S["a"]({routes:[{path:"/",beforeEnter:function(e,t,n){n({path:"/tweets"})}},{path:"/tweets",name:"Home",component:function(){return n.e("chunk-574630cd").then(n.bind(null,"bb51"))},beforeEnter:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n,r){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,re.dispatch("tweet/getTweets");case 3:return e.next=5,re.dispatch("topUsers/getTopUsers");case 5:r(),e.next=12;break;case 8:throw e.prev=8,e.t0=e["catch"](0),r({path:"/login"}),e.t0;case 12:case"end":return e.stop()}},e,null,[[0,8]])}));function t(t,n,r){return e.apply(this,arguments)}return t}()},{path:"/users/:id/tweets",name:"Profile",component:function(){return n.e("chunk-ba1a64e6").then(n.bind(null,"c66d"))},beforeEnter:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n,r){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,re.dispatch("user/getUser",t.params.id);case 3:r(),e.next=9;break;case 6:throw e.prev=6,e.t0=e["catch"](0),e.t0;case 9:case"end":return e.stop()}},e,null,[[0,6]])}));function t(t,n,r){return e.apply(this,arguments)}return t}()},{path:"/users/:id/edit",name:"ProfileEdit",component:function(){return n.e("chunk-35427306").then(n.bind(null,"ff46"))}},{path:"/login",name:"Login",component:function(){return n.e("chunk-3e33e80c").then(n.bind(null,"a55b"))}},{path:"/tweets/:id/replies",name:"reply",component:function(){return n.e("chunk-7487d0f0").then(n.bind(null,"b0c6"))},beforeEnter:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n,r){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,console.log("success"),e.next=4,re.dispatch("tweet/getTweet",t.params.id);case 4:return a=e.sent,e.next=7,re.dispatch("user/getUser",a);case 7:r(),e.next=13;break;case 10:throw e.prev=10,e.t0=e["catch"](0),e.t0;case 13:case"end":return e.stop()}},e,null,[[0,10]])}));function t(t,n,r){return e.apply(this,arguments)}return t}()},{path:"/users/:id/followings",name:"following",component:function(){return n.e("chunk-659175f0").then(n.bind(null,"768e"))},beforeEnter:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n,r){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,re.dispatch("user/getUser",t.params.id);case 3:r(),e.next=9;break;case 6:throw e.prev=6,e.t0=e["catch"](0),e.t0;case 9:case"end":return e.stop()}},e,null,[[0,6]])}));function t(t,n,r){return e.apply(this,arguments)}return t}()},{path:"/users/:id/followers",name:"follower",component:function(){return n.e("chunk-7909a2e8").then(n.bind(null,"390f"))},beforeEnter:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n,r){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,re.dispatch("user/getUser",t.params.id);case 3:r(),e.next=9;break;case 6:throw e.prev=6,e.t0=e["catch"](0),e.t0;case 9:case"end":return e.stop()}},e,null,[[0,6]])}));function t(t,n,r){return e.apply(this,arguments)}return t}()},{path:"/users/:id/likes",name:"like",component:function(){return n.e("chunk-6edd125c").then(n.bind(null,"7c2a"))},beforeEnter:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n,r){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,re.dispatch("tweet/getTweets");case 3:return e.next=5,re.dispatch("user/getUser",t.params.id);case 5:r(),e.next=11;break;case 8:throw e.prev=8,e.t0=e["catch"](0),e.t0;case 11:case"end":return e.stop()}},e,null,[[0,8]])}));function t(t,n,r){return e.apply(this,arguments)}return t}()},{path:"/admin/tweets",name:"admin",component:function(){return n.e("chunk-468e8462").then(n.bind(null,"3530"))},beforeEnter:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n,r){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,a=re.state.account.role,"admin"===a){e.next=6;break}return e.next=5,re.dispatch("notification/addError","Not Authorized to Access.");case 5:r({path:"/tweets"});case 6:return e.next=8,re.dispatch("tweet/getTweets");case 8:return e.next=10,re.dispatch("user/getAllUsers");case 10:r(),e.next=16;break;case 13:throw e.prev=13,e.t0=e["catch"](0),e.t0;case 16:case"end":return e.stop()}},e,null,[[0,13]])}));function t(t,n,r){return e.apply(this,arguments)}return t}()}]});a["a"].config.productionTip=!1,ae.beforeEach(function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n,r){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if("/login"!==t.path&&"/signup"!==t.path){e.next=3;break}return r(),e.abrupt("return");case 3:return e.prev=3,e.next=6,re.dispatch("account/getUser");case 6:r(),e.next=15;break;case 9:throw e.prev=9,e.t0=e["catch"](3),console.log("logout"),console.log("error",e.t0),r({path:"/login"}),e.t0;case 15:case"end":return e.stop()}},e,null,[[3,9]])}));return function(t,n,r){return e.apply(this,arguments)}}()),new a["a"]({router:ae,store:re,render:function(e){return e(R)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("2856"),a=n.n(r);a.a},"723b":function(e,t,n){},df66:function(e,t,n){},efd0:function(e,t,n){"use strict";var r=n("df66"),a=n.n(r);a.a}});
//# sourceMappingURL=app.15c9582e.js.map