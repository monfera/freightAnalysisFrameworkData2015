!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(n.d3Request=n.d3Request||{})}(this,function(n){"use strict";function e(){}function r(n,r){var t=new e;if(n instanceof e)n.each(function(n,e){t.set(e,n)});else if(Array.isArray(n)){var o,u=-1,i=n.length;if(null==r)for(;++u<i;)t.set(u,n[u]);else for(;++u<i;)t.set(r(o=n[u],u,n),o)}else if(n)for(var a in n)t.set(a,n[a]);return t}function t(){}function o(n,e){var r=new t;if(n instanceof t)n.each(function(n){r.add(n)});else if(n){var o=-1,u=n.length;if(null==e)for(;++o<u;)r.add(n[o]);else for(;++o<u;)r.add(e(n[o],o,n))}return r}function u(){for(var n,e=0,r=arguments.length,t={};r>e;++e){if(!(n=arguments[e]+"")||n in t)throw new Error("illegal type: "+n);t[n]=[]}return new i(t)}function i(n){this._=n}function a(n,e){return n.trim().split(/^|\s+/).map(function(n){var r="",t=n.indexOf(".");if(t>=0&&(r=n.slice(t+1),n=n.slice(0,t)),n&&!e.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:r}})}function s(n,e){for(var r,t=0,o=n.length;o>t;++t)if((r=n[t]).name===e)return r.value}function l(n,e,r){for(var t=0,o=n.length;o>t;++t)if(n[t].name===e){n[t]=g,n=n.slice(0,t).concat(n.slice(t+1));break}return null!=r&&n.push({name:e,value:r}),n}function f(n){return function(e,r){n(null==e?r:null)}}function c(n){var e=n.responseType;return e&&"text"!==e?n.response:n.responseText}function p(n){return new Function("d","return {"+n.map(function(n,e){return JSON.stringify(n)+": d["+e+"]"}).join(",")+"}")}function h(n,e){var r=p(n);return function(t,o){return e(r(t),o,n)}}function v(n){var e=Object.create(null),r=[];return n.forEach(function(n){for(var t in n)t in e||r.push(e[t]=t)}),r}function d(n,e){return function(r){return n(r.responseText,e)}}var m="$";e.prototype=r.prototype={constructor:e,has:function(n){return m+n in this},get:function(n){return this[m+n]},set:function(n,e){return this[m+n]=e,this},remove:function(n){var e=m+n;return e in this&&delete this[e]},clear:function(){for(var n in this)n[0]===m&&delete this[n]},keys:function(){var n=[];for(var e in this)e[0]===m&&n.push(e.slice(1));return n},values:function(){var n=[];for(var e in this)e[0]===m&&n.push(this[e]);return n},entries:function(){var n=[];for(var e in this)e[0]===m&&n.push({key:e.slice(1),value:this[e]});return n},size:function(){var n=0;for(var e in this)e[0]===m&&++n;return n},empty:function(){for(var n in this)if(n[0]===m)return!1;return!0},each:function(n){for(var e in this)e[0]===m&&n(this[e],e.slice(1),this)}};var y=r.prototype;t.prototype=o.prototype={constructor:t,has:y.has,add:function(n){return n+="",this[m+n]=n,this},remove:y.remove,clear:y.clear,values:y.keys,size:y.size,empty:y.empty,each:y.each};var g={value:function(){}};i.prototype=u.prototype={constructor:i,on:function(n,e){var r,t=this._,o=a(n+"",t),u=-1,i=o.length;{if(!(arguments.length<2)){if(null!=e&&"function"!=typeof e)throw new Error("invalid callback: "+e);for(;++u<i;)if(r=(n=o[u]).type)t[r]=l(t[r],n.name,e);else if(null==e)for(r in t)t[r]=l(t[r],n.name,null);return this}for(;++u<i;)if((r=(n=o[u]).type)&&(r=s(t[r],n.name)))return r}},copy:function(){var n={},e=this._;for(var r in e)n[r]=e[r].slice();return new i(n)},call:function(n,e){if((r=arguments.length-2)>0)for(var r,t,o=new Array(r),u=0;r>u;++u)o[u]=arguments[u+2];if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(t=this._[n],u=0,r=t.length;r>u;++u)t[u].value.apply(e,o)},apply:function(n,e,r){if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(var t=this._[n],o=0,u=t.length;u>o;++o)t[o].value.apply(e,r)}};var w=function(n,e){function t(n){var e,r=h.status;if(!r&&c(h)||r>=200&&300>r||304===r){if(a)try{e=a.call(o,h)}catch(t){return void l.call("error",o,t)}else e=h;l.call("load",o,e)}else l.call("error",o,n)}var o,i,a,s,l=u("beforesend","progress","load","error"),p=r(),h=new XMLHttpRequest,v=null,d=null,m=0;if("undefined"==typeof XDomainRequest||"withCredentials"in h||!/^(http(s)?:)?\/\//.test(n)||(h=new XDomainRequest),"onload"in h?h.onload=h.onerror=h.ontimeout=t:h.onreadystatechange=function(n){h.readyState>3&&t(n)},h.onprogress=function(n){l.call("progress",o,n)},o={header:function(n,e){return n=(n+"").toLowerCase(),arguments.length<2?p.get(n):(null==e?p.remove(n):p.set(n,e+""),o)},mimeType:function(n){return arguments.length?(i=null==n?null:n+"",o):i},responseType:function(n){return arguments.length?(s=n,o):s},timeout:function(n){return arguments.length?(m=+n,o):m},user:function(n){return arguments.length<1?v:(v=null==n?null:n+"",o)},password:function(n){return arguments.length<1?d:(d=null==n?null:n+"",o)},response:function(n){return a=n,o},get:function(n,e){return o.send("GET",n,e)},post:function(n,e){return o.send("POST",n,e)},send:function(e,r,t){return h.open(e,n,!0,v,d),null==i||p.has("accept")||p.set("accept",i+",*/*"),h.setRequestHeader&&p.each(function(n,e){h.setRequestHeader(e,n)}),null!=i&&h.overrideMimeType&&h.overrideMimeType(i),null!=s&&(h.responseType=s),m>0&&(h.timeout=m),null==t&&"function"==typeof r&&(t=r,r=null),null!=t&&1===t.length&&(t=f(t)),null!=t&&o.on("error",t).on("load",function(n){t(null,n)}),l.call("beforesend",o,h),h.send(null==r?null:r),o},abort:function(){return h.abort(),o},on:function(){var n=l.on.apply(l,arguments);return n===l?o:n}},null!=e){if("function"!=typeof e)throw new Error("invalid callback: "+e);return o.get(e)}return o},x=function(n,e){return function(r,t){var o=w(r).mimeType(n).response(e);if(null!=t){if("function"!=typeof t)throw new Error("invalid callback: "+t);return o.get(t)}return o}},T=x("text/html",function(n){return document.createRange().createContextualFragment(n.responseText)}),b=x("application/json",function(n){return JSON.parse(n.responseText)}),j=x("text/plain",function(n){return n.responseText}),k=x("application/xml",function(n){var e=n.responseXML;if(!e)throw new Error("parse error");return e}),A=function(n){function e(n,e){var t,o,u=r(n,function(n,r){return t?t(n,r-1):(o=n,void(t=e?h(n,e):p(n)))});return u.columns=o,u}function r(n,e){function r(){if(f>=l)return i;if(o)return o=!1,u;var e,r=f;if(34===n.charCodeAt(r)){for(var t=r;t++<l;)if(34===n.charCodeAt(t)){if(34!==n.charCodeAt(t+1))break;++t}return f=t+2,e=n.charCodeAt(t+1),13===e?(o=!0,10===n.charCodeAt(t+2)&&++f):10===e&&(o=!0),n.slice(r+1,t).replace(/""/g,'"')}for(;l>f;){var a=1;if(e=n.charCodeAt(f++),10===e)o=!0;else if(13===e)o=!0,10===n.charCodeAt(f)&&(++f,++a);else if(e!==s)continue;return n.slice(r,f-a)}return n.slice(r)}for(var t,o,u={},i={},a=[],l=n.length,f=0,c=0;(t=r())!==i;){for(var p=[];t!==u&&t!==i;)p.push(t),t=r();e&&null==(p=e(p,c++))||a.push(p)}return a}function t(e,r){return null==r&&(r=v(e)),[r.map(i).join(n)].concat(e.map(function(e){return r.map(function(n){return i(e[n])}).join(n)})).join("\n")}function o(n){return n.map(u).join("\n")}function u(e){return e.map(i).join(n)}function i(n){return null==n?"":a.test(n+="")?'"'+n.replace(/\"/g,'""')+'"':n}var a=new RegExp('["'+n+"\n\r]"),s=n.charCodeAt(0);return{parse:e,parseRows:r,format:t,formatRows:o}},C=A(","),E=C.parse,R=A("	"),O=R.parse,_=function(n,e){return function(r,t,o){arguments.length<3&&(o=t,t=null);var u=w(r).mimeType(n);return u.row=function(n){return arguments.length?u.response(d(e,t=n)):t},u.row(t),o?u.get(o):u}},q=_("text/csv",E),M=_("text/tab-separated-values",O);n.request=w,n.html=T,n.json=b,n.text=j,n.xml=k,n.csv=q,n.tsv=M,Object.defineProperty(n,"__esModule",{value:!0})});