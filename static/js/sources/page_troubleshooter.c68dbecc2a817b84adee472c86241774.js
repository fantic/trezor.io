$(document).ready(function(){function G(){try{var m=window.location.hash.split("#")[1]||0,C=x.querySelector("[id='"+m+"']").cloneNode(!0);$(".back-btn").hide();$(".back-btn").detach().appendTo("#scene");$(".current").remove();$("#content").append(C.content);setTimeout(function(){$("ul#content > .content-wrapper").addClass("current");$("html, body").animate({scrollTop:0},"fast");r+=" > "+$("ul#content > .content-wrapper > h4.header").html();0!==m&&setTimeout(function(){$(".back-btn").detach().appendTo(".content-wrapper > span.text");
$(".back-btn").slideDown()},900)},10)}catch(q){throw q;}}(function(){function m(c){return(c=String(c)).charAt(0).toUpperCase()+c.slice(1)}function C(c,p){var f=-1,g=c?c.length:0;if("number"==typeof g&&-1<g&&g<=r)for(;++f<g;)p(c[f],f,c);else H(c,p)}function q(c){return c=String(c).replace(/^ +| +$/g,""),/^(?:webOS|i(?:OS|P))/.test(c)?c:m(c)}function H(c,p){for(var f in c)F.call(c,f)&&p(c[f],f,c)}function y(c){return null==c?m(c):P.call(c).slice(8,-1)}function x(c,p){var f=null!=c?typeof c[p]:"number";
return!(/^(?:boolean|number|string|undefined)$/.test(f)||"object"==f&&!c[p])}function z(c){return String(c).replace(/([ -])(?!$)/g,"$1?")}function A(c,p){var f=null;return C(c,function(g,l){f=p(f,g,l,c)}),f}function I(c){function p(a){return A(a,function(a,b){var d=b.pattern||z(b);return!a&&(a=RegExp("\\b"+d+" *\\d+[.\\w_]*","i").exec(c)||RegExp("\\b"+d+" *\\w+-[\\w]*","i").exec(c)||RegExp("\\b"+d+"(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)","i").exec(c))&&((a=String(b.label&&!RegExp(d,"i").test(b.label)?
b.label:a).split("/"))[1]&&!/[\d.]+/.test(a[0])&&(a[0]+=" "+a[1]),b=b.label||b,a=q(a[0].replace(RegExp(d,"i"),b).replace(RegExp("; *(?:"+b+"[_-])?","i")," ").replace(RegExp("("+b+")[-_.]?(\\w)","i"),"$1 $2"))),a})}var f=D,g=c&&"object"==typeof c&&"String"!=y(c);g&&(f=c,c=null);var l=f.navigator||{},e=l.userAgent||"";c||(c=e);var a,m,C=g||O==G,v=g?!!l.likeChrome:/\bChrome\b/.test(c)&&!/internal|\n/i.test(P.toString()),r=g?"Object":"ScriptBridgingProxyObject",w=g?"Object":"Environment",B=g&&f.java?
"JavaPackage":y(f.java),E=g?"Object":"RuntimeObject";w=(B=/\bJava/.test(B)&&f.java)&&y(f.environment)==w;var F=B?"a":"\u03b1",R=B?"b":"\u03b2",N=f.document||{},t=f.operamini||f.opera,K=J.test(K=g&&t?t["[[Class]]"]:y(t))?K:t=null,L=c;g=[];var M=null,u=c==e;e=u&&t&&"function"==typeof t.version&&t.version();var h=function(a){return A(a,function(a,b){return a||RegExp("\\b"+(b.pattern||z(b))+"\\b","i").exec(c)&&(b.label||b)})}([{label:"EdgeHTML",pattern:"Edge"},"Trident",{label:"WebKit",pattern:"AppleWebKit"},
"iCab","Presto","NetFront","Tasman","KHTML","Gecko"]),b=function(a){return A(a,function(a,b){return a||RegExp("\\b"+(b.pattern||z(b))+"\\b","i").exec(c)&&(b.label||b)})}(["Adobe AIR","Arora","Avant Browser","Breach","Camino","Electron","Epiphany","Fennec","Flock","Galeon","GreenBrowser","iCab","Iceweasel","K-Meleon","Konqueror","Lunascape","Maxthon",{label:"Microsoft Edge",pattern:"Edge"},"Midori","Nook Browser","PaleMoon","PhantomJS","Raven","Rekonq","RockMelt",{label:"Samsung Internet",pattern:"SamsungBrowser"},
"SeaMonkey",{label:"Silk",pattern:"(?:Cloud9|Silk-Accelerated)"},"Sleipnir","SlimBrowser",{label:"SRWare Iron",pattern:"Iron"},"Sunrise","Swiftfox","Waterfox","WebPositive","Opera Mini",{label:"Opera Mini",pattern:"OPiOS"},"Opera",{label:"Opera",pattern:"OPR"},"Chrome",{label:"Chrome Mobile",pattern:"(?:CriOS|CrMo)"},{label:"Firefox",pattern:"(?:Firefox|Minefield)"},{label:"Firefox for iOS",pattern:"FxiOS"},{label:"IE",pattern:"IEMobile"},{label:"IE",pattern:"MSIE"},"Safari"]),k=p([{label:"BlackBerry",
pattern:"BB10"},"BlackBerry",{label:"Galaxy S",pattern:"GT-I9000"},{label:"Galaxy S2",pattern:"GT-I9100"},{label:"Galaxy S3",pattern:"GT-I9300"},{label:"Galaxy S4",pattern:"GT-I9500"},{label:"Galaxy S5",pattern:"SM-G900"},{label:"Galaxy S6",pattern:"SM-G920"},{label:"Galaxy S6 Edge",pattern:"SM-G925"},{label:"Galaxy S7",pattern:"SM-G930"},{label:"Galaxy S7 Edge",pattern:"SM-G935"},"Google TV","Lumia","iPad","iPod","iPhone","Kindle",{label:"Kindle Fire",pattern:"(?:Cloud9|Silk-Accelerated)"},"Nexus",
"Nook","PlayBook","PlayStation Vita","PlayStation","TouchPad","Transformer",{label:"Wii U",pattern:"WiiU"},"Wii","Xbox One",{label:"Xbox 360",pattern:"Xbox"},"Xoom"]),n=function(a){return A(a,function(a,b,d){return a||(b[k]||b[/^[a-z]+(?: +[a-z]+\b)*/i.exec(k)]||RegExp("\\b"+z(d)+"(?:\\b|\\w*\\d)","i").exec(c))&&d})}({Apple:{iPad:1,iPhone:1,iPod:1},Archos:{},Amazon:{Kindle:1,"Kindle Fire":1},Asus:{Transformer:1},"Barnes & Noble":{Nook:1},BlackBerry:{PlayBook:1},Google:{"Google TV":1,Nexus:1},HP:{TouchPad:1},
HTC:{},LG:{},Microsoft:{Xbox:1,"Xbox One":1},Motorola:{Xoom:1},Nintendo:{"Wii U":1,Wii:1},Nokia:{Lumia:1},Samsung:{"Galaxy S":1,"Galaxy S2":1,"Galaxy S3":1,"Galaxy S4":1},Sony:{PlayStation:1,"PlayStation Vita":1}}),d=function(a){return A(a,function(a,b){var d=b.pattern||z(b);if(!a&&(a=RegExp("\\b"+d+"(?:/[\\d.]+|[ \\w.]*)","i").exec(c))){var e=a;a=b.label||b;b={"10.0":"10","6.4":"10 Technical Preview","6.3":"8.1","6.2":"8","6.1":"Server 2008 R2 / 7","6.0":"Server 2008 / Vista","5.2":"Server 2003 / XP 64-bit",
"5.1":"XP","5.01":"2000 SP1","5.0":"2000","4.0":"NT","4.90":"ME"};a=(d&&a&&/^Win/i.test(e)&&!/^Windows Phone /i.test(e)&&(b=b[/[\d.]+$/.exec(e)])&&(e="Windows "+b),e=String(e),d&&a&&(e=e.replace(RegExp(d,"i"),a)),q(e.replace(/ ce$/i," CE").replace(/\bhpw/i,"web").replace(/\bMacintosh\b/,"Mac OS").replace(/_PowerPC\b/i," OS").replace(/\b(OS X) [^ \d]+/i,"$1").replace(/\bMac (OS X)\b/,"$1").replace(/\/(\d)/," $1").replace(/_/g,".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i,"").replace(/\bx86\.64\b/gi,"x86_64").replace(/\b(Windows Phone) OS\b/,
"$1").replace(/\b(Chrome OS \w+) [\d.]+\b/,"$1").split(" on ")[0]))}return a})}(["Windows Phone","Android","CentOS",{label:"Chrome OS",pattern:"CrOS"},"Debian","Fedora","FreeBSD","Gentoo","Haiku","Kubuntu","Linux Mint","OpenBSD","Red Hat","SuSE","Ubuntu","Xubuntu","Cygwin","Symbian OS","hpwOS","webOS ","webOS","Tablet OS","Tizen","Linux","Mac OS X","Macintosh","Mac","Windows 98;","Windows "]);if(h&&(h=[h]),n&&!k&&(k=p([n])),(a=/\bGoogle TV\b/.exec(k))&&(k=a[0]),/\bSimulator\b/i.test(c)&&(k=(k?k+" ":
"")+"Simulator"),"Opera Mini"==b&&/\bOPiOS\b/.test(c)&&g.push("running in Turbo/Uncompressed mode"),"IE"==b&&/\blike iPhone OS\b/.test(c)?(n=(a=I(c.replace(/like iPhone OS/,""))).manufacturer,k=a.product):/^iP/.test(k)?(b||(b="Safari"),d="iOS"+((a=/ OS ([\d_]+)/i.exec(c))?" "+a[1].replace(/_/g,"."):"")):"Konqueror"!=b||/buntu/i.test(d)?n&&"Google"!=n&&(/Chrome/.test(b)&&!/\bMobile Safari\b/i.test(c)||/\bVita\b/.test(k))||/\bAndroid\b/.test(d)&&/^Chrome/.test(b)&&/\bVersion\//i.test(c)?(b="Android Browser",
d=/\bAndroid\b/.test(d)?d:"Android"):"Silk"==b?(/\bMobi/i.test(c)||(d="Android",g.unshift("desktop mode")),/Accelerated *= *true/i.test(c)&&g.unshift("accelerated")):"PaleMoon"==b&&(a=/\bFirefox\/([\d.]+)\b/.exec(c))?g.push("identifying as Firefox "+a[1]):"Firefox"==b&&(a=/\b(Mobile|Tablet|TV)\b/i.exec(c))?(d||(d="Firefox OS"),k||(k=a[1])):!b||(a=!/\bMinefield\b/i.test(c)&&/\b(?:Firefox|Safari)\b/.exec(b))?(b&&!k&&/[\/,]|^[^(]+?\)/.test(c.slice(c.indexOf(a+"/")+8))&&(b=null),(a=k||n||d)&&(k||n||/\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(d))&&
(b=/[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(d)?d:a)+" Browser")):"Electron"==b&&(a=(/\bChrome\/([\d.]+)\b/.exec(c)||0)[1])&&g.push("Chromium "+a):d="Kubuntu",e||(e=function(a){return A(a,function(a,b){return a||(RegExp(b+"(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)","i").exec(c)||0)[1]||null})}(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))","Version",z(b),"(?:Firefox|Minefield|NetFront)"])),(a="iCab"==h&&3<parseFloat(e)&&
"WebKit"||/\bOpera\b/.test(b)&&(/\bOPR\b/.test(c)?"Blink":"Presto")||/\b(?:Midori|Nook|Safari)\b/i.test(c)&&!/^(?:Trident|EdgeHTML)$/.test(h)&&"WebKit"||!h&&/\bMSIE\b/i.test(c)&&("Mac OS"==d?"Tasman":"Trident")||"WebKit"==h&&/\bPlayStation\b(?! Vita\b)/i.test(b)&&"NetFront")&&(h=[a]),"IE"==b&&(a=(/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(c)||0)[1])?(b+=" Mobile",d="Windows Phone "+(/\+$/.test(a)?a:a+".x"),g.unshift("desktop mode")):/\bWPDesktop\b/i.test(c)?(b="IE Mobile",d="Windows Phone 8.x",g.unshift("desktop mode"),
e||(e=(/\brv:([\d.]+)/.exec(c)||0)[1])):"IE"!=b&&"Trident"==h&&(a=/\brv:([\d.]+)/.exec(c))&&(b&&g.push("identifying as "+b+(e?" "+e:"")),b="IE",e=a[1]),u){if(x(f,"global"))if(B&&(L=(a=B.lang.System).getProperty("os.arch"),d=d||a.getProperty("os.name")+" "+a.getProperty("os.version")),C&&x(f,"system")&&(a=[f.system])[0]){d||(d=a[0].os||null);try{a[1]=f.require("ringo/engine").version,e=a[1].join("."),b="RingoJS"}catch(Q){a[0].global.system==f.system&&(b="Narwhal")}}else"object"==typeof f.process&&
!f.process.browser&&(a=f.process)?("object"==typeof a.versions&&("string"==typeof a.versions.electron?(g.push("Node "+a.versions.node),b="Electron",e=a.versions.electron):"string"==typeof a.versions.nw&&(g.push("Chromium "+e,"Node "+a.versions.node),b="NW.js",e=a.versions.nw)),b||(b="Node.js",L=a.arch,d=a.platform,e=(e=/[\d.]+/.exec(a.version))?e[0]:"unknown")):w&&(b="Rhino");else y(a=f.runtime)==r?(b="Adobe AIR",d=a.flash.system.Capabilities.os):y(a=f.phantom)==E?(b="PhantomJS",e=(a=a.version||null)&&
a.major+"."+a.minor+"."+a.patch):"number"==typeof N.documentMode&&(a=/\bTrident\/(\d+)/i.exec(c))?(e=[e,N.documentMode],(a=+a[1]+4)!=e[1]&&(g.push("IE "+e[1]+" mode"),h&&(h[1]=""),e[1]=a),e="IE"==b?String(e[1].toFixed(1)):e[0]):"number"==typeof N.documentMode&&/^(?:Chrome|Firefox)\b/.test(b)&&(g.push("masking as "+b+" "+e),b="IE",e="11.0",h=["Trident"],d="Windows");d=d&&q(d)}if(e&&(a=/(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(e)||/(?:alpha|beta)(?: ?\d)?/i.exec(c+";"+(u&&l.appMinorVersion))||
/\bMinefield\b/i.test(c)&&"a")&&(M=/b/i.test(a)?"beta":"alpha",e=e.replace(RegExp(a+"\\+?$"),"")+("beta"==M?R:F)+(/\d+\+?/.exec(a)||"")),"Fennec"==b||"Firefox"==b&&/\b(?:Android|Firefox OS)\b/.test(d))b="Firefox Mobile";else if("Maxthon"==b&&e)e=e.replace(/\.[\d.]+/,".x");else if(/\bXbox\b/i.test(k))"Xbox 360"==k&&(d=null),"Xbox 360"==k&&/\bIEMobile\b/.test(c)&&g.unshift("mobile mode");else if(!/^(?:Chrome|IE|Opera)$/.test(b)&&(!b||k||/Browser|Mobi/.test(b))||"Windows CE"!=d&&!/Mobi/i.test(c))if("IE"==
b&&u)try{null===f.external&&g.unshift("platform preview")}catch(Q){g.unshift("embedded")}else(/\bBlackBerry\b/.test(k)||/\bBB10\b/.test(c))&&(a=(RegExp(k.replace(/ +/g," *")+"/([.\\d]+)","i").exec(c)||0)[1]||e)?(d=((a=[a,/BB10/.test(c)])[1]?(k=null,n="BlackBerry"):"Device Software")+" "+a[0],e=null):this!=H&&"Wii"!=k&&(u&&t||/Opera/.test(b)&&/\b(?:MSIE|Firefox)\b/i.test(c)||"Firefox"==b&&/\bOS X (?:\d+\.){2,}/.test(d)||"IE"==b&&(d&&!/^Win/.test(d)&&5.5<e||/\bWindows XP\b/.test(d)&&8<e||8==e&&!/\bTrident\b/.test(c)))&&
!J.test(a=I.call(H,c.replace(J,"")+";"))&&a.name&&(a="ing as "+a.name+((a=a.version)?" "+a:""),J.test(b)?(/\bIE\b/.test(a)&&"Mac OS"==d&&(d=null),a="identify"+a):(a="mask"+a,b=K?q(K.replace(/([a-z])([A-Z])/g,"$1 $2")):"Opera",/\bIE\b/.test(a)&&(d=null),u||(e=null)),h=["Presto"],g.push(a));else b+=" Mobile";(a=(/\bAppleWebKit\/([\d.]+\+?)/i.exec(c)||0)[1])&&(a=[parseFloat(a.replace(/\.(\d)$/,".0$1")),a],"Safari"==b&&"+"==a[1].slice(-1)?(b="WebKit Nightly",M="alpha",e=a[1].slice(0,-1)):e!=a[1]&&e!=
(a[2]=(/\bSafari\/([\d.]+\+?)/i.exec(c)||0)[1])||(e=null),a[1]=(/\bChrome\/([\d.]+)/i.exec(c)||0)[1],537.36==a[0]&&537.36==a[2]&&28<=parseFloat(a[1])&&"WebKit"==h&&(h=["Blink"]),u&&(v||a[1])?(h&&(h[1]="like Chrome"),a=a[1]||(530>(a=a[0])?1:532>a?2:532.05>a?3:533>a?4:534.03>a?5:534.07>a?6:534.1>a?7:534.13>a?8:534.16>a?9:534.24>a?10:534.3>a?11:535.01>a?12:535.02>a?"13+":535.07>a?15:535.11>a?16:535.19>a?17:536.05>a?18:536.1>a?19:537.01>a?20:537.11>a?"21+":537.13>a?23:537.18>a?24:537.24>a?25:537.36>a?
26:"Blink"!=h?"27":"28")):(h&&(h[1]="like Safari"),a=400>(a=a[0])?1:500>a?2:526>a?3:533>a?4:534>a?"4+":535>a?5:537>a?6:538>a?7:601>a?8:"8"),h&&(h[1]+=" "+(a+="number"==typeof a?".x":/[.+]/.test(a)?"":"+")),"Safari"==b&&(!e||45<parseInt(e))&&(e=a));"Opera"==b&&(a=/\bzbov|zvav$/.exec(d))?(b+=" ",g.unshift("desktop mode"),"zvav"==a?(b+="Mini",e=null):b+="Mobile",d=d.replace(RegExp(" *"+a+"$"),"")):"Safari"==b&&/\bChrome\b/.exec(h&&h[1])&&(g.unshift("desktop mode"),b="Chrome Mobile",e=null,/\bOS X\b/.test(d)?
(n="Apple",d="iOS 4.3+"):d=null);e&&0==e.indexOf(a=/[\d.]+$/.exec(d))&&-1<c.indexOf("/"+a+"-")&&(d=String(d.replace(a,"")).replace(/^ +| +$/g,""));h&&!/\b(?:Avant|Nook)\b/.test(b)&&(/Browser|Lunascape|Maxthon/.test(b)||"Safari"!=b&&/^iOS/.test(d)&&/\bSafari\b/.test(h[1])||/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(b)&&h[1])&&(a=h[h.length-1])&&g.push(a);g.length&&(g=["("+g.join("; ")+")"]);n&&k&&0>k.indexOf(n)&&g.push("on "+n);k&&g.push((/^on /.test(g[g.length-
1])?"":"on ")+k);d&&(a=/ ([\d.+]+)$/.exec(d),m=a&&"/"==d.charAt(d.length-a[0].length-1),d={architecture:32,family:a&&!m?d.replace(a[0],""):d,version:a?a[1]:null,toString:function(){var a=this.version;return this.family+(a&&!m?" "+a:"")+(64==this.architecture?" 64-bit":"")}});(a=/\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(L))&&!/\bi686\b/i.test(L)?(d&&(d.architecture=64,d.family=d.family.replace(RegExp(" *"+a),"")),b&&(/\bWOW64\b/i.test(c)||u&&/\w(?:86|32)$/.test(l.cpuClass||l.platform)&&!/\bWin64; x64\b/i.test(c))&&
g.unshift("32-bit")):d&&/^OS X/.test(d.family)&&"Chrome"==b&&39<=parseFloat(e)&&(d.architecture=64);c||(c=null);f={};return f.description=c,f.layout=h&&h[0],f.manufacturer=n,f.name=b,f.prerelease=M,f.product=k,f.ua=c,f.version=b&&e,f.os=d||{architecture:null,family:null,version:null,toString:function(){return"null"}},f.parse=I,f.toString=function(){return this.description||""},f.version&&g.unshift(e),f.name&&g.unshift(b),d&&b&&(d!=String(d).split(" ")[0]||d!=b.split(" ")[0]&&!k)&&g.push(k?"("+d+")":
"on "+d),g.length&&(f.description=g.join(" ")),f}var v={function:!0,object:!0},D=v[typeof window]&&window||this,G=D,E=v[typeof exports]&&exports;v=v[typeof module]&&module&&!module.nodeType&&module;var l=E&&v&&"object"==typeof global&&global;!l||l.global!==l&&l.window!==l&&l.self!==l||(D=l);var r=Math.pow(2,53)-1,J=/\bOpera/,O=this;l=Object.prototype;var F=l.hasOwnProperty,P=l.toString,w=I();"function"==typeof define&&"object"==typeof define.amd&&define.amd?(D.platform=w,define(function(){return w})):
E&&v?H(w,function(c,l){E[l]=c}):D.platform=w}).call(this);var r=" Troubleshooter steps: ",O="OS : "+platform.os+" browser: "+platform.name+" version: "+platform.version+" description: "+platform.description,x=document.querySelector("#shadow"),F=x.querySelectorAll("template.entry");(function(){F.forEach(function(m){m.content.querySelectorAll("div.content-wrapper > ul.option-list > li").forEach(function(m){var q=m.textContent.toString(),r=x.querySelector("[id='"+q+"']").content.querySelector("h4.header").textContent;
m.innerHTML='<a href="./#'+q+'">'+r+"</a>"})})})();G();window.onhashchange=G;window.gotoTroubleshooter=function(){location.href="https://satoshilabs.kayako.com/conversation/new/9?technical="+O+r;return!1}});