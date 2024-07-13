"use strict";(self.webpackChunkmovie_app=self.webpackChunkmovie_app||[]).push([[869],{2616:function(e,n,s){s.d(n,{b:function(){return r}});var t=s(1413),a=(s(2791),s(1243)),r=(s(7568),a.Z.create({baseURL:"https://api.themoviedb.org/3"}));r.interceptors.request.use((function(e){return e.params=(0,t.Z)((0,t.Z)({},e.params),{},{api_key:"1e8cfdde8d627e45358cc8ee3259c637"}),e}),(function(e){return Promise.reject(e)})),r.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}))},3178:function(e,n,s){s.d(n,{Z:function(){return d}});s(2791);var t=s(4066),a=s(9806),r=s(6850),c=s(1632),i=s(9434),o=s(7097),l=s(184);function d(e){var n=e.movie,s=e.navigateDetail,d=(0,i.v9)((function(e){return e.watchlist.movies})),m=(0,i.I0)(),u=d.some((function(e){return e.id===n.id}));return(0,l.jsxs)("div",{class:"card border-0",onClick:function(){return s(n.id)},children:[(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(n.poster_path),class:"card-img-top rounded-1",alt:n.original_title}),(0,l.jsxs)("div",{class:"card-body px-0",children:[(0,l.jsx)("h5",{class:"card-title text-start",children:n.original_title.substr(0,15)}),(0,l.jsx)("p",{class:"card-text p-0 text-start mb-2",children:(0,l.jsx)(t.Z,{rating:n.vote_average/2})}),(0,l.jsxs)("p",{class:"card-text d-flex justify-content-between m-0",children:[(0,l.jsx)("small",{class:"text-body-secondary",children:n.release_date}),u?(0,l.jsx)("span",{className:"text-end px-3",style:{color:"var(--mainColor)"},onClick:function(e){e.stopPropagation(),m((0,o.gL)(n))},children:(0,l.jsx)(a.G,{icon:c.m6i,className:"fs-5"})}):(0,l.jsx)("span",{className:"text-end px-3",style:{color:"var(--mainColor)"},onClick:function(e){e.stopPropagation(),m((0,o.dO)(n))},children:(0,l.jsx)(a.G,{icon:r.m6i,className:"fs-5"})})]})]})]})}},4066:function(e,n,s){s(2791);var t=s(9806),a=s(1632),r=s(6850),c=s(184);n.Z=function(e){for(var n=e.rating,s=[],i=Math.round(2*n)/2,o=1;o<=5;o++)o<=i?s.push((0,c.jsx)(t.G,{icon:a.Tab})):o===Math.ceil(i)&&i%1!==0?s.push((0,c.jsx)(t.G,{icon:a.a1Y})):s.push((0,c.jsx)(t.G,{icon:r.Tab}));return(0,c.jsx)("div",{style:{color:"var(--mainColor)"},children:s})}},4869:function(e,n,s){s.r(n),s.d(n,{default:function(){return N}});var t=s(2791),a=s(9439),r=s(7568),c=s(2616),i=function(e,n){return c.b.get("/movie/".concat(e,"?language=").concat(n))},o=s(4066),l=s(9806),d=s(1632),m=s(6850),u=s(7689),x=s(9434),p=s(7097),h=s(184);function f(){var e=(0,t.useState)([]),n=(0,a.Z)(e,2),s=n[0],c=n[1],f=(0,t.useState)([]),g=(0,a.Z)(f,2),j=g[0],v=g[1],N=(0,t.useState)([]),b=(0,a.Z)(N,2),y=b[0],w=b[1],_=(0,t.useState)([]),C=(0,a.Z)(_,2),k=C[0],Z=C[1],G=(0,u.UO)(),L=(0,x.v9)((function(e){return e.watchlist.movies})),P=(0,x.I0)(),S=(0,t.useContext)(r.A),D=S.contextLanguage,O=(S.setContextLanguage,L.some((function(e){return e.id===s.id})));(0,t.useEffect)((function(){i(G.id,D).then((function(e){c(e.data),v(e.data.genres),w(e.data.spoken_languages),Z(e.data.production_companies)})).catch((function(e){return console.log(e)}))}),[G.id,D]);return(0,h.jsx)("div",{className:"container py-5",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)("div",{className:"col-lg-4 text-md-start text-center mb-lg-0 mb-4 p-0",children:(0,h.jsx)("div",{className:"main-image",children:(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(s.poster_path),className:"rounded-2",height:500})})}),(0,h.jsxs)("div",{className:"col-lg-8 text-start px-lg-5 px-0",children:[(0,h.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("h3",{className:"",children:s.original_title}),(0,h.jsx)("p",{className:"text-secondary",children:s.release_date}),(0,h.jsxs)("p",{className:"text-dark mb-3 d-flex",children:[(0,h.jsx)(o.Z,{rating:s.vote_average/2})," ",(0,h.jsx)("span",{className:"ms-4",children:s.vote_count})]}),(0,h.jsx)("p",{className:"my-3",children:s.overview})]}),(0,h.jsx)("div",{children:O?(0,h.jsx)("span",{className:"text-end px-3",style:{color:"var(--mainColor)"},onClick:function(e){e.stopPropagation(),P((0,p.gL)(s))},children:(0,h.jsx)(l.G,{icon:d.m6i,className:"fs-5"})}):(0,h.jsx)("span",{className:"text-end px-3",style:{color:"var(--mainColor)"},onClick:function(e){e.stopPropagation(),P((0,p.dO)(s))},children:(0,h.jsx)(l.G,{icon:m.m6i,className:"fs-5"})})})]}),(0,h.jsx)("div",{className:"d-flex flex-wrap my-3",children:j.map((function(e){return(0,h.jsx)("p",{className:"rounded-5 text-light px-3 py-1 me-3",style:{backgroundColor:"var(--mainColor)"},children:e.name})}))}),(0,h.jsxs)("div",{className:"d-flex flex-wrap my-3",children:[(0,h.jsxs)("p",{className:"fs-5 me-lg-5 me-0",children:[(0,h.jsx)("span",{className:"fw-bold me-2",children:"Duration: "}),(0,h.jsxs)("span",{children:[s.runtime," Min"]})]}),(0,h.jsxs)("p",{className:"fs-5 ms-lg-5 ms-0",children:[(0,h.jsx)("span",{className:"fw-bold me-2",children:"Languages: "}),y.map((function(e,n){return n!=y.length-1?(0,h.jsxs)("span",{children:[e.english_name,", "]}):(0,h.jsx)("span",{children:e.english_name})}))]})]}),(0,h.jsx)("div",{className:"d-flex flex-wrap my-3",children:k.map((function(e){if(null!=e.logo_path)return(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e.logo_path),className:"me-4 mb-4",height:40})}))}),(0,h.jsx)("div",{style:{border:"1px solid var(--mainColor)",width:"fit-content"},className:" rounded-5  py-1 px-3",children:(0,h.jsxs)("a",{href:s.homepage,className:"text-decoration-none text-dark",target:"_blank",children:["Website ",(0,h.jsx)(l.G,{icon:d.nNP,className:"fs-5"})]})})]})]})})}var g=function(e,n){return c.b.get("/movie/".concat(e,"/recommendations?language=").concat(n))},j=s(3178);function v(){var e=(0,u.UO)(),n=(0,t.useState)([]),s=(0,a.Z)(n,2),c=s[0],i=s[1],o=(0,u.s0)(),l=(0,t.useContext)(r.A),d=l.contextLanguage;l.setContextLanguage;(0,t.useEffect)((function(){g(e.id,d).then((function(e){return i(e.data.results)})).catch((function(e){return console.log(e)}))}),[e.id,d]);var m=function(e){o("/Details/".concat(e))};return(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{className:"text-start my-5",children:"Recommendations"}),0!=c.length?(0,h.jsx)("div",{className:"row row-cols-1 row-cols-lg-6 row-cols-md-2 g-4 justify-content-center align-items-center mb-5",children:c.map((function(e,n){for(;n<=5;)return(0,h.jsx)("div",{className:"col d-flex justify-content-center align-items-center",children:(0,h.jsx)(j.Z,{movie:e,navigateDetail:function(e){return m(e)}})},e.id)}))}):(0,h.jsx)("p",{className:"mb-5 fw-medium fs-4 ",children:"Sorry, I Havn't Any Recommends For You"})]})}function N(){return(0,h.jsxs)("div",{children:[(0,h.jsx)(f,{}),(0,h.jsx)("hr",{}),(0,h.jsx)(v,{})]})}}}]);
//# sourceMappingURL=869.9a9b1188.chunk.js.map