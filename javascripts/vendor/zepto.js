!function(t){String.prototype.trim===t&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),Array.prototype.reduce===t&&(Array.prototype.reduce=function(e){if(void 0===this||null===this)throw new TypeError;var n,i=Object(this),r=i.length>>>0,s=0;if("function"!=typeof e)throw new TypeError;if(0==r&&1==arguments.length)throw new TypeError;if(arguments.length>=2)n=arguments[1];else for(;;){if(s in i){n=i[s++];break}if(++s>=r)throw new TypeError}for(;r>s;)s in i&&(n=e.call(t,n,i[s],s,i)),s++;return n})}();var Zepto=function(){function t(t){return null==t?String(t):V[Y.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function i(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function r(e){return"object"==t(e)}function s(t){return r(t)&&!n(t)&&t.__proto__==Object.prototype}function a(t){return t instanceof Array}function o(t){return"number"==typeof t.length}function c(t){return $.call(t,function(t){return null!=t})}function u(t){return t.length>0?_.fn.concat.apply([],t):t}function l(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function f(t){return t in Z?Z[t]:Z[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function d(t,e){return"number"!=typeof e||N[l(t)]?e:e+"px"}function h(t){var e,n;return z[t]||(e=j.createElement(t),j.body.appendChild(e),n=S(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),z[t]=n),z[t]}function p(t){return"children"in t?D.call(t.children):_.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function g(t,e,n){for(C in e)n&&(s(e[C])||a(e[C]))?(s(e[C])&&!s(t[C])&&(t[C]={}),a(e[C])&&!a(t[C])&&(t[C]=[]),g(t[C],e[C],n)):e[C]!==F&&(t[C]=e[C])}function v(t,e){return e===F?_(t):_(t).filter(e)}function m(t,n,i,r){return e(n)?n.call(t,i,r):n}function b(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function y(t,e){var n=t.className,i=n&&n.baseVal!==F;return e===F?i?n.baseVal:n:(i?n.baseVal=e:t.className=e,void 0)}function x(t){var e;try{return t?"true"==t||("false"==t?!1:"null"==t?null:isNaN(e=Number(t))?/^[\[\{]/.test(t)?_.parseJSON(t):t:e):t}catch(n){return t}}function w(t,e){e(t);for(var n in t.childNodes)w(t.childNodes[n],e)}var F,C,_,k,A,E,T=[],D=T.slice,$=T.filter,j=window.document,z={},Z={},S=j.defaultView.getComputedStyle,N={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},O=/^\s*<(\w+|!)[^>]*>/,P=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,M=/^(?:body|html)$/i,R=["val","css","html","text","data","width","height","offset"],H=["after","prepend","before","append"],L=j.createElement("table"),I=j.createElement("tr"),q={tr:j.createElement("tbody"),tbody:L,thead:L,tfoot:L,td:I,th:I,"*":j.createElement("div")},B=/complete|loaded|interactive/,W=/^\.([\w-]+)$/,X=/^#([\w-]*)$/,U=/^[\w-]+$/,V={},Y=V.toString,J={},G=j.createElement("div");return J.matches=function(t,e){if(!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,s=!r;return s&&(r=G).appendChild(t),i=~J.qsa(r,e).indexOf(t),s&&G.removeChild(t),i},A=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},E=function(t){return $.call(t,function(e,n){return t.indexOf(e)==n})},J.fragment=function(t,e,n){t.replace&&(t=t.replace(P,"<$1></$2>")),e===F&&(e=O.test(t)&&RegExp.$1),e in q||(e="*");var i,r,a=q[e];return a.innerHTML=""+t,r=_.each(D.call(a.childNodes),function(){a.removeChild(this)}),s(n)&&(i=_(r),_.each(n,function(t,e){R.indexOf(t)>-1?i[t](e):i.attr(t,e)})),r},J.Z=function(t,e){return t=t||[],t.__proto__=_.fn,t.selector=e||"",t},J.isZ=function(t){return t instanceof J.Z},J.init=function(t,n){if(t){if(e(t))return _(j).ready(t);if(J.isZ(t))return t;var i;if(a(t))i=c(t);else if(r(t))i=[s(t)?_.extend({},t):t],t=null;else if(O.test(t))i=J.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==F)return _(n).find(t);i=J.qsa(j,t)}return J.Z(i,t)}return J.Z()},_=function(t,e){return J.init(t,e)},_.extend=function(t){var e,n=D.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){g(t,n,e)}),t},J.qsa=function(t,e){var n;return i(t)&&X.test(e)?(n=t.getElementById(RegExp.$1))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:D.call(W.test(e)?t.getElementsByClassName(RegExp.$1):U.test(e)?t.getElementsByTagName(e):t.querySelectorAll(e))},_.contains=function(t,e){return t!==e&&t.contains(e)},_.type=t,_.isFunction=e,_.isWindow=n,_.isArray=a,_.isPlainObject=s,_.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},_.inArray=function(t,e,n){return T.indexOf.call(e,t,n)},_.camelCase=A,_.trim=function(t){return t.trim()},_.uuid=0,_.support={},_.expr={},_.map=function(t,e){var n,i,r,s=[];if(o(t))for(i=0;i<t.length;i++)n=e(t[i],i),null!=n&&s.push(n);else for(r in t)n=e(t[r],r),null!=n&&s.push(n);return u(s)},_.each=function(t,e){var n,i;if(o(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},_.grep=function(t,e){return $.call(t,e)},window.JSON&&(_.parseJSON=JSON.parse),_.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){V["[object "+e+"]"]=e.toLowerCase()}),_.fn={forEach:T.forEach,reduce:T.reduce,push:T.push,sort:T.sort,indexOf:T.indexOf,concat:T.concat,map:function(t){return _(_.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return _(D.apply(this,arguments))},ready:function(t){return B.test(j.readyState)?t(_):j.addEventListener("DOMContentLoaded",function(){t(_)},!1),this},get:function(t){return t===F?D.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return T.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return e(t)?this.not(this.not(t)):_($.call(this,function(e){return J.matches(e,t)}))},add:function(t,e){return _(E(this.concat(_(t,e))))},is:function(t){return this.length>0&&J.matches(this[0],t)},not:function(t){var n=[];if(e(t)&&t.call!==F)this.each(function(e){t.call(this,e)||n.push(this)});else{var i="string"==typeof t?this.filter(t):o(t)&&e(t.item)?D.call(t):_(t);this.forEach(function(t){i.indexOf(t)<0&&n.push(t)})}return _(n)},has:function(t){return this.filter(function(){return r(t)?_.contains(this,t):_(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!r(t)?t:_(t)},last:function(){var t=this[this.length-1];return t&&!r(t)?t:_(t)},find:function(t){var e,n=this;return e="object"==typeof t?_(t).filter(function(){var t=this;return T.some.call(n,function(e){return _.contains(e,t)})}):1==this.length?_(J.qsa(this[0],t)):this.map(function(){return J.qsa(this,t)})},closest:function(t,e){var n=this[0],r=!1;for("object"==typeof t&&(r=_(t));n&&!(r?r.indexOf(n)>=0:J.matches(n,t));)n=n!==e&&!i(n)&&n.parentNode;return _(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=_.map(n,function(t){return(t=t.parentNode)&&!i(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return v(e,t)},parent:function(t){return v(E(this.pluck("parentNode")),t)},children:function(t){return v(this.map(function(){return p(this)}),t)},contents:function(){return this.map(function(){return D.call(this.childNodes)})},siblings:function(t){return v(this.map(function(t,e){return $.call(p(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return _.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=null),"none"==S(this,"").getPropertyValue("display")&&(this.style.display=h(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=e(t);if(this[0]&&!n)var i=_(t).get(0),r=i.parentNode||this.length>1;return this.each(function(e){_(this).wrapAll(n?t.call(this,e):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){_(this[0]).before(t=_(t));for(var e;(e=t.children()).length;)t=e.first();_(t).append(this)}return this},wrapInner:function(t){var n=e(t);return this.each(function(e){var i=_(this),r=i.contents(),s=n?t.call(this,e):t;r.length?r.wrapAll(s):i.append(s)})},unwrap:function(){return this.parent().each(function(){_(this).replaceWith(_(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=_(this);(t===F?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return _(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return _(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return t===F?this.length>0?this[0].innerHTML:null:this.each(function(e){var n=this.innerHTML;_(this).empty().append(m(this,t,e,n))})},text:function(t){return t===F?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=t})},attr:function(t,e){var n;return"string"==typeof t&&e===F?0==this.length||1!==this[0].nodeType?F:"value"==t&&"INPUT"==this[0].nodeName?this.val():!(n=this[0].getAttribute(t))&&t in this[0]?this[0][t]:n:this.each(function(n){if(1===this.nodeType)if(r(t))for(C in t)b(this,C,t[C]);else b(this,t,m(this,e,n,this.getAttribute(t)))})},removeAttr:function(t){return this.each(function(){1===this.nodeType&&b(this,t)})},prop:function(t,e){return e===F?this[0]&&this[0][t]:this.each(function(n){this[t]=m(this,e,n,this[t])})},data:function(t,e){var n=this.attr("data-"+l(t),e);return null!==n?x(n):F},val:function(t){return t===F?this[0]&&(this[0].multiple?_(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value):this.each(function(e){this.value=m(this,t,e,this.value)})},offset:function(t){if(t)return this.each(function(e){var n=_(this),i=m(this,t,e,n.offset()),r=n.offsetParent().offset(),s={top:i.top-r.top,left:i.left-r.left};"static"==n.css("position")&&(s.position="relative"),n.css(s)});if(0==this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,n){if(arguments.length<2&&"string"==typeof e)return this[0]&&(this[0].style[A(e)]||S(this[0],"").getPropertyValue(e));var i="";if("string"==t(e))n||0===n?i=l(e)+":"+d(e,n):this.each(function(){this.style.removeProperty(l(e))});else for(C in e)e[C]||0===e[C]?i+=l(C)+":"+d(C,e[C])+";":this.each(function(){this.style.removeProperty(l(C))});return this.each(function(){this.style.cssText+=";"+i})},index:function(t){return t?this.indexOf(_(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return T.some.call(this,function(t){return this.test(y(t))},f(t))},addClass:function(t){return this.each(function(e){k=[];var n=y(this),i=m(this,t,e,n);i.split(/\s+/g).forEach(function(t){_(this).hasClass(t)||k.push(t)},this),k.length&&y(this,n+(n?" ":"")+k.join(" "))})},removeClass:function(t){return this.each(function(e){return t===F?y(this,""):(k=y(this),m(this,t,e,k).split(/\s+/g).forEach(function(t){k=k.replace(f(t)," ")}),y(this,k.trim()),void 0)})},toggleClass:function(t,e){return this.each(function(n){var i=_(this),r=m(this,t,n,y(this));r.split(/\s+/g).forEach(function(t){(e===F?!i.hasClass(t):e)?i.addClass(t):i.removeClass(t)})})},scrollTop:function(){return this.length?"scrollTop"in this[0]?this[0].scrollTop:this[0].scrollY:void 0},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=M.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(_(t).css("margin-top"))||0,n.left-=parseFloat(_(t).css("margin-left"))||0,i.top+=parseFloat(_(e[0]).css("border-top-width"))||0,i.left+=parseFloat(_(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||j.body;t&&!M.test(t.nodeName)&&"static"==_(t).css("position");)t=t.offsetParent;return t})}},_.fn.detach=_.fn.remove,["width","height"].forEach(function(t){_.fn[t]=function(e){var r,s=this[0],a=t.replace(/./,function(t){return t[0].toUpperCase()});return e===F?n(s)?s["inner"+a]:i(s)?s.documentElement["offset"+a]:(r=this.offset())&&r[t]:this.each(function(n){s=_(this),s.css(t,m(this,e,n,s[t]()))})}}),H.forEach(function(e,n){var i=n%2;_.fn[e]=function(){var e,r,s=_.map(arguments,function(n){return e=t(n),"object"==e||"array"==e||null==n?n:J.fragment(n)}),a=this.length>1;return s.length<1?this:this.each(function(t,e){r=i?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null,s.forEach(function(t){if(a)t=t.cloneNode(!0);else if(!r)return _(t).remove();w(r.insertBefore(t,e),function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},_.fn[i?e+"To":"insert"+(n?"Before":"After")]=function(t){return _(t)[e](this),this}}),J.Z.prototype=_.fn,J.uniq=E,J.deserializeValue=x,_.zepto=J,_}();window.Zepto=Zepto,"$"in window||(window.$=Zepto),function(t){function e(t){var e=this.os={},n=this.browser={},i=t.match(/WebKit\/([\d.]+)/),r=t.match(/(Android)\s+([\d.]+)/),s=t.match(/(iPad).*OS\s([\d_]+)/),a=!s&&t.match(/(iPhone\sOS)\s([\d_]+)/),o=t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),c=o&&t.match(/TouchPad/),u=t.match(/Kindle\/([\d.]+)/),l=t.match(/Silk\/([\d._]+)/),f=t.match(/(BlackBerry).*Version\/([\d.]+)/),d=t.match(/(BB10).*Version\/([\d.]+)/),h=t.match(/(RIM\sTablet\sOS)\s([\d.]+)/),p=t.match(/PlayBook/),g=t.match(/Chrome\/([\d.]+)/)||t.match(/CriOS\/([\d.]+)/),v=t.match(/Firefox\/([\d.]+)/);(n.webkit=!!i)&&(n.version=i[1]),r&&(e.android=!0,e.version=r[2]),a&&(e.ios=e.iphone=!0,e.version=a[2].replace(/_/g,".")),s&&(e.ios=e.ipad=!0,e.version=s[2].replace(/_/g,".")),o&&(e.webos=!0,e.version=o[2]),c&&(e.touchpad=!0),f&&(e.blackberry=!0,e.version=f[2]),d&&(e.bb10=!0,e.version=d[2]),h&&(e.rimtabletos=!0,e.version=h[2]),p&&(n.playbook=!0),u&&(e.kindle=!0,e.version=u[1]),l&&(n.silk=!0,n.version=l[1]),!l&&e.android&&t.match(/Kindle Fire/)&&(n.silk=!0),g&&(n.chrome=!0,n.version=g[1]),v&&(n.firefox=!0,n.version=v[1]),e.tablet=!!(s||p||r&&!t.match(/Mobile/)||v&&t.match(/Tablet/)),e.phone=!(e.tablet||!(r||a||o||f||d||g&&t.match(/Android/)||g&&t.match(/CriOS\/([\d.]+)/)||v&&t.match(/Mobile/)))}e.call(t,navigator.userAgent),t.__detect=e}(Zepto),function(t){function e(t){return t._zid||(t._zid=h++)}function n(t,n,s,a){if(n=i(n),n.ns)var o=r(n.ns);return(d[e(t)]||[]).filter(function(t){return!(!t||n.e&&t.e!=n.e||n.ns&&!o.test(t.ns)||s&&e(t.fn)!==e(s)||a&&t.sel!=a)})}function i(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function r(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function s(e,n,i){"string"!=t.type(e)?t.each(e,i):e.split(/\s/).forEach(function(t){i(t,n)})}function a(t,e){return t.del&&("focus"==t.e||"blur"==t.e)||!!e}function o(t){return g[t]||t}function c(n,r,c,u,l,f){var h=e(n),p=d[h]||(d[h]=[]);s(r,c,function(e,r){var s=i(e);s.fn=r,s.sel=u,s.e in g&&(r=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?s.fn.apply(this,arguments):void 0}),s.del=l&&l(r,e);var c=s.del||r;s.proxy=function(t){var e=c.apply(n,[t].concat(t.data));return e===!1&&(t.preventDefault(),t.stopPropagation()),e},s.i=p.length,p.push(s),n.addEventListener(o(s.e),s.proxy,a(s,f))})}function u(t,i,r,c,u){var l=e(t);s(i||"",r,function(e,i){n(t,e,i,c).forEach(function(e){delete d[l][e.i],t.removeEventListener(o(e.e),e.proxy,a(e,u))})})}function l(e){var n,i={originalEvent:e};for(n in e)b.test(n)||void 0===e[n]||(i[n]=e[n]);return t.each(y,function(t,n){i[t]=function(){return this[n]=v,e[t].apply(e,arguments)},i[n]=m}),i}function f(t){if(!("defaultPrevented"in t)){t.defaultPrevented=!1;var e=t.preventDefault;t.preventDefault=function(){this.defaultPrevented=!0,e.call(this)}}}var d=(t.zepto.qsa,{}),h=1,p={},g={mouseenter:"mouseover",mouseleave:"mouseout"};p.click=p.mousedown=p.mouseup=p.mousemove="MouseEvents",t.event={add:c,remove:u},t.proxy=function(n,i){if(t.isFunction(n)){var r=function(){return n.apply(i,arguments)};return r._zid=e(n),r}if("string"==typeof i)return t.proxy(n[i],n);throw new TypeError("expected function")},t.fn.bind=function(t,e){return this.each(function(){c(this,t,e)})},t.fn.unbind=function(t,e){return this.each(function(){u(this,t,e)})},t.fn.one=function(t,e){return this.each(function(n,i){c(this,t,e,null,function(t,e){return function(){var n=t.apply(i,arguments);return u(i,e,t),n}})})};var v=function(){return!0},m=function(){return!1},b=/^([A-Z]|layer[XY]$)/,y={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(e,n,i){return this.each(function(r,s){c(s,n,i,e,function(n){return function(i){var r,a=t(i.target).closest(e,s).get(0);return a?(r=t.extend(l(i),{currentTarget:a,liveFired:s}),n.apply(a,[r].concat([].slice.call(arguments,1)))):void 0}})})},t.fn.undelegate=function(t,e,n){return this.each(function(){u(this,e,n,t)})},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,i){return!n||t.isFunction(n)?this.bind(e,n||i):this.delegate(n,e,i)},t.fn.off=function(e,n,i){return!n||t.isFunction(n)?this.unbind(e,n||i):this.undelegate(n,e,i)},t.fn.trigger=function(e,n){return("string"==typeof e||t.isPlainObject(e))&&(e=t.Event(e)),f(e),e.data=n,this.each(function(){"dispatchEvent"in this&&this.dispatchEvent(e)})},t.fn.triggerHandler=function(e,i){var r,s;return this.each(function(a,o){r=l("string"==typeof e?t.Event(e):e),r.data=i,r.target=o,t.each(n(o,e.type||e),function(t,e){return s=e.proxy(r),r.isImmediatePropagationStopped()?!1:void 0})}),s},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.trigger(e)}}),["focus","blur"].forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.each(function(){try{this[e]()}catch(t){}}),this}}),t.Event=function(t,e){"string"!=typeof t&&(e=t,t=e.type);var n=document.createEvent(p[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0,null,null,null,null,null,null,null,null,null,null,null,null),n.isDefaultPrevented=function(){return this.defaultPrevented},n}}(Zepto),function(t){function e(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.defaultPrevented}function n(t,n,i,r){return t.global?e(n||b,i,r):void 0}function i(e){e.global&&0===t.active++&&n(e,null,"ajaxStart")}function r(e){e.global&&!--t.active&&n(e,null,"ajaxStop")}function s(t,e){var i=e.context;return e.beforeSend.call(i,t,e)===!1||n(e,i,"ajaxBeforeSend",[t,e])===!1?!1:(n(e,i,"ajaxSend",[t,e]),void 0)}function a(t,e,i){var r=i.context,s="success";i.success.call(r,t,s,e),n(i,r,"ajaxSuccess",[e,i,t]),c(s,e,i)}function o(t,e,i,r){var s=r.context;r.error.call(s,i,e,t),n(r,s,"ajaxError",[i,r,t]),c(e,i,r)}function c(t,e,i){var s=i.context;i.complete.call(s,e,t),n(i,s,"ajaxComplete",[e,i]),r(i)}function u(){}function l(t){return t&&(t=t.split(";",2)[0]),t&&(t==C?"html":t==F?"json":x.test(t)?"script":w.test(t)&&"xml")||"text"}function f(t,e){return(t+"&"+e).replace(/[&?]{1,2}/,"?")}function d(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=f(e.url,e.data))}function h(e,n,i,r){var s=!t.isFunction(n);return{url:e,data:s?n:void 0,success:s?t.isFunction(i)?i:void 0:n,dataType:s?r||i:i}}function p(e,n,i,r){var s,a=t.isArray(n);t.each(n,function(n,o){s=t.type(o),r&&(n=i?r:r+"["+(a?"":n)+"]"),!r&&a?e.add(o.name,o.value):"array"==s||!i&&"object"==s?p(e,o,i,n):e.add(n,o)})}var g,v,m=0,b=window.document,y=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,x=/^(?:text|application)\/javascript/i,w=/^(?:text|application)\/xml/i,F="application/json",C="text/html",_=/^\s*$/;t.active=0,t.ajaxJSONP=function(e){if(!("type"in e))return t.ajax(e);var n,i="jsonp"+ ++m,r=b.createElement("script"),c=function(){clearTimeout(n),t(r).remove(),delete window[i]},l=function(t){c(),t&&"timeout"!=t||(window[i]=u),o(null,t||"abort",f,e)},f={abort:l};return s(f,e)===!1?(l("abort"),!1):(window[i]=function(t){c(),a(t,f,e)},r.onerror=function(){l("error")},r.src=e.url.replace(/=\?/,"="+i),t("head").append(r),e.timeout>0&&(n=setTimeout(function(){l("timeout")},e.timeout)),f)},t.ajaxSettings={type:"GET",beforeSend:u,success:u,error:u,complete:u,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript",json:F,xml:"application/xml, text/xml",html:C,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n=t.extend({},e||{});for(g in t.ajaxSettings)void 0===n[g]&&(n[g]=t.ajaxSettings[g]);i(n),n.crossDomain||(n.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(n.url)&&RegExp.$2!=window.location.host),n.url||(n.url=window.location.toString()),d(n),n.cache===!1&&(n.url=f(n.url,"_="+Date.now()));var r=n.dataType,c=/=\?/.test(n.url);if("jsonp"==r||c)return c||(n.url=f(n.url,"callback=?")),t.ajaxJSONP(n);var h,p=n.accepts[r],m={},b=/^([\w-]+:)\/\//.test(n.url)?RegExp.$1:window.location.protocol,y=n.xhr();n.crossDomain||(m["X-Requested-With"]="XMLHttpRequest"),p&&(m.Accept=p,p.indexOf(",")>-1&&(p=p.split(",",2)[0]),y.overrideMimeType&&y.overrideMimeType(p)),(n.contentType||n.contentType!==!1&&n.data&&"GET"!=n.type.toUpperCase())&&(m["Content-Type"]=n.contentType||"application/x-www-form-urlencoded"),n.headers=t.extend(m,n.headers||{}),y.onreadystatechange=function(){if(4==y.readyState){y.onreadystatechange=u,clearTimeout(h);var e,i=!1;if(y.status>=200&&y.status<300||304==y.status||0==y.status&&"file:"==b){r=r||l(y.getResponseHeader("content-type")),e=y.responseText;try{"script"==r?(1,eval)(e):"xml"==r?e=y.responseXML:"json"==r&&(e=_.test(e)?null:t.parseJSON(e))}catch(s){i=s}i?o(i,"parsererror",y,n):a(e,y,n)}else o(null,y.status?"error":"abort",y,n)}};var x="async"in n?n.async:!0;y.open(n.type,n.url,x);for(v in n.headers)y.setRequestHeader(v,n.headers[v]);return s(y,n)===!1?(y.abort(),!1):(n.timeout>0&&(h=setTimeout(function(){y.onreadystatechange=u,y.abort(),o(null,"timeout",y,n)},n.timeout)),y.send(n.data?n.data:null),y)},t.get=function(){return t.ajax(h.apply(null,arguments))},t.post=function(){var e=h.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=h.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var r,s=this,a=e.split(/\s/),o=h(e,n,i),c=o.success;return a.length>1&&(o.url=a[0],r=a[1]),o.success=function(e){s.html(r?t("<div>").html(e.replace(y,"")).find(r):e),c&&c.apply(s,arguments)},t.ajax(o),this};var k=encodeURIComponent;t.param=function(t,e){var n=[];return n.add=function(t,e){this.push(k(t)+"="+k(e))},p(n,t,e),n.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n=[];return t(Array.prototype.slice.call(this.get(0).elements)).each(function(){e=t(this);var i=e.attr("type");"fieldset"!=this.nodeName.toLowerCase()&&!this.disabled&&"submit"!=i&&"reset"!=i&&"button"!=i&&("radio"!=i&&"checkbox"!=i||this.checked)&&n.push({name:e.attr("name"),value:e.val()})}),n},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(e)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.defaultPrevented||this.get(0).submit()}return this}}(Zepto),function(t,e){function n(t){return i(t.replace(/([a-z])([A-Z])/,"$1-$2"))}function i(t){return t.toLowerCase()}function r(t){return s?s+t:i(t)}var s,a,o,c,u,l,f,d,h="",p={Webkit:"webkit",Moz:"",O:"o",ms:"MS"},g=window.document,v=g.createElement("div"),m=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,b={};t.each(p,function(t,n){return v.style[t+"TransitionProperty"]!==e?(h="-"+i(t)+"-",s=n,!1):void 0}),a=h+"transform",b[o=h+"transition-property"]=b[c=h+"transition-duration"]=b[u=h+"transition-timing-function"]=b[l=h+"animation-name"]=b[f=h+"animation-duration"]=b[d=h+"animation-timing-function"]="",t.fx={off:s===e&&v.style.transitionProperty===e,speeds:{_default:400,fast:200,slow:600},cssPrefix:h,transitionEnd:r("TransitionEnd"),animationEnd:r("AnimationEnd")},t.fn.animate=function(e,n,i,r){return t.isPlainObject(n)&&(i=n.easing,r=n.complete,n=n.duration),n&&(n=("number"==typeof n?n:t.fx.speeds[n]||t.fx.speeds._default)/1e3),this.anim(e,n,i,r)},t.fn.anim=function(i,r,s,h){var p,g,v,y={},x="",w=this,F=t.fx.transitionEnd;if(r===e&&(r=.4),t.fx.off&&(r=0),"string"==typeof i)y[l]=i,y[f]=r+"s",y[d]=s||"linear",F=t.fx.animationEnd;else{g=[];for(p in i)m.test(p)?x+=p+"("+i[p]+") ":(y[p]=i[p],g.push(n(p)));x&&(y[a]=x,g.push(a)),r>0&&"object"==typeof i&&(y[o]=g.join(", "),y[c]=r+"s",y[u]=s||"linear")}return v=function(e){if("undefined"!=typeof e){if(e.target!==e.currentTarget)return;t(e.target).unbind(F,v)}t(this).css(b),h&&h.call(this)},r>0&&this.bind(F,v),this.size()&&this.get(0).clientLeft,this.css(y),0>=r&&setTimeout(function(){w.each(function(){v.call(this)})},0),this},v=null}(Zepto),function(t,e){function n(n,i,r,s,a){"function"!=typeof i||a||(a=i,i=e);var o={opacity:r};return s&&(o.scale=s,n.css(t.fx.cssPrefix+"transform-origin","0 0")),n.animate(o,i,null,a)}function i(e,i,r,s){return n(e,i,0,r,function(){a.call(t(this)),s&&s.call(this)})}var r=window.document,s=(r.documentElement,t.fn.show),a=t.fn.hide,o=t.fn.toggle;t.fn.show=function(t,i){return s.call(this),t===e?t=0:this.css("opacity",0),n(this,t,1,"1,1",i)},t.fn.hide=function(t,n){return t===e?a.call(this):i(this,t,"0,0",n)},t.fn.toggle=function(n,i){return n===e||"boolean"==typeof n?o.call(this,n):this.each(function(){var e=t(this);e["none"==e.css("display")?"show":"hide"](n,i)})},t.fn.fadeTo=function(t,e,i){return n(this,t,e,null,i)},t.fn.fadeIn=function(t,e){var n=this.css("opacity");return n>0?this.css("opacity",0):n=1,s.call(this).fadeTo(t,n,e)},t.fn.fadeOut=function(t,e){return i(this,t,null,e)},t.fn.fadeToggle=function(e,n){return this.each(function(){var i=t(this);i[0==i.css("opacity")||"none"==i.css("display")?"fadeIn":"fadeOut"](e,n)})}}(Zepto),function(t){var e,n=[];t.fn.remove=function(){return this.each(function(){this.parentNode&&("IMG"===this.tagName&&(n.push(this),this.src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",e&&clearTimeout(e),e=setTimeout(function(){n=[]},6e4)),this.parentNode.removeChild(this))})}}(Zepto),function(t){function e(e,i){var c=e[o],u=c&&r[c];if(void 0===i)return u||n(e);if(u){if(i in u)return u[i];var l=a(i);if(l in u)return u[l]}return s.call(t(e),i)}function n(e,n,s){var c=e[o]||(e[o]=++t.uuid),u=r[c]||(r[c]=i(e));return void 0!==n&&(u[a(n)]=s),u}function i(e){var n={};return t.each(e.attributes,function(e,i){0==i.name.indexOf("data-")&&(n[a(i.name.replace("data-",""))]=t.zepto.deserializeValue(i.value))}),n}var r={},s=t.fn.data,a=t.camelCase,o=t.expando="Zepto"+ +new Date;t.fn.data=function(i,r){return void 0===r?t.isPlainObject(i)?this.each(function(e,r){t.each(i,function(t,e){n(r,t,e)})}):0==this.length?void 0:e(this[0],i):this.each(function(){n(this,i,r)})},t.fn.removeData=function(e){return"string"==typeof e&&(e=e.split(/\s+/)),this.each(function(){var n=this[o],i=n&&r[n];i&&t.each(e,function(){delete i[a(this)]})})}}(Zepto),function(t){function e(e){return e=t(e),!(!e.width()&&!e.height())&&"none"!==e.css("display")}function n(t,e){t=t.replace(/=#\]/g,'="#"]');var n,i,r=o.exec(t);if(r&&r[2]in a&&(n=a[r[2]],i=r[3],t=r[1],i)){var s=Number(i);i=isNaN(s)?i.replace(/^["']|["']$/g,""):s}return e(t,n,i)}var i=t.zepto,r=i.qsa,s=i.matches,a=t.expr[":"]={visible:function(){return e(this)?this:void 0},hidden:function(){return e(this)?void 0:this},selected:function(){return this.selected?this:void 0},checked:function(){return this.checked?this:void 0},parent:function(){return this.parentNode},first:function(t){return 0===t?this:void 0},last:function(t,e){return t===e.length-1?this:void 0},eq:function(t,e,n){return t===n?this:void 0},contains:function(e,n,i){return t(this).text().indexOf(i)>-1?this:void 0},has:function(t,e,n){return i.qsa(this,n).length?this:void 0}},o=new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"),c=/^\s*>/,u="Zepto"+ +new Date;i.qsa=function(e,s){return n(s,function(n,a,o){try{var l;!n&&a?n="*":c.test(n)&&(l=t(e).addClass(u),n="."+u+" "+n);var f=r(e,n)}catch(d){throw console.error("error performing selector: %o",s),d}finally{l&&l.removeClass(u)}return a?i.uniq(t.map(f,function(t,e){return a.call(t,e,f,o)})):f})},i.matches=function(t,e){return n(e,function(e,n,i){return!(e&&!s(t,e)||n&&n.call(t,null,i)!==t)})}}(Zepto),function(t){t.fn.end=function(){return this.prevObject||t()},t.fn.andSelf=function(){return this.add(this.prevObject||t())},"filter,add,not,eq,first,last,find,closest,parents,parent,children,siblings".split(",").forEach(function(e){var n=t.fn[e];t.fn[e]=function(){var t=n.apply(this,arguments);return t.prevObject=this,t}})}(Zepto),function(t){function e(t){return"tagName"in t?t:t.parentNode}function n(t,e,n,i){var r=Math.abs(t-e),s=Math.abs(n-i);return r>=s?t-e>0?"Left":"Right":n-i>0?"Up":"Down"}function i(){u=null,l.last&&(l.el.trigger("longTap"),l={})}function r(){u&&clearTimeout(u),u=null}function s(){a&&clearTimeout(a),o&&clearTimeout(o),c&&clearTimeout(c),u&&clearTimeout(u),a=o=c=u=null,l={}}var a,o,c,u,l={},f=750;t(document).ready(function(){var d,h;t(document.body).bind("touchstart",function(n){d=Date.now(),h=d-(l.last||d),l.el=t(e(n.touches[0].target)),a&&clearTimeout(a),l.x1=n.touches[0].pageX,l.y1=n.touches[0].pageY,h>0&&250>=h&&(l.isDoubleTap=!0),l.last=d,u=setTimeout(i,f)}).bind("touchmove",function(t){r(),l.x2=t.touches[0].pageX,l.y2=t.touches[0].pageY,Math.abs(l.x1-l.x2)>10&&t.preventDefault()}).bind("touchend",function(){r(),l.x2&&Math.abs(l.x1-l.x2)>30||l.y2&&Math.abs(l.y1-l.y2)>30?c=setTimeout(function(){l.el.trigger("swipe"),l.el.trigger("swipe"+n(l.x1,l.x2,l.y1,l.y2)),l={}},0):"last"in l&&(o=setTimeout(function(){var e=t.Event("tap");e.cancelTouch=s,l.el.trigger(e),l.isDoubleTap?(l.el.trigger("doubleTap"),l={}):a=setTimeout(function(){a=null,l.el.trigger("singleTap"),l={}},250)},0))}).bind("touchcancel",s),t(window).bind("scroll",s)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(e){t.fn[e]=function(t){return this.bind(e,t)}})}(Zepto),this.Zepto&&function(t){var e,n;return e=function(t,e,n,i,r){var s,a;return t?(a=t[n](),s={width:["left","right"],height:["top","bottom"]},s[n].forEach(function(e){return a+=parseInt(t.css("padding-"+e),10),i&&(a+=parseInt(t.css("border-"+e+"-width"),10)),r?a+=parseInt(t.css("margin-"+e),10):void 0}),a):null},["width","height"].forEach(function(n){var i,r,s,a,o;return i=n.replace(/./,function(t){return t[0].toUpperCase()}),(r=t.fn)[a="inner"+i]||(r[a]=function(t){return e(this,i,n,!1,t)}),(s=t.fn)[o="outer"+i]||(s[o]=function(t){return e(this,i,n,!0,t)})}),(n=t.fn).detach||(n.detach=function(t){var e,n;return n=this,null!=t&&(n=n.filter(t)),e=n.clone(!0),n.remove(),e})}(Zepto);