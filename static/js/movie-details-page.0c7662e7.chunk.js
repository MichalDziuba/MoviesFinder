"use strict";(self.webpackChunkMoviesFinder=self.webpackChunkMoviesFinder||[]).push([[347,223],{9105:function(e,i,s){s.r(i),s.d(i,{APIKEY:function(){return d},default:function(){return u}});var a=s(5861),t=s(8152),n=s(7757),o=s.n(n),r=s(2791),c=s(3504),l=s(4569),_=s.n(l),m=s(5706),v=s(184),d="7ac8d52cacafb4138b02b7a4e8b6c69d";function u(){var e=(0,r.useState)([]),i=(0,t.Z)(e,2),s=i[0],n=i[1];return(0,r.useEffect)((function(){function e(){return(e=(0,a.Z)(o().mark((function e(){var i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_().get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(d,"&language=en-US"));case 3:i=e.sent,n(i.data.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,v.jsxs)("div",{className:m.Z.homepage_wrapper,children:[(0,v.jsx)("h2",{className:m.Z.title,children:"Trending Today!"}),(0,v.jsx)("ul",{className:m.Z.list,children:s.map((function(e){return(0,v.jsxs)("li",{className:m.Z.list_item,children:[" ",(0,v.jsx)(c.rU,{className:m.Z.list_item_link,to:"/movies/".concat(e.id),children:e.original_title},e.id)]},e.id)}))})]})}},863:function(e,i,s){s.r(i),s.d(i,{default:function(){return P}});var a=s(5861),t=s(8152),n=s(7757),o=s.n(n),r=s(3504),c=s(6871),l=s(2791),_=s(9105),m=s(4569),v=s.n(m),d="MovieDetailsPage_movieDetails_wrapper__7MJo6",u="MovieDetailsPage_movieDetails_image__M+o-T",p="MovieDetailsPage_movieDetails_score__lRR3w",h="MovieDetailsPage_movieDetails_h3__pi1fC",g="MovieDetailsPage_movieDetails_overview__1xJaM",f="MovieDetailsPage_movieDetails_wrapper_links__M2HMJ",x="MovieDetailsPage_movieDetails_link__FmmQu",j=s(184);function P(){var e=(0,l.useState)(),i=(0,t.Z)(e,2),s=i[0],n=i[1],m=(0,c.UO)();return(0,l.useEffect)((function(){function e(){return(e=(0,a.Z)(o().mark((function e(){var i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v().get("https://api.themoviedb.org/3/movie/".concat(m.movieId,"?api_key=").concat(_.APIKEY,"&language=en-US"));case 3:i=e.sent,n(i.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),s?(0,j.jsxs)("div",{className:d,children:[(0,j.jsxs)("div",{children:[(0,j.jsx)("h2",{children:s.original_title}),(0,j.jsx)("img",{className:u,src:"https://image.tmdb.org/t/p/w500/".concat(s.poster_path),alt:"movie poster "}),(0,j.jsxs)("p",{className:p,children:["UserScore: ",10*s.vote_average,"%"]})]}),(0,j.jsxs)("div",{children:[(0,j.jsx)("h3",{className:h,children:"Overview"}),(0,j.jsx)("p",{className:g,children:s.overview})]}),(0,j.jsxs)("div",{children:[(0,j.jsx)("h3",{className:h,children:"Genres"}),(0,j.jsx)("ul",{children:null===s||void 0===s?void 0:s.genres.map((function(e){return(0,j.jsx)("li",{children:e.name},e.id)}))})]}),(0,j.jsxs)("div",{children:[(0,j.jsx)("h3",{className:h,children:"Additional information"}),(0,j.jsxs)("div",{className:f,children:[(0,j.jsx)(r.rU,{className:x,to:"/movies/".concat(m.movieId,"/cast"),children:"Cast"}),(0,j.jsx)(r.rU,{className:x,to:"/movies/".concat(m.movieId,"/reviews"),children:"Reviews"})]})]}),(0,j.jsx)(c.j3,{})]}):(0,j.jsx)("p",{children:"...loading"})}},5706:function(e,i){i.Z={homepage_wrapper:"HomePage_homepage_wrapper__E+2fc",title:"HomePage_title__N0Lpq",list:"HomePage_list__DG7lf",list_item:"HomePage_list_item__3sWuN",list_item_link:"HomePage_list_item_link__nWNm7",movies_Loading:"HomePage_movies_Loading__nZw5R",movies_input:"HomePage_movies_input__cMOFc",movies_button:"HomePage_movies_button__TiHgP",movies_form:"HomePage_movies_form__eaiDi",movies_searchSomething:"HomePage_movies_searchSomething__uMAPb"}}}]);
//# sourceMappingURL=movie-details-page.0c7662e7.chunk.js.map