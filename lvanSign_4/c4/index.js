(()=>{"use strict";var e={603:(e,t,i)=>{i.d(t,{v:()=>s});var n=i(482);let s=Object.assign({},("dev"==n.V.dev||n.V.uat,{getSdkSign:"//pubsdk-web-dev.iwgame.com/passport.js",sdkType:"",channelSDKRes:"//pubsdk-web-dev.iwgame.com"}))},573:(e,t,i)=>{i.d(t,{F:()=>c});var n=i(85),s=i(5),a=i(603);let r;var o;function d(e,t){window.top.postMessage(window.btoa(encodeURIComponent(JSON.stringify({pageName:e,pageData:t}))),"*")}window.addEventListener("message",(e=>{try{const t=e.data.split("?")[0];let i=JSON.parse(window.atob(e.data.split("?")[1]));t-0==92301&&r&&r(i)}catch(e){}})),function(e){e.PAGREE="pAgree",e.ERRORTIPS="errortips"}(o||(o={}));class c{constructor(){this.pubSDKApiUrl="pubsdk-demo-dev.iwgame.com",this.publisherFuncList={init:window.lvpassport.init,login:window.lvpassport.login,pay:window.lvpassport.pay},this.configTimeout=1e3,this.configTimeoutMax=1e6}getConfigData(){return this.configData}initConfig(){return new Promise(((e,t)=>{n.c.create({url:"发行SDK服务域名/sdk/client/tatics",data:{projectId:"4",subgameId:"4",channelId:"4"},type:"POST"}).then((t=>{if(0!=t.code)throw new Error("config err");this.configData=t.data,e(!0)})).catch((()=>{this.configTimeout>this.configTimeoutMax&&t(!1),setTimeout((()=>{this.configTimeout*=10,this.initConfig().then((t=>{e(!0)}))}),this.configTimeout)}))}))}init(e){const{game_version:t,deviceEnv:i}=e;return s.Z.commonS("passport 初始化开始"),new Promise(((e,t)=>{const n=n=>{let s={subgameId:"4",projectId:"4",channelId:"4",apiUrl:"发行SDK服务域名",passportRes:a.v.channelSDKRes,deviceEnv:i,callback:i=>{200==i.code?e(!0):t(!1)}};s.switchConfig=n,this.publisherFuncList.init(s)};this.initConfig().then((()=>{var e,t,i,a;(null===(t=null===(e=this.configData)||void 0===e?void 0:e.agreement)||void 0===t?void 0:t.userUrl)||(null===(a=null===(i=this.configData)||void 0===i?void 0:i.agreement)||void 0===a?void 0:a.hideUrl)?localStorage.getItem("agree")?n(this.configData):(s.Z.commonS("passport 拉起隐私协议。"),d(o.PAGREE,{userUrl:this.configData.agreement.userUrl,hideUrl:this.configData.agreement.hideUrl}),r=e=>{if(200!=e.code)return d(o.ERRORTIPS,{msg:"即将退出游戏"}),void setTimeout((()=>{window.location.reload()}),2e3);localStorage.setItem("agree","1"),n(this.configData)}):n(this.configData)}))}))}login(){return new Promise(((e,t)=>{this.publisherFuncList.login({callback:t=>{let i=JSON.parse(t.data);console.log(i,"resData");let n=()=>{e({code:200,isInside:!0,data:{pubsdkToken:i.pubToken,pubsdkAccountId:i.pubAccountId}})};1==i.isRealAuth?-1==i.leftTime?n():i.leftTime>0?(this.openFcmTime(i.leftTime),n()):(e({code:701,msg:"防沉迷阶段",data:{}}),alert("根据规定,进入防沉迷阶段，不允许进入游戏！"),window.location.reload()):-1==i.isRealAuth?n():(e({code:701,msg:"防沉迷阶段",data:{}}),alert("根据规定,进入防沉迷阶段，不允许进入游戏！"),window.location.reload())}})}))}openFcmTime(e){e>=12&&setTimeout((()=>{alert("您还剩15分钟游玩时间")}),1e3*(e-12)),setTimeout((()=>{alert("根据规定,进入防沉迷阶段，不允许进入游戏！"),window.location.reload()}),1e3*e)}pay(e){const{order_money_type:t="CNY",order_amount:i,pay_order_id:n,product_id:s,product_name:a="",product_desc:r="",role_id:o,role_name:d="",role_level:c="",role_prof:l="",role_sex:u="",role_vip_level:p="",server_id:h,server_name:g="",extension:_=""}=e;return new Promise(((e,t)=>{this.publisherFuncList.pay({pubsdkOrderId:_?JSON.parse(window.atob(_)).pubsdkOrderId:"",goodsName:a,goodsNum:1,goodsPrice:i}),e(!0)}))}logout(){window.location.reload()}}},482:(e,t,i)=>{var n;i.d(t,{V:()=>n}),function(e){e.dev="dev",e.uat="uat",e.master="master"}(n||(n={}))},5:(e,t,i)=>{i.d(t,{Z:()=>a});var n=i(482),s=i(633);class a{static common(...e){"dev"!=n.V.master&&console.log("[pubsdk debugger log]:",...e)}static commonS(...e){console.log("[pubsdk info]:",...e)}static error(...e){"dev"!=n.V.master&&console.error("[pubsdk error]:",...e)}static warn(...e){"dev"!=n.V.master&&console.warn("[pubsdk info]:",...e)}static timeStart(e){if("dev"!=n.V.master)return this.logTimeState.hasOwnProperty(e)&&this.error(`logName ${e} is exist`),this.logTimeState[e]=(0,s.A9)(),console.log(`[pubsdk timer]:start ${e}`),e}static timeEnd(e){if("dev"!=n.V.master){this.logTimeState.hasOwnProperty(e)||this.error(`logName ${e} is not exist`);const t=(0,s.A9)()-this.logTimeState[e];return console.log(`[pubsdk timer]:end ${e} --${t}`),t}}}a.logTimeState={}},85:(e,t,i)=>{i.d(t,{c:()=>s});var n=i(633);class s{static requestGet(e){const{url:t,data:i={},success:s=null,fail:a=null,header:r={}}=e;let o=(0,n.Bb)(i);var d=new XMLHttpRequest;d.open("GET",t+"?"+decodeURIComponent(o),!0),d.onreadystatechange=function(){let e=null;if(4==d.readyState&&200==d.status||304==d.status){try{e="string"==typeof d.responseText?JSON.parse(d.responseText):d.responseText}catch(t){e=d.responseText}s&&s.call(this,e)}else d.status&&200!=d.status&&a&&a.call(this,e)},d.send()}static requestPost(e){const{url:t,data:i={},success:n=null,fail:s=null,header:a={},ext:r={}}=e;var o=new XMLHttpRequest;o.open("POST",t,!0),r.notX8||o.setRequestHeader("Content-Type","application/json;charset=UTF-8");for(const e in a)o.setRequestHeader(e,a[e]);o.onreadystatechange=function(){let e=null;if(4==o.readyState&&200==o.status||304==o.status){try{e="string"==typeof o.responseText?JSON.parse(o.responseText):o.responseText}catch(t){e=o.responseText}n&&n.call(this,e)}else o.status&&200!=o.status&&s&&s.call(this,e)},o.send(JSON.stringify(i))}static create(e){const{url:t,type:i="get",data:n={},header:s={},ext:a={}}=e;return new Promise(((e,r)=>{switch(null==i?void 0:i.toLowerCase()){case"get":this.requestGet({url:t,data:n,header:s,ext:a,success:t=>{e(t)},fail:e=>{r(e)}});break;case"post":this.requestPost({url:t,data:n,header:s,ext:a,success:t=>{e(t)},fail:e=>{r(e)}})}}))}}},633:(e,t,i)=>{i.d(t,{A9:()=>s,Bb:()=>r,JY:()=>n,kn:()=>l,mh:()=>c,s7:()=>u,v:()=>d,ve:()=>a});const n=e=>{let t={};return e.split("&").map((e=>{let i=e.split("=");t[i[0]]=i[1]})),t};function s(){var e=performance.timing?performance.timing.navigationStart:performance.timeOrigin;return 1e3*(performance.now()+e)}function a(e,t,i){if(document.body){let n=document.createElement("script");n.src=e,n.onload=t,i&&(n.type=i),document.body.append(n)}else document.write(`<script src="${e}" onload="${t()}"><\/script>`)}function r(e){let t="";for(let i in e)t+=`${i}=${e[i]}&`;return t.slice(0,t.length-1)}function o(e,t){return(e+"").length>=t?e+"":new Array(t+1-(e+"").length).join("0")+e}function d(){return"+"+o(0-(new Date).getTimezoneOffset()/60,2)+"00"}function c(e,t="year-month-day hour:min:sec"){let i;i="object"!=typeof e?new Date(e):e;const n=i.getFullYear()+"",s=i.getMonth()+1,a=i.getDate(),r=i.getHours(),d=i.getMinutes(),c=i.getSeconds();return t.replace("year",n).replace("month",o(s,2)+"").replace("day",o(a,2)+"").replace("hour",o(r,2)+"").replace("min",o(d,2)+"").replace("sec",o(c,2)+"")}function l(){var e=navigator.userAgent,t="";if(e.indexOf("Mac OS X")>-1)t="IOS "+(e.match(/OS [\d._]*/gi)+"").replace(/[^0-9|_.]/gi,"").replace(/_/gi,".");else if(e.indexOf("Android")>-1||e.indexOf("Linux")>-1)t="Android "+e.substr(e.indexOf("Android")+8,e.indexOf(";",e.indexOf("Android"))-e.indexOf("Android")-8);else if(e.indexOf("BB10")>-1)t="blackberry "+e.substr(e.indexOf("BB10")+5,e.indexOf(";",e.indexOf("BB10"))-e.indexOf("BB10")-5);else if(e.indexOf("IEMobile")>-1)t="winphone "+e.substr(e.indexOf("IEMobile")+9,e.indexOf(";",e.indexOf("IEMobile"))-e.indexOf("IEMobile")-9);else{var i=navigator.userAgent.toLowerCase();t=i.indexOf("windows nt 5.0")>-1?"Windows 2000":i.indexOf("windows nt 5.1")>-1||i.indexOf("windows nt 5.2")>-1?"Windows XP":i.indexOf("windows nt 6.0")>-1?"Windows Vista":i.indexOf("windows nt 6.1")>-1||i.indexOf("windows 7")>-1?"Windows 7":i.indexOf("windows nt 6.2")>-1||i.indexOf("windows 8")>-1?"Windows 8":i.indexOf("windows nt 6.3")>-1?"Windows 8.1":i.indexOf("windows nt 6.2")>-1||i.indexOf("windows nt 10.0")>-1?"Windows 10":"Unknown"}return t.toLocaleLowerCase()}function u(){let e=localStorage.getItem("pub_unFirstActive")?0:1;return localStorage.setItem("pub_unFirstActive","1"),e+""}},147:e=>{e.exports=JSON.parse('{"name":"pubh5sdk","version":"4.0.5","scripts":{"webpack:help":"webpack --help","server":"http-server dist/","server:cors":"http-server dist/ --cors","watch":"webpack --env envPath=./.env watch=true","dev":"npm run watch & npm run server","dev:cors":"npm run dev & npm run server:cors","build:dev":"webpack --env envPath=./.env","build":"webpack --env envPath=./.env.prod","build:zip":"sh ./build/buildZip.sh"},"type":"commonjs","devDependencies":{"cross-env":"^7.0.3","filehound":"^1.17.6","tslib":"^2.4.0","ttypescript":"^1.5.13","typescript":"^4.7.4","typescript-transform-paths":"^3.3.1"},"dependencies":{"@babel/core":"^7.19.1","@babel/plugin-transform-runtime":"^7.19.1","@babel/polyfill":"^7.12.1","@babel/preset-env":"^7.19.1","babel-loader":"^8.2.5","base-h5sdk":"^1.0.3","dotenv":"^16.0.2","module-alias":"^2.2.2","ts-loader":"^9.4.1","ts-md5":"^1.2.11","tsc-alias":"^1.7.0","webpack":"^5.74.0","webpack-cli":"^4.10.0"},"_moduleAliases":{"@":"./src/"}}')},685:e=>{e.exports=JSON.parse('{"pubglog":{"heartbeat":"platform,device_id,project_id,subgame_id,channel_id,ad_id,app_version,pubsdk_version,pubsdk_account_id","level_up":"platform,device_id,project_id,subgame_id,channel_id,ad_id,app_version,pubsdk_version,pubsdk_account_id","active":"platform,device_id,device_os,device_version,device_nm,device_score,device_name,device_screen,cpu_count,cpu_freq,cpu_model,cpu_mem,total_space,free_space,imei,oaid,android_id,is_emu,languages,project_id,subgame_id,channel_id,ad_id,app_version,pubsdk_version","create_role":"platform,device_id,project_id,subgame_id,channel_id,ad_id,app_version,pubsdk_version,pubsdk_account_id","login":"platform,device_id,project_id,subgame_id,channel_id,ad_id,app_version,pubsdk_version","pay_order_client":"platform,device_id,project_id,subgame_id,channel_id,ad_id,app_version,pubsdk_version,pubsdk_account_id","version":"1.0","vip_level_up":"platform,device_id,project_id,subgame_id,channel_id,ad_id,app_version,pubsdk_version,pubsdk_account_id","pay_success":"platform,device_id,project_id,subgame_id,channel_id,ad_id,app_version,pubsdk_version,pubsdk_account_id","pay_order":"platform,device_id,project_id,subgame_id,channel_id,ad_id,app_version,pubsdk_version","reg":"platform,device_id,project_id,subgame_id,channel_id,ad_id,app_version,pubsdk_version","role_login":"platform,device_id,project_id,subgame_id,channel_id,ad_id,app_version,pubsdk_version,pubsdk_account_id","select_server":"platform,device_id,project_id,subgame_id,channel_id,ad_id,app_version,pubsdk_version,pubsdk_account_id","role_logout":"platform,device_id,project_id,subgame_id,channel_id,ad_id,app_version,pubsdk_version,pubsdk_account_id"}}')}},t={};function i(n){var s=t[n];if(void 0!==s)return s.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,i),a.exports}i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=i(5),t=i(633),n=i(85);class s{constructor(){this._dataLength=0,this._bufferLength=0,this._state=new Int32Array(4),this._buffer=new ArrayBuffer(68),this._buffer8=new Uint8Array(this._buffer,0,68),this._buffer32=new Uint32Array(this._buffer,0,17),this.start()}static hashStr(e,t=!1){return this.onePassHasher.start().appendStr(e).end(t)}static hashAsciiStr(e,t=!1){return this.onePassHasher.start().appendAsciiStr(e).end(t)}static _hex(e){const t=s.hexChars,i=s.hexOut;let n,a,r,o;for(o=0;o<4;o+=1)for(a=8*o,n=e[o],r=0;r<8;r+=2)i[a+1+r]=t.charAt(15&n),n>>>=4,i[a+0+r]=t.charAt(15&n),n>>>=4;return i.join("")}static _md5cycle(e,t){let i=e[0],n=e[1],s=e[2],a=e[3];i+=(n&s|~n&a)+t[0]-680876936|0,i=(i<<7|i>>>25)+n|0,a+=(i&n|~i&s)+t[1]-389564586|0,a=(a<<12|a>>>20)+i|0,s+=(a&i|~a&n)+t[2]+606105819|0,s=(s<<17|s>>>15)+a|0,n+=(s&a|~s&i)+t[3]-1044525330|0,n=(n<<22|n>>>10)+s|0,i+=(n&s|~n&a)+t[4]-176418897|0,i=(i<<7|i>>>25)+n|0,a+=(i&n|~i&s)+t[5]+1200080426|0,a=(a<<12|a>>>20)+i|0,s+=(a&i|~a&n)+t[6]-1473231341|0,s=(s<<17|s>>>15)+a|0,n+=(s&a|~s&i)+t[7]-45705983|0,n=(n<<22|n>>>10)+s|0,i+=(n&s|~n&a)+t[8]+1770035416|0,i=(i<<7|i>>>25)+n|0,a+=(i&n|~i&s)+t[9]-1958414417|0,a=(a<<12|a>>>20)+i|0,s+=(a&i|~a&n)+t[10]-42063|0,s=(s<<17|s>>>15)+a|0,n+=(s&a|~s&i)+t[11]-1990404162|0,n=(n<<22|n>>>10)+s|0,i+=(n&s|~n&a)+t[12]+1804603682|0,i=(i<<7|i>>>25)+n|0,a+=(i&n|~i&s)+t[13]-40341101|0,a=(a<<12|a>>>20)+i|0,s+=(a&i|~a&n)+t[14]-1502002290|0,s=(s<<17|s>>>15)+a|0,n+=(s&a|~s&i)+t[15]+1236535329|0,n=(n<<22|n>>>10)+s|0,i+=(n&a|s&~a)+t[1]-165796510|0,i=(i<<5|i>>>27)+n|0,a+=(i&s|n&~s)+t[6]-1069501632|0,a=(a<<9|a>>>23)+i|0,s+=(a&n|i&~n)+t[11]+643717713|0,s=(s<<14|s>>>18)+a|0,n+=(s&i|a&~i)+t[0]-373897302|0,n=(n<<20|n>>>12)+s|0,i+=(n&a|s&~a)+t[5]-701558691|0,i=(i<<5|i>>>27)+n|0,a+=(i&s|n&~s)+t[10]+38016083|0,a=(a<<9|a>>>23)+i|0,s+=(a&n|i&~n)+t[15]-660478335|0,s=(s<<14|s>>>18)+a|0,n+=(s&i|a&~i)+t[4]-405537848|0,n=(n<<20|n>>>12)+s|0,i+=(n&a|s&~a)+t[9]+568446438|0,i=(i<<5|i>>>27)+n|0,a+=(i&s|n&~s)+t[14]-1019803690|0,a=(a<<9|a>>>23)+i|0,s+=(a&n|i&~n)+t[3]-187363961|0,s=(s<<14|s>>>18)+a|0,n+=(s&i|a&~i)+t[8]+1163531501|0,n=(n<<20|n>>>12)+s|0,i+=(n&a|s&~a)+t[13]-1444681467|0,i=(i<<5|i>>>27)+n|0,a+=(i&s|n&~s)+t[2]-51403784|0,a=(a<<9|a>>>23)+i|0,s+=(a&n|i&~n)+t[7]+1735328473|0,s=(s<<14|s>>>18)+a|0,n+=(s&i|a&~i)+t[12]-1926607734|0,n=(n<<20|n>>>12)+s|0,i+=(n^s^a)+t[5]-378558|0,i=(i<<4|i>>>28)+n|0,a+=(i^n^s)+t[8]-2022574463|0,a=(a<<11|a>>>21)+i|0,s+=(a^i^n)+t[11]+1839030562|0,s=(s<<16|s>>>16)+a|0,n+=(s^a^i)+t[14]-35309556|0,n=(n<<23|n>>>9)+s|0,i+=(n^s^a)+t[1]-1530992060|0,i=(i<<4|i>>>28)+n|0,a+=(i^n^s)+t[4]+1272893353|0,a=(a<<11|a>>>21)+i|0,s+=(a^i^n)+t[7]-155497632|0,s=(s<<16|s>>>16)+a|0,n+=(s^a^i)+t[10]-1094730640|0,n=(n<<23|n>>>9)+s|0,i+=(n^s^a)+t[13]+681279174|0,i=(i<<4|i>>>28)+n|0,a+=(i^n^s)+t[0]-358537222|0,a=(a<<11|a>>>21)+i|0,s+=(a^i^n)+t[3]-722521979|0,s=(s<<16|s>>>16)+a|0,n+=(s^a^i)+t[6]+76029189|0,n=(n<<23|n>>>9)+s|0,i+=(n^s^a)+t[9]-640364487|0,i=(i<<4|i>>>28)+n|0,a+=(i^n^s)+t[12]-421815835|0,a=(a<<11|a>>>21)+i|0,s+=(a^i^n)+t[15]+530742520|0,s=(s<<16|s>>>16)+a|0,n+=(s^a^i)+t[2]-995338651|0,n=(n<<23|n>>>9)+s|0,i+=(s^(n|~a))+t[0]-198630844|0,i=(i<<6|i>>>26)+n|0,a+=(n^(i|~s))+t[7]+1126891415|0,a=(a<<10|a>>>22)+i|0,s+=(i^(a|~n))+t[14]-1416354905|0,s=(s<<15|s>>>17)+a|0,n+=(a^(s|~i))+t[5]-57434055|0,n=(n<<21|n>>>11)+s|0,i+=(s^(n|~a))+t[12]+1700485571|0,i=(i<<6|i>>>26)+n|0,a+=(n^(i|~s))+t[3]-1894986606|0,a=(a<<10|a>>>22)+i|0,s+=(i^(a|~n))+t[10]-1051523|0,s=(s<<15|s>>>17)+a|0,n+=(a^(s|~i))+t[1]-2054922799|0,n=(n<<21|n>>>11)+s|0,i+=(s^(n|~a))+t[8]+1873313359|0,i=(i<<6|i>>>26)+n|0,a+=(n^(i|~s))+t[15]-30611744|0,a=(a<<10|a>>>22)+i|0,s+=(i^(a|~n))+t[6]-1560198380|0,s=(s<<15|s>>>17)+a|0,n+=(a^(s|~i))+t[13]+1309151649|0,n=(n<<21|n>>>11)+s|0,i+=(s^(n|~a))+t[4]-145523070|0,i=(i<<6|i>>>26)+n|0,a+=(n^(i|~s))+t[11]-1120210379|0,a=(a<<10|a>>>22)+i|0,s+=(i^(a|~n))+t[2]+718787259|0,s=(s<<15|s>>>17)+a|0,n+=(a^(s|~i))+t[9]-343485551|0,n=(n<<21|n>>>11)+s|0,e[0]=i+e[0]|0,e[1]=n+e[1]|0,e[2]=s+e[2]|0,e[3]=a+e[3]|0}start(){return this._dataLength=0,this._bufferLength=0,this._state.set(s.stateIdentity),this}appendStr(e){const t=this._buffer8,i=this._buffer32;let n,a,r=this._bufferLength;for(a=0;a<e.length;a+=1){if(n=e.charCodeAt(a),n<128)t[r++]=n;else if(n<2048)t[r++]=192+(n>>>6),t[r++]=63&n|128;else if(n<55296||n>56319)t[r++]=224+(n>>>12),t[r++]=n>>>6&63|128,t[r++]=63&n|128;else{if(n=1024*(n-55296)+(e.charCodeAt(++a)-56320)+65536,n>1114111)throw new Error("Unicode standard supports code points up to U+10FFFF");t[r++]=240+(n>>>18),t[r++]=n>>>12&63|128,t[r++]=n>>>6&63|128,t[r++]=63&n|128}r>=64&&(this._dataLength+=64,s._md5cycle(this._state,i),r-=64,i[0]=i[16])}return this._bufferLength=r,this}appendAsciiStr(e){const t=this._buffer8,i=this._buffer32;let n,a=this._bufferLength,r=0;for(;;){for(n=Math.min(e.length-r,64-a);n--;)t[a++]=e.charCodeAt(r++);if(a<64)break;this._dataLength+=64,s._md5cycle(this._state,i),a=0}return this._bufferLength=a,this}appendByteArray(e){const t=this._buffer8,i=this._buffer32;let n,a=this._bufferLength,r=0;for(;;){for(n=Math.min(e.length-r,64-a);n--;)t[a++]=e[r++];if(a<64)break;this._dataLength+=64,s._md5cycle(this._state,i),a=0}return this._bufferLength=a,this}getState(){const e=this._state;return{buffer:String.fromCharCode.apply(null,Array.from(this._buffer8)),buflen:this._bufferLength,length:this._dataLength,state:[e[0],e[1],e[2],e[3]]}}setState(e){const t=e.buffer,i=e.state,n=this._state;let s;for(this._dataLength=e.length,this._bufferLength=e.buflen,n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],s=0;s<t.length;s+=1)this._buffer8[s]=t.charCodeAt(s)}end(e=!1){const t=this._bufferLength,i=this._buffer8,n=this._buffer32,a=1+(t>>2);this._dataLength+=t;const r=8*this._dataLength;if(i[t]=128,i[t+1]=i[t+2]=i[t+3]=0,n.set(s.buffer32Identity.subarray(a),a),t>55&&(s._md5cycle(this._state,n),n.set(s.buffer32Identity)),r<=4294967295)n[14]=r;else{const e=r.toString(16).match(/(.*?)(.{0,8})$/);if(null===e)return;const t=parseInt(e[2],16),i=parseInt(e[1],16)||0;n[14]=t,n[15]=i}return s._md5cycle(this._state,n),e?this._state:s._hex(this._state)}}if(s.stateIdentity=new Int32Array([1732584193,-271733879,-1732584194,271733878]),s.buffer32Identity=new Int32Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),s.hexChars="0123456789abcdef",s.hexOut=[],s.onePassHasher=new s,"5d41402abc4b2a76b9719d911017c592"!==s.hashStr("hello"))throw new Error("Md5 self test failed.");function a(){return window.localStorage.getItem("lvdid")||function(){let e=navigator.userAgent.toLocaleLowerCase(),t="cd_"+s.hashStr(e+((new Date).getTime()+Math.floor(1e4*Math.random())/1e4));return window.localStorage.setItem("lvdid",t),t}()}class r{constructor(){this.urlParams=this.analysis()}static getInstance(){return this.instance}analysis(){let e=location.search.slice(1,location.search.length);return(0,t.JY)(e)}get(e){return this.urlParams[e]}getAll(){return this.urlParams}getIsAndroid(){return Boolean(r.getInstance().get("android"))}getIsIos(){return Boolean(r.getInstance().get("ios"))}getIsApp(){return Boolean(r.getInstance().get("isApp"))}getPubisherId(){return r.getInstance().get("lv_pub_id")}getGameId(){return"1"}getAppId(){return"1"}getChannelId(){return r.getInstance().get("channelId")}}r.instance=new r;const o={log_id:{origin:"handler",handlerId:"getLogId"},event_time:{origin:"handler",handlerId:"getEventTime"},game_id:{origin:"handler",handlerId:"getGameId"},pub_id:{origin:"handler",handlerId:"getPubId"},tunnel_id:{origin:"handler",handlerId:"getTunnelId"},platform:{origin:"handler",handlerId:"getPlatform"},app_version:{origin:"sdk",default:"",paramId:!1},device_id:{origin:"handler",handlerId:"getDeviced"},cpsdk_version:{origin:"sdk",paramId:"cpsdk_version"},cpsdk_account_id:{origin:"sdk",paramId:"cpsdk_account_id"},device_os:{origin:"handler",handlerId:"getDeviceOs"},device_version:{origin:"handler",handlerId:"getDeviceVersion"},device_nm:{origin:"sdk",default:"",paramId:!1},device_score:{origin:"sdk",default:"",paramId:!1},device_name:{origin:"sdk",default:"",paramId:!1},device_screen:{origin:"handler",handlerId:"getDeviceScreen"},cpu_count:{origin:"sdk",default:"",paramId:!1},cpu_freq:{origin:"sdk",default:"",paramId:!1},cpu_model:{origin:"sdk",default:"",paramId:!1},cpu_mem:{origin:"sdk",default:"",paramId:!1},total_space:{origin:"sdk",default:"",paramId:!1},free_space:{origin:"sdk",default:"",paramId:!1},imei:{origin:"sdk",default:"",paramId:!1},oaid:{origin:"sdk",default:"",paramId:!1},android_id:{origin:"sdk",default:"",paramId:!1},is_emu:{origin:"sdk",default:"",paramId:!1},languages:{origin:"handler",handlerId:"getLanguages"},user_ip:{origin:"sdk",default:"",paramId:!1},project_id:{origin:"handler",handlerId:"getProjectId"},subgame_id:{origin:"handler",handlerId:"getSubgameId"},channel_id:{origin:"handler",handlerId:"getChannelId"},ad_id:{origin:"sdk",default:"",paramId:!1},pubsdk_version:{origin:"sdk",paramId:"pubsdk_version"},pubsdk_account_id:{origin:"sdk",paramId:"pubsdk_account_id"},pubsdk_account_name:{origin:"sdk",paramId:"pubsdk_account_name"},is_first_active:{origin:"sdk",paramId:"is_first_active"},ad_details:{origin:"sdk",default:"",paramId:!1}};const d=i(685),c={getLogId:()=>s.hashStr(+new Date+(Math.ceil(9999*Math.random())+""))+Math.ceil(9999*Math.random()),getIp:()=>{return e=void 0,t=void 0,s=function*(){let e="";return yield n.c.create({url:"https://pv.sohu.com/cityjson?ie=utf-8",type:"GET"}).then((t=>{const i=t.indexOf("{"),n=t.indexOf("}");e=JSON.parse(t.slice(i,n+1)).cip})),e},new((i=void 0)||(i=Promise))((function(n,a){function r(e){try{d(s.next(e))}catch(e){a(e)}}function o(e){try{d(s.throw(e))}catch(e){a(e)}}function d(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,o)}d((s=s.apply(e,t||[])).next())}));var e,t,i,s},getEventTime:()=>(0,t.v)()+" "+(0,t.mh)(new Date),getGameId:()=>r.getInstance().get("gameId"),getPubId:()=>r.getInstance().get("pubId"),getTunnelId:()=>r.getInstance().get("tunnelId"),getPlatform:()=>"3",getDeviced:()=>a(),getDeviceOs:()=>{switch((0,t.kn)().split(" ")[0]){case"windows":return"3";case"ios":return"1";case"android":return"2";default:return"0"}},getDeviceVersion:()=>(0,t.kn)().split(" ")[1],getDeviceScreen:()=>`${window.innerWidth}*${window.innerHeight}`,getLanguages:()=>navigator.language||"zh",getProjectId:()=>"4",getSubgameId:()=>"4",getChannelId:()=>"4"};let l,u,p,h={},g={};function _(e,t){if("other"==e){let e={};return t.map((t=>{e[t]=m(t)})),e}{let i={},n=d[l+"glog"];i.version=n.version,i.event=l+"sdk_"+e,["log_id","event_time"].concat(n[e].split(",")).map((e=>{i[e]=m(e)})),Object.assign(g,t),Object.assign(i,t),v([i])}}function m(e){let t=o[e];switch(t.origin){case"handler":return function(e){if(!e)return"";try{return c[e.handlerId]()}catch(e){}}(t);case"sdk":return function(e){return e?e.paramId?h[e.paramId]:e.default:""}(t)}}function f(e){Object.assign(h,e)}function v(e){n.c.create({url:"https://iw.game.com",data:e,type:"POST",ext:{notX8:!0}}).then((t=>{0!=t.code&&-1!=e.event.indexOf("heartbeat")&&function(e){let t=localStorage.getItem(l+"sdk_log")?JSON.parse(localStorage.getItem(l+"sdk_log")):[];localStorage.setItem(l+"sdk_log",JSON.stringify(t.concat(e))),p||(p=setTimeout((()=>{let e=localStorage.getItem(l+"sdk_log")?JSON.parse(localStorage.getItem(l+"sdk_log")):[];e.length>0&&v(e),p=null}),3e5))}(e),u||-1==e[0].event.indexOf("role_login")||(u=setInterval((()=>{_("heartbeat",g)}),3e5))}))}let b=i(573).F,I=i(603).v;const w=i(147);class k{insideInit(i){let n=this.loadPublisherInfo();l="pub",n.then((()=>{f({pubsdk_version:w.version}),_("active",{is_first_active:(0,t.s7)()}),e.Z.commonS("game初始化结束。"),i({result:{code:200,msg:"初始化成功"},cpSpace:this.getSpaceFunction()})}))}loadPublisherInfo(){return new Promise((t=>{Promise.all([this.loadCpSDKFile(b),this.loadPublisherSDKFile(I.getSdkSign,I.sdkType)]).then((i=>{e.Z.commonS("渠道资源加载完毕",window.lvpassport),this.publisherSDk=new i[0],t(!0)}))}))}loadCpSDKFile(e){return new Promise((t=>{t(e)}))}loadPublisherSDKFile(e,i){return new Promise((n=>{(0,t.ve)(e,(()=>{setTimeout((()=>{n(!0)}),1e3)}),i)}))}init(e){const{callback:t}=e;this.publisherSDk.init?this.noticePushlierInit(e):t({code:200,msg:"初始化成功"})}noticePushlierInit(e){const{callback:t,game_version:i}=e;this.publisherSDk.init({game_version:i,deviceEnv:this.getDeviceEnv()}).then((e=>{t({code:200,msg:"初始化成功"})}))}login(e){const{callback:t}=e;this.publisherSDk.login().then((e=>{console.log(e,"isInside"),200==e.code&&(e.isInside?(f({pubsdk_account_id:e.data.pubsdkAccountId}),this.publisherLogin(e.data,t)):this.insideLogin(e.data,t))})).catch((e=>{console.log(e,"login2"),t({code:410,msg:"登录失败"})}))}publisherLogin(e,t){t({code:200,data:{token:e.pubsdkToken},msg:"登录成功"})}insideLogin(e,t){n.c.create({url:"发行SDK服务域名/sdk/client/login",data:{pubTokenInfo:JSON.stringify(Object.assign({},e)),deviceEnv:this.getDeviceEnv()},type:"POST"}).then((e=>{0==e.code?t({code:200,data:{cpsdkToken:e.data.cpsdkToken,tunnelId:e.data.tunnelId,zoneId:e.data.zoneId},msg:"登录成功"}):t({code:411,msg:"登录失败"})}))}pay(e){this.publisherSDk.pay(e),_("pay_order_client",e)}getDeviceEnv(){return window.btoa(JSON.stringify({env:Object.assign({device_id:a(),platform:"5",app_version:"",cpsdk_version:"",pubsdk_version:""},_("other",["device_id","platform","app_version","cpsdk_version","pubsdk_version"])),pub:{channelId:"4"}}))}logout(){this.publisherSDk.logout()}switchAccount(e){const{callback:t}=e;this.publisherSDk.switchAccount?this.publisherSDk.switchAccount().then((e=>{t(e)})):this.publisherSDk.logout()}activeShare(){}onEventLog({eventCode:e,eventData:t}){_(e,t)}getSpaceFunction(){return{init:this.init.bind(this),login:this.login.bind(this),pay:this.pay.bind(this),logout:this.logout.bind(this),switchAccount:this.switchAccount.bind(this),getDeviceEnv:this.getDeviceEnv.bind(this),onEventLog:this.onEventLog.bind(this)}}}class S{static getInstance(){return S.instance||(S.instance=new S),this.instance}init(){return new Promise(((e,t)=>{(new k).insideInit(e)}))}}let y=new class{constructor(){this.insideInitState=!1,this.externalInitState=!1,e.Z.commonS("sdk自初始化开始。"),e.Z.timeStart("SDK_init"),this.init()}init(){let t;e.Z.timeStart("Launch_init"),t=this.initH5(),console.log(t,"initPromise"),t.then((({result:t,cpSpace:i})=>{this.judgeExternalInitState(t,i),e.Z.commonS("sdk内部初始化结束。"),e.Z.timeEnd("Launch_init")})).catch((()=>{e.Z.error("sdk内部初始化失败。")}))}initIos(){}initAndroid(){}initH5(){return e.Z.commonS("h5初始化开始。"),new Promise((e=>{S.getInstance().init().then((t=>{e(t)}))}))}externalInit(e){const{cpSpace:t}=e;this.insideInitState?(Object.assign(t,this.insideInitResult.cpSpace),this.insideInitResult.cpSpace.init(e)):(this.externalInitState=!0,this.externalInitParams=e,this.cpSpace=t)}judgeExternalInitState(e,t){this.externalInitState?(Object.assign(this.cpSpace,t),t.init(this.externalInitParams)):(this.insideInitState=!0,this.insideInitResult={result:e,cpSpace:t})}};window.PUBLASDK=class{static init(t){const{callback:i,game_version:n}=t;e.Z.commonS("游戏调用sdk初始化开始。"),y.externalInit({cpSpace:this,callback:i,game_version:n})}}})()})();