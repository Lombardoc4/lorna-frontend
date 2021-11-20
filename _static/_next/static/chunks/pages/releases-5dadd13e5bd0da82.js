(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[581],{2138:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/releases",function(){return r(395)}])},8744:function(e,t,r){"use strict";var n=r(5893),s=r(6017),a=r(5675);t.Z=function(e){var t=e.image,r=(e.style,t.url),c=t.alternativeText;return(0,n.jsx)(a.default,{loader:function(){return(0,s.$)(t)},layout:"responsive",width:t.width,height:t.height,objectFit:"contain",src:r,alt:c||""})}},9806:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(5893),s=(r(7294),r(1664)),a=r(8744),c=function(e){var t=e.event;return(0,n.jsx)(s.default,{href:"/event/".concat(t.slug),children:(0,n.jsx)("a",{className:"uk-link-reset",children:(0,n.jsxs)("div",{className:"uk-card uk-card-muted",children:[(0,n.jsx)("div",{className:"uk-card-media-top",children:(0,n.jsx)(a.Z,{image:t.eventArt})}),(0,n.jsxs)("div",{className:"uk-card-body",children:[(0,n.jsx)("p",{id:"band",className:"uk-text-uppercase"}),(0,n.jsx)("p",{id:"title",className:"uk-text-large",children:t.title})]})]})})})},i=function(e){var t=e.record;return(0,n.jsx)(s.default,{href:"/releases/".concat(t.slug),children:(0,n.jsx)("a",{className:"d-flex flex-wrap text-decoration-none",id:t.slug,children:(0,n.jsxs)("div",{className:"custom-card",children:[(0,n.jsx)(a.Z,{image:t.cover}),(0,n.jsx)("h5",{id:"title",className:"mt-3",children:t.name}),(0,n.jsx)("p",{id:"release",className:"mb-0",children:t.releaseDate})]})})})},o=function(e){return e.event?(0,n.jsx)(c,{event:e.event}):e.record?(0,n.jsx)(i,{record:e.record}):void 0},l=function(e){var t=e.records,r=t.filter((function(e){return"studio"===e.albumType})),s=t.filter((function(e){return"ep"===e.albumType})),a=t.filter((function(e){return"single"===e.albumType}));return(0,n.jsxs)("div",{className:"container section pt-5 pt-lg-0",children:[(0,n.jsx)("h2",{children:"Studio"}),(0,n.jsx)("div",{className:"row row-cols-sm-2 row-cols-lg-3 g-0 mb-5",children:r.map((function(e){return(0,n.jsx)(o,{record:e},"studio__album__".concat(e.slug))}))}),(0,n.jsx)("h2",{children:"EPs"}),(0,n.jsx)("div",{className:"row row-cols-sm-2 row-cols-lg-3 g-0 mb-5",children:s.map((function(e){return(0,n.jsx)(o,{record:e},"ep__".concat(e.slug))}))}),(0,n.jsx)("h2",{children:"Singles"}),(0,n.jsx)("div",{className:"row row-cols-sm-2 row-cols-lg-3 g-0 mb-5",children:a.map((function(e){return(0,n.jsx)(o,{record:e},"single__".concat(e.slug))}))})]})}},7187:function(e,t,r){"use strict";var n=r(5893),s=r(9008),a=r(7294),c=r(739),i=r(6017);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}t.Z=function(e){var t=e.seo,r=(0,a.useContext)(c.GlobalContext),o=r.defaultSeo,u=r.siteName,m=l({},o,t),d=l({},m,{metaTitle:"".concat(m.metaTitle," | ").concat(u),shareImage:(0,i.$)(m.shareImage)});return(0,n.jsxs)(s.default,{children:[d.metaTitle&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("title",{children:d.metaTitle}),(0,n.jsx)("meta",{property:"og:title",content:d.metaTitle}),(0,n.jsx)("meta",{name:"twitter:title",content:d.metaTitle})]}),d.metaDescription&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("meta",{name:"description",content:d.metaDescription}),(0,n.jsx)("meta",{property:"og:description",content:d.metaDescription}),(0,n.jsx)("meta",{name:"twitter:description",content:d.metaDescription})]}),d.shareImage&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("meta",{property:"og:image",content:d.shareImage}),(0,n.jsx)("meta",{name:"twitter:image",content:d.shareImage}),(0,n.jsx)("meta",{name:"image",content:d.shareImage})]}),d.event&&(0,n.jsx)("meta",{property:"og:type",content:"event"}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]})}},395:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return c}});var n=r(5893),s=r(9806),a=r(7187),c=!0;t.default=function(e){var t=e.records,r=e.homepage;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.Z,{seo:r.seo}),(0,n.jsx)("div",{className:"section",children:(0,n.jsx)(s.Z,{records:t})})]})}}},function(e){e.O(0,[675,774,888,179],(function(){return t=2138,e(e.s=t);var t}));var t=e.O();_N_E=t}]);