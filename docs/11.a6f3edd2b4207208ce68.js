(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{484:function(r,n,e){var a=e(485);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[r.i,a,""]]);var t={insert:"head",singleton:!1};e(72)(a,t);a.locals&&(r.exports=a.locals)},485:function(r,n,e){(n=e(71)(!1)).push([r.i,".app-bar {\r\n  display: flex;\r\n  min-height: 64px;\r\n  padding: 0 16px;\r\n  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.app-bar__block {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.app-bar__title-block {\r\n  margin-left: 32px;\r\n}\r\n\r\n@keyframes color-loop {\r\n  0% {\r\n    color: #ffcdd2;\r\n  }\r\n  10% {\r\n    color: #f8bbd0;\r\n  }\r\n  20% {\r\n    color: #e1bee7;\r\n  }\r\n  30% {\r\n    color: #d1c4e9;\r\n  }\r\n  40% {\r\n    color: #c5cae9;\r\n  }\r\n  50% {\r\n    color: #bbdefb;\r\n  }\r\n  60% {\r\n    color: #b3e5fc;\r\n  }\r\n  70% {\r\n    color: #b2ebf2;\r\n  }\r\n  80% {\r\n    color: #b2dfdb;\r\n  }\r\n  90% {\r\n    color: #c8e6c9;\r\n  }\r\n  100% {\r\n    color: #dcedc8;\r\n  }\r\n}\r\n\r\n.app-bar__brand-link {\r\n  display: flex;\r\n  align-items: center;\r\n  height: 100%;\r\n  font-size: 1.5rem;\r\n  text-decoration: none;\r\n  animation: 6s linear 0s infinite alternate color-loop;\r\n}\r\n\r\n.app-bar__page-title {\r\n  font-size: 1.25rem;\r\n}\r\n\r\n@media screen and (max-width: 960px) {\r\n  .app-bar {\r\n    min-height: 48px;\r\n  }\r\n\r\n  .app-bar__title-block {\r\n    margin-left: 24px;\r\n  }\r\n}\r\n",""]),r.exports=n},486:function(r,n,e){"use strict";var a=e(478),t=e.n(a),o=e(477),l=e.n(o),c=e(1),i=e.n(c),s=e(0),p=e.n(s),u=e(110),d=function(r){return/^#[0-9A-F]{6}$/i.test(r)||/^#([0-9A-F]{3}){1,2}$/i.test(r)};function f(r){if(r=r.trim(),!d(r))throw new Error("Invalid HEX color.");3===(r=r.replace("#","")).length&&(r=r.split("").map((function(r){return r+r})).join(""));var n=parseInt(r.substr(0,2),16),e=parseInt(r.substr(2,2),16),a=parseInt(r.substr(4,2),16);return Math.round((299*parseInt(n)+587*parseInt(e)+114*parseInt(a))/1e3)>=128?"#000":"#fff"}e(484);var b=function(r){return getComputedStyle(document.documentElement).getPropertyValue("--color-".concat(r))},m=b("primary"),g=b("secondary"),_=function(r){switch(r){case"primary":return m;case"secondary":return g;default:return r}};function h(r){var n=r.title,e=r.color,a=void 0===e?"#616161":e,o=r.className,c=void 0===o?"":o,s=l()(r,["title","color","className"]),p=_(a);return i.a.createElement("header",t()({className:["app-bar",c].join(" "),style:{backgroundColor:p,color:f(p)}},s),i.a.createElement("div",{className:"app-bar__block"},i.a.createElement(u.b,{to:"/",className:"app-bar__brand-link"},"IKBO-02-16-Coursework-JS")),n&&i.a.createElement("div",{className:"app-bar__block app-bar__title-block"},i.a.createElement("h1",{className:"app-bar__page-title"},n)))}h.propTypes={title:p.a.string,color:p.a.string,className:p.a.string};var x=i.a.memo(h);e.d(n,"a",(function(){return x}))},508:function(r,n,e){var a=e(509);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[r.i,a,""]]);var t={insert:"head",singleton:!1};e(72)(a,t);a.locals&&(r.exports=a.locals)},509:function(r,n,e){(n=e(71)(!1)).push([r.i,"",""]),r.exports=n},518:function(r,n,e){"use strict";e.r(n);var a=e(1),t=e.n(a),o=e(486);e(508);var l=function(r){return r.data,Object(a.useEffect)((function(){alert("Hello from StasPotapovPage")})),t.a.createElement(t.a.Fragment,null,t.a.createElement(o.a,{title:"Потапов"}),t.a.createElement("div",null,"Hello!"))};e.d(n,"default",(function(){return l}))}}]);