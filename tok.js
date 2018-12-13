define("aurelia-fetch-client",["aurelia-fetch-client/aurelia-fetch-client"],function(e){return e}),function(e,t){"use strict";"object"==typeof module&&module.exports?module.exports=t(require("./punycode"),require("./IPv6"),require("./SecondLevelDomains")):"function"==typeof define&&define.amd?define("urijs/src/URI",["./punycode","./IPv6","./SecondLevelDomains"],t):e.URI=t(e.punycode,e.IPv6,e.SecondLevelDomains,e)}(this,function(e,t,n,i){"use strict";function r(e,t){var n=arguments.length>=1,i=arguments.length>=2;if(!(this instanceof r))return n?i?new r(e,t):new r(e):new r;if(void 0===e){if(n)throw new TypeError("undefined is not a valid argument for URI");e="undefined"!=typeof location?location.href+"":""}if(null===e&&n)throw new TypeError("null is not a valid argument for URI");return this.href(e),void 0!==t?this.absoluteTo(t):this}function o(e){return e.replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")}function a(e){return void 0===e?"Undefined":String(Object.prototype.toString.call(e)).slice(8,-1)}function s(e){return"Array"===a(e)}function c(e,t){var n,i,r={};if("RegExp"===a(t))r=null;else if(s(t))for(n=0,i=t.length;n<i;n++)r[t[n]]=!0;else r[t]=!0;for(n=0,i=e.length;n<i;n++){(r&&void 0!==r[e[n]]||!r&&t.test(e[n]))&&(e.splice(n,1),i--,n--)}return e}function l(e,t){var n,i;if(s(t)){for(n=0,i=t.length;n<i;n++)if(!l(e,t[n]))return!1;return!0}var r=a(t);for(n=0,i=e.length;n<i;n++)if("RegExp"===r){if("string"==typeof e[n]&&e[n].match(t))return!0}else if(e[n]===t)return!0;return!1}function u(e,t){if(!s(e)||!s(t))return!1;if(e.length!==t.length)return!1;e.sort(),t.sort();for(var n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function p(e){var t=/^\/+|\/+$/g;return e.replace(t,"")}function d(e){return escape(e)}function h(e){return encodeURIComponent(e).replace(/[!'()*]/g,d).replace(/\*/g,"%2A")}function f(e){return function(t,n){return void 0===t?this._parts[e]||"":(this._parts[e]=t||null,this.build(!n),this)}}function b(e,t){return function(n,i){return void 0===n?this._parts[e]||"":(null!==n&&(n+="",n.charAt(0)===t&&(n=n.substring(1))),this._parts[e]=n,this.build(!i),this)}}var g=i&&i.URI;r.version="1.18.10";var m=r.prototype,v=Object.prototype.hasOwnProperty;r._parts=function(){return{protocol:null,username:null,password:null,hostname:null,urn:null,port:null,path:null,query:null,fragment:null,duplicateQueryParameters:r.duplicateQueryParameters,escapeQuerySpace:r.escapeQuerySpace}},r.duplicateQueryParameters=!1,r.escapeQuerySpace=!0,r.protocol_expression=/^[a-z][a-z0-9.+-]*$/i,r.idn_expression=/[^a-z0-9\.-]/i,r.punycode_expression=/(xn--)/i,r.ip4_expression=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,r.ip6_expression=/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,r.find_uri_expression=/\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/gi,r.findUri={start:/\b(?:([a-z][a-z0-9.+-]*:\/\/)|www\.)/gi,end:/[\s\r\n]|$/,trim:/[`!()\[\]{};:'".,<>?«»“”„‘’]+$/,parens:/(\([^\)]*\)|\[[^\]]*\]|\{[^}]*\}|<[^>]*>)/g},r.defaultPorts={http:"80",https:"443",ftp:"21",gopher:"70",ws:"80",wss:"443"},r.invalid_hostname_characters=/[^a-zA-Z0-9\.-]/,r.domAttributes={a:"href",blockquote:"cite",link:"href",base:"href",script:"src",form:"action",img:"src",area:"href",iframe:"src",embed:"src",source:"src",track:"src",input:"src",audio:"src",video:"src"},r.getDomAttribute=function(e){if(e&&e.nodeName){var t=e.nodeName.toLowerCase();if("input"!==t||"image"===e.type)return r.domAttributes[t]}},r.encode=h,r.decode=decodeURIComponent,r.iso8859=function(){r.encode=escape,r.decode=unescape},r.unicode=function(){r.encode=h,r.decode=decodeURIComponent},r.characters={pathname:{encode:{expression:/%(24|26|2B|2C|3B|3D|3A|40)/gi,map:{"%24":"$","%26":"&","%2B":"+","%2C":",","%3B":";","%3D":"=","%3A":":","%40":"@"}},decode:{expression:/[\/\?#]/g,map:{"/":"%2F","?":"%3F","#":"%23"}}},reserved:{encode:{expression:/%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/gi,map:{"%3A":":","%2F":"/","%3F":"?","%23":"#","%5B":"[","%5D":"]","%40":"@","%21":"!","%24":"$","%26":"&","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";","%3D":"="}}},urnpath:{encode:{expression:/%(21|24|27|28|29|2A|2B|2C|3B|3D|40)/gi,map:{"%21":"!","%24":"$","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";","%3D":"=","%40":"@"}},decode:{expression:/[\/\?#:]/g,map:{"/":"%2F","?":"%3F","#":"%23",":":"%3A"}}}},r.encodeQuery=function(e,t){var n=r.encode(e+"");return void 0===t&&(t=r.escapeQuerySpace),t?n.replace(/%20/g,"+"):n},r.decodeQuery=function(e,t){e+="",void 0===t&&(t=r.escapeQuerySpace);try{return r.decode(t?e.replace(/\+/g,"%20"):e)}catch(t){return e}};var y,M={encode:"encode",decode:"decode"},A=function(e,t){return function(n){try{return r[t](n+"").replace(r.characters[e][t].expression,function(n){return r.characters[e][t].map[n]})}catch(e){return n}}};for(y in M)r[y+"PathSegment"]=A("pathname",M[y]),r[y+"UrnPathSegment"]=A("urnpath",M[y]);var w=function(e,t,n){return function(i){var o;o=n?function(e){return r[t](r[n](e))}:r[t];for(var a=(i+"").split(e),s=0,c=a.length;s<c;s++)a[s]=o(a[s]);return a.join(e)}};r.decodePath=w("/","decodePathSegment"),r.decodeUrnPath=w(":","decodeUrnPathSegment"),r.recodePath=w("/","encodePathSegment","decode"),r.recodeUrnPath=w(":","encodeUrnPathSegment","decode"),r.encodeReserved=A("reserved","encode"),r.parse=function(e,t){var n;return t||(t={}),n=e.indexOf("#"),n>-1&&(t.fragment=e.substring(n+1)||null,e=e.substring(0,n)),n=e.indexOf("?"),n>-1&&(t.query=e.substring(n+1)||null,e=e.substring(0,n)),"//"===e.substring(0,2)?(t.protocol=null,e=e.substring(2),e=r.parseAuthority(e,t)):(n=e.indexOf(":"))>-1&&(t.protocol=e.substring(0,n)||null,t.protocol&&!t.protocol.match(r.protocol_expression)?t.protocol=void 0:"//"===e.substring(n+1,n+3)?(e=e.substring(n+3),e=r.parseAuthority(e,t)):(e=e.substring(n+1),t.urn=!0)),t.path=e,t},r.parseHost=function(e,t){e=e.replace(/\\/g,"/");var n,i,r=e.indexOf("/");if(-1===r&&(r=e.length),"["===e.charAt(0))n=e.indexOf("]"),t.hostname=e.substring(1,n)||null,t.port=e.substring(n+2,r)||null,"/"===t.port&&(t.port=null);else{var o=e.indexOf(":"),a=e.indexOf("/"),s=e.indexOf(":",o+1);-1!==s&&(-1===a||s<a)?(t.hostname=e.substring(0,r)||null,t.port=null):(i=e.substring(0,r).split(":"),t.hostname=i[0]||null,t.port=i[1]||null)}return t.hostname&&"/"!==e.substring(r).charAt(0)&&(r++,e="/"+e),e.substring(r)||"/"},r.parseAuthority=function(e,t){return e=r.parseUserinfo(e,t),r.parseHost(e,t)},r.parseUserinfo=function(e,t){var n,i=e.indexOf("/"),o=e.lastIndexOf("@",i>-1?i:e.length-1);return o>-1&&(-1===i||o<i)?(n=e.substring(0,o).split(":"),t.username=n[0]?r.decode(n[0]):null,n.shift(),t.password=n[0]?r.decode(n.join(":")):null,e=e.substring(o+1)):(t.username=null,t.password=null),e},r.parseQuery=function(e,t){if(!e)return{};if(!(e=e.replace(/&+/g,"&").replace(/^\?*&*|&+$/g,"")))return{};for(var n,i,o,a={},s=e.split("&"),c=s.length,l=0;l<c;l++)n=s[l].split("="),i=r.decodeQuery(n.shift(),t),o=n.length?r.decodeQuery(n.join("="),t):null,v.call(a,i)?("string"!=typeof a[i]&&null!==a[i]||(a[i]=[a[i]]),a[i].push(o)):a[i]=o;return a},r.build=function(e){var t="";return e.protocol&&(t+=e.protocol+":"),e.urn||!t&&!e.hostname||(t+="//"),t+=r.buildAuthority(e)||"","string"==typeof e.path&&("/"!==e.path.charAt(0)&&"string"==typeof e.hostname&&(t+="/"),t+=e.path),"string"==typeof e.query&&e.query&&(t+="?"+e.query),"string"==typeof e.fragment&&e.fragment&&(t+="#"+e.fragment),t},r.buildHost=function(e){var t="";return e.hostname?(r.ip6_expression.test(e.hostname)?t+="["+e.hostname+"]":t+=e.hostname,e.port&&(t+=":"+e.port),t):""},r.buildAuthority=function(e){return r.buildUserinfo(e)+r.buildHost(e)},r.buildUserinfo=function(e){var t="";return e.username&&(t+=r.encode(e.username)),e.password&&(t+=":"+r.encode(e.password)),t&&(t+="@"),t},r.buildQuery=function(e,t,n){var i,o,a,c,l="";for(o in e)if(v.call(e,o)&&o)if(s(e[o]))for(i={},a=0,c=e[o].length;a<c;a++)void 0!==e[o][a]&&void 0===i[e[o][a]+""]&&(l+="&"+r.buildQueryParameter(o,e[o][a],n),!0!==t&&(i[e[o][a]+""]=!0));else void 0!==e[o]&&(l+="&"+r.buildQueryParameter(o,e[o],n));return l.substring(1)},r.buildQueryParameter=function(e,t,n){return r.encodeQuery(e,n)+(null!==t?"="+r.encodeQuery(t,n):"")},r.addQuery=function(e,t,n){if("object"==typeof t)for(var i in t)v.call(t,i)&&r.addQuery(e,i,t[i]);else{if("string"!=typeof t)throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");if(void 0===e[t])return void(e[t]=n);"string"==typeof e[t]&&(e[t]=[e[t]]),s(n)||(n=[n]),e[t]=(e[t]||[]).concat(n)}},r.removeQuery=function(e,t,n){var i,o,l;if(s(t))for(i=0,o=t.length;i<o;i++)e[t[i]]=void 0;else if("RegExp"===a(t))for(l in e)t.test(l)&&(e[l]=void 0);else if("object"==typeof t)for(l in t)v.call(t,l)&&r.removeQuery(e,l,t[l]);else{if("string"!=typeof t)throw new TypeError("URI.removeQuery() accepts an object, string, RegExp as the first parameter");void 0!==n?"RegExp"===a(n)?!s(e[t])&&n.test(e[t])?e[t]=void 0:e[t]=c(e[t],n):e[t]!==String(n)||s(n)&&1!==n.length?s(e[t])&&(e[t]=c(e[t],n)):e[t]=void 0:e[t]=void 0}},r.hasQuery=function(e,t,n,i){switch(a(t)){case"String":break;case"RegExp":for(var o in e)if(v.call(e,o)&&t.test(o)&&(void 0===n||r.hasQuery(e,o,n)))return!0;return!1;case"Object":for(var c in t)if(v.call(t,c)&&!r.hasQuery(e,c,t[c]))return!1;return!0;default:throw new TypeError("URI.hasQuery() accepts a string, regular expression or object as the name parameter")}switch(a(n)){case"Undefined":return t in e;case"Boolean":return n===Boolean(s(e[t])?e[t].length:e[t]);case"Function":return!!n(e[t],t,e);case"Array":if(!s(e[t]))return!1;return(i?l:u)(e[t],n);case"RegExp":return s(e[t])?!!i&&l(e[t],n):Boolean(e[t]&&e[t].match(n));case"Number":n=String(n);case"String":return s(e[t])?!!i&&l(e[t],n):e[t]===n;default:throw new TypeError("URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter")}},r.joinPaths=function(){for(var e=[],t=[],n=0,i=0;i<arguments.length;i++){var o=new r(arguments[i]);e.push(o);for(var a=o.segment(),s=0;s<a.length;s++)"string"==typeof a[s]&&t.push(a[s]),a[s]&&n++}if(!t.length||!n)return new r("");var c=new r("").segment(t);return""!==e[0].path()&&"/"!==e[0].path().slice(0,1)||c.path("/"+c.path()),c.normalize()},r.commonPath=function(e,t){var n,i=Math.min(e.length,t.length);for(n=0;n<i;n++)if(e.charAt(n)!==t.charAt(n)){n--;break}return n<1?e.charAt(0)===t.charAt(0)&&"/"===e.charAt(0)?"/":"":("/"===e.charAt(n)&&"/"===t.charAt(n)||(n=e.substring(0,n).lastIndexOf("/")),e.substring(0,n+1))},r.withinString=function(e,t,n){n||(n={});var i=n.start||r.findUri.start,o=n.end||r.findUri.end,a=n.trim||r.findUri.trim,s=n.parens||r.findUri.parens,c=/[a-z0-9-]=["']?$/i;for(i.lastIndex=0;;){var l=i.exec(e);if(!l)break;var u=l.index;if(n.ignoreHtml){var p=e.slice(Math.max(u-3,0),u);if(p&&c.test(p))continue}for(var d=u+e.slice(u).search(o),h=e.slice(u,d),f=-1;;){var b=s.exec(h);if(!b)break;var g=b.index+b[0].length;f=Math.max(f,g)}if(h=f>-1?h.slice(0,f)+h.slice(f).replace(a,""):h.replace(a,""),!(h.length<=l[0].length||n.ignore&&n.ignore.test(h))){d=u+h.length;var m=t(h,u,d,e);void 0!==m?(m=String(m),e=e.slice(0,u)+m+e.slice(d),i.lastIndex=u+m.length):i.lastIndex=d}}return i.lastIndex=0,e},r.ensureValidHostname=function(t){if(t.match(r.invalid_hostname_characters)){if(!e)throw new TypeError('Hostname "'+t+'" contains characters other than [A-Z0-9.-] and Punycode.js is not available');if(e.toASCII(t).match(r.invalid_hostname_characters))throw new TypeError('Hostname "'+t+'" contains characters other than [A-Z0-9.-]')}},r.noConflict=function(e){if(e){var t={URI:this.noConflict()};return i.URITemplate&&"function"==typeof i.URITemplate.noConflict&&(t.URITemplate=i.URITemplate.noConflict()),i.IPv6&&"function"==typeof i.IPv6.noConflict&&(t.IPv6=i.IPv6.noConflict()),i.SecondLevelDomains&&"function"==typeof i.SecondLevelDomains.noConflict&&(t.SecondLevelDomains=i.SecondLevelDomains.noConflict()),t}return i.URI===this&&(i.URI=g),this},m.build=function(e){return!0===e?this._deferred_build=!0:(void 0===e||this._deferred_build)&&(this._string=r.build(this._parts),this._deferred_build=!1),this},m.clone=function(){return new r(this)},m.valueOf=m.toString=function(){return this.build(!1)._string},m.protocol=f("protocol"),m.username=f("username"),m.password=f("password"),m.hostname=f("hostname"),m.port=f("port"),m.query=b("query","?"),m.fragment=b("fragment","#"),m.search=function(e,t){var n=this.query(e,t);return"string"==typeof n&&n.length?"?"+n:n},m.hash=function(e,t){var n=this.fragment(e,t);return"string"==typeof n&&n.length?"#"+n:n},m.pathname=function(e,t){if(void 0===e||!0===e){var n=this._parts.path||(this._parts.hostname?"/":"");return e?(this._parts.urn?r.decodeUrnPath:r.decodePath)(n):n}return this._parts.urn?this._parts.path=e?r.recodeUrnPath(e):"":this._parts.path=e?r.recodePath(e):"/",this.build(!t),this},m.path=m.pathname,m.href=function(e,t){var n;if(void 0===e)return this.toString();this._string="",this._parts=r._parts();var i=e instanceof r,o="object"==typeof e&&(e.hostname||e.path||e.pathname);if(e.nodeName){e=e[r.getDomAttribute(e)]||"",o=!1}if(!i&&o&&void 0!==e.pathname&&(e=e.toString()),"string"==typeof e||e instanceof String)this._parts=r.parse(String(e),this._parts);else{if(!i&&!o)throw new TypeError("invalid input");var a=i?e._parts:e;for(n in a)v.call(this._parts,n)&&(this._parts[n]=a[n])}return this.build(!t),this},m.is=function(e){var t=!1,i=!1,o=!1,a=!1,s=!1,c=!1,l=!1,u=!this._parts.urn;switch(this._parts.hostname&&(u=!1,i=r.ip4_expression.test(this._parts.hostname),o=r.ip6_expression.test(this._parts.hostname),t=i||o,a=!t,s=a&&n&&n.has(this._parts.hostname),c=a&&r.idn_expression.test(this._parts.hostname),l=a&&r.punycode_expression.test(this._parts.hostname)),e.toLowerCase()){case"relative":return u;case"absolute":return!u;case"domain":case"name":return a;case"sld":return s;case"ip":return t;case"ip4":case"ipv4":case"inet4":return i;case"ip6":case"ipv6":case"inet6":return o;case"idn":return c;case"url":return!this._parts.urn;case"urn":return!!this._parts.urn;case"punycode":return l}return null};var x=m.protocol,z=m.port,O=m.hostname;m.protocol=function(e,t){if(void 0!==e&&e&&(e=e.replace(/:(\/\/)?$/,""),!e.match(r.protocol_expression)))throw new TypeError('Protocol "'+e+"\" contains characters other than [A-Z0-9.+-] or doesn't start with [A-Z]");return x.call(this,e,t)},m.scheme=m.protocol,m.port=function(e,t){if(this._parts.urn)return void 0===e?"":this;if(void 0!==e&&(0===e&&(e=null),e&&(e+="",":"===e.charAt(0)&&(e=e.substring(1)),e.match(/[^0-9]/))))throw new TypeError('Port "'+e+'" contains characters other than [0-9]');return z.call(this,e,t)},m.hostname=function(e,t){if(this._parts.urn)return void 0===e?"":this;if(void 0!==e){var n={};if("/"!==r.parseHost(e,n))throw new TypeError('Hostname "'+e+'" contains characters other than [A-Z0-9.-]');e=n.hostname}return O.call(this,e,t)},m.origin=function(e,t){if(this._parts.urn)return void 0===e?"":this;if(void 0===e){var n=this.protocol();return this.authority()?(n?n+"://":"")+this.authority():""}var i=r(e);return this.protocol(i.protocol()).authority(i.authority()).build(!t),this},m.host=function(e,t){if(this._parts.urn)return void 0===e?"":this;if(void 0===e)return this._parts.hostname?r.buildHost(this._parts):"";if("/"!==r.parseHost(e,this._parts))throw new TypeError('Hostname "'+e+'" contains characters other than [A-Z0-9.-]');return this.build(!t),this},m.authority=function(e,t){if(this._parts.urn)return void 0===e?"":this;if(void 0===e)return this._parts.hostname?r.buildAuthority(this._parts):"";if("/"!==r.parseAuthority(e,this._parts))throw new TypeError('Hostname "'+e+'" contains characters other than [A-Z0-9.-]');return this.build(!t),this},m.userinfo=function(e,t){if(this._parts.urn)return void 0===e?"":this;if(void 0===e){var n=r.buildUserinfo(this._parts);return n?n.substring(0,n.length-1):n}return"@"!==e[e.length-1]&&(e+="@"),r.parseUserinfo(e,this._parts),this.build(!t),this},m.resource=function(e,t){var n;return void 0===e?this.path()+this.search()+this.hash():(n=r.parse(e),this._parts.path=n.path,this._parts.query=n.query,this._parts.fragment=n.fragment,this.build(!t),this)},m.subdomain=function(e,t){if(this._parts.urn)return void 0===e?"":this;if(void 0===e){if(!this._parts.hostname||this.is("IP"))return"";var n=this._parts.hostname.length-this.domain().length-1;return this._parts.hostname.substring(0,n)||""}var i=this._parts.hostname.length-this.domain().length,a=this._parts.hostname.substring(0,i),s=new RegExp("^"+o(a));return e&&"."!==e.charAt(e.length-1)&&(e+="."),e&&r.ensureValidHostname(e),this._parts.hostname=this._parts.hostname.replace(s,e),this.build(!t),this},m.domain=function(e,t){if(this._parts.urn)return void 0===e?"":this;if("boolean"==typeof e&&(t=e,e=void 0),void 0===e){if(!this._parts.hostname||this.is("IP"))return"";var n=this._parts.hostname.match(/\./g);if(n&&n.length<2)return this._parts.hostname;var i=this._parts.hostname.length-this.tld(t).length-1;return i=this._parts.hostname.lastIndexOf(".",i-1)+1,this._parts.hostname.substring(i)||""}if(!e)throw new TypeError("cannot set domain empty");if(r.ensureValidHostname(e),!this._parts.hostname||this.is("IP"))this._parts.hostname=e;else{var a=new RegExp(o(this.domain())+"$");this._parts.hostname=this._parts.hostname.replace(a,e)}return this.build(!t),this},m.tld=function(e,t){if(this._parts.urn)return void 0===e?"":this;if("boolean"==typeof e&&(t=e,e=void 0),void 0===e){if(!this._parts.hostname||this.is("IP"))return"";var i=this._parts.hostname.lastIndexOf("."),r=this._parts.hostname.substring(i+1);return!0!==t&&n&&n.list[r.toLowerCase()]?n.get(this._parts.hostname)||r:r}var a;if(!e)throw new TypeError("cannot set TLD empty");if(e.match(/[^a-zA-Z0-9-]/)){if(!n||!n.is(e))throw new TypeError('TLD "'+e+'" contains characters other than [A-Z0-9]');a=new RegExp(o(this.tld())+"$"),this._parts.hostname=this._parts.hostname.replace(a,e)}else{if(!this._parts.hostname||this.is("IP"))throw new ReferenceError("cannot set TLD on non-domain host");a=new RegExp(o(this.tld())+"$"),this._parts.hostname=this._parts.hostname.replace(a,e)}return this.build(!t),this},m.directory=function(e,t){if(this._parts.urn)return void 0===e?"":this;if(void 0===e||!0===e){if(!this._parts.path&&!this._parts.hostname)return"";if("/"===this._parts.path)return"/";var n=this._parts.path.length-this.filename().length-1,i=this._parts.path.substring(0,n)||(this._parts.hostname?"/":"");return e?r.decodePath(i):i}var a=this._parts.path.length-this.filename().length,s=this._parts.path.substring(0,a),c=new RegExp("^"+o(s));return this.is("relative")||(e||(e="/"),"/"!==e.charAt(0)&&(e="/"+e)),e&&"/"!==e.charAt(e.length-1)&&(e+="/"),e=r.recodePath(e),this._parts.path=this._parts.path.replace(c,e),this.build(!t),this},m.filename=function(e,t){if(this._parts.urn)return void 0===e?"":this;if("string"!=typeof e){if(!this._parts.path||"/"===this._parts.path)return"";var n=this._parts.path.lastIndexOf("/"),i=this._parts.path.substring(n+1);return e?r.decodePathSegment(i):i}var a=!1;"/"===e.charAt(0)&&(e=e.substring(1)),e.match(/\.?\//)&&(a=!0);var s=new RegExp(o(this.filename())+"$");return e=r.recodePath(e),this._parts.path=this._parts.path.replace(s,e),a?this.normalizePath(t):this.build(!t),this},m.suffix=function(e,t){if(this._parts.urn)return void 0===e?"":this;if(void 0===e||!0===e){if(!this._parts.path||"/"===this._parts.path)return"";var n,i,a=this.filename(),s=a.lastIndexOf(".");return-1===s?"":(n=a.substring(s+1),i=/^[a-z0-9%]+$/i.test(n)?n:"",e?r.decodePathSegment(i):i)}"."===e.charAt(0)&&(e=e.substring(1));var c,l=this.suffix();if(l)c=e?new RegExp(o(l)+"$"):new RegExp(o("."+l)+"$");else{if(!e)return this;this._parts.path+="."+r.recodePath(e)}return c&&(e=r.recodePath(e),this._parts.path=this._parts.path.replace(c,e)),this.build(!t),this},m.segment=function(e,t,n){var i=this._parts.urn?":":"/",r=this.path(),o="/"===r.substring(0,1),a=r.split(i);if(void 0!==e&&"number"!=typeof e&&(n=t,t=e,e=void 0),void 0!==e&&"number"!=typeof e)throw new Error('Bad segment "'+e+'", must be 0-based integer');if(o&&a.shift(),e<0&&(e=Math.max(a.length+e,0)),void 0===t)return void 0===e?a:a[e];if(null===e||void 0===a[e])if(s(t)){a=[];for(var c=0,l=t.length;c<l;c++)(t[c].length||a.length&&a[a.length-1].length)&&(a.length&&!a[a.length-1].length&&a.pop(),a.push(p(t[c])))}else(t||"string"==typeof t)&&(t=p(t),""===a[a.length-1]?a[a.length-1]=t:a.push(t));else t?a[e]=p(t):a.splice(e,1);return o&&a.unshift(""),this.path(a.join(i),n)},m.segmentCoded=function(e,t,n){var i,o,a;if("number"!=typeof e&&(n=t,t=e,e=void 0),void 0===t){if(i=this.segment(e,t,n),s(i))for(o=0,a=i.length;o<a;o++)i[o]=r.decode(i[o]);else i=void 0!==i?r.decode(i):void 0;return i}if(s(t))for(o=0,a=t.length;o<a;o++)t[o]=r.encode(t[o]);else t="string"==typeof t||t instanceof String?r.encode(t):t;return this.segment(e,t,n)};var _=m.query;return m.query=function(e,t){if(!0===e)return r.parseQuery(this._parts.query,this._parts.escapeQuerySpace);if("function"==typeof e){var n=r.parseQuery(this._parts.query,this._parts.escapeQuerySpace),i=e.call(this,n);return this._parts.query=r.buildQuery(i||n,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),this.build(!t),this}return void 0!==e&&"string"!=typeof e?(this._parts.query=r.buildQuery(e,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),this.build(!t),this):_.call(this,e,t)},m.setQuery=function(e,t,n){var i=r.parseQuery(this._parts.query,this._parts.escapeQuerySpace);if("string"==typeof e||e instanceof String)i[e]=void 0!==t?t:null;else{if("object"!=typeof e)throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");for(var o in e)v.call(e,o)&&(i[o]=e[o])}return this._parts.query=r.buildQuery(i,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),"string"!=typeof e&&(n=t),this.build(!n),this},m.addQuery=function(e,t,n){var i=r.parseQuery(this._parts.query,this._parts.escapeQuerySpace);return r.addQuery(i,e,void 0===t?null:t),this._parts.query=r.buildQuery(i,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),"string"!=typeof e&&(n=t),this.build(!n),this},m.removeQuery=function(e,t,n){var i=r.parseQuery(this._parts.query,this._parts.escapeQuerySpace);return r.removeQuery(i,e,t),this._parts.query=r.buildQuery(i,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),"string"!=typeof e&&(n=t),this.build(!n),this},m.hasQuery=function(e,t,n){var i=r.parseQuery(this._parts.query,this._parts.escapeQuerySpace);return r.hasQuery(i,e,t,n)},m.setSearch=m.setQuery,m.addSearch=m.addQuery,m.removeSearch=m.removeQuery,m.hasSearch=m.hasQuery,m.normalize=function(){return this._parts.urn?this.normalizeProtocol(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build():this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build()},m.normalizeProtocol=function(e){return"string"==typeof this._parts.protocol&&(this._parts.protocol=this._parts.protocol.toLowerCase(),this.build(!e)),this},m.normalizeHostname=function(n){return this._parts.hostname&&(this.is("IDN")&&e?this._parts.hostname=e.toASCII(this._parts.hostname):this.is("IPv6")&&t&&(this._parts.hostname=t.best(this._parts.hostname)),this._parts.hostname=this._parts.hostname.toLowerCase(),this.build(!n)),this},m.normalizePort=function(e){return"string"==typeof this._parts.protocol&&this._parts.port===r.defaultPorts[this._parts.protocol]&&(this._parts.port=null,this.build(!e)),this},m.normalizePath=function(e){var t=this._parts.path;if(!t)return this;if(this._parts.urn)return this._parts.path=r.recodeUrnPath(this._parts.path),this.build(!e),this;if("/"===this._parts.path)return this;t=r.recodePath(t);var n,i,o,a="";for("/"!==t.charAt(0)&&(n=!0,t="/"+t),"/.."!==t.slice(-3)&&"/."!==t.slice(-2)||(t+="/"),t=t.replace(/(\/(\.\/)+)|(\/\.$)/g,"/").replace(/\/{2,}/g,"/"),n&&(a=t.substring(1).match(/^(\.\.\/)+/)||"")&&(a=a[0]);;){if(-1===(i=t.search(/\/\.\.(\/|$)/)))break;0!==i?(o=t.substring(0,i).lastIndexOf("/"),-1===o&&(o=i),t=t.substring(0,o)+t.substring(i+3)):t=t.substring(3)}return n&&this.is("relative")&&(t=a+t.substring(1)),this._parts.path=t,this.build(!e),this},m.normalizePathname=m.normalizePath,m.normalizeQuery=function(e){return"string"==typeof this._parts.query&&(this._parts.query.length?this.query(r.parseQuery(this._parts.query,this._parts.escapeQuerySpace)):this._parts.query=null,this.build(!e)),this},m.normalizeFragment=function(e){return this._parts.fragment||(this._parts.fragment=null,this.build(!e)),this},m.normalizeSearch=m.normalizeQuery,m.normalizeHash=m.normalizeFragment,m.iso8859=function(){var e=r.encode,t=r.decode;r.encode=escape,r.decode=decodeURIComponent;try{this.normalize()}finally{r.encode=e,r.decode=t}return this},m.unicode=function(){var e=r.encode,t=r.decode;r.encode=h,r.decode=unescape;try{this.normalize()}finally{r.encode=e,r.decode=t}return this},m.readable=function(){var t=this.clone();t.username("").password("").normalize();var n="";if(t._parts.protocol&&(n+=t._parts.protocol+"://"),t._parts.hostname&&(t.is("punycode")&&e?(n+=e.toUnicode(t._parts.hostname),t._parts.port&&(n+=":"+t._parts.port)):n+=t.host()),t._parts.hostname&&t._parts.path&&"/"!==t._parts.path.charAt(0)&&(n+="/"),n+=t.path(!0),t._parts.query){for(var i="",o=0,a=t._parts.query.split("&"),s=a.length;o<s;o++){var c=(a[o]||"").split("=");i+="&"+r.decodeQuery(c[0],this._parts.escapeQuerySpace).replace(/&/g,"%26"),void 0!==c[1]&&(i+="="+r.decodeQuery(c[1],this._parts.escapeQuerySpace).replace(/&/g,"%26"))}n+="?"+i.substring(1)}return n+=r.decodeQuery(t.hash(),!0)},m.absoluteTo=function(e){var t,n,i,o=this.clone(),a=["protocol","username","password","hostname","port"];if(this._parts.urn)throw new Error("URNs do not have any generally defined hierarchical components");if(e instanceof r||(e=new r(e)),o._parts.protocol)return o;if(o._parts.protocol=e._parts.protocol,this._parts.hostname)return o;for(n=0;i=a[n];n++)o._parts[i]=e._parts[i];return o._parts.path?(".."===o._parts.path.substring(-2)&&(o._parts.path+="/"),"/"!==o.path().charAt(0)&&(t=e.directory(),t=t||(0===e.path().indexOf("/")?"/":""),o._parts.path=(t?t+"/":"")+o._parts.path,o.normalizePath())):(o._parts.path=e._parts.path,o._parts.query||(o._parts.query=e._parts.query)),o.build(),o},m.relativeTo=function(e){var t,n,i,o,a,s=this.clone().normalize();if(s._parts.urn)throw new Error("URNs do not have any generally defined hierarchical components");if(e=new r(e).normalize(),t=s._parts,n=e._parts,o=s.path(),a=e.path(),"/"!==o.charAt(0))throw new Error("URI is already relative");if("/"!==a.charAt(0))throw new Error("Cannot calculate a URI relative to another relative URI");if(t.protocol===n.protocol&&(t.protocol=null),t.username!==n.username||t.password!==n.password)return s.build();if(null!==t.protocol||null!==t.username||null!==t.password)return s.build();if(t.hostname!==n.hostname||t.port!==n.port)return s.build();if(t.hostname=null,t.port=null,o===a)return t.path="",s.build();if(!(i=r.commonPath(o,a)))return s.build();var c=n.path.substring(i.length).replace(/[^\/]*$/,"").replace(/.*?\//g,"../");return t.path=c+t.path.substring(i.length)||"./",s.build()},m.equals=function(e){var t,n,i,o=this.clone(),a=new r(e),c={},l={},p={};if(o.normalize(),a.normalize(),o.toString()===a.toString())return!0;if(t=o.query(),n=a.query(),o.query(""),a.query(""),o.toString()!==a.toString())return!1;if(t.length!==n.length)return!1;c=r.parseQuery(t,this._parts.escapeQuerySpace),l=r.parseQuery(n,this._parts.escapeQuerySpace);for(i in c)if(v.call(c,i)){if(s(c[i])){if(!u(c[i],l[i]))return!1}else if(c[i]!==l[i])return!1;p[i]=!0}for(i in l)if(v.call(l,i)&&!p[i])return!1;return!0},m.duplicateQueryParameters=function(e){return this._parts.duplicateQueryParameters=!!e,this},m.escapeQuerySpace=function(e){return this._parts.escapeQuerySpace=!!e,this},r}),define("urijs",["urijs/src/URI"],function(e){return e}),function(e){function t(e){throw new RangeError(T[e])}function n(e,t){for(var n=e.length,i=[];n--;)i[n]=t(e[n]);return i}function i(e,t){var i=e.split("@"),r="";return i.length>1&&(r=i[0]+"@",e=i[1]),e=e.replace(L,"."),r+n(e.split("."),t).join(".")}function r(e){for(var t,n,i=[],r=0,o=e.length;r<o;)t=e.charCodeAt(r++),t>=55296&&t<=56319&&r<o?(n=e.charCodeAt(r++),56320==(64512&n)?i.push(((1023&t)<<10)+(1023&n)+65536):(i.push(t),r--)):i.push(t);return i}function o(e){return n(e,function(e){var t="";return e>65535&&(e-=65536,t+=E(e>>>10&1023|55296),e=56320|1023&e),t+=E(e)}).join("")}function a(e){return e-48<10?e-22:e-65<26?e-65:e-97<26?e-97:y}function s(e,t){return e+22+75*(e<26)-((0!=t)<<5)}function c(e,t,n){var i=0;for(e=n?S(e/x):e>>1,e+=S(e/t);e>N*A>>1;i+=y)e=S(e/N);return S(i+(N+1)*e/(e+w))}function l(e){var n,i,r,s,l,u,p,d,h,f,b=[],g=e.length,m=0,w=O,x=z;for(i=e.lastIndexOf(_),i<0&&(i=0),r=0;r<i;++r)e.charCodeAt(r)>=128&&t("not-basic"),b.push(e.charCodeAt(r));for(s=i>0?i+1:0;s<g;){for(l=m,u=1,p=y;s>=g&&t("invalid-input"),d=a(e.charCodeAt(s++)),(d>=y||d>S((v-m)/u))&&t("overflow"),m+=d*u,h=p<=x?M:p>=x+A?A:p-x,!(d<h);p+=y)f=y-h,u>S(v/f)&&t("overflow"),u*=f;n=b.length+1,x=c(m-l,n,0==l),S(m/n)>v-w&&t("overflow"),w+=S(m/n),m%=n,b.splice(m++,0,w)}return o(b)}function u(e){var n,i,o,a,l,u,p,d,h,f,b,g,m,w,x,k=[];for(e=r(e),g=e.length,n=O,i=0,l=z,u=0;u<g;++u)(b=e[u])<128&&k.push(E(b));for(o=a=k.length,a&&k.push(_);o<g;){for(p=v,u=0;u<g;++u)(b=e[u])>=n&&b<p&&(p=b);for(m=o+1,p-n>S((v-i)/m)&&t("overflow"),i+=(p-n)*m,n=p,u=0;u<g;++u)if(b=e[u],b<n&&++i>v&&t("overflow"),b==n){for(d=i,h=y;f=h<=l?M:h>=l+A?A:h-l,!(d<f);h+=y)x=d-f,w=y-f,k.push(E(s(f+x%w,0))),d=S(x/w);k.push(E(s(d,0))),l=c(i,m,o==a),i=0,++o}++i,++n}return k.join("")}function p(e){return i(e,function(e){return k.test(e)?l(e.slice(4).toLowerCase()):e})}function d(e){return i(e,function(e){return C.test(e)?"xn--"+u(e):e})}var h="object"==typeof exports&&exports&&!exports.nodeType&&exports,f="object"==typeof module&&module&&!module.nodeType&&module,b="object"==typeof global&&global;b.global!==b&&b.window!==b&&b.self!==b||(e=b);var g,m,v=2147483647,y=36,M=1,A=26,w=38,x=700,z=72,O=128,_="-",k=/^xn--/,C=/[^\x20-\x7E]/,L=/[\x2E\u3002\uFF0E\uFF61]/g,T={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},N=y-M,S=Math.floor,E=String.fromCharCode;if(g={version:"1.3.2",ucs2:{decode:r,encode:o},decode:l,encode:u,toASCII:d,toUnicode:p},"function"==typeof define&&"object"==typeof define.amd&&define.amd)define("punycode",[],function(){return g});else if(h&&f)if(module.exports==h)f.exports=g;else for(m in g)g.hasOwnProperty(m)&&(h[m]=g[m]);else e.punycode=g}(this)