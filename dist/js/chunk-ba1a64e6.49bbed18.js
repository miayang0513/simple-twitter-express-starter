(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ba1a64e6"],{"2fdb":function(t,e,n){"use strict";var r=n("5ca1"),s=n("d2c8"),i="includes";r(r.P+r.F*n("5147")(i),"String",{includes:function(t){return!!~s(this,t,i).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},5147:function(t,e,n){var r=n("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,!"/./"[t](e)}catch(s){}}return!0}},"5a08":function(t,e,n){"use strict";var r=n("73ae"),s=n.n(r);s.a},6762:function(t,e,n){"use strict";var r=n("5ca1"),s=n("c366")(!0);r(r.P,"Array",{includes:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")("includes")},"6cff":function(t,e,n){"use strict";var r=n("8dc2"),s=n.n(r);s.a},"73ae":function(t,e,n){},8542:function(t,e,n){},"8dc2":function(t,e,n){},a058:function(t,e,n){"use strict";var r=n("8542"),s=n.n(r);s.a},aae3:function(t,e,n){var r=n("d3f4"),s=n("2d95"),i=n("2b4c")("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==s(t))}},adf8:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"user-profile"}},[n("div",[n("div",{style:"background-image: url("+t.currentUser.avatar+")"}),n("h3",[t._v(t._s(t.currentUser.name))]),t.user.introduction?n("p",[t._v(t._s(t.user.introduction.substring(0,50)))]):n("p",[t._v("no introduction yet")])]),n("div",[n("router-link",{attrs:{to:"/users/"+t.currentUser.id+"/tweets",tag:"p"}},[t._v("Tweets "+t._s(t.currentUser.Tweets.length))]),n("router-link",{attrs:{to:"/users/"+t.currentUser.id+"/followings",tag:"p"}},[t._v("Followings "+t._s(t.currentUser.Followings.length))]),n("router-link",{attrs:{to:"/users/"+t.currentUser.id+"/followers",tag:"p"}},[t._v("Followers "+t._s(t.currentUser.Followers.length))]),n("router-link",{attrs:{to:"/users/"+t.currentUser.id+"/likes",tag:"p"}},[t._v("like "+t._s(t.currentUser.LikedTweets.length))])],1),t.user.id===t.account.id?n("router-link",{attrs:{to:"/users/"+t.account.id+"/edit",tag:"button"}},[t._v("Edit Profile")]):t.isFollowing?n("button",{on:{click:function(e){return t.removeFollowing({UserId:t.currentUser.id})}}},[t._v("Unfollow")]):n("button",{on:{click:function(e){return t.addFollowing({UserId:t.currentUser.id})}}},[t._v("Follow")])],1)},s=[],i=n("cebc"),c=n("2f62"),o={props:{user:Object},data:function(){return{currentUser:Object}},computed:Object(i["a"])({},Object(c["e"])("account",{account:function(t){return t}}),{isFollowing:function(){var t=this;return this.account.Followings.some(function(e){return e.id===t.currentUser.id})}}),beforeMount:function(){this.currentUser=this.user.id===this.account.id?this.account:this.user},methods:Object(i["a"])({},Object(c["b"])("account",["addFollowing","removeFollowing"]))},u=o,a=(n("a058"),n("2877")),d=Object(a["a"])(u,r,s,!1,null,"39aa3a44",null);e["a"]=d.exports},b17a:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tweets"},[n("img",{attrs:{src:t.user.avatar,alt:t.user.name}}),n("div",[n("div",[n("router-link",{attrs:{to:"/users/"+t.user.id+"/tweets",tag:"span"}},[t._v("@"+t._s(t.user.name))]),n("span",[t._v(", "+t._s(t.date)+", "+t._s(t.time))])],1),n("p",[t._v(t._s(t.tweet.description.substring(0,50)))]),n("div",[n("router-link",{staticClass:"reply",attrs:{to:"/tweets/"+t.tweet.id+"/replies",tag:"span"}},[t._v("Reply("+t._s(t.tweet.Replies.length)+")")]),t.isLiked?n("span",{staticClass:"like",on:{click:function(e){return t.deleteLike(t.account.id,t.tweet.id)}}},[t._v("Unlike("+t._s(t.tweet.LikedUsers.length)+")")]):n("span",{staticClass:"like",on:{click:function(e){return t.postLike(t.account.id,t.tweet.id)}}},[t._v("Like("+t._s(t.tweet.LikedUsers.length)+")")])],1)])])},s=[],i=(n("6762"),n("2fdb"),n("cebc")),c=n("2f62"),o={name:"tweet",props:{tweet:Object,user:Object,account:Object},computed:{isLiked:function(){var t=this;return this.account.LikedTweets.some(function(e){return e.id===t.tweet.id})},date:function(){var t=new Date(this.tweet.createdAt),e=t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1;return t.getFullYear()+"-"+e+"-"+t.getDate()},time:function(){var t=new Date(this.tweet.createdAt);return t.getHours()+":"+t.getMinutes()}},methods:Object(i["a"])({},Object(c["d"])("account",["ADD_ACCOUNT_LIKE","REMOVE_ACCOUNT_LIKE"]),Object(c["d"])("tweet",["ADD_TWEET_LIKE","REMOVE_TWEET_LIKE","ADD_TWEETS_LIKE","REMOVE_TWEETS_LIKE"]),Object(c["d"])("user",["ADD_USER_TWEET_LIKE","REMOVE_USER_TWEET_LIKE"]),Object(c["b"])("tweet",["addLike","removeLike"]),{postLike:function(t,e){"/tweets"===this.$route.path||this.$route.path.includes("likes")?(console.log("add like in homepage or Like page"),this.ADD_TWEETS_LIKE({accountId:t,tweetId:e})):this.$route.path.includes("users")?(console.log("add like in profile"),this.ADD_USER_TWEET_LIKE({accountId:t,tweetId:e})):(console.log("add like in reply"),this.ADD_TWEET_LIKE({accountId:t})),this.ADD_ACCOUNT_LIKE({id:e}),this.addLike({accountId:t,tweetId:e})},deleteLike:function(t,e){"/tweets"===this.$route.path||this.$route.path.includes("likes")?(console.log("remove like in homepage or Like page"),this.REMOVE_TWEETS_LIKE({accountId:t,tweetId:e})):this.$route.path.includes("users")?(console.log("remove like in profile"),this.REMOVE_USER_TWEET_LIKE({accountId:t,tweetId:e})):(console.log("remove like in reply"),this.REMOVE_TWEET_LIKE({accountId:t})),this.REMOVE_ACCOUNT_LIKE({tweetId:e}),this.removeLike({accountId:t,tweetId:e})}})},u=o,a=(n("5a08"),n("2877")),d=Object(a["a"])(u,r,s,!1,null,"751d6adb",null);e["a"]=d.exports},c66d:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"content"}},[n("div",{staticClass:"container"},[n("user-side-bar",{attrs:{user:t.user}}),n("div",{attrs:{id:"user-tweets"}},[t._l(t.tweets,function(e){return[n("tweet",{attrs:{tweet:e,user:t.user,account:t.account}})]})],2)],1)])},s=[],i=(n("55dd"),n("cebc")),c=n("b17a"),o=n("adf8"),u=n("2f62"),a={name:"Profile",components:{Tweet:c["a"],UserSideBar:o["a"]},computed:Object(i["a"])({},Object(u["e"])("user",{user:function(t){return t.user}}),Object(u["e"])("account",{account:function(t){return t}}),{tweets:function(){return this.user.Tweets.slice().sort(function(t,e){return new Date(e.createdAt)-new Date(t.createdAt)})}}),watch:{$route:function(){console.log("go")}}},d=a,l=(n("6cff"),n("2877")),_=Object(l["a"])(d,r,s,!1,null,"3e7fd00e",null);e["default"]=_.exports},d2c8:function(t,e,n){var r=n("aae3"),s=n("be13");t.exports=function(t,e,n){if(r(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(s(t))}}}]);
//# sourceMappingURL=chunk-ba1a64e6.49bbed18.js.map