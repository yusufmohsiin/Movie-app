"use strict";(self.webpackChunkmovie_app=self.webpackChunkmovie_app||[]).push([[589],{2616:function(e,n,t){t.d(n,{b:function(){return c}});var a=t(1413),r=(t(2791),t(1243)),c=(t(7568),r.Z.create({baseURL:"https://api.themoviedb.org/3"}));c.interceptors.request.use((function(e){return e.params=(0,a.Z)((0,a.Z)({},e.params),{},{api_key:"1e8cfdde8d627e45358cc8ee3259c637"}),e}),(function(e){return Promise.reject(e)})),c.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}))},3178:function(e,n,t){t.d(n,{Z:function(){return u}});t(2791);var a=t(4066),r=t(9806),c=t(6850),s=t(1632),i=t(9434),o=t(7097),l=t(184);function u(e){var n=e.movie,t=e.navigateDetail,u=(0,i.v9)((function(e){return e.watchlist.movies})),d=(0,i.I0)(),m=u.some((function(e){return e.id===n.id}));return(0,l.jsxs)("div",{class:"card border-0",onClick:function(){return t(n.id)},children:[(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(n.poster_path),class:"card-img-top rounded-1",alt:n.original_title}),(0,l.jsxs)("div",{class:"card-body px-0",children:[(0,l.jsx)("h5",{class:"card-title text-start",children:n.original_title.substr(0,15)}),(0,l.jsx)("p",{class:"card-text p-0 text-start mb-2",children:(0,l.jsx)(a.Z,{rating:n.vote_average/2})}),(0,l.jsxs)("p",{class:"card-text d-flex justify-content-between m-0",children:[(0,l.jsx)("small",{class:"text-body-secondary",children:n.release_date}),m?(0,l.jsx)("span",{className:"text-end px-3",style:{color:"var(--mainColor)"},onClick:function(e){e.stopPropagation(),d((0,o.gL)(n))},children:(0,l.jsx)(r.G,{icon:s.m6i,className:"fs-5"})}):(0,l.jsx)("span",{className:"text-end px-3",style:{color:"var(--mainColor)"},onClick:function(e){e.stopPropagation(),d((0,o.dO)(n))},children:(0,l.jsx)(r.G,{icon:c.m6i,className:"fs-5"})})]})]})]})}},6415:function(e,n,t){t.d(n,{Z:function(){return r}});t(2791);var a=t(184);function r(e){var n=e.currentPage,t=e.onPageChange,r=e.totalPages;return(0,a.jsx)("nav",{"aria-label":"Page navigation example",children:(0,a.jsxs)("ul",{className:"pagination justify-content-center my-5",children:[(0,a.jsx)("li",{className:"page-item",children:(0,a.jsx)("button",{className:"page-link border-0",style:{color:"var(--mainColor)"},"aria-label":"Previous",disabled:1==n,onClick:function(){return t(n-1)},children:(0,a.jsx)("span",{"aria-hidden":"true",children:"\xab"})})}),function(){for(var e=[],c=function(r){if(r>10)return 1;e.push((0,a.jsx)("li",{className:"page-item",children:(0,a.jsx)("button",{onClick:function(){return t(r)},className:n===r?"pageNumber page-link  border-0  active  ":"pageNumber border-0 page-link ",style:{color:"var(--mainColor)"},children:r},r)}))},s=1;s<=r&&!c(s);s++);return e}(),(0,a.jsx)("li",{className:"page-item",children:(0,a.jsx)("button",{className:"page-link border-0",style:{color:"var(--mainColor)"},"aria-label":"Next",disabled:10==n,onClick:function(){return t(n+1)},children:(0,a.jsx)("span",{"aria-hidden":"true",children:"\xbb"})})})]})})}},4066:function(e,n,t){t(2791);var a=t(9806),r=t(1632),c=t(6850),s=t(184);n.Z=function(e){for(var n=e.rating,t=[],i=Math.round(2*n)/2,o=1;o<=5;o++)o<=i?t.push((0,s.jsx)(a.G,{icon:r.Tab})):o===Math.ceil(i)&&i%1!==0?t.push((0,s.jsx)(a.G,{icon:r.a1Y})):t.push((0,s.jsx)(a.G,{icon:c.Tab}));return(0,s.jsx)("div",{style:{color:"var(--mainColor)"},children:t})}},2924:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var a=t(2791),r=t(9439),c=t(7568),s=t(7689),i=t(2616),o=function(e,n){return i.b.get("/search/movie?query=".concat(e,"&language=").concat(n))},l=function(e,n,t){return i.b.get("/search/movie?query=".concat(e,"&page=").concat(n,"&language=").concat(t))},u=t(3178),d=t.p+"static/media/search.349fc9221dbc435bb778.jpg",m=t(6415),h=t(184);function f(){var e=(0,s.UO)(),n=(0,a.useState)([]),t=(0,r.Z)(n,2),i=t[0],f=t[1],x=(0,a.useState)(e.name),g=(0,r.Z)(x,2),p=g[0],j=g[1],v=(0,a.useState)(1),b=(0,r.Z)(v,2),y=b[0],N=b[1],C=(0,a.useState)(1),k=(0,r.Z)(C,2),Z=k[0],P=k[1],w=(0,s.s0)(),S=(0,a.useContext)(c.A),_=S.contextLanguage;S.setContextLanguage;(0,a.useEffect)((function(){o(e.name,_).then((function(e){return f(e.data.results)})).catch((function(e){return console.log(e)}))}),[e.name,_]),(0,a.useEffect)((function(){l(e.name,y,_).then((function(e){f(e.data.results),P(e.data.total_pages)})).catch((function(e){return console.log(e)}))}),[y,e.name,_]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{className:"search-part bg-body-secondary my-5 rounded rounded-1 ",children:(0,h.jsxs)("form",{className:"input-group",onSubmit:function(e){return function(e){e.preventDefault(),""!=p&&w("/Search/".concat(p))}(e)},children:[(0,h.jsx)("input",{type:"search",class:"form-control",placeholder:"Search","aria-label":"Search","aria-describedby":"search-addon",value:p,name:"movieName",onChange:function(e){return function(e){j(e.target.value),console.log(e.target.value)}(e)}}),(0,h.jsx)("button",{type:"submit",class:"btn text-light",style:{backgroundColor:"var(--mainColor)"},children:"search"})]})}),(0,h.jsx)("div",{className:"my-5 text-start ",children:(0,h.jsxs)("h4",{children:["Search Result For: ",(0,h.jsx)("span",{className:"fw-normal ",children:p})]})}),0!=i.length?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{className:"row row-cols-1 row-cols-lg-6 row-cols-md-2 g-4 justify-content-center align-items-center",children:i.map((function(e){return(0,h.jsx)("div",{className:"col d-flex justify-content-center align-items-center",children:(0,h.jsx)(u.Z,{movie:e,navigateDetail:function(e){return function(e){w("/Details/".concat(e))}(e)}})},e.id)}))}),(0,h.jsx)("div",{className:"text-center",children:(0,h.jsx)(m.Z,{currentPage:y,onPageChange:function(e){e!==y&&N(e)},totalPages:Z})})]}):(0,h.jsxs)("div",{className:"d-flex flex-column  justify-content-center align-items-center text-secondary ",children:[(0,h.jsx)("h3",{children:"Sorry We Couldn't Found Any Result"}),(0,h.jsx)("img",{src:d,width:400})]})]})}function x(){return(0,h.jsx)("div",{children:(0,h.jsx)(f,{})})}}}]);
//# sourceMappingURL=589.96e9d3c3.chunk.js.map