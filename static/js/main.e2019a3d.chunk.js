(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(t,e,r){t.exports=r(29)},28:function(t,e,r){},29:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n),a=r(18),i=r.n(a),c=r(16),u=r(1),l=r(4),s=r(3),f=r(6),h=r.n(f);function p(){p=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(G){u=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var a=e&&e.prototype instanceof h?e:h,i=Object.create(a.prototype),c=new O(o||[]);return n(i,"_invoke",{value:_(t,r,c)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(G){return{type:"throw",arg:G}}}t.wrap=l;var f={};function h(){}function m(){}function v(){}var d={};u(d,a,function(){return this});var g=Object.getPrototypeOf,y=g&&g(g(N([])));y&&y!==e&&r.call(y,a)&&(d=y);var w=v.prototype=h.prototype=Object.create(d);function E(t){["next","throw","return"].forEach(function(e){u(t,e,function(t){return this._invoke(e,t)})})}function b(t,e){var o;n(this,"_invoke",{value:function(n,a){function i(){return new e(function(o,i){!function n(o,a,i,c){var u=s(t[o],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(f).then(function(t){l.value=t,i(l)},function(t){return n("throw",t,i,c)})}c(u.arg)}(n,a,o,i)})}return o=o?o.then(i,i):i()}})}function _(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return k()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function x(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function N(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return m.prototype=v,n(w,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:m,configurable:!0}),m.displayName=u(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},E(b.prototype),u(b.prototype,i,function(){return this}),t.AsyncIterator=b,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new b(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},E(w),u(w,c,"Generator"),u(w,a,function(){return this}),u(w,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=N,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}var m=function(){console.log("/react-for-beginners");var t=Object(n.useState)(!0),e=Object(s.a)(t,2),r=e[0],a=e[1],i=Object(n.useState)([]),c=Object(s.a)(i,2),u=c[0],f=c[1],m=function(){var t=Object(l.a)(p().mark(function t(){var e;return p().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://reqres.in/api/users");case 2:return t.next=4,t.sent.json();case 4:e=t.sent,console.log(e.data),f(e.data),a(!1);case 8:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)(function(){m()},[]),o.a.createElement("div",{className:h.a.App},o.a.createElement("header",null,o.a.createElement("img",{className:h.a.logo,src:"/react-for-beginners/logo.png",alt:"Logo"}),o.a.createElement("h1",null,"Like a Lion")),o.a.createElement("div",{className:h.a.container},r?o.a.createElement("h1",null,"loading"):o.a.createElement("div",{className:h.a.grid},u.map(function(t){return o.a.createElement("a",{key:t.id,className:h.a.card,href:"mailto:".concat(t.email)},o.a.createElement("img",{className:h.a.img,src:t.avatar}),o.a.createElement("h2",null,t.first_name," ",t.last_name),o.a.createElement("span",null,o.a.createElement("img",{className:h.a.emailImg,src:"https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"}),t.email))}))))};var v=function(){return o.a.createElement(c.a,{basename:"/react-for-beginners"},o.a.createElement(u.c,null,o.a.createElement(u.a,{exact:!0,path:"/",element:o.a.createElement(m,null)})))};var d=function(){return o.a.createElement(v,null)};r(28);i.a.createRoot(document.getElementById("root")).render(o.a.createElement(d,null))},6:function(t,e,r){t.exports={logo:"Home_logo__2dbV8",container:"Home_container__14zvD",grid:"Home_grid__3MgUw",card:"Home_card__ii6rI",img:"Home_img__1l5uw",emailImg:"Home_emailImg__1Go0K"}}},[[19,1,2]]]);
//# sourceMappingURL=main.e2019a3d.chunk.js.map