(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-512456bc"],{"024f":function(t,e,s){},1615:function(t,e,s){},"18ed":function(t,e,s){"use strict";var i=s("1615"),n=s.n(i);n.a},2957:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user"},[s("img",{attrs:{src:t.user.avatar,alt:t.user.name}}),s("div",[s("router-link",{staticClass:"user-profile-link",attrs:{to:"/users/"+t.user.id+"/tweets",tag:"span"}},[t._v("@"+t._s(t.user.name))]),t.user.introduction?s("p",[t._v(t._s(t.user.introduction.substring(0,50)))]):s("p",[t._v("no introduction yet")]),t.isFollowing?s("button",{on:{click:function(e){return t.removeFollowing({UserId:t.user.id})}}},[t._v("Unfollow")]):t.account.id!==t.user.id?s("button",{on:{click:function(e){return t.addFollowing({UserId:t.user.id})}}},[t._v("Follow")]):t._e()],1)])},n=[],r=s("cebc"),o=s("2f62"),c={name:"UserCard",props:{user:Object,account:Object},computed:{isFollowing:function(){var t=this;return this.account.Followings.some(function(e){return e.id===t.user.id})}},methods:Object(r["a"])({},Object(o["b"])("account",["addFollowing","removeFollowing"]))},a=c,u=(s("18ed"),s("2877")),d=Object(u["a"])(a,i,n,!1,null,"99ded008",null);e["a"]=d.exports},"2fdb":function(t,e,s){"use strict";var i=s("5ca1"),n=s("d2c8"),r="includes";i(i.P+i.F*s("5147")(r),"String",{includes:function(t){return!!~n(this,t,r).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},5147:function(t,e,s){var i=s("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(s){try{return e[i]=!1,!"/./"[t](e)}catch(n){}}return!0}},"53ef":function(t,e,s){"use strict";var i=s("a77d"),n=s.n(i);n.a},6762:function(t,e,s){"use strict";var i=s("5ca1"),n=s("c366")(!0);i(i.P,"Array",{includes:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),s("9c6c")("includes")},"77cc":function(t,e,s){"use strict";var i=s("c2b6"),n=s.n(i);n.a},a77d:function(t,e,s){},aae3:function(t,e,s){var i=s("d3f4"),n=s("2d95"),r=s("2b4c")("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==n(t))}},b17a:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"tweets"}},[s("div",{staticClass:"tweet"},[s("img",{attrs:{src:t.user.avatar,alt:t.user.name}}),s("div",[s("div",[s("router-link",{attrs:{to:"/users/"+t.user.id+"/tweets",tag:"span"}},[t._v("@"+t._s(t.user.name))]),s("span",[t._v(", "+t._s(t.date)+", "+t._s(t.time))])],1),s("p",[t._v(t._s(t.tweet.description.substring(0,50)))]),s("div",[s("div",{staticClass:"reply-like"},[s("router-link",{staticClass:"reply",attrs:{to:"/tweets/"+t.tweet.id+"/replies",tag:"span"}},[t._v("Reply("+t._s(t.tweet.Replies.length)+")")]),t.isLiked?s("span",{staticClass:"like",on:{click:function(e){return t.deleteLike(t.account.id,t.tweet.id)}}},[t._v("Unlike("+t._s(t.tweet.LikedUsers.length)+")")]):s("span",{staticClass:"like",on:{click:function(e){return t.postLike(t.account.id,t.tweet.id)}}},[t._v("Like("+t._s(t.tweet.LikedUsers.length)+")")])],1)])]),0!==t.tweet.Replies.length&&this.$route.path.includes("admin")?s("button",{staticClass:"drop-down",on:{click:function(e){t.showReplies=!t.showReplies}}},[!1===t.showReplies?s("i",{staticClass:"fas fa-angle-left"}):t._e(),!0===t.showReplies?s("i",{staticClass:"fas fa-angle-down"}):t._e()]):t._e()]),s("transition",{attrs:{name:"reply-fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.showReplies,expression:"showReplies"}],attrs:{id:"replies"}},[t._l(t.tweet.Replies,function(t){return[s("reply-card",{key:t.id,attrs:{reply:t}})]})],2)])],1)},n=[],r=(s("6762"),s("2fdb"),s("cebc")),o=s("2f62"),c=s("d88d"),a={name:"tweet",props:{tweet:Object,user:Object,account:Object},components:{ReplyCard:c["a"]},data:function(){return{showReplies:!1}},computed:{isLiked:function(){var t=this;return this.account.LikedTweets.some(function(e){return e.id===t.tweet.id})},date:function(){var t=new Date(this.tweet.createdAt),e=t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1;return t.getFullYear()+"-"+e+"-"+t.getDate()},time:function(){var t=new Date(this.tweet.createdAt);return t.getHours()+":"+t.getMinutes()}},methods:Object(r["a"])({},Object(o["d"])("account",["ADD_ACCOUNT_LIKE","REMOVE_ACCOUNT_LIKE"]),Object(o["d"])("tweet",["ADD_TWEET_LIKE","REMOVE_TWEET_LIKE","ADD_TWEETS_LIKE","REMOVE_TWEETS_LIKE"]),Object(o["d"])("user",["ADD_USER_TWEET_LIKE","REMOVE_USER_TWEET_LIKE"]),Object(o["b"])("tweet",["addLike","removeLike"]),{postLike:function(t,e){"/tweets"===this.$route.path||this.$route.path.includes("likes")||this.$route.path.includes("admin")?(console.log("add like in homepage or Like page or admin page"),this.ADD_TWEETS_LIKE({accountId:t,tweetId:e})):this.$route.path.includes("users")?(console.log("add like in profile"),this.ADD_USER_TWEET_LIKE({accountId:t,tweetId:e})):(console.log("add like in reply"),this.ADD_TWEET_LIKE({accountId:t})),this.ADD_ACCOUNT_LIKE({id:e}),this.addLike({accountId:t,tweetId:e})},deleteLike:function(t,e){"/tweets"===this.$route.path||this.$route.path.includes("likes")||this.$route.path.includes("admin")?(console.log("remove like in homepage or Like page or admin page"),this.REMOVE_TWEETS_LIKE({accountId:t,tweetId:e})):this.$route.path.includes("users")?(console.log("remove like in profile"),this.REMOVE_USER_TWEET_LIKE({accountId:t,tweetId:e})):(console.log("remove like in reply"),this.REMOVE_TWEET_LIKE({accountId:t})),this.REMOVE_ACCOUNT_LIKE({tweetId:e}),this.removeLike({accountId:t,tweetId:e})},toggleReplies:function(){this.showReplies=!this.showReplies}})},u=a,d=(s("77cc"),s("2877")),l=Object(d["a"])(u,i,n,!1,null,"838bf76c",null);e["a"]=l.exports},bb51:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"content"}},[s("div",{staticClass:"container"},[s("div",{attrs:{id:"main"}},[s("div",{attrs:{id:"send-tweets"}},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],attrs:{name:"text",id:"text",cols:"30",rows:"10"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}}),s("button",{on:{click:t.checkBeforePost}},[t._v("Tweet")])]),s("div",{attrs:{id:"tweets"}},[t._l(t.tweets,function(e){return[s("tweet",{key:e.id,attrs:{tweet:e,user:e.User,account:t.account}})]})],2)]),s("div",{attrs:{id:"side-bar"}},[s("h3",[t._v("Popular")]),s("div",{attrs:{id:"topUsers"}},[t._l(t.topUsers,function(e){return[s("user-card",{key:e.id,attrs:{user:e,account:t.account}})]})],2)])])])},n=[],r=s("cebc"),o=s("b17a"),c=s("2957"),a=s("2f62"),u={name:"home",components:{Tweet:o["a"],UserCard:c["a"]},data:function(){return{description:""}},computed:Object(r["a"])({},Object(a["e"])("tweet",{tweets:function(t){return t.tweets}}),Object(a["e"])("account",{account:function(t){return t}}),Object(a["e"])("topUsers",{topUsers:function(t){return t}})),methods:Object(r["a"])({},Object(a["b"])("tweet",["postTweet"]),Object(a["b"])("notification",["addError"]),{checkBeforePost:function(){""!==this.description?this.description.length>140?this.addError("長度必須小於140字！"):(this.postTweet({description:this.description}),this.description=""):this.addError("Please tweet something before submit.")}})},d=u,l=(s("d8cb"),s("2877")),p=Object(l["a"])(d,i,n,!1,null,"712f4643",null);e["default"]=p.exports},c2b6:function(t,e,s){},d2c8:function(t,e,s){var i=s("aae3"),n=s("be13");t.exports=function(t,e,s){if(i(e))throw TypeError("String#"+s+" doesn't accept regex!");return String(n(t))}},d88d:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"replies"},[s("img",{attrs:{src:t.reply.User.avatar}}),s("div",[s("div",[s("router-link",{attrs:{to:"/users/"+t.reply.userId+"/tweets",tag:"span"}},[t._v("Replying to @"+t._s(t.reply.User.name))]),s("br"),s("span",[t._v(t._s(t.reply.createdAt))])],1),s("p",[t._v(t._s(t.reply.comment.substring(0,50)))])])])},n=[],r={name:"ReplayCard",props:{reply:Object}},o=r,c=(s("53ef"),s("2877")),a=Object(c["a"])(o,i,n,!1,null,"8242c580",null);e["a"]=a.exports},d8cb:function(t,e,s){"use strict";var i=s("024f"),n=s.n(i);n.a}}]);
//# sourceMappingURL=chunk-512456bc.0b237c28.js.map