(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47e309e7"],{"2fdb":function(e,t,s){"use strict";var n=s("5ca1"),r=s("d2c8"),i="includes";n(n.P+n.F*s("5147")(i),"String",{includes:function(e){return!!~r(this,e,i).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},5147:function(e,t,s){var n=s("2b4c")("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(s){try{return t[n]=!1,!"/./"[e](t)}catch(r){}}return!0}},"53ef":function(e,t,s){"use strict";var n=s("a77d"),r=s.n(n);r.a},"5d8f":function(e,t,s){"use strict";var n=s("bced"),r=s.n(n);r.a},6762:function(e,t,s){"use strict";var n=s("5ca1"),r=s("c366")(!0);n(n.P,"Array",{includes:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),s("9c6c")("includes")},"77cc":function(e,t,s){"use strict";var n=s("c2b6"),r=s.n(n);r.a},"7c2a":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"content"}},[s("div",{staticClass:"container"},[s("user-side-bar",{attrs:{id:"user-profile",user:e.user}}),s("main",[s("h3",[e._v("Like")]),s("div",{attrs:{id:"user-tweets"}},[e._l(e.likedTweets,function(t){return[s("tweet",{key:t.id,attrs:{tweet:t,user:t.User,account:e.account}})]})],2)])],1)])},r=[],i=(s("55dd"),s("7514"),s("6762"),s("2fdb"),s("ac6a"),s("cebc")),c=s("b17a"),o=s("adf8"),a=s("2f62"),u={name:"like",components:{Tweet:c["a"],UserSideBar:o["a"]},computed:Object(i["a"])({},Object(a["e"])("user",{user:function(e){return e.user}}),Object(a["e"])("account",{account:function(e){return e}}),Object(a["e"])("tweet",{tweets:function(e){return e.tweets}}),{likedTweets:function(){var e=this,t=this.user.LikedTweets.map(function(e){return e.id}),s=[];return this.tweets.forEach(function(n){if(t.includes(n.id)){var r=e.user.LikedTweets.find(function(e){return e.id===n.id});r.Replies=n.Replies,r.LikedUsers=n.LikedUsers,s.push(r)}}),s.slice().sort(function(e,t){return new Date(t.Like.createdAt)-new Date(e.Like.createdAt)})}})},l=u,d=(s("5d8f"),s("2877")),p=Object(d["a"])(l,n,r,!1,null,"d142571e",null);t["default"]=p.exports},8542:function(e,t,s){},a058:function(e,t,s){"use strict";var n=s("8542"),r=s.n(n);r.a},a77d:function(e,t,s){},aae3:function(e,t,s){var n=s("d3f4"),r=s("2d95"),i=s("2b4c")("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==r(e))}},adf8:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"user-profile"}},[s("div",[s("div",{style:"background-image: url("+e.currentUser.avatar+")"}),s("h3",[e._v(e._s(e.currentUser.name))]),e.user.introduction?s("p",[e._v(e._s(e.user.introduction.substring(0,50)))]):s("p",[e._v("no introduction yet")])]),s("div",[s("router-link",{attrs:{to:"/users/"+e.currentUser.id+"/tweets",tag:"p"}},[e._v("Tweets "+e._s(e.currentUser.Tweets.length))]),s("router-link",{attrs:{to:"/users/"+e.currentUser.id+"/followings",tag:"p"}},[e._v("Followings "+e._s(e.currentUser.Followings.length))]),s("router-link",{attrs:{to:"/users/"+e.currentUser.id+"/followers",tag:"p"}},[e._v("Followers "+e._s(e.currentUser.Followers.length))]),s("router-link",{attrs:{to:"/users/"+e.currentUser.id+"/likes",tag:"p"}},[e._v("like "+e._s(e.currentUser.LikedTweets.length))])],1),e.user.id===e.account.id?s("router-link",{attrs:{to:"/users/"+e.account.id+"/edit",tag:"button"}},[e._v("Edit Profile")]):e.isFollowing?s("button",{on:{click:function(t){return e.removeFollowing({UserId:e.currentUser.id})}}},[e._v("Unfollow")]):s("button",{on:{click:function(t){return e.addFollowing({UserId:e.currentUser.id})}}},[e._v("Follow")])],1)},r=[],i=s("cebc"),c=s("2f62"),o={props:{user:Object},data:function(){return{currentUser:Object}},computed:Object(i["a"])({},Object(c["e"])("account",{account:function(e){return e}}),{isFollowing:function(){var e=this;return this.account.Followings.some(function(t){return t.id===e.currentUser.id})}}),beforeMount:function(){this.currentUser=this.user.id===this.account.id?this.account:this.user},methods:Object(i["a"])({},Object(c["b"])("account",["addFollowing","removeFollowing"]))},a=o,u=(s("a058"),s("2877")),l=Object(u["a"])(a,n,r,!1,null,"39aa3a44",null);t["a"]=l.exports},b17a:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"tweets"}},[s("div",{staticClass:"tweet"},[s("img",{attrs:{src:e.user.avatar,alt:e.user.name}}),s("div",[s("div",[s("router-link",{attrs:{to:"/users/"+e.user.id+"/tweets",tag:"span"}},[e._v("@"+e._s(e.user.name))]),s("span",[e._v(", "+e._s(e.date)+", "+e._s(e.time))])],1),s("p",[e._v(e._s(e.tweet.description.substring(0,50)))]),s("div",[s("div",{staticClass:"reply-like"},[s("router-link",{staticClass:"reply",attrs:{to:"/tweets/"+e.tweet.id+"/replies",tag:"span"}},[e._v("Reply("+e._s(e.tweet.Replies.length)+")")]),e.isLiked?s("span",{staticClass:"like",on:{click:function(t){return e.deleteLike(e.account.id,e.tweet.id)}}},[e._v("Unlike("+e._s(e.tweet.LikedUsers.length)+")")]):s("span",{staticClass:"like",on:{click:function(t){return e.postLike(e.account.id,e.tweet.id)}}},[e._v("Like("+e._s(e.tweet.LikedUsers.length)+")")])],1)])]),0!==e.tweet.Replies.length&&this.$route.path.includes("admin")?s("button",{staticClass:"drop-down",on:{click:function(t){e.showReplies=!e.showReplies}}},[!1===e.showReplies?s("i",{staticClass:"fas fa-angle-left"}):e._e(),!0===e.showReplies?s("i",{staticClass:"fas fa-angle-down"}):e._e()]):e._e()]),s("transition",{attrs:{name:"reply-fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.showReplies,expression:"showReplies"}],attrs:{id:"replies"}},[e._l(e.tweet.Replies,function(e){return[s("reply-card",{key:e.id,attrs:{reply:e}})]})],2)])],1)},r=[],i=(s("6762"),s("2fdb"),s("cebc")),c=s("2f62"),o=s("d88d"),a={name:"tweet",props:{tweet:Object,user:Object,account:Object},components:{ReplyCard:o["a"]},data:function(){return{showReplies:!1}},computed:{isLiked:function(){var e=this;return this.account.LikedTweets.some(function(t){return t.id===e.tweet.id})},date:function(){var e=new Date(this.tweet.createdAt),t=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1;return e.getFullYear()+"-"+t+"-"+e.getDate()},time:function(){var e=new Date(this.tweet.createdAt);return e.getHours()+":"+e.getMinutes()}},methods:Object(i["a"])({},Object(c["d"])("account",["ADD_ACCOUNT_LIKE","REMOVE_ACCOUNT_LIKE"]),Object(c["d"])("tweet",["ADD_TWEET_LIKE","REMOVE_TWEET_LIKE","ADD_TWEETS_LIKE","REMOVE_TWEETS_LIKE"]),Object(c["d"])("user",["ADD_USER_TWEET_LIKE","REMOVE_USER_TWEET_LIKE"]),Object(c["b"])("tweet",["addLike","removeLike"]),{postLike:function(e,t){"/tweets"===this.$route.path||this.$route.path.includes("likes")||this.$route.path.includes("admin")?(console.log("add like in homepage or Like page or admin page"),this.ADD_TWEETS_LIKE({accountId:e,tweetId:t})):this.$route.path.includes("users")?(console.log("add like in profile"),this.ADD_USER_TWEET_LIKE({accountId:e,tweetId:t})):(console.log("add like in reply"),this.ADD_TWEET_LIKE({accountId:e})),this.ADD_ACCOUNT_LIKE({id:t}),this.addLike({accountId:e,tweetId:t})},deleteLike:function(e,t){"/tweets"===this.$route.path||this.$route.path.includes("likes")||this.$route.path.includes("admin")?(console.log("remove like in homepage or Like page or admin page"),this.REMOVE_TWEETS_LIKE({accountId:e,tweetId:t})):this.$route.path.includes("users")?(console.log("remove like in profile"),this.REMOVE_USER_TWEET_LIKE({accountId:e,tweetId:t})):(console.log("remove like in reply"),this.REMOVE_TWEET_LIKE({accountId:e})),this.REMOVE_ACCOUNT_LIKE({tweetId:t}),this.removeLike({accountId:e,tweetId:t})},toggleReplies:function(){this.showReplies=!this.showReplies}})},u=a,l=(s("77cc"),s("2877")),d=Object(l["a"])(u,n,r,!1,null,"838bf76c",null);t["a"]=d.exports},bced:function(e,t,s){},c2b6:function(e,t,s){},d2c8:function(e,t,s){var n=s("aae3"),r=s("be13");e.exports=function(e,t,s){if(n(t))throw TypeError("String#"+s+" doesn't accept regex!");return String(r(e))}},d88d:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"replies"},[s("img",{attrs:{src:e.reply.User.avatar}}),s("div",[s("div",[s("router-link",{attrs:{to:"/users/"+e.reply.userId+"/tweets",tag:"span"}},[e._v("Replying to @"+e._s(e.reply.User.name))]),s("br"),s("span",[e._v(e._s(e.reply.createdAt))])],1),s("p",[e._v(e._s(e.reply.comment.substring(0,50)))])])])},r=[],i={name:"ReplayCard",props:{reply:Object}},c=i,o=(s("53ef"),s("2877")),a=Object(o["a"])(c,n,r,!1,null,"8242c580",null);t["a"]=a.exports}}]);
//# sourceMappingURL=chunk-47e309e7.e996ca4c.js.map