"use strict";(self.webpackChunkMoviesFinder=self.webpackChunkMoviesFinder||[]).push([[362,223],{9105:function(e,t,i){i.r(t),i.d(t,{APIKEY:function(){return p},default:function(){return d}});var a=i(5861),n=i(8152),s=i(7757),o=i.n(s),r=i(2791),c=i(3504),l=i(4569),_=i.n(l),m=i(5706),u=i(184),p="7ac8d52cacafb4138b02b7a4e8b6c69d";function d(){var e=(0,r.useState)([]),t=(0,n.Z)(e,2),i=t[0],s=t[1];return(0,r.useEffect)((function(){function e(){return(e=(0,a.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_().get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(p,"&language=en-US"));case 3:t=e.sent,s(t.data.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,u.jsxs)("div",{className:m.Z.homepage_wrapper,children:[(0,u.jsx)("h2",{className:m.Z.title,children:"Trending Today!"}),(0,u.jsx)("ul",{className:m.Z.list,children:i.map((function(e){return(0,u.jsxs)("li",{className:m.Z.list_item,children:[" ",(0,u.jsx)(c.rU,{className:m.Z.list_item_link,to:"/movies/".concat(e.id),children:e.original_title},e.id)]},e.id)}))})]})}},2052:function(e,t,i){i.r(t),i.d(t,{default:function(){return v}});var a=i(5861),n=i(8152),s=i(7757),o=i.n(s),r=i(6871),c=i(9105),l=i(4569),_=i.n(l),m=i(2791),u="MovieCast_movieCredits_list__eiaLd",p="MovieCast_movieCredits_wrapper__Pa+d3",d="MovieCast_movieCredits_image__FL7K2",h="MovieCast_movieCredits_noInfo__t87D3",g=i(184);function v(){var e=(0,r.UO)().movieId,t=(0,m.useState)([]),i=(0,n.Z)(t,2),s=i[0],l=i[1];return(0,m.useEffect)((function(){function t(){return(t=(0,a.Z)(o().mark((function t(){var i;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_().get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(c.APIKEY,"&language=en-US"));case 3:i=t.sent,l(i.data.cast),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),(0,g.jsxs)("div",{children:[0===s.length&&(0,g.jsx)("p",{className:h,children:"Sorry, we have no info here!"}),s&&(0,g.jsx)("ul",{className:u,children:s.map((function(e){return(0,g.jsx)("li",{children:(0,g.jsxs)("div",{className:p,children:[e.profile_path?(0,g.jsx)("img",{alt:"actor",className:d,src:"https://image.tmdb.org/t/p/w500/".concat(e.profile_path)}):(0,g.jsx)("img",{className:d,alt:"no info",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"}),e.original_name,(0,g.jsxs)("p",{children:["Character: ",e.character]})]})},e.id)}))}),(0,g.jsx)(r.j3,{})]})}},5706:function(e,t){t.Z={homepage_wrapper:"HomePage_homepage_wrapper__E+2fc",title:"HomePage_title__N0Lpq",list:"HomePage_list__DG7lf",list_item:"HomePage_list_item__3sWuN",list_item_link:"HomePage_list_item_link__nWNm7",movies_Loading:"HomePage_movies_Loading__nZw5R",movies_input:"HomePage_movies_input__cMOFc",movies_button:"HomePage_movies_button__TiHgP",movies_form:"HomePage_movies_form__eaiDi",movies_searchSomething:"HomePage_movies_searchSomething__uMAPb"}}}]);
//# sourceMappingURL=movie-cast.36cef9db.chunk.js.map