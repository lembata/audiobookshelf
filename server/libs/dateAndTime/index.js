/*
 date-and-time (c) KNOWLEDGECODE | MIT
*/
'use strict';(function(p,m){"object"===typeof exports&&"undefined"!==typeof module?module.exports=m():"function"===typeof define&&define.amd?define(m):(p="undefined"!==typeof globalThis?globalThis:p||self,p.date=m())})(this,function(){var p={},m={},r="en",t={MMMM:"January February March April May June July August September October November December".split(" "),MMM:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),dddd:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
ddd:"Sun Mon Tue Wed Thu Fri Sat".split(" "),dd:"Su Mo Tu We Th Fr Sa".split(" "),A:["AM","PM"]},w={YYYY:function(a){return("000"+a.getFullYear()).slice(-4)},YY:function(a){return("0"+a.getFullYear()).slice(-2)},Y:function(a){return""+a.getFullYear()},MMMM:function(a){return this.res.MMMM[a.getMonth()]},MMM:function(a){return this.res.MMM[a.getMonth()]},MM:function(a){return("0"+(a.getMonth()+1)).slice(-2)},M:function(a){return""+(a.getMonth()+1)},DD:function(a){return("0"+a.getDate()).slice(-2)},
D:function(a){return""+a.getDate()},HH:function(a){return("0"+a.getHours()).slice(-2)},H:function(a){return""+a.getHours()},A:function(a){return this.res.A[11<a.getHours()|0]},hh:function(a){return("0"+(a.getHours()%12||12)).slice(-2)},h:function(a){return""+(a.getHours()%12||12)},mm:function(a){return("0"+a.getMinutes()).slice(-2)},m:function(a){return""+a.getMinutes()},ss:function(a){return("0"+a.getSeconds()).slice(-2)},s:function(a){return""+a.getSeconds()},SSS:function(a){return("00"+a.getMilliseconds()).slice(-3)},
SS:function(a){return("0"+(a.getMilliseconds()/10|0)).slice(-2)},S:function(a){return""+(a.getMilliseconds()/100|0)},dddd:function(a){return this.res.dddd[a.getDay()]},ddd:function(a){return this.res.ddd[a.getDay()]},dd:function(a){return this.res.dd[a.getDay()]},Z:function(a){a=a.getTimezoneOffset()/.6|0;return(0<a?"-":"+")+("000"+Math.abs(a-(a%100*.4|0))).slice(-4)},ZZ:function(a){a=a.getTimezoneOffset();var b=Math.abs(a);return(0<a?"-":"+")+("0"+(b/60|0)).slice(-2)+":"+("0"+b%60).slice(-2)},post:function(a){return a},
res:t},x={YYYY:function(a){return this.exec(/^\d{4}/,a)},Y:function(a){return this.exec(/^\d{1,4}/,a)},MMMM:function(a){a=this.find(this.res.MMMM,a);a.value++;return a},MMM:function(a){a=this.find(this.res.MMM,a);a.value++;return a},MM:function(a){return this.exec(/^\d\d/,a)},M:function(a){return this.exec(/^\d\d?/,a)},DD:function(a){return this.exec(/^\d\d/,a)},D:function(a){return this.exec(/^\d\d?/,a)},HH:function(a){return this.exec(/^\d\d/,a)},H:function(a){return this.exec(/^\d\d?/,a)},A:function(a){return this.find(this.res.A,
a)},hh:function(a){return this.exec(/^\d\d/,a)},h:function(a){return this.exec(/^\d\d?/,a)},mm:function(a){return this.exec(/^\d\d/,a)},m:function(a){return this.exec(/^\d\d?/,a)},ss:function(a){return this.exec(/^\d\d/,a)},s:function(a){return this.exec(/^\d\d?/,a)},SSS:function(a){return this.exec(/^\d{1,3}/,a)},SS:function(a){a=this.exec(/^\d\d?/,a);a.value*=10;return a},S:function(a){a=this.exec(/^\d/,a);a.value*=100;return a},Z:function(a){a=this.exec(/^[\+-]\d{2}[0-5]\d/,a);a.value=-60*(a.value/
100|0)-a.value%100;return a},ZZ:function(a){a=/^([\+-])(\d{2}):([0-5]\d)/.exec(a)||["","","",""];return{value:-(60*(a[1]+a[2]|0)+(a[1]+a[3]|0)),length:a[0].length}},h12:function(a,b){return(12===a?0:a)+12*b},exec:function(a,b){a=(a.exec(b)||[""])[0];return{value:a|0,length:a.length}},find:function(a,b){for(var d=-1,c=0,h=0,g=a.length,l;h<g;h++)l=a[h],!b.indexOf(l)&&l.length>c&&(d=h,c=l.length);return{value:d,length:c}},pre:function(a){return a},res:t},n=function(a,b,d,c){var h={},g;for(g in a)h[g]=
a[g];for(g in b||{})!!d^!!h[g]||(h[g]=b[g]);c&&(h.res=c);return h},f={_formatter:w,_parser:x};f.compile=function(a){for(var b=/\[([^\[\]]|\[[^\[\]]*])*]|([A-Za-z])\2+|\.{3}|./g,d,c=[a];d=b.exec(a);)c[c.length]=d[0];return c};f.format=function(a,b,d){var c=this||e;b="string"===typeof b?c.compile(b):b;var h=a.getTimezoneOffset();a=c.addMinutes(a,d?h:0);c=c._formatter;var g="";a.getTimezoneOffset=function(){return d?0:h};for(var l=1,u=b.length,k;l<u;l++)k=b[l],g+=c[k]?c.post(c[k](a,b[0])):k.replace(/\[(.*)]/,
"$1");return g};f.preparse=function(a,b){var d=this||e;b="string"===typeof b?d.compile(b):b;var c={Y:1970,M:1,D:1,H:0,A:0,h:0,m:0,s:0,S:0,Z:0,_index:0,_length:0,_match:0},h=/\[(.*)]/;d=d._parser;var g=0;a=d.pre(a);for(var l=1,u=b.length,k,q;l<u;l++)if(k=b[l],d[k]){q=d[k](a.slice(g),b[0]);if(!q.length)break;g+=q.length;c[q.token||k.charAt(0)]=q.value;c._match++}else if(k===a.charAt(g)||" "===k)g++;else if(h.test(k)&&!a.slice(g).indexOf(h.exec(k)[1]))g+=k.length-2;else{"..."===k&&(g=a.length);break}c.H=
c.H||d.h12(c.h,c.A);c._index=g;c._length=a.length;return c};f.parse=function(a,b,d){var c=this||e;b="string"===typeof b?c.compile(b):b;a=c.preparse(a,b);return c.isValid(a)?(a.M-=100>a.Y?22801:1,d||~c._parser.find(b,"ZZ").value?new Date(Date.UTC(a.Y,a.M,a.D,a.H,a.m+a.Z,a.s,a.S)):new Date(a.Y,a.M,a.D,a.H,a.m,a.s,a.S)):new Date(NaN)};f.isValid=function(a,b){var d=this||e;a="string"===typeof a?d.preparse(a,b):a;d=[31,28+d.isLeapYear(a.Y)|0,31,30,31,30,31,31,30,31,30,31][a.M-1];return!(1>a._index||1>
a._length||a._index-a._length||1>a._match||1>a.Y||9999<a.Y||1>a.M||12<a.M||1>a.D||a.D>d||0>a.H||23<a.H||0>a.m||59<a.m||0>a.s||59<a.s||0>a.S||999<a.S||-840>a.Z||720<a.Z)};f.transform=function(a,b,d,c){let h=this||e;return h.format(h.parse(a,b),d,c)};f.addYears=function(a,b){return(this||e).addMonths(a,12*b)};f.addMonths=function(a,b){a=new Date(a.getTime());a.setMonth(a.getMonth()+b);return a};f.addDays=function(a,b){a=new Date(a.getTime());a.setDate(a.getDate()+b);return a};f.addHours=function(a,
b){return(this||e).addMinutes(a,60*b)};f.addMinutes=function(a,b){return(this||e).addSeconds(a,60*b)};f.addSeconds=function(a,b){return(this||e).addMilliseconds(a,1E3*b)};f.addMilliseconds=function(a,b){return new Date(a.getTime()+b)};f.subtract=function(a,b){var d=a.getTime()-b.getTime();return{toMilliseconds:function(){return d},toSeconds:function(){return d/1E3},toMinutes:function(){return d/6E4},toHours:function(){return d/36E5},toDays:function(){return d/864E5}}};f.isLeapYear=function(a){return!(a%
4)&&!!(a%100)||!(a%400)};f.isSameDay=function(a,b){return a.toDateString()===b.toDateString()};f.locale=function(a,b){p[a]||(p[a]=b)};f.plugin=function(a,b){m[a]||(m[a]=b)};var v=n(f);var e=n(f);e.locale=function(a){a="function"===typeof a?a:e.locale[a];if(!a)return r;r=a(f);var b=p[r]||{},d=n(t,b.res,!0);a=n(w,b.formatter,!0,d);b=n(x,b.parser,!0,d);e._formatter=v._formatter=a;e._parser=v._parser=b;for(var c in m)e.extend(m[c]);return r};e.extend=function(a){var b=n(e._parser.res,a.res),d=a.extender||
{};e._formatter=n(e._formatter,a.formatter,!1,b);e._parser=n(e._parser,a.parser,!1,b);for(var c in d)e[c]||(e[c]=d[c])};e.plugin=function(a){(a="function"===typeof a?a:e.plugin[a])&&e.extend(m[a(f,v)]||{})};return e})