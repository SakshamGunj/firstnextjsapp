(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3128)}])},8045:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(s){a=!0,i=s}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function i(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var o=_(n(7294)),c=_(n(5443)),s=n(6978),u=n(5809),l=n(7190);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(e){return e&&e.__esModule?e:{default:e}}function m(e){for(var t=arguments,n=function(n){var r=null!=t[n]?t[n]:{},a=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){d(e,t,r[t])}))},r=1;r<arguments.length;r++)n(r);return e}var h=new Set,f=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var g=new Map([["default",function(e){var t=e.root,n=e.src,r=e.width,a=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(a||75)}],["imgix",function(e){var t=e.root,n=e.src,r=e.width,a=e.quality,i=new URL("".concat(t).concat(T(n))),o=i.searchParams;o.set("auto",o.get("auto")||"format"),o.set("fit",o.get("fit")||"max"),o.set("w",o.get("w")||r.toString()),a&&o.set("q",a.toString());return i.href}],["cloudinary",function(e){var t=e.root,n=e.src,r=e.width,a=e.quality,i=["f_auto","c_limit","w_"+r,"q_"+(a||"auto")].join(",")+"/";return"".concat(t).concat(i).concat(T(n))}],["akamai",function(e){var t=e.root,n=e.src,r=e.width;return"".concat(t).concat(T(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function p(e){return void 0!==e.default}var v,j={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"}||u.imageConfigDefault,x=j.deviceSizes,y=j.imageSizes,w=j.loader,b=j.path,N=(j.domains,i(x).concat(i(y)));function A(e){var t=e.src,n=e.unoptimized,r=e.layout,a=e.width,o=e.quality,c=e.sizes,s=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var u=function(e,t,n){if(n&&("fill"===t||"responsive"===t)){for(var r,a=/(^|\s)(1?\d?\d)vw/g,o=[];r=a.exec(n);r)o.push(parseInt(r[2]));if(o.length){var c,s=.01*(c=Math).min.apply(c,i(o));return{widths:N.filter((function(e){return e>=x[0]*s})),kind:"w"}}return{widths:N,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:x,kind:"w"}:{widths:i(new Set([e,2*e].map((function(e){return N.find((function(t){return t>=e}))||N[N.length-1]})))),kind:"x"}}(a,r,c),l=u.widths,d=u.kind,_=l.length-1;return{sizes:c||"w"!==d?c:"100vw",srcSet:l.map((function(e,n){return"".concat(s({src:t,quality:o,width:e})," ").concat("w"===d?e:n+1).concat(d)})).join(", "),src:s({src:t,quality:o,width:l[_]})}}function S(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function k(e){var t=g.get(w);if(t)return t(m({root:b},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(u.VALID_LOADERS.join(", "),". Received: ").concat(w))}function T(e){return"/"===e[0]?e.slice(1):e}x.sort((function(e,t){return e-t})),N.sort((function(e,t){return e-t}))},7190:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(s){a=!0,i=s}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!o,s=a.useRef(),u=r(a.useState(!1),2),l=u[0],d=u[1],_=a.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||l||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,i=r.observer,o=r.elements;return o.set(e,t),i.observe(e),function(){o.delete(e),i.unobserve(e),0===o.size&&(i.disconnect(),c.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,l]);return a.useEffect((function(){if(!o&&!l){var e=i.requestIdleCallback((function(){return d(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[l]),[_,l]};var a=n(7294),i=n(9311),o="undefined"!==typeof IntersectionObserver;var c=new Map},6978:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toBase64=function(e){return window.btoa(e)}},3128:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return U}});var r=n(5893),a=n(7294),i=n(1389),o=n.n(i),c=(n(5675),n(9202)),s=n.n(c),u=n(2658),l=n.n(u);function d(e){var t=e.content;return(0,r.jsx)("button",{className:l().primary_button_white,children:t})}function _(e){var t=e.content;return(0,r.jsx)("button",{className:l().primary_button_white_large,children:t})}var m=function(){return(0,r.jsxs)("div",{className:s().nav,children:[(0,r.jsx)("div",{className:s().logo,children:(0,r.jsx)("h1",{children:"FindNore\ud83e\uddd0"})}),(0,r.jsx)("div",{className:s().listing_property,children:(0,r.jsx)(d,{content:"List Your property"})}),(0,r.jsx)("div",{className:s().menu,children:(0,r.jsx)(_,{content:"\ud83d\udc69"})})]})},h=n(8580),f=n.n(h),g=n(9330),p=n.n(g);function v(e){var t=e.content;return(0,r.jsx)("h1",{className:p().h1,children:t})}function j(e){var t=e.content;return(0,r.jsx)("h3",{className:p().gray_h3,children:t})}function x(e){var t=e.content;return(0,r.jsx)("h2",{className:p().h2,children:t})}function y(e){var t=e.content;return(0,r.jsx)("h1",{className:p().h1_small,children:t})}function w(e){var t=e.content;return(0,r.jsx)("h3",{className:p().black_h3,children:t})}function b(){return(0,r.jsx)("div",{className:f().header_image,children:(0,r.jsx)(v,{content:"Air, Sleep, Dream,"})})}function N(e){var t=e.content,n=e.input_type,a=e.placeholder,i=e.to_change;return(0,r.jsxs)("div",{className:f().form,children:[(0,r.jsx)("label",{className:f().label,children:t}),(0,r.jsx)("input",{type:n,className:f().input,placeholder:a,onFocus:i?function(e,t){e.target.type="date"}:function(e){}})]})}function A(){return(0,r.jsxs)("div",{className:f().header_content,children:[(0,r.jsxs)("div",{className:f().header_content_options,children:[(0,r.jsx)(j,{content:"Stays"}),(0,r.jsx)(j,{content:"Cars"}),(0,r.jsx)(j,{content:"Flights"}),(0,r.jsx)(j,{content:"Things to do"})]}),(0,r.jsxs)("div",{className:f().header_content_input,children:[(0,r.jsx)(N,{type:"search",content:"Location",placeholder:"Where are you going"}),(0,r.jsx)(N,{type:"text",content:"Check In",placeholder:"Add Date",to_change:!0}),(0,r.jsx)(N,{type:"text",content:"Check Out",placeholder:"Add Date",to_change:!0}),(0,r.jsx)(N,{type:"number",content:"Number",placeholder:"No. of people"})]})]})}var S=n(2263),k=n.n(S);var T=function(e){var t=e.h1,n=e.h2;return(0,r.jsxs)(a.Fragment,{children:[(0,r.jsx)(y,{content:t}),(0,r.jsx)(x,{content:n})]})};function E(e){var t=e.src,n=e.card_heading,a=e.card_number;return(0,r.jsxs)("div",{className:k().card,children:[(0,r.jsx)("img",{src:t}),(0,r.jsx)(w,{content:n}),(0,r.jsx)(j,{content:a})]})}function O(){return(0,r.jsx)("div",{className:k().live_heading,children:(0,r.jsx)(T,{h1:"Live Anywhere\ud83e\uddd0",h2:"Keep calm & travel on"})})}function B(){return(0,r.jsxs)("div",{className:k().live_option,children:[(0,r.jsx)(E,{src:"live1.jpg",card_heading:"Enjoy the great cold",card_number:"2345 properties"}),(0,r.jsx)(E,{src:"live2.jpg",card_heading:"Pickup the earliest sunrise",card_number:"4500 properties"}),(0,r.jsx)(E,{src:"live3.jpg",card_heading:"Unique stay",card_number:"1000 properties"})]})}var I=n(9925),L=n.n(I);function R(){return(0,r.jsx)("div",{className:L().memories_heading,children:(0,r.jsx)(T,{h1:"Travel to make memories all around the world\ud83e\uddd0",h2:"Find trips that fit a flexible lifestyle"})})}function z(e){var t=e.number;return(0,r.jsx)("button",{className:L().number,children:t})}function M(e){var t=e.number,n=e.h2,a=e.h1;return(0,r.jsxs)("div",{className:L().card,children:[(0,r.jsx)(z,{number:t}),(0,r.jsx)(x,{content:a}),(0,r.jsx)(w,{content:n})]})}function P(){return(0,r.jsxs)("div",{className:L().memories_content,children:[(0,r.jsxs)("div",{className:L().memories_content_items,children:[(0,r.jsx)(M,{number:"01",h2:"Be with family and enjoy you beautiful life",h1:"Find trips that fit a flexible lifestyle"}),(0,r.jsx)(M,{number:"02",h2:"Have everything you need no need to carry something and anythingeeytgetyeyteete",h1:"Travel with more confidence"}),(0,r.jsx)(M,{number:"03",h2:"So much, all you need is adventurious mind ",h1:"See what\u2019s really included"})]}),(0,r.jsx)("div",{className:L().memories_content_image,children:(0,r.jsx)("img",{src:"memories1.jpg",className:L().image1})})]})}var q=n(2579),C=n.n(q);function D(){return(0,r.jsx)("div",{className:C().somewhere_heading,children:(0,r.jsx)(T,{h1:"Go somewhere",h2:"Let's go to adventure"})})}function F(e){var t=e.image,n=e.hotelName,a=e.hotelLocation,i=e.price,o=e.date,c=e.star;return(0,r.jsxs)("div",{className:C().card,children:[(0,r.jsx)("div",{className:C().card_image,children:(0,r.jsx)("img",{src:t})}),(0,r.jsxs)("div",{className:C().card_content,children:[(0,r.jsx)("div",{className:C().hotel,children:(0,r.jsx)(w,{content:n})}),(0,r.jsx)("div",{className:C().location,children:(0,r.jsx)(j,{content:a})}),(0,r.jsxs)("h3",{className:C().price,children:["$",i]}),(0,r.jsx)("div",{className:C().date,children:(0,r.jsx)(j,{content:o,className:C().date})}),(0,r.jsx)("div",{className:C().star,children:(0,r.jsx)(j,{content:c})})]})]})}function G(){return(0,r.jsxs)("div",{className:C().somewhere_content,children:[(0,r.jsx)(F,{image:"layout.jpg",hotelName:"The Grand Resort",hotelLocation:"Near Barricate",price:"456",date:"Aug 3 To Sep 30",star:"\u2b503.9"}),(0,r.jsx)(F,{image:"layout6.jpg",hotelName:"The Grand Resort",hotelLocation:"Near Barricate",price:"456",date:"Aug 3 To Sep 30",star:"\u2b503.9"}),(0,r.jsx)(F,{image:"layout5.jpg",hotelName:"The Grand Resort",hotelLocation:"Near Barricate",price:"456",date:"Aug 3 To Sep 30",star:"\u2b503.9"}),(0,r.jsx)(F,{image:"layout4.jpg",hotelName:"The Grand Resort",hotelLocation:"Near Barricate",price:"456",date:"Aug 3 To Sep 30",star:"\u2b503.9"}),(0,r.jsx)(F,{image:"layout3.jpg",hotelName:"The Grand Resort",hotelLocation:"Near Barricate",price:"456",date:"Aug 3 To Sep 30",star:"\u2b503.9"}),(0,r.jsx)(F,{image:"layout2.jpg",hotelName:"The Grand Resort",hotelLocation:"Near Barricate",price:"456",date:"Aug 3 To Sep 30",star:"\u2b503.9"})]})}var H=function(){return(0,r.jsxs)("div",{className:o().main,children:[(0,r.jsx)(m,{}),(0,r.jsx)(b,{}),(0,r.jsx)(A,{}),(0,r.jsx)(O,{}),(0,r.jsx)(B,{}),(0,r.jsx)(R,{}),(0,r.jsx)(P,{}),(0,r.jsx)(D,{}),(0,r.jsx)(G,{})]})};function U(){return(0,r.jsx)(H,{})}},2658:function(e){e.exports={primary_button:"button_primary_button__FqWHM",primary_button_white:"button_primary_button_white__4EZez",primary_button_white_large:"button_primary_button_white_large__A3BJ6"}},8580:function(e){e.exports={header_image:"header_header_image__yHi_e",header_content:"header_header_content__UdHiO",header_content_options:"header_header_content_options__zKRuR",label:"header_label__dM9ea",input:"header_input__Ny5oD",form:"header_form__LHi6k",header_content_input:"header_header_content_input__bgMK4"}},9330:function(e){e.exports={h1:"heading_h1__gKc4U",gray_h3:"heading_gray_h3__Zuc4z",h2:"heading_h2__c3djX",h1_small:"heading_h1_small__h_lg0",black_h3:"heading_black_h3__lSn7Q"}},1389:function(e){e.exports={main:"layout_main__j5lor",image:"layout_image__3k0xT"}},2263:function(e){e.exports={live_heading:"live_live_heading__nCQJB",live_option:"live_live_option__konV4",card:"live_card__EQzZY"}},9925:function(e){e.exports={memories_heading:"memories_memories_heading__sSdva",memories_content:"memories_memories_content__ITzqP",number:"memories_number__4_nBk",animateBg:"memories_animateBg__2lHHF",memories_content_image:"memories_memories_content_image__N19_y",memories_content_items:"memories_memories_content_items__okARS",image1:"memories_image1__jA9B8",image2:"memories_image2__xNcMT",image3:"memories_image3__PMi1a"}},9202:function(e){e.exports={nav:"navbar_nav__t3TC8",logo:"navbar_logo__rxU3h",listing_property:"navbar_listing_property__SoSpq",menu:"navbar_menu__GrkEK",animateBg:"navbar_animateBg__8_K0e"}},2579:function(e){e.exports={somewhere_heading:"somewhere_somewhere_heading__avqe5",somewhere_content:"somewhere_somewhere_content__pFJ7i",card:"somewhere_card__JyYvW",card_image:"somewhere_card_image__BE_oT",price:"somewhere_price__XiNNN",hotel:"somewhere_hotel__27tzQ",location:"somewhere_location__M9Pd2",date:"somewhere_date__EMzpr",star:"somewhere_star__R_VkY",card_content:"somewhere_card_content__ZwfPz",animateBg:"somewhere_animateBg__T89dZ"}},5809:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"]}},5675:function(e,t,n){n(8045)}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);