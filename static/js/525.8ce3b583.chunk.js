"use strict";(self.webpackChunkmovie_app=self.webpackChunkmovie_app||[]).push([[525],{2616:function(e,n,t){t.d(n,{b:function(){return s}});var r=t(1413),a=(t(2791),t(1243)),s=(t(7568),a.Z.create({baseURL:"https://api.themoviedb.org/3"}));s.interceptors.request.use((function(e){return e.params=(0,r.Z)((0,r.Z)({},e.params),{},{api_key:"1e8cfdde8d627e45358cc8ee3259c637"}),e}),(function(e){return Promise.reject(e)})),s.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}))},3178:function(e,n,t){t.d(n,{Z:function(){return u}});t(2791);var r=t(4066),a=t(9806),s=t(6850),c=t(1632),i=t(9434),o=t(7097),l=t(184);function u(e){var n=e.movie,t=e.navigateDetail,u=(0,i.v9)((function(e){return e.watchlist.movies})),d=(0,i.I0)(),m=u.some((function(e){return e.id===n.id}));return(0,l.jsxs)("div",{class:"card border-0",onClick:function(){return t(n.id)},children:[(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(n.poster_path),class:"card-img-top rounded-1",alt:n.original_title}),(0,l.jsxs)("div",{class:"card-body px-0",children:[(0,l.jsx)("h5",{class:"card-title text-start",children:n.original_title.substr(0,15)}),(0,l.jsx)("p",{class:"card-text p-0 text-start mb-2",children:(0,l.jsx)(r.Z,{rating:n.vote_average/2})}),(0,l.jsxs)("p",{class:"card-text d-flex justify-content-between m-0",children:[(0,l.jsx)("small",{class:"text-body-secondary",children:n.release_date}),m?(0,l.jsx)("span",{className:"text-end px-3",style:{color:"var(--mainColor)"},onClick:function(e){e.stopPropagation(),d((0,o.gL)(n))},children:(0,l.jsx)(a.G,{icon:c.m6i,className:"fs-5"})}):(0,l.jsx)("span",{className:"text-end px-3",style:{color:"var(--mainColor)"},onClick:function(e){e.stopPropagation(),d((0,o.dO)(n))},children:(0,l.jsx)(a.G,{icon:s.m6i,className:"fs-5"})})]})]})]})}},6415:function(e,n,t){t.d(n,{Z:function(){return a}});t(2791);var r=t(184);function a(e){var n=e.currentPage,t=e.onPageChange,a=e.totalPages;return(0,r.jsx)("nav",{"aria-label":"Page navigation example",children:(0,r.jsxs)("ul",{className:"pagination justify-content-center my-5",children:[(0,r.jsx)("li",{className:"page-item",children:(0,r.jsx)("button",{className:"page-link border-0",style:{color:"var(--mainColor)"},"aria-label":"Previous",disabled:1==n,onClick:function(){return t(n-1)},children:(0,r.jsx)("span",{"aria-hidden":"true",children:"\xab"})})}),function(){for(var e=[],s=function(a){if(a>10)return 1;e.push((0,r.jsx)("li",{className:"page-item",children:(0,r.jsx)("button",{onClick:function(){return t(a)},className:n===a?"pageNumber page-link  border-0  active  ":"pageNumber border-0 page-link ",style:{color:"var(--mainColor)"},children:a},a)}))},c=1;c<=a&&!s(c);c++);return e}(),(0,r.jsx)("li",{className:"page-item",children:(0,r.jsx)("button",{className:"page-link border-0",style:{color:"var(--mainColor)"},"aria-label":"Next",disabled:10==n,onClick:function(){return t(n+1)},children:(0,r.jsx)("span",{"aria-hidden":"true",children:"\xbb"})})})]})})}},4066:function(e,n,t){t(2791);var r=t(9806),a=t(1632),s=t(6850),c=t(184);n.Z=function(e){for(var n=e.rating,t=[],i=Math.round(2*n)/2,o=1;o<=5;o++)o<=i?t.push((0,c.jsx)(r.G,{icon:a.Tab})):o===Math.ceil(i)&&i%1!==0?t.push((0,c.jsx)(r.G,{icon:a.a1Y})):t.push((0,c.jsx)(r.G,{icon:s.Tab}));return(0,c.jsx)("div",{style:{color:"var(--mainColor)"},children:t})}},7525:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var r=t(2791),a=t(9439),s=t(2616),c=function(e){return s.b.get("/movie/popular?language=".concat(e))},i=function(e,n){return s.b.get("/movie/popular?page=".concat(e,"&language=").concat(n))},o=t(3178),l=t(7689),u=t(6415),d=t(7568),m=t(184);function p(){var e=(0,r.useState)([]),n=(0,a.Z)(e,2),t=n[0],s=n[1],p=(0,r.useState)(""),f=(0,a.Z)(p,2),h=f[0],x=f[1],g=(0,r.useState)(1),v=(0,a.Z)(g,2),j=v[0],b=v[1],N=(0,l.s0)(),y=(0,r.useContext)(d.A),C=y.contextLanguage;y.setContextLanguage;(0,r.useEffect)((function(){c(C).then((function(e){return s(e.data.results)})).catch((function(e){return console.log(e)}))}),[C]),(0,r.useEffect)((function(){i(j,C).then((function(e){s(e.data.results)})).catch((function(e){return console.log(e)}))}),[j,C]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:"search-part bg-body-secondary my-5 p-5 rounded rounded-1 ",children:[(0,m.jsx)("h1",{className:"text-start mb-3",children:"Welcome To Our Movie App"}),(0,m.jsx)("p",{className:"text-start mb-3",children:"Millions of movies, TV shows and people to discover. Explore now."}),(0,m.jsxs)("form",{className:"input-group",onSubmit:function(e){return function(e){e.preventDefault(),""!=h&&N("/Search/".concat(h))}(e)},children:[(0,m.jsx)("input",{type:"search",class:"form-control",placeholder:"Search","aria-label":"Search","aria-describedby":"search-addon",value:h,name:"movieName",onChange:function(e){return function(e){x(e.target.value)}(e)}}),(0,m.jsx)("button",{type:"submit",class:"btn text-light",style:{backgroundColor:"var(--mainColor)"},children:"search"})]})]}),(0,m.jsxs)("div",{className:"movies",children:[(0,m.jsx)("h3",{className:"text-start mb-5",children:"Popular Movies"}),(0,m.jsx)("div",{className:"row row-cols-1 row-cols-lg-6 row-cols-md-2 g-4 justify-content-center align-items-center",children:t.map((function(e){return(0,m.jsx)("div",{className:"col d-flex justify-content-center align-items-center",children:(0,m.jsx)(o.Z,{movie:e,navigateDetail:function(e){return function(e){N("/Details/".concat(e))}(e)}})},e.id)}))})]}),(0,m.jsx)("div",{className:"text-center",children:(0,m.jsx)(u.Z,{currentPage:j,onPageChange:function(e){e!==j&&b(e)},totalPages:10})})]})}function f(){return(0,m.jsx)("div",{children:(0,m.jsx)(p,{})})}}}]);
//# sourceMappingURL=525.8ce3b583.chunk.js.map