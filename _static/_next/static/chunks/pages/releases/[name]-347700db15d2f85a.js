(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[426],{8682:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/releases/[name]",function(){return s(9985)}])},8744:function(e,r,s){"use strict";var n=s(5893),c=s(6017),i=s(5675);r.Z=function(e){var r=e.image,s=(e.style,r.url),a=r.alternativeText;return(0,n.jsx)(i.default,{loader:function(){return(0,c.$)(r)},layout:"responsive",width:r.width,height:r.height,objectFit:"contain",src:s,alt:a||""})}},9806:function(e,r,s){"use strict";s.d(r,{Z:function(){return t}});var n=s(5893),c=(s(7294),s(1664)),i=s(8744),a=function(e){var r=e.event;return(0,n.jsx)(c.default,{href:"/event/".concat(r.slug),children:(0,n.jsx)("a",{className:"uk-link-reset",children:(0,n.jsxs)("div",{className:"uk-card uk-card-muted",children:[(0,n.jsx)("div",{className:"uk-card-media-top",children:(0,n.jsx)(i.Z,{image:r.eventArt})}),(0,n.jsxs)("div",{className:"uk-card-body",children:[(0,n.jsx)("p",{id:"band",className:"uk-text-uppercase"}),(0,n.jsx)("p",{id:"title",className:"uk-text-large",children:r.title})]})]})})})},l=function(e){var r=e.record;return(0,n.jsx)(c.default,{href:"/releases/".concat(r.slug),children:(0,n.jsx)("a",{className:"d-flex flex-wrap text-decoration-none",id:r.slug,children:(0,n.jsxs)("div",{className:"custom-card",children:[(0,n.jsx)(i.Z,{image:r.cover}),(0,n.jsx)("h5",{id:"title",className:"mt-3",children:r.name}),(0,n.jsx)("p",{id:"release",className:"mb-0",children:r.releaseDate})]})})})},d=function(e){return e.event?(0,n.jsx)(a,{event:e.event}):e.record?(0,n.jsx)(l,{record:e.record}):void 0},t=function(e){var r=e.records,s=r.filter((function(e){return"studio"===e.albumType})),c=r.filter((function(e){return"ep"===e.albumType})),i=r.filter((function(e){return"single"===e.albumType}));return(0,n.jsxs)("div",{className:"container section pt-5 pt-lg-0",children:[(0,n.jsx)("h2",{children:"Studio"}),(0,n.jsx)("div",{className:"row row-cols-sm-2 row-cols-lg-3 g-0 mb-5",children:s.map((function(e){return(0,n.jsx)(d,{record:e},"studio__album__".concat(e.slug))}))}),(0,n.jsx)("h2",{children:"EPs"}),(0,n.jsx)("div",{className:"row row-cols-sm-2 row-cols-lg-3 g-0 mb-5",children:c.map((function(e){return(0,n.jsx)(d,{record:e},"ep__".concat(e.slug))}))}),(0,n.jsx)("h2",{children:"Singles"}),(0,n.jsx)("div",{className:"row row-cols-sm-2 row-cols-lg-3 g-0 mb-5",children:i.map((function(e){return(0,n.jsx)(d,{record:e},"single__".concat(e.slug))}))})]})}},9985:function(e,r,s){"use strict";s.r(r),s.d(r,{__N_SSG:function(){return a}});var n=s(5893),c=s(9806),i=s(8744),a=!0;r.default=function(e){var r=e.record,s=e.records;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"container section",children:(0,n.jsxs)("div",{className:"row g-0",children:[(0,n.jsxs)("div",{className:"col-md-6 order-2 order-lg-1",children:[(0,n.jsx)("div",{className:"albumType mb-3",children:(0,n.jsx)("p",{className:"mb-0",style:{paddingTop:"2px"},children:r.albumType})}),(0,n.jsx)("h2",{children:r.name}),(0,n.jsx)("p",{children:r.releaseDate}),(0,n.jsxs)("div",{className:"dropdown mb-3",children:[(0,n.jsx)("a",{className:"dropdown-toggle p-2",href:"#",role:"button",id:"dropdownMenuLink","data-bs-toggle":"dropdown",children:(0,n.jsx)("span",{className:"text-underline",children:"Stream"})}),(0,n.jsx)("div",{style:{minWidth:"unset"},className:"dropdown-menu","aria-labelledby":"dropdownMenuLink",children:(0,n.jsx)("div",{className:"d-flex flex-column px-3",children:r.streamLinks.map((function(e){return(0,n.jsx)("a",{href:e.link,className:"my-2",children:e.service},e.link)}))})})]}),(0,n.jsx)("p",{children:r.songList.map((function(e,r){return(0,n.jsxs)("span",{children:[r+1,". ",e,(0,n.jsx)("br",{})]},e)}))})]}),(0,n.jsx)("div",{className:"col-md-5 order-1 order-lg-2",children:(0,n.jsx)(i.Z,{image:r.cover})})]})}),r.video&&(0,n.jsxs)("div",{className:"video-section",children:[(0,n.jsx)("p",{children:"Video"}),(0,n.jsx)("a",{href:r.video.src,target:"_blank",rel:"noreferrer",children:(0,n.jsx)(i.Z,{image:r.video.img})})]}),(0,n.jsx)(c.Z,{records:s})]})}}},function(e){e.O(0,[675,774,888,179],(function(){return r=8682,e(e.s=r);var r}));var r=e.O();_N_E=r}]);