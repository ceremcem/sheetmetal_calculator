!function(e,t){"use strict";function n(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var a={callback:e,args:t};return m[g]=a,d(g),g++}function a(e){delete m[e]}function s(e){var n=e.callback,a=e.args;switch(a.length){case 0:n();break;case 1:n(a[0]);break;case 2:n(a[0],a[1]);break;case 3:n(a[0],a[1],a[2]);break;default:n.apply(t,a)}}function o(e){if(p)setTimeout(o,0,e);else{var t=m[e];if(t){p=!0;try{s(t)}finally{a(e),p=!1}}}}function c(){d=function(e){process.nextTick(function(){o(e)})}}function i(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}function r(){var t="setImmediate$"+Math.random()+"$",n=function(n){n.source===e&&"string"==typeof n.data&&0===n.data.indexOf(t)&&o(+n.data.slice(t.length))};e.addEventListener?e.addEventListener("message",n,!1):e.attachEvent("onmessage",n),d=function(n){e.postMessage(t+n,"*")}}function f(){var e=new MessageChannel;e.port1.onmessage=function(e){var t=e.data;o(t)},d=function(t){e.port2.postMessage(t)}}function u(){var e=h.documentElement;d=function(t){var n=h.createElement("script");n.onreadystatechange=function(){o(t),n.onreadystatechange=null,e.removeChild(n),n=null},e.appendChild(n)}}function l(){d=function(e){setTimeout(o,0,e)}}if(!e.setImmediate){var d,g=1,m={},p=!1,h=e.document,v=Object.getPrototypeOf&&Object.getPrototypeOf(e);v=v&&v.setTimeout?v:e,"[object process]"==={}.toString.call(e.process)?c():i()?r():e.MessageChannel?f():h&&"onreadystatechange"in h.createElement("script")?u():l(),v.setImmediate=n,v.clearImmediate=a}}("undefined"==typeof self?"undefined"==typeof global?this:global:self);
//# sourceMappingURL=setImmediate.min.js.map