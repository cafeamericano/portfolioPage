(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4694f62a"],{"0d2c":function(t,e,a){},"180e":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid text-left"},[a("section",{staticClass:"col-xl-9 col-lg-12 col-md-9 p-3 animated fadeInUp delay-0s frosted-bg-thin"},[a("p",{staticClass:"thin-font",domProps:{innerHTML:t._s(t.content)}})])])},i=[],s={name:"HeaderText",data:function(){return{}},props:["content"]},r=s,c=a("2877"),l=Object(c["a"])(r,n,i,!1,null,null,null);e["a"]=l.exports},"2ac3":function(t,e,a){},"36ad":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"col animated fadeInUp text-left mt-4 p-3"},[a("h1",{staticClass:"magenta",domProps:{innerHTML:t._s(t.content)}})])},i=[],s={name:"PageHeader",data:function(){return{}},props:["content"]},r=s,c=a("2877"),l=Object(c["a"])(r,n,i,!1,null,null,null);e["a"]=l.exports},6824:function(t,e,a){"use strict";var n=a("0d2c"),i=a.n(n);i.a},7763:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"outerWrapper"},[a("div",{staticClass:"innerWrapper"},[a("span",{domProps:{innerHTML:t._s(t.content)}})])])},i=[],s={name:"ScreenOverlay",data:function(){return{}},props:["content"]},r=s,c=(a("e3e9"),a("2877")),l=Object(c["a"])(r,n,i,!1,null,"1fa06995",null);e["a"]=l.exports},"8f8b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[a("PageHeader",{attrs:{content:t.pageTitle}}),a("PageHeaderText",{attrs:{content:t.pageHeaderText}}),a("div",{staticClass:"container p-5"},[t.applicationsLoaded?a("section",{staticClass:"animated slideInUp"},[a("h3",{staticClass:"magenta text-left"},[t._v("Featured Applications")]),a("hr"),a("div",{staticClass:"row"},[a("div",{staticClass:"card-columns cc-2"},t._l(t.allApplications,(function(e){return a("div",{key:e.title},[e.isFeatured?a("section",[a("AppPreview",t._b({},"AppPreview",e,!1))],1):t._e()])})),0)])]):a("section",[a("ScreenOverlay",{attrs:{content:t.loadingMessage}})],1)])],1)},i=[],s=(a("d3b7"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card frosted-bg rounded-0 shadow mb-3 text-left"},[a("div",[a("div",{staticStyle:{width:"100%"}},[a("img",{attrs:{src:t.$attrs.imagePath}})]),a("div",{staticClass:"p-2 descriptive-text"},[a("div",{staticClass:"col text-right"},[a("strong",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(t.$attrs.title))])]),a("div",{staticClass:"col text-right"},[a("small",[t._v("Since "+t._s(t.$attrs.publishDate))])]),a("hr"),a("p",{staticClass:"text-left"},[t._v(t._s(t.$attrs.description))]),a("small",[t._v("Primary Techs: "+t._s(t.$attrs.keywords.filter((function(e){return t.keyTechnologiesToDisplay.includes(e)})).join(", ")))]),a("br"),a("hr"),a("div",{staticClass:"text-right"},[a("a",{attrs:{href:t.$attrs.deployedLink}},[t._v("Experience")]),t._v(" | "),a("a",{attrs:{href:t.$attrs.githubLink}},[t._v("View Source")])])])])])}),r=[],c={name:"AppPreview",data:function(){return{keyTechnologiesToDisplay:["C++","Go","Java","JavaScript","Python","SQL","Typescript","Angular","React","Vue","Node","Flask","MongoDB","MySQL","Postgres","Redis"]}},props:[]},l=c,o=(a("6824"),a("2877")),p=Object(o["a"])(l,s,r,!1,null,"343f48d5",null),d=p.exports,u=a("7763"),f=a("36ad"),h=a("180e"),v={name:"Applications",components:{AppPreview:d,ScreenOverlay:u["a"],PageHeader:f["a"],PageHeaderText:h["a"]},mounted:function(){this.pullApplications(),this.pullKeywords()},data:function(){return{pageTitle:"Applications",pageHeaderText:"\n                Experience my capabilities first hand by exploring my applications. Explore my featured applications below or, for an interactive\n                experience that will allow you to filter my full collection of apps by technologies used, visit my complete application \n                gallery <a href='https://cafeamericano.github.io/appGalleryLite/' target='_blank' class='seagreen'>here</a>.\n            ",componentKey:0,allApplications:[],applicationsLoaded:!1,loadingMessage:"\n                <div>Loading...</div>\n                <div>\n                    <img src='https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif'/>\n                </div>\n            "}},methods:{pullApplications:function(){var t=this;fetch("https://central-api-flask-cm6ud432ka-uc.a.run.app/AppGalleryLite/api/applications").then((function(t){return t.json()})).then((function(e){t.allApplications=e,t.componentKey+=1,t.applicationsLoaded=!0}))},pullKeywords:function(){var t=this;fetch("https://central-api-flask-cm6ud432ka-uc.a.run.app/AppGalleryLite/api/keywords").then((function(t){return t.json()})).then((function(e){t.todos=e,t.componentKey+=1}))}}},m=v,g=Object(o["a"])(m,n,i,!1,null,null,null);e["default"]=g.exports},e3e9:function(t,e,a){"use strict";var n=a("2ac3"),i=a.n(n);i.a}}]);
//# sourceMappingURL=chunk-4694f62a.7085e3d6.js.map