(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6edd125c"],{"2fdb":function(e,t,n){"use strict";var r=n("5ca1"),i=n("d2c8"),s="includes";r(r.P+r.F*n("5147")(s),"String",{includes:function(e){return!!~i(this,e,s).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},5147:function(e,t,n){var r=n("2b4c")("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(i){}}return!0}},"5a08":function(e,t,n){"use strict";var r=n("73ae"),i=n.n(r);i.a},"5d8f":function(e,t,n){"use strict";var r=n("bced"),i=n.n(r);i.a},6762:function(e,t,n){"use strict";var r=n("5ca1"),i=n("c366")(!0);r(r.P,"Array",{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")("includes")},"73ae":function(e,t,n){},"7c2a":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"content"}},[n("div",{staticClass:"container"},[n("user-side-bar",{attrs:{id:"user-profile",user:e.user}}),n("main",[n("h3",[e._v("Like")]),n("div",{attrs:{id:"user-tweets"}},[e._l(e.likedTweets,function(t){return[n("tweet",{key:t.id,attrs:{tweet:t,user:t.User,account:e.account}})]})],2)])],1)])},i=[],s=(n("55dd"),n("7514"),n("6762"),n("2fdb"),n("ac6a"),n("cebc")),c=n("b17a"),o=n("adf8"),u=n("2f62"),a={name:"like",components:{Tweet:c["a"],UserSideBar:o["a"]},computed:Object(s["a"])({},Object(u["e"])("user",{user:function(e){return e.user}}),Object(u["e"])("account",{account:function(e){return e}}),Object(u["e"])("tweet",{tweets:function(e){return e.tweets}}),{likedTweets:function(){var e=this,t=this.user.LikedTweets.map(function(e){return e.id}),n=[];return this.tweets.forEach(function(r){if(t.includes(r.id)){var i=e.user.LikedTweets.find(function(e){return e.id===r.id});i.Replies=r.Replies,i.LikedUsers=r.LikedUsers,n.push(i)}}),n.slice().sort(function(e,t){return new Date(t.Like.createdAt)-new Date(e.Like.createdAt)})}})},d=a,l=(n("5d8f"),n("2877")),f=Object(l["a"])(d,r,i,!1,null,"d142571e",null);t["default"]=f.exports},8542:function(e,t,n){},a058:function(e,t,n){"use strict";var r=n("8542"),i=n.n(r);i.a},aae3:function(e,t,n){var r=n("d3f4"),i=n("2d95"),s=n("2b4c")("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[s])?!!t:"RegExp"==i(e))}},adf8:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"user-profile"}},[n("div",[n("div",{style:"background-image: url("+e.currentUser.avatar+")"}),n("h3",[e._v(e._s(e.currentUser.name))]),e.user.introduction?n("p",[e._v(e._s(e.user.introduction.substring(0,50)))]):n("p",[e._v("no introduction yet")])]),n("div",[n("router-link",{attrs:{to:"/users/"+e.currentUser.id+"/tweets",tag:"p"}},[e._v("Tweets "+e._s(e.currentUser.Tweets.length))]),n("router-link",{attrs:{to:"/users/"+e.currentUser.id+"/followings",tag:"p"}},[e._v("Followings "+e._s(e.currentUser.Followings.length))]),n("router-link",{attrs:{to:"/users/"+e.currentUser.id+"/followers",tag:"p"}},[e._v("Followers "+e._s(e.currentUser.Followers.length))]),n("router-link",{attrs:{to:"/users/"+e.currentUser.id+"/likes",tag:"p"}},[e._v("like "+e._s(e.currentUser.LikedTweets.length))])],1),e.user.id===e.account.id?n("router-link",{attrs:{to:"/users/"+e.account.id+"/edit",tag:"button"}},[e._v("Edit Profile")]):e.isFollowing?n("button",{on:{click:function(t){return e.removeFollowing({UserId:e.currentUser.id})}}},[e._v("Unfollow")]):n("button",{on:{click:function(t){return e.addFollowing({UserId:e.currentUser.id})}}},[e._v("Follow")])],1)},i=[],s=n("cebc"),c=n("2f62"),o={props:{user:Object},data:function(){return{currentUser:Object}},computed:Object(s["a"])({},Object(c["e"])("account",{account:function(e){return e}}),{isFollowing:function(){var e=this;return this.account.Followings.some(function(t){return t.id===e.currentUser.id})}}),beforeMount:function(){this.currentUser=this.user.id===this.account.id?this.account:this.user},methods:Object(s["a"])({},Object(c["b"])("account",["addFollowing","removeFollowing"]))},u=o,a=(n("a058"),n("2877")),d=Object(a["a"])(u,r,i,!1,null,"39aa3a44",null);t["a"]=d.exports},b17a:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tweets"},[n("img",{attrs:{src:e.user.avatar,alt:e.user.name}}),n("div",[n("div",[n("router-link",{attrs:{to:"/users/"+e.user.id+"/tweets",tag:"span"}},[e._v("@"+e._s(e.user.name))]),n("span",[e._v(", "+e._s(e.date)+", "+e._s(e.time))])],1),n("p",[e._v(e._s(e.tweet.description.substring(0,50)))]),n("div",[n("router-link",{staticClass:"reply",attrs:{to:"/tweets/"+e.tweet.id+"/replies",tag:"span"}},[e._v("Reply("+e._s(e.tweet.Replies.length)+")")]),e.isLiked?n("span",{staticClass:"like",on:{click:function(t){return e.deleteLike(e.account.id,e.tweet.id)}}},[e._v("Unlike("+e._s(e.tweet.LikedUsers.length)+")")]):n("span",{staticClass:"like",on:{click:function(t){return e.postLike(e.account.id,e.tweet.id)}}},[e._v("Like("+e._s(e.tweet.LikedUsers.length)+")")])],1)])])},i=[],s=(n("6762"),n("2fdb"),n("cebc")),c=n("2f62"),o={name:"tweet",props:{tweet:Object,user:Object,account:Object},computed:{isLiked:function(){var e=this;return this.account.LikedTweets.some(function(t){return t.id===e.tweet.id})},date:function(){var e=new Date(this.tweet.createdAt),t=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1;return e.getFullYear()+"-"+t+"-"+e.getDate()},time:function(){var e=new Date(this.tweet.createdAt);return e.getHours()+":"+e.getMinutes()}},methods:Object(s["a"])({},Object(c["d"])("account",["ADD_ACCOUNT_LIKE","REMOVE_ACCOUNT_LIKE"]),Object(c["d"])("tweet",["ADD_TWEET_LIKE","REMOVE_TWEET_LIKE","ADD_TWEETS_LIKE","REMOVE_TWEETS_LIKE"]),Object(c["d"])("user",["ADD_USER_TWEET_LIKE","REMOVE_USER_TWEET_LIKE"]),Object(c["b"])("tweet",["addLike","removeLike"]),{postLike:function(e,t){"/tweets"===this.$route.path||this.$route.path.includes("likes")?(console.log("add like in homepage or Like page"),this.ADD_TWEETS_LIKE({accountId:e,tweetId:t})):this.$route.path.includes("users")?(console.log("add like in profile"),this.ADD_USER_TWEET_LIKE({accountId:e,tweetId:t})):(console.log("add like in reply"),this.ADD_TWEET_LIKE({accountId:e})),this.ADD_ACCOUNT_LIKE({id:t}),this.addLike({accountId:e,tweetId:t})},deleteLike:function(e,t){"/tweets"===this.$route.path||this.$route.path.includes("likes")?(console.log("remove like in homepage or Like page"),this.REMOVE_TWEETS_LIKE({accountId:e,tweetId:t})):this.$route.path.includes("users")?(console.log("remove like in profile"),this.REMOVE_USER_TWEET_LIKE({accountId:e,tweetId:t})):(console.log("remove like in reply"),this.REMOVE_TWEET_LIKE({accountId:e})),this.REMOVE_ACCOUNT_LIKE({tweetId:t}),this.removeLike({accountId:e,tweetId:t})}})},u=o,a=(n("5a08"),n("2877")),d=Object(a["a"])(u,r,i,!1,null,"751d6adb",null);t["a"]=d.exports},bced:function(e,t,n){},d2c8:function(e,t,n){var r=n("aae3"),i=n("be13");e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(i(e))}}}]);
//# sourceMappingURL=chunk-6edd125c.40a7d9b5.js.map