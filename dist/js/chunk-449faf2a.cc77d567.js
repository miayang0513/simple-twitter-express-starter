(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-449faf2a"],{1615:function(e,t,r){},"18ed":function(e,t,r){"use strict";var n=r("1615"),s=r.n(n);s.a},"1d42":function(e,t,r){},2957:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"user"},[r("img",{attrs:{src:e.user.avatar,alt:e.user.name}}),r("div",[r("router-link",{staticClass:"user-profile-link",attrs:{to:"/users/"+e.user.id+"/tweets",tag:"span"}},[e._v("@"+e._s(e.user.name))]),e.user.introduction?r("p",[e._v(e._s(e.user.introduction.substring(0,50)))]):r("p",[e._v("no introduction yet")]),e.isFollowing?r("button",{on:{click:function(t){return e.removeFollowing({UserId:e.user.id})}}},[e._v("Unfollow")]):e.account.id!==e.user.id?r("button",{on:{click:function(t){return e.addFollowing({UserId:e.user.id})}}},[e._v("Follow")]):e._e()],1)])},s=[],i=r("cebc"),o=r("2f62"),c={name:"UserCard",props:{user:Object,account:Object},computed:{isFollowing:function(){var e=this;return this.account.Followings.some(function(t){return t.id===e.user.id})}},methods:Object(i["a"])({},Object(o["b"])("account",["addFollowing","removeFollowing"]))},a=c,u=(r("18ed"),r("2877")),l=Object(u["a"])(a,n,s,!1,null,"99ded008",null);t["a"]=l.exports},"2fdb":function(e,t,r){"use strict";var n=r("5ca1"),s=r("d2c8"),i="includes";n(n.P+n.F*r("5147")(i),"String",{includes:function(e){return!!~s(this,e,i).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},"390f":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"content"}},[r("div",{staticClass:"container"},[r("user-side-bar",{attrs:{id:"user-profile",user:e.user}}),r("main",[r("h3",[e._v(" Follower")]),r("div",{attrs:{id:"followers"}},[e._l(e.followers,function(t){return[r("user-card",{attrs:{user:t,account:e.account}})]})],2)])],1)])},s=[],i=(r("55dd"),r("cebc")),o=r("b17a"),c=r("adf8"),a=r("2957"),u=r("2f62"),l={name:"profile",components:{Tweet:o["a"],UserSideBar:c["a"],UserCard:a["a"]},computed:Object(i["a"])({},Object(u["e"])("user",{user:function(e){return e.user}}),Object(u["e"])("account",{account:function(e){return e}}),{followers:function(){return this.user.Followers.slice().sort(function(e,t){return new Date(t.Followship.createdAt)-new Date(e.Followship.createdAt)})}}),methods:{}},d=l,p=(r("8fbc"),r("2877")),f=Object(p["a"])(d,n,s,!1,null,"a623f572",null);t["default"]=f.exports},5147:function(e,t,r){var n=r("2b4c")("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[n]=!1,!"/./"[e](t)}catch(s){}}return!0}},"53ef":function(e,t,r){"use strict";var n=r("a77d"),s=r.n(n);s.a},6762:function(e,t,r){"use strict";var n=r("5ca1"),s=r("c366")(!0);n(n.P,"Array",{includes:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}}),r("9c6c")("includes")},"77cc":function(e,t,r){"use strict";var n=r("c2b6"),s=r.n(n);s.a},8542:function(e,t,r){},"8fbc":function(e,t,r){"use strict";var n=r("1d42"),s=r.n(n);s.a},a058:function(e,t,r){"use strict";var n=r("8542"),s=r.n(n);s.a},a77d:function(e,t,r){},aae3:function(e,t,r){var n=r("d3f4"),s=r("2d95"),i=r("2b4c")("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==s(e))}},adf8:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"user-profile"}},[r("div",[r("div",{style:"background-image: url("+e.currentUser.avatar+")"}),r("h3",[e._v(e._s(e.currentUser.name))]),e.user.introduction?r("p",[e._v(e._s(e.user.introduction.substring(0,50)))]):r("p",[e._v("no introduction yet")])]),r("div",[r("router-link",{attrs:{to:"/users/"+e.currentUser.id+"/tweets",tag:"p"}},[e._v("Tweets "+e._s(e.currentUser.Tweets.length))]),r("router-link",{attrs:{to:"/users/"+e.currentUser.id+"/followings",tag:"p"}},[e._v("Followings "+e._s(e.currentUser.Followings.length))]),r("router-link",{attrs:{to:"/users/"+e.currentUser.id+"/followers",tag:"p"}},[e._v("Followers "+e._s(e.currentUser.Followers.length))]),r("router-link",{attrs:{to:"/users/"+e.currentUser.id+"/likes",tag:"p"}},[e._v("like "+e._s(e.currentUser.LikedTweets.length))])],1),e.user.id===e.account.id?r("router-link",{attrs:{to:"/users/"+e.account.id+"/edit",tag:"button"}},[e._v("Edit Profile")]):e.isFollowing?r("button",{on:{click:function(t){return e.removeFollowing({UserId:e.currentUser.id})}}},[e._v("Unfollow")]):r("button",{on:{click:function(t){return e.addFollowing({UserId:e.currentUser.id})}}},[e._v("Follow")])],1)},s=[],i=r("cebc"),o=r("2f62"),c={props:{user:Object},data:function(){return{currentUser:Object}},computed:Object(i["a"])({},Object(o["e"])("account",{account:function(e){return e}}),{isFollowing:function(){var e=this;return this.account.Followings.some(function(t){return t.id===e.currentUser.id})}}),beforeMount:function(){this.currentUser=this.user.id===this.account.id?this.account:this.user},methods:Object(i["a"])({},Object(o["b"])("account",["addFollowing","removeFollowing"]))},a=c,u=(r("a058"),r("2877")),l=Object(u["a"])(a,n,s,!1,null,"39aa3a44",null);t["a"]=l.exports},b17a:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"tweets"}},[r("div",{staticClass:"tweet"},[r("img",{attrs:{src:e.user.avatar,alt:e.user.name}}),r("div",[r("div",[r("router-link",{attrs:{to:"/users/"+e.user.id+"/tweets",tag:"span"}},[e._v("@"+e._s(e.user.name))]),r("span",[e._v(", "+e._s(e.date)+", "+e._s(e.time))])],1),r("p",[e._v(e._s(e.tweet.description.substring(0,50)))]),r("div",[r("div",{staticClass:"reply-like"},[r("router-link",{staticClass:"reply",attrs:{to:"/tweets/"+e.tweet.id+"/replies",tag:"span"}},[e._v("Reply("+e._s(e.tweet.Replies.length)+")")]),e.isLiked?r("span",{staticClass:"like",on:{click:function(t){return e.deleteLike(e.account.id,e.tweet.id)}}},[e._v("Unlike("+e._s(e.tweet.LikedUsers.length)+")")]):r("span",{staticClass:"like",on:{click:function(t){return e.postLike(e.account.id,e.tweet.id)}}},[e._v("Like("+e._s(e.tweet.LikedUsers.length)+")")])],1)])]),0!==e.tweet.Replies.length&&this.$route.path.includes("admin")?r("button",{staticClass:"drop-down",on:{click:function(t){e.showReplies=!e.showReplies}}},[!1===e.showReplies?r("i",{staticClass:"fas fa-angle-left"}):e._e(),!0===e.showReplies?r("i",{staticClass:"fas fa-angle-down"}):e._e()]):e._e()]),r("transition",{attrs:{name:"reply-fade"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.showReplies,expression:"showReplies"}],attrs:{id:"replies"}},[e._l(e.tweet.Replies,function(e){return[r("reply-card",{key:e.id,attrs:{reply:e}})]})],2)])],1)},s=[],i=(r("6762"),r("2fdb"),r("cebc")),o=r("2f62"),c=r("d88d"),a={name:"tweet",props:{tweet:Object,user:Object,account:Object},components:{ReplyCard:c["a"]},data:function(){return{showReplies:!1}},computed:{isLiked:function(){var e=this;return this.account.LikedTweets.some(function(t){return t.id===e.tweet.id})},date:function(){var e=new Date(this.tweet.createdAt),t=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1;return e.getFullYear()+"-"+t+"-"+e.getDate()},time:function(){var e=new Date(this.tweet.createdAt);return e.getHours()+":"+e.getMinutes()}},methods:Object(i["a"])({},Object(o["d"])("account",["ADD_ACCOUNT_LIKE","REMOVE_ACCOUNT_LIKE"]),Object(o["d"])("tweet",["ADD_TWEET_LIKE","REMOVE_TWEET_LIKE","ADD_TWEETS_LIKE","REMOVE_TWEETS_LIKE"]),Object(o["d"])("user",["ADD_USER_TWEET_LIKE","REMOVE_USER_TWEET_LIKE"]),Object(o["b"])("tweet",["addLike","removeLike"]),{postLike:function(e,t){"/tweets"===this.$route.path||this.$route.path.includes("likes")||this.$route.path.includes("admin")?(console.log("add like in homepage or Like page or admin page"),this.ADD_TWEETS_LIKE({accountId:e,tweetId:t})):this.$route.path.includes("users")?(console.log("add like in profile"),this.ADD_USER_TWEET_LIKE({accountId:e,tweetId:t})):(console.log("add like in reply"),this.ADD_TWEET_LIKE({accountId:e})),this.ADD_ACCOUNT_LIKE({id:t}),this.addLike({accountId:e,tweetId:t})},deleteLike:function(e,t){"/tweets"===this.$route.path||this.$route.path.includes("likes")||this.$route.path.includes("admin")?(console.log("remove like in homepage or Like page or admin page"),this.REMOVE_TWEETS_LIKE({accountId:e,tweetId:t})):this.$route.path.includes("users")?(console.log("remove like in profile"),this.REMOVE_USER_TWEET_LIKE({accountId:e,tweetId:t})):(console.log("remove like in reply"),this.REMOVE_TWEET_LIKE({accountId:e})),this.REMOVE_ACCOUNT_LIKE({tweetId:t}),this.removeLike({accountId:e,tweetId:t})},toggleReplies:function(){this.showReplies=!this.showReplies}})},u=a,l=(r("77cc"),r("2877")),d=Object(l["a"])(u,n,s,!1,null,"838bf76c",null);t["a"]=d.exports},c2b6:function(e,t,r){},d2c8:function(e,t,r){var n=r("aae3"),s=r("be13");e.exports=function(e,t,r){if(n(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(s(e))}},d88d:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"replies"},[r("img",{attrs:{src:e.reply.User.avatar}}),r("div",[r("div",[r("router-link",{attrs:{to:"/users/"+e.reply.userId+"/tweets",tag:"span"}},[e._v("Replying to @"+e._s(e.reply.User.name))]),r("br"),r("span",[e._v(e._s(e.reply.createdAt))])],1),r("p",[e._v(e._s(e.reply.comment.substring(0,50)))])])])},s=[],i={name:"ReplayCard",props:{reply:Object}},o=i,c=(r("53ef"),r("2877")),a=Object(c["a"])(o,n,s,!1,null,"8242c580",null);t["a"]=a.exports}}]);
//# sourceMappingURL=chunk-449faf2a.cc77d567.js.map