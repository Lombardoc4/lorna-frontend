(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{7544:function(e,n,t){e.exports=t(6029)},1780:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(739)}])},4626:function(e,n,t){"use strict";t.d(n,{p:function(){return i},I:function(){return s}});var r=t(5666),o=t.n(r),a=t(4155);function c(e,n,t,r,o,a,c){try{var u=e[a](c),i=u.value}catch(s){return void t(s)}u.done?n(i):Promise.resolve(i).then(r,o)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var a=e.apply(n,t);function u(e){c(a,r,o,u,i,"next",e)}function i(e){c(a,r,o,u,i,"throw",e)}u(void 0)}))}}function i(e){var n=void 0===e?"":e;return"".concat(a.env.NEXT_PUBLIC_STRAPI_API_URL||"https://lorna-shore-cp697.ondigitalocean.app/api").concat(n)}function s(e){return l.apply(this,arguments)}function l(){return(l=u(o().mark((function e(n){var t,r,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i(n),console.log(t),e.next=4,fetch(t);case 4:return r=e.sent,e.next=7,r.json();case 7:return a=e.sent,e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},6017:function(e,n,t){"use strict";t.d(n,{$:function(){return o}});var r=t(4626);function o(e){return e.url.startsWith("/")?(0,r.p)(e.url):e.url}},8418:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,o=!1,a=void 0;try{for(var c,u=e[Symbol.iterator]();!(r=(c=u.next()).done)&&(t.push(c.value),!n||t.length!==n);r=!0);}catch(i){o=!0,a=i}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var o,a=(o=t(7294))&&o.__esModule?o:{default:o},c=t(6273),u=t(387),i=t(7190);var s={};function l(e,n,t,r){if(e&&c.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,o=u.useRouter(),f=a.default.useMemo((function(){var n=r(c.resolveHref(o,e.href,!0),2),t=n[0],a=n[1];return{href:t,as:e.as?c.resolveHref(o,e.as):a||t}}),[o,e.href,e.as]),p=f.href,d=f.as,h=e.children,v=e.replace,m=e.shallow,y=e.scroll,b=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var x=(n=a.default.Children.only(h))&&"object"===typeof n&&n.ref,w=r(i.useIntersection({rootMargin:"200px"}),2),g=w[0],j=w[1],_=a.default.useCallback((function(e){g(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,g]);a.default.useEffect((function(){var e=j&&t&&c.isLocalURL(p),n="undefined"!==typeof b?b:o&&o.locale,r=s[p+"%"+d+(n?"%"+n:"")];e&&!r&&l(o,p,d,{locale:n})}),[d,p,j,b,t,o]);var N={ref:_,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,u,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(t))&&(e.preventDefault(),null==u&&r.indexOf("#")>=0&&(u=!1),n[o?"replace":"push"](t,r,{shallow:a,locale:i,scroll:u}))}(e,o,p,d,v,m,y,b)},onMouseEnter:function(e){c.isLocalURL(p)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),l(o,p,d,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var P="undefined"!==typeof b?b:o&&o.locale,k=o&&o.isLocaleDomain&&c.getDomainLocale(d,P,o&&o.locales,o&&o.domainLocales);N.href=k||c.addBasePath(c.addLocale(d,P,o&&o.defaultLocale))}return a.default.cloneElement(n,N)};n.default=f},7190:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,o=!1,a=void 0;try{for(var c,u=e[Symbol.iterator]();!(r=(c=u.next()).done)&&(t.push(c.value),!n||t.length!==n);r=!0);}catch(i){o=!0,a=i}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,i=o.useRef(),s=r(o.useState(!1),2),l=s[0],f=s[1],p=o.useCallback((function(e){i.current&&(i.current(),i.current=void 0),t||l||e&&e.tagName&&(i.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=u.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return u.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,c=r.elements;return c.set(e,n),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),u.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[t,n,l]);return o.useEffect((function(){if(!c&&!l){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[l]),[p,l]};var o=t(7294),a=t(9311),c="undefined"!==typeof IntersectionObserver;var u=new Map},6029:function(e,n,t){"use strict";var r,o=(r=t(5666))&&r.__esModule?r:{default:r};function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function c(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,n){return!n||"object"!==l(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function s(e,n){return(s=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var l=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function f(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=u(e);if(n){var o=u(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return i(this,t)}}n.default=void 0;var p=function(e){return e&&e.__esModule?e:{default:e}}(t(7294)),d=t(3794);function h(e,n,t,r,o,a,c){try{var u=e[a](c),i=u.value}catch(s){return void t(s)}u.done?n(i):Promise.resolve(i).then(r,o)}function v(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var a=e.apply(n,t);function c(e){h(a,r,o,c,u,"next",e)}function u(e){h(a,r,o,c,u,"throw",e)}c(void 0)}))}}function m(){return(m=v(o.default.mark((function e(n){var t,r,a;return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.Component,r=n.ctx,e.next=3,d.loadGetInitialProps(t,r);case 3:return a=e.sent,e.abrupt("return",{pageProps:a});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return m.apply(this,arguments)}var b=function(e){!function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&s(e,n)}(u,e);var n,t,r,o=f(u);function u(){return a(this,u),o.apply(this,arguments)}return n=u,(t=[{key:"render",value:function(){var e=this.props,n=e.Component,t=e.pageProps;return p.default.createElement(n,Object.assign({},t))}}])&&c(n.prototype,t),r&&c(n,r),u}(p.default.Component);b.origGetInitialProps=y,b.getInitialProps=y,n.default=b},739:function(e,n,t){"use strict";t.r(n),t.d(n,{GlobalContext:function(){return x},default:function(){return g}});var r=t(5666),o=t.n(r),a=t(5893),c=t(7544),u=t(9008),i=(t(5960),t(7294)),s=t(4626),l=t(6017),f=t(1664),p=function(){return(0,a.jsxs)("footer",{className:"container section footer py-3 py-lg-5",children:[(0,a.jsxs)("div",{className:"row row-cols-2",children:[(0,a.jsxs)("u",{className:"d-flex flex-column",children:[(0,a.jsx)("a",{href:"https://www.facebook.com/LornaShore",className:"text-reset",children:"Facebook"}),(0,a.jsx)("a",{href:"https://www.instagram.com/LornaShore/",className:"text-reset",children:"Instagram"}),(0,a.jsx)("a",{href:"https://twitter.com/LornaShore",className:"text-reset",children:"Twitter"}),(0,a.jsx)("a",{href:"https://www.youtube.com/channel/UC0nS0FSoouwc_Nm8g6DnH8w",className:"text-reset",children:"Youtube"})]}),(0,a.jsxs)("div",{className:"d-flex flex-column",children:[(0,a.jsx)("a",{href:"https://lornashorestore.com/",target:"_blank",className:"text-reset",rel:"noreferrer",children:(0,a.jsx)("u",{children:"Shop"})}),(0,a.jsx)("div",{className:"mt-auto",children:(0,a.jsx)("p",{className:"mb-0 copyright",children:"\xa9 Lorna Shore 2021"})})]})]}),(0,a.jsx)("div",{id:"mobile-spacer",className:"d-lg-none",style:{height:"75px"}})]})},d=function(){var e=(0,i.useState)(!1),n=e[0],t=e[1],r=function(e){t(e||!n)};return(0,a.jsx)("header",{children:(0,a.jsxs)("nav",{className:"container navbar navbar-expand-lg navbar-light w-100 py-3",children:[(0,a.jsx)("a",{className:"navbar-brand d-lg-none m-0 w-100",onClick:function(){return r()},children:(0,a.jsx)("h1",{className:"mb-0 text-center fw-bolder",children:"Lorna Shore"})}),(0,a.jsx)("div",{className:"collapse navbar-collapse ".concat(n&&"show"),id:"navbarNav",children:(0,a.jsxs)("div",{className:"navbar-nav px-3 px-lg-0 align-items-lg-baseline",children:[(0,a.jsx)(f.default,{href:"/",children:(0,a.jsx)("a",{onClick:function(){return r()},className:"text-reset text-decoration-none d-none d-lg-block m-0",children:(0,a.jsx)("h1",{className:"mb-0 me-lg-3",children:"Lorna Shore"})})}),(0,a.jsx)(f.default,{href:"/",children:(0,a.jsx)("a",{onClick:function(){return r()},className:"text-reset d-lg-none fs-5 my-2 my-lg-0",children:"Home"})}),(0,a.jsx)(f.default,{href:"/shows",children:(0,a.jsx)("a",{onClick:function(){return r()},className:"text-reset fs-5 my-2 my-lg-0",children:"Shows"})}),(0,a.jsx)(f.default,{href:"/releases",children:(0,a.jsx)("a",{onClick:function(){return r()},className:"text-reset fs-5 my-2 my-lg-0",children:"Releases"})}),(0,a.jsx)("a",{onClick:function(){return r()},href:"https://www.youtube.com/channel/UC0nS0FSoouwc_Nm8g6DnH8w",target:"_blank",className:"text-reset fs-5 my-2 my-lg-0",rel:"noreferrer",children:"Videos"}),(0,a.jsx)("a",{onClick:function(){return r()},href:"https://lornashorestore.com/",target:"_blank",className:"text-reset fs-5 my-2 my-lg-0",rel:"noreferrer",children:"Shop"})]})})]})})},h=function(e){var n=e.children,t=e.bands;e.seo;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d,{bands:t}),n,(0,a.jsx)(p,{})]})};function v(e,n,t,r,o,a,c){try{var u=e[a](c),i=u.value}catch(s){return void t(s)}u.done?n(i):Promise.resolve(i).then(r,o)}function m(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){m(e,n,t[n])}))}return e}var b,x=(0,i.createContext)({}),w=function(e){var n=e.Component,t=e.pageProps,r=t.global;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u.default,{children:(0,a.jsx)("link",{rel:"shortcut icon",href:(0,l.$)(r.favicon)})}),(0,a.jsx)(x.Provider,{value:r,children:(0,a.jsx)(h,{children:(0,a.jsx)(n,y({},t))})})]})};w.getInitialProps=(b=o().mark((function e(n){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.default.getInitialProps(n);case 2:return t=e.sent,e.next=5,(0,s.I)("/global");case 5:return r=e.sent,e.abrupt("return",y({},t,{pageProps:{global:r}}));case 7:case"end":return e.stop()}}),e)})),function(){var e=this,n=arguments;return new Promise((function(t,r){var o=b.apply(e,n);function a(e){v(o,t,r,a,c,"next",e)}function c(e){v(o,t,r,a,c,"throw",e)}a(void 0)}))});var g=w},5960:function(){},9008:function(e,n,t){e.exports=t(5443)},1664:function(e,n,t){e.exports=t(8418)}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,179],(function(){return n(1780),n(387)}));var t=e.O();_N_E=t}]);