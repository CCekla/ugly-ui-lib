(()=>{"use strict";var e={109:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([e.id,".ugly-dropdown .ugly-trigger {\n    border-bottom: 3px groove olive;\n    position: relative; \n    padding: 1rem 2rem;\n    cursor: pointer;\n}\n\n.ugly-dropdown .ugly-trigger::after {\n    content: '>';\n    position: absolute;\n    display: inline-block;\n    right: 0.75rem;\n    transform: rotate(90deg) scale(1, 1.5);\n    font-weight: bold;\n    color: red;\n    transition: all .3s;\n}\n\n.ugly-dropdown .ugly-trigger.active::after {\n    transform: rotate(-90deg) scale(1, 1.5);\n    color: lime;\n}\n\n.ugly-dropdown .ugly-content {\n    max-height: 0;\n    padding: 0 1.5rem;\n    margin-top: 1.5rem;\n    transition: max-height .5s ease;\n    overflow: hidden;\n}\n\n.ugly-dropdown .ugly-content.open {\n    margin-top: 1.5rem;\n    max-height: 500px;\n    transition: max-height 1s ease;\n}",""]);const s=a},442:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([e.id,".ugly-snackbar {\n    display: none;\n    position: fixed;\n    background: white;\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    padding: 2rem;\n    margin: 0 auto;\n    text-align: center;\n    font-size: 4em;\n}\n\n.ugly-snackbar.show {\n    display: block;\n}",""]);const s=a},27:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([e.id,".ugly-tabs > ul {\n    padding: 0;\n}\n\n.ugly-tabs .ugly-trigger {\n    display: inline-block;\n    list-style-type: none;\n    padding: .5rem .75rem;\n    margin-left: 5px;\n    color: olive;\n    border: 2px dotted olive;\n    background: white;\n    font-weight: bold;\n    cursor: poiner;\n}\n\n.ugly-tabs .ugly-trigger.selected {\n    background: olive;\n    color: white;\n    border: 2px solid olive;\n}\n\n.ugly-tabs .ugly-content {\n    display: none;\n    padding: 1rem 3rem;\n}\n\n.ugly-tabs .ugly-content.open {\n    display: block;\n}",""]);const s=a},915:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([e.id,".ugly-tooltip {\n    position: relative;\n    border-bottom: 1 px dotted olive;\n    color: olive;\n}\n\n.tip {\n    position: absolute;\n    visibility: hidden;\n    width: 150px;\n    bottom: 120%;\n    left: -50%;\n    background-color: olive;\n    color: white;\n    padding: 5px;\n    text-align: center;\n    opacity: 0;\n    transition: opacity .3s;\n}\n\n.ugly-tooltip:hover .tip {\n    visibility: visible;\n    opacity: 1;\n}",""]);const s=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],s=0;s<e.length;s++){var l=e[s],c=r.base?l[0]+r.base:l[0],u=i[c]||0,d="".concat(c," ").concat(u);i[c]=u+1;var p=t(d),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var g=o(f,r);r.byIndex=s,n.splice(s,0,{identifier:d,updater:g,references:1})}a.push(d)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=t(i[a]);n[s].references--}for(var l=r(e,o),c=0;c<i.length;c++){var u=t(i[c]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}i=l}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),i=t(569),a=t.n(i),s=t(565),l=t.n(s),c=t(216),u=t.n(c),d=t(589),p=t.n(d),f=t(915),g={};function y(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}g.styleTagTransform=p(),g.setAttributes=l(),g.insert=a().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=u(),n()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals;var v=function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.element=n,this.message=n.getAttribute("data-msg")}var n,t;return n=e,(t=[{key:"init",value:function(){var e=document.createElement("div");e.classList.add("tip"),e.textContent=this.message,this.element.appendChild(e)}}])&&y(n.prototype,t),Object.defineProperty(n,"prototype",{writable:!1}),e}(),h=t(109),m={};function b(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}m.styleTagTransform=p(),m.setAttributes=l(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=u(),n()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;var w=function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.container=n,this.trigger=n.querySelector(".ugly-trigger"),this.content=n.querySelector(".ugly-content")}var n,t;return n=e,(t=[{key:"init",value:function(){var e=this;this.trigger.addEventListener("click",(function(){e.trigger.classList.toggle("active"),e.content.classList.toggle("open")}))}}])&&b(n.prototype,t),Object.defineProperty(n,"prototype",{writable:!1}),e}(),k=t(27),x={};function E(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}x.styleTagTransform=p(),x.setAttributes=l(),x.insert=a().bind(null,"head"),x.domAPI=o(),x.insertStyleElement=u(),n()(k.Z,x),k.Z&&k.Z.locals&&k.Z.locals;var T=function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.container=n,this.tabs=n.querySelectorAll(".ugly-trigger")}var n,t;return n=e,(t=[{key:"init",value:function(){var e=this;this.tabs.forEach((function(n){n.addEventListener("click",(function(n){e.toggleTabs(n),e.toggleContent(n)}))}))}},{key:"toggleTabs",value:function(e){this.tabs.forEach((function(e){return e.classList.remove("selected")})),e.target.classList.add("selected")}},{key:"toggleContent",value:function(e){this.container.querySelectorAll(".ugly-content").forEach((function(e){e.classList.remove("open")}));var n=e.target.getAttribute("data-target");document.getElementById(n).classList.add("open")}}])&&E(n.prototype,t),Object.defineProperty(n,"prototype",{writable:!1}),e}(),Z=t(442),S={};function C(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}S.styleTagTransform=p(),S.setAttributes=l(),S.insert=a().bind(null,"head"),S.domAPI=o(),S.insertStyleElement=u(),n()(Z.Z,S),Z.Z&&Z.Z.locals&&Z.Z.locals;var L=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.snackbar=document.createElement("div")}var n,t;return n=e,(t=[{key:"init",value:function(){this.snackbar.classList.add("ugly-snackbar"),document.querySelector("body").appendChild(this.snackbar)}},{key:"show",value:function(e){var n=this;this.snackbar.innerHTML=e,this.snackbar.classList.add("show"),setTimeout((function(){n.snackbar.classList.remove("show")}),4e3)}}])&&C(n.prototype,t),Object.defineProperty(n,"prototype",{writable:!1}),e}();new v(document.querySelector(".ugly-tooltip")).init(),document.querySelectorAll(".ugly-dropdown").forEach((function(e){new w(e).init()})),new T(document.querySelector(".ugly-tabs")).init();var A=new L;A.init(),document.querySelector(".ugly-snack-trigger").addEventListener("click",(function(){A.show("&#127850; &#127850; &#127850;")}))})()})();