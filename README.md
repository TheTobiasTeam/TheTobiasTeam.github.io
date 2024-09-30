> [!IMPORTANT]
> [GitHub traduzido para o português](https://github.com/ilytobias/Khan-Destroyer/tree/main/portuguese)

<div align="center">
  <img src="https://github.com/ilytobias/Khan-Destroyer/assets/165577429/fcd7fa24-a62c-46c8-bc02-78463bd4c64a" width="500" height="500"></img>

  (logo made by [orphanlol](https://github.com/orphanlol))

  ### Discord

  Join the **[Discord](https://discord.gg/pujbPqMyPF)** for support and information! Our community is welcome to friendly discussion about our bookmarklets.

  You can also provide suggestions.
</div>

# Bookmarklets




## Eruda/Console Editor
  
```js
javascript:(function () { var script = document.createElement('script'); script.src="https://cdn.jsdelivr.net/npm/eruda"; document.body.append(script); script.onload = function () { eruda.init(); } })();
```  

## Firebug/inspect Element

```js
javascript:var firebug=document.createElement('script');firebug.setAttribute('src','https://luphoria.com/fbl/fbl/firebug-lite-debug.js');document.body.appendChild(firebug);(function(){if(window.firebug.version){firebug.init();}else{setTimeout(arguments.callee);}})();void(firebug);
```  

## Xray goggles

```js
javascript:(function () {var script=document.createElement('script');script.src='https://x-ray-goggles.mouse.org/webxray.js';script.className='webxray';script.setAttribute('data-lang','en-US');script.setAttribute('data-baseuri','https://x-ray-goggles.mouse.org');document.body.appendChild(script);}())
```  


## Page Editor

```js
javascript:if(document.body.contentEditable != 'true')void(document.body.contentEditable = 'true');else void(document.body.contentEditable = 'false');\
```  


## Abbout:Blank Embedder

```js
javascript: (function () {var url = prompt("Paste the link you want to be embedded into an about:blank page.\n(INCLUDE https://)", "https://example.com"); var urlObj = new window.URL(window.location.href); win = window.open(); win.document.body.style.margin = "0"; win.document.body.style.height = "100vh"; var iframe = win.document.createElement("iframe"); iframe.style.border = "none"; iframe.style.width = "100%"; iframe.style.height = "100%"; iframe.style.margin = "0"; iframe.referrerpolicy = "no-referrer"; iframe.allow = "fullscreen"; iframe.src = url.toString(); win.document.body.appendChild(iframe); var script = win.document.createElement("script"); script.src = "https://3kh0.github.io/js/main.js"; win.document.body.appendChild(script); })();
```  


## Google Translate Page

```js
javascript:var a="https://translate.google.com/translate?u=";var b=encodeURI(location.href);var c="?tl=en";open(a+b+c);
```  


## View Page Source

```js
javascript:(function()%7Bvar d%3Ddocument%2Cs%2Ce%3Bvar el%3Dd.getElementById("snpy")%3Bif(typeof Snoopy!%3D"undefined")%7BSnoopy.toggle()%3Breturn%7Delse%7Bif(el)%7Bel.className%3D%2Fclosed%2F.test(el.className)%3Fel.className.replace("closed"%2C"")%3Ael.className%2B" closed"%3Breturn%7D%7Ds%3Dd.createElement("link")%3Bs.setAttribute("href"%2C"http%3A%2F%2Fsnoopy-assets.allmarkedup.com%2Fsnoopy-min.css")%3Bs.setAttribute("rel"%2C"stylesheet")%3Bs.setAttribute("type"%2C"text%2Fcss")%3Bd.getElementsByTagName("head")%5B0%5D.appendChild(s)%3Be%3Dd.createElement("script")%3Be.setAttribute("src"%2C"http%3A%2F%2Fsnoopy-assets.allmarkedup.com%2Fsnoopy-min.js")%3Bd.getElementsByTagName("body")%5B0%5D.appendChild(e)%7D)()%3B
```  


## Adblocker

```js
javascript:var st = confirm("strict adblocker?"); if(st){var invisible = document.createElement("style"); invisible.innerHTML = "iframe{display:none} embed{display:none} object{display:none} frame{display:none}"; document.body.appendChild(invisible); setInterval(function(){var embeds = document.querySelectorAll("iframe, embed, frame, object"); for(i = 0; i < embeds.length; i++){embeds[i].remove()}}, 500)} else{var adblock = document.createElement("style"); adblock.innerHTML = "[src*=adserver] {display: none; } [src*=adlinks] {display: none;} [src*=adtech] {display:none;} [id*=google_ads] { display: none; } [src*=doubleclick.net] { display:none;} [src*=googlead] { display: none; } [href*=googlead] { display:none;} [src*=googlesyndication] { display: none;} [src*=ads.] { display: none; } [src*=.ad] {display: none; } [src*=ad.] {display:none;} [src*=adsmart] { display:none;}"; document.body.appendChild(adblock)} if(st){var elements = document.body.querySelectorAll("*"); for(i2 = 0; i2 < elements.length; i2++){if(elements[i2].id.includes("google_ads_iframe")){elements[i2].remove()}}} var x = document.getElementsByClassName("video-stream html5-main-video")[0]; function videoblock() { if(x.src.includes("pltype=adhost")) { x.currentTime = 999999999; }} setInterval(videoblock, 10)
```  


## Makes Page 3D

```js
javascript:(function(){var js=document.body.appendChild(document.createElement("script"));js.onerror=function(){alert("Sorry, the script could not be loaded.")};js.src="https://rawgit.com/Krazete/bookmarklets/master/tri.js"})();
```  


## Snake Game

```js
avascript:Q=32;m=b=Q*Q;a=[P=l=u=d=p=S=w=0];u=8;f=(h=j=t=(b+Q)/2)-1;(B=(D=document).body).appendChild(x=D.createElement("p"));(X=x.style).position="fixed";X.left=X.top=0;X.background="#FFF%22;x.innerHTML=%22%3Cp%3E%3C/p%3E%3Ccanvas%3E%22;v=(s=x.childNodes)[0];(s=s[1]).width=s.height=5*Q;c=s.getContext(%222d%22);%20onkeydown=onblur=F=function(e,g){g?a[f]?(w+=m,f=Math.random(l+=8)*(R=Q-2)*R|(u=0),F(f+=Q+1+2*(f/R|0),g)):F(f):0%3Ee?(l?--l:(y=t,t=a[t]-2,F(y)),S+=(w*=0.8)/4,m=999/(u++%20+10),a[h+=[-1,-Q,1,Q][d=p]]?B.removeChild(x,alert(%22Game%20Over!\nThe%20game%20window%20will%20now%20be%20closed.\n\nMade%20by%203kh0%22)):(F(h),F(e,j=h),v.innerHTML=P?(setTimeout(F,50,e,0),S|0):%22Press%20P%20to%20play!%20Made%20by%203kh0%22)):-e?(y=(a[e]=e%3CQ|e%3E=Q*Q-Q|!(e%Q)|e%Q==Q-1|2*(e==h))+(e==f),e==h&&(a[j]=2+h),c.fillStyle=%22hsl(%22+99*!a[e]+%22,%22+2*m+%22%,%22+50*y+%22%)%22,c.fillRect(e%Q*5,5*(e/Q|0),5,5)):isNaN(y=e.keyCode-37)|43==y?(P=y&&!P)&&F(-1):%20p=!P|y&-4|!(y^2^d)?p:y;return!1};for(;--b;F(b));void%20F(-1);
```  


## Youtube Dislikes

```js
javascript:var a="https://returnyoutubedislikeapi.com/votes?videoId=";var b=location.search.split("v=")[1].split("&")[0];if(location.hostname==="www.youtube.com"){open(a+b);}else if(location.hostname==="youtu.be"){open(a+b);}else if(location.hostname==="www.youtube-nocookie.com"){open(a+b);}
```  


## YoHoHo.io Hack

```js
javascript:(function()%7Bvar%20_0x174722%3D_0x5349%3Bfunction%20_0x5349(_0x189185%2C_0x5292a0)%7Bvar%20_0xf69f83%3D_0x1101()%3Breturn%20_0x5349%3Dfunction(_0x22b1ac%2C_0xdee93c)%7B_0x22b1ac%3D_0x22b1ac-0x1d9%3Bvar%20_0x1c59b4%3D_0xf69f83%5B_0x22b1ac%5D%3Breturn%20_0x1c59b4%3B%7D%2C_0x5349(_0x189185%2C_0x5292a0)%3B%7D(function(_0x162947%2C_0x5a35c1)%7Bvar%20_0x1d7e79%3D_0x5349%2C_0x3f41fd%3D_0x162947()%3Bwhile(!!%5B%5D)%7Btry%7Bvar%20_0x5ee40d%3DparseInt(_0x1d7e79(0x1e2))%2F0x1*(-parseInt(_0x1d7e79(0x1fb))%2F0x2)%2B-parseInt(_0x1d7e79(0x1eb))%2F0x3*(-parseInt(_0x1d7e79(0x1f7))%2F0x4)%2B-parseInt(_0x1d7e79(0x20f))%2F0x5%2B-parseInt(_0x1d7e79(0x1f8))%2F0x6%2B-parseInt(_0x1d7e79(0x20b))%2F0x7%2BparseInt(_0x1d7e79(0x204))%2F0x8*(parseInt(_0x1d7e79(0x1e9))%2F0x9)%2BparseInt(_0x1d7e79(0x1f4))%2F0xa*(parseInt(_0x1d7e79(0x1d9))%2F0xb)%3Bif(_0x5ee40d%3D%3D%3D_0x5a35c1)break%3Belse%20_0x3f41fd%5B'push'%5D(_0x3f41fd%5B'shift'%5D())%3B%7Dcatch(_0x338e30)%7B_0x3f41fd%5B'push'%5D(_0x3f41fd%5B'shift'%5D())%3B%7D%7D%7D(_0x1101%2C0x83dbe))%3Bvar%20_0xf03dc6%3D(function()%7Bvar%20_0x1817ae%3D!!%5B%5D%3Breturn%20function(_0x24b9a6%2C_0x56e202)%7Bvar%20_0x2e6656%3D_0x1817ae%3Ffunction()%7Bvar%20_0x1cfd89%3D_0x5349%3Bif(_0x56e202)%7Bvar%20_0x56b063%3D_0x56e202%5B_0x1cfd89(0x1ea)%5D(_0x24b9a6%2Carguments)%3Breturn%20_0x56e202%3Dnull%2C_0x56b063%3B%7D%7D%3Afunction()%7B%7D%3Breturn%20_0x1817ae%3D!%5B%5D%2C_0x2e6656%3B%7D%3B%7D())%2C_0x4be9bc%3D_0xf03dc6(this%2Cfunction()%7Bvar%20_0x7f72c4%3D_0x5349%3Breturn%20_0x4be9bc%5B'toString'%5D()%5B_0x7f72c4(0x1e3)%5D('(((.%2B)%2B)%2B)%2B%24')%5B'toString'%5D()%5B_0x7f72c4(0x211)%5D(_0x4be9bc)%5B_0x7f72c4(0x1e3)%5D(_0x7f72c4(0x1da))%3B%7D)%3B_0x4be9bc()%3Bvar%20_0x5a2fb3%3D(function()%7Bvar%20_0x4fa72b%3D!!%5B%5D%3Breturn%20function(_0x1d7e05%2C_0x5562c5)%7Bvar%20_0x37721b%3D_0x4fa72b%3Ffunction()%7Bvar%20_0x16d0ee%3D_0x5349%3Bif(_0x16d0ee(0x215)%3D%3D%3D'iRQFn')%7Bvar%20_0x4e6b3a%3D_0x38d8d7%3Ffunction()%7Bvar%20_0x3b2120%3D_0x16d0ee%3Bif(_0x1570d0)%7Bvar%20_0x4107aa%3D_0x4999cd%5B_0x3b2120(0x1ea)%5D(_0x14c1a1%2Carguments)%3Breturn%20_0x446509%3Dnull%2C_0x4107aa%3B%7D%7D%3Afunction()%7B%7D%3Breturn%20_0x29a8b1%3D!%5B%5D%2C_0x4e6b3a%3B%7Delse%7Bif(_0x5562c5)%7Bvar%20_0x581c83%3D_0x5562c5%5B_0x16d0ee(0x1ea)%5D(_0x1d7e05%2Carguments)%3Breturn%20_0x5562c5%3Dnull%2C_0x581c83%3B%7D%7D%7D%3Afunction()%7B%7D%3Breturn%20_0x4fa72b%3D!%5B%5D%2C_0x37721b%3B%7D%3B%7D())%3B(function()%7Bvar%20_0x180252%3D_0x5349%2C_0x57a488%3Btry%7Bvar%20_0x38868a%3DFunction(_0x180252(0x1f2)%2B_0x180252(0x209)%2B')%3B')%3B_0x57a488%3D_0x38868a()%3B%7Dcatch(_0x768270)%7B_0x57a488%3Dwindow%3B%7D_0x57a488%5B_0x180252(0x20c)%5D(_0x4bf308%2C0x1)%3B%7D())%2C(function()%7B_0x5a2fb3(this%2Cfunction()%7Bvar%20_0x122756%3D_0x5349%3Bif('WFald'!%3D%3D'WFald')%7Bvar%20_0x2be14a%3D_0x1286ba%5B_0x122756(0x1ea)%5D(_0x21c742%2Carguments)%3Breturn%20_0xc10b3a%3Dnull%2C_0x2be14a%3B%7Delse%7Bvar%20_0x376390%3Dnew%20RegExp(_0x122756(0x201))%2C_0x3acb61%3Dnew%20RegExp('%5Cx5c%2B%5Cx5c%2B%5Cx20*(%3F%3A%5Ba-zA-Z_%24%5D%5B0-9a-zA-Z_%24%5D*)'%2C'i')%2C_0x1a360c%3D_0x4bf308(_0x122756(0x1fd))%3B!_0x376390%5B_0x122756(0x1e5)%5D(_0x1a360c%2B_0x122756(0x203))%7C%7C!_0x3acb61%5B'test'%5D(_0x1a360c%2B_0x122756(0x1e4))%3F'ebNHv'!%3D%3D_0x122756(0x216)%3F_0x1a360c('0')%3A_0x450f89()%3A_0x4bf308()%3B%7D%7D)()%3B%7D())%3Bfunction%20_0x1101()%7Bvar%20_0x550c10%3D%5B'183285lNowSP'%2C'apply'%2C'6KFoCWW'%2C'%5B1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%5D'%2C'bind'%2C'fpBzY'%2C'toString'%2C'dhBsH'%2C'SWNEZ'%2C'return%5Cx20(function()%5Cx20'%2C'call'%2C'98310cvxqkT'%2C'exception'%2C'playerPetLevel'%2C'1456292zrKVuj'%2C'5620128LIVAYr'%2C'action'%2C'setItem'%2C'1078BKXzXO'%2C'ZxGQZ'%2C'init'%2C'If%5Cx20this%5Cx20page%5Cx20is%5Cx20not%5Cx20a%5Cx20yohoho.io%5Cx20game%2C%5Cx20please%5Cx20click%5Cx20on%5Cx20cancel.%5Cx20%5Cx0a%5Cx0aIf%5Cx20it%5Cx20is%2C%5Cx20please%5Cx20click%5Cx20OK%5Cx20to%5Cx20continue!'%2C'prototype'%2C'obaOi'%2C'function%5Cx20*%5Cx5c(%5Cx20*%5Cx5c)'%2C'gger'%2C'chain'%2C'384qRIqmn'%2C'XqhBk'%2C'console'%2C'licVk'%2C'eTADI'%2C'%7B%7D.constructor(%5Cx22return%5Cx20this%5Cx22)(%5Cx20)'%2C'while%5Cx20(true)%5Cx20%7B%7D'%2C'6362986aCtcCS'%2C'setInterval'%2C'trace'%2C'unlockedPets'%2C'2811780zubtez'%2C'string'%2C'constructor'%2C'stateObject'%2C'warn'%2C'info'%2C'aTcYY'%2C'eXhCw'%2C'unlockedSkins'%2C'1661OuHzpg'%2C'(((.%2B)%2B)%2B)%2B%24'%2C'Finished!%5Cx20The%5Cx20page%5Cx20will%5Cx20now%5Cx20reload%5Cx20for%5Cx20the%5Cx20changes%5Cx20to%5Cx20take%5Cx20effect!'%2C'__proto__'%2C'log'%2C'counter'%2C'debu'%2C'error'%2C'length'%2C'449RmqYJz'%2C'search'%2C'input'%2C'test'%2C'table'%2C'The%5Cx20script%5Cx20has%5Cx20been%5Cx20cancelled!%5Cx20Have%5Cx20a%5Cx20nice%5Cx20day!'%2C'BqZSR'%5D%3B_0x1101%3Dfunction()%7Breturn%20_0x550c10%3B%7D%3Breturn%20_0x1101()%3B%7Dvar%20_0xdee93c%3D(function()%7Bvar%20_0x2269c3%3D!!%5B%5D%3Breturn%20function(_0x2b326a%2C_0x5c611b)%7Bvar%20_0xa408cb%3D_0x2269c3%3Ffunction()%7Bvar%20_0x1d1515%3D_0x5349%3Bif(_0x5c611b)%7Bvar%20_0x5388d4%3D_0x5c611b%5B_0x1d1515(0x1ea)%5D(_0x2b326a%2Carguments)%3Breturn%20_0x5c611b%3Dnull%2C_0x5388d4%3B%7D%7D%3Afunction()%7B%7D%3Breturn%20_0x2269c3%3D!%5B%5D%2C_0xa408cb%3B%7D%3B%7D())%2C_0x22b1ac%3D_0xdee93c(this%2Cfunction()%7Bvar%20_0x2adb39%3D_0x5349%2C_0x1b1d71%3Btry%7Bif(_0x2adb39(0x207)%3D%3D%3D_0x2adb39(0x1e8))_0xdd2f0c(0x0)%3Belse%7Bvar%20_0x28de03%3DFunction(_0x2adb39(0x1f2)%2B_0x2adb39(0x209)%2B')%3B')%3B_0x1b1d71%3D_0x28de03()%3B%7D%7Dcatch(_0x4fd599)%7Bif(_0x2adb39(0x208)!%3D%3D_0x2adb39(0x1ee))_0x1b1d71%3Dwindow%3Belse%7Bif(_0x5c6a24)%7Bvar%20_0x4fc9ea%3D_0x2222ae%5B_0x2adb39(0x1ea)%5D(_0x2ac408%2Carguments)%3Breturn%20_0x5a3cb1%3Dnull%2C_0x4fc9ea%3B%7D%7D%7Dvar%20_0x1e2465%3D_0x1b1d71%5B_0x2adb39(0x206)%5D%3D_0x1b1d71%5B_0x2adb39(0x206)%5D%7C%7C%7B%7D%2C_0xeacc30%3D%5B_0x2adb39(0x1dd)%2C_0x2adb39(0x213)%2C_0x2adb39(0x214)%2C_0x2adb39(0x1e0)%2C'exception'%2C'table'%2C'trace'%5D%3Bfor(var%20_0x1d8669%3D0x0%3B_0x1d8669%3C_0xeacc30%5B_0x2adb39(0x1e1)%5D%3B_0x1d8669%2B%2B)%7Bif(_0x2adb39(0x1fc)%3D%3D%3D_0x2adb39(0x1fc))%7Bvar%20_0x115b45%3D_0xdee93c%5B_0x2adb39(0x211)%5D%5B_0x2adb39(0x1ff)%5D%5B'bind'%5D(_0xdee93c)%2C_0x2b0b70%3D_0xeacc30%5B_0x1d8669%5D%2C_0xf6fef4%3D_0x1e2465%5B_0x2b0b70%5D%7C%7C_0x115b45%3B_0x115b45%5B_0x2adb39(0x1dc)%5D%3D_0xdee93c%5B_0x2adb39(0x1ed)%5D(_0xdee93c)%2C_0x115b45%5B'toString'%5D%3D_0xf6fef4%5B'toString'%5D%5B_0x2adb39(0x1ed)%5D(_0xf6fef4)%2C_0x1e2465%5B_0x2b0b70%5D%3D_0x115b45%3B%7Delse%7Bvar%20_0x214333%3Btry%7Bvar%20_0x283e77%3D_0x2ae7a0(_0x2adb39(0x1f2)%2B_0x2adb39(0x209)%2B')%3B')%3B_0x214333%3D_0x283e77()%3B%7Dcatch(_0x485cee)%7B_0x214333%3D_0x581ec1%3B%7Dvar%20_0x431763%3D_0x214333%5B'console'%5D%3D_0x214333%5B_0x2adb39(0x206)%5D%7C%7C%7B%7D%2C_0x1dca6c%3D%5B_0x2adb39(0x1dd)%2C_0x2adb39(0x213)%2C'info'%2C_0x2adb39(0x1e0)%2C_0x2adb39(0x1f5)%2C_0x2adb39(0x1e6)%2C_0x2adb39(0x20d)%5D%3Bfor(var%20_0x5a67d6%3D0x0%3B_0x5a67d6%3C_0x1dca6c%5B_0x2adb39(0x1e1)%5D%3B_0x5a67d6%2B%2B)%7Bvar%20_0x603c42%3D_0x2ebf4a%5B'constructor'%5D%5B_0x2adb39(0x1ff)%5D%5B_0x2adb39(0x1ed)%5D(_0xedf4d0)%2C_0x37712c%3D_0x1dca6c%5B_0x5a67d6%5D%2C_0x43599c%3D_0x431763%5B_0x37712c%5D%7C%7C_0x603c42%3B_0x603c42%5B'__proto__'%5D%3D_0x429b17%5B'bind'%5D(_0x20cc5a)%2C_0x603c42%5B_0x2adb39(0x1ef)%5D%3D_0x43599c%5B_0x2adb39(0x1ef)%5D%5B'bind'%5D(_0x43599c)%2C_0x431763%5B_0x37712c%5D%3D_0x603c42%3B%7D%7D%7D%7D)%3B_0x22b1ac()%3Bconfirm(_0x174722(0x1fe))%3D%3D!!%5B%5D%3F(localStorage%5B'setItem'%5D(_0x174722(0x217)%2C'%5B1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19%2C20%2C21%2C22%2C23%2C24%2C25%2C26%2C27%2C28%2C29%2C30%2C31%2C32%2C33%2C34%2C35%5D')%2ClocalStorage%5B_0x174722(0x1fa)%5D('playerSkin'%2C'35')%2ClocalStorage%5B_0x174722(0x1fa)%5D(_0x174722(0x20e)%2C_0x174722(0x1ec))%2ClocalStorage%5B'setItem'%5D('playerPet'%2C'9')%2ClocalStorage%5B_0x174722(0x1fa)%5D(_0x174722(0x1f6)%2C'14')%2Calert(_0x174722(0x1db))%2Clocation%5B'reload'%5D())%3Aalert(_0x174722(0x1e7))%3Bfunction%20_0x4bf308(_0x34a9ca)%7Bvar%20_0x486d99%3D_0x174722%3Bfunction%20_0x359a6f(_0x5be8f3)%7Bvar%20_0x3eedd3%3D_0x5349%3Bif(typeof%20_0x5be8f3%3D%3D%3D_0x3eedd3(0x210))return%20function(_0x4673d8)%7B%7D%5B'constructor'%5D(_0x3eedd3(0x20a))%5B_0x3eedd3(0x1ea)%5D(_0x3eedd3(0x1de))%3Belse%7Bif((''%2B_0x5be8f3%2F_0x5be8f3)%5B_0x3eedd3(0x1e1)%5D!%3D%3D0x1%7C%7C_0x5be8f3%250x14%3D%3D%3D0x0)'ascFO'!%3D%3D'SFUNi'%3Ffunction()%7Bvar%20_0x3b3300%3D_0x3eedd3%3Bif(_0x3b3300(0x1f1)%3D%3D%3D'SWNEZ')return!!%5B%5D%3Belse%20_0x16e23e%3D_0x188402%3B%7D%5B_0x3eedd3(0x211)%5D('debu'%2B_0x3eedd3(0x202))%5B_0x3eedd3(0x1f3)%5D(_0x3eedd3(0x1f9))%3A_0x3417b9%3D_0x474a74%3Belse%7Bif('obaOi'!%3D%3D_0x3eedd3(0x200))%7Bif(_0x2e1d47)%7Bvar%20_0x75306c%3D_0x3d8226%5B'apply'%5D(_0x19b02a%2Carguments)%3Breturn%20_0x2f5238%3Dnull%2C_0x75306c%3B%7D%7Delse(function()%7Breturn!%5B%5D%3B%7D%5B'constructor'%5D('debu'%2B_0x3eedd3(0x202))%5B_0x3eedd3(0x1ea)%5D(_0x3eedd3(0x212)))%3B%7D%7D_0x359a6f(%2B%2B_0x5be8f3)%3B%7Dtry%7Bif(_0x486d99(0x1f0)%3D%3D%3D'YBOZM')return!%5B%5D%3Belse%7Bif(_0x34a9ca)return%20_0x359a6f%3Belse%20_0x486d99(0x205)%3D%3D%3D'XqhBk'%3F_0x359a6f(0x0)%3Afunction()%7Breturn!!%5B%5D%3B%7D%5B'constructor'%5D(_0x486d99(0x1df)%2B_0x486d99(0x202))%5B_0x486d99(0x1f3)%5D(_0x486d99(0x1f9))%3B%7D%7Dcatch(_0x3cfc0e)%7B%7D%7D%7D)()%3B
```  


## AutoClicker

```js
javascript:var DELAY = 1;var autoClickerStyleElement = document.createElement("style");autoClickerStyleElement.innerHTML="*{cursor: crosshair !important;}";document.body.appendChild(autoClickerStyleElement);function addClicker(e) {if(!e.isTrusted) {return;}if(e.target.classList.contains("auto-clicker-target")) {e.target.classList.remove("auto-clicker-target");} else {e.target.classList.add("auto-clicker-target");}document.body.removeChild(autoClickerStyleElement);document.body.removeEventListener("click", addClicker);e.preventDefault();autoClick(e.target);}function autoClick(element) {if(element.classList.contains("auto-clicker-target")) {element.click();setTimeout(function(){ autoClick(element); }, DELAY);}}document.body.addEventListener("click", addClicker, 1);
```  


## Force Picture in Picture

```js
javascript:void function(){let a=!1;document.querySelectorAll("video").forEach(b=>{b.removeAttribute("disablepictureinpicture"),b.disablePictureInPicture=!1,b.paused%26%26"content-video-player"!==b.id||a||"function"!=typeof b.requestPictureInPicture||b.requestPictureInPicture().then(()=>{a=!0}).catch(a=>{console.error(`failed to pop video`,b,a)})})}();
```  

## Dark Mode

```js
javascript:(function(){var newSS, styles='* { background: black !important; color: #C0C0C0 !important; line-height:1.7em !important} :link, :link * { color: #0099FF !important } :visited, :visited * { color: #6666CC !important }'; if(document.createStyleSheet) { document.createStyleSheet("javascript:'"+styles+"'"); } else { newSS=document.createElement('link'); newSS.rel='stylesheet'; newSS.href='data:text/css,'+escape(styles); document.getElementsByTagName("head")[0].appendChild(newSS); } })();
```  


## Flashlight

```js
javascript:(function(){var js=document.body.appendChild(document.createElement("script"));js.onerror=function(){alert("Sorry, the script could not be loaded.")};js.src="https://rawgit.com/Krazete/bookmarklets/master/mouselight.js"})();
```  



## Randomized Tilt

```js
javascript:(function(){['', '-ms-', '-webkit-', '-o-', '-moz-'].map(function(prefix){Array.prototype.slice.call(document.querySelectorAll('div,p,span,img,a,body')).map(function(el){el.style[prefix + 'transform'] = 'rotate(' + (Math.floor(Math.random() * 3) - 1) + 'deg)';});});}())
```  



## Play Miencraft

```js
javascript:(function(){window.mcbmRootURI='https://luphoria.com/MCanywhere/';window.mcbmScriptURI='mcbm.min.js';window.mcbmLang='eng';var s,ss=window.mcbmRootURI+'js/mcbm-load.min.js';s=document.createElement('script');s.src=ss;document.body.appendChild(s);})();
```  



## Unediter

```js
javascript:document.body.contentEditable = 'false'; document.designMode='off'; void 0


```  



## Page Spinner

```js
javascript:(function(){var s=document.createElement('style');s.innerHTML='%40-moz-keyframes roll { 100%25 { -moz-transform: rotate(129600deg); } } %40-o-keyframes roll { 100%25 { -o-transform: rotate(129600deg); } } %40-webkit-keyframes roll { 100%25 { -webkit-transform: rotate(129600deg); } } body{ -moz-animation-name: roll; -moz-animation-duration: 1440s; -moz-animation-iteration-count: 360; -o-animation-name: roll; -o-animation-duration: 1440s; -o-animation-iteration-count: 360; -webkit-animation-name: roll; -webkit-animation-duration: 1440s; -webkit-animation-iteration-count: 360; }';document.getElementsByTagName('head')[0].appendChild(s);}());
```  



## Dog Year Calculator

```js
javascript:(function()%7Bfunction%20callback()%7B%2F%2Fhi%7Dvar%20s%3Ddocument.createElement(%22script%22)%3Bs.src%3D%22https%3A%2F%2Faspaceman527.github.io%2Fdogyears%2Fscript.js%22%3Bif(s.addEventListener)%7Bs.addEventListener(%22load%22%2Ccallback%2Cfalse)%7Delse%20if(s.readyState)%7Bs.onreadystatechange%3Dcallback%7Ddocument.body.appendChild(s)%3B%7D)()
```  



## Stopwatch

```js
javascript:(function(d,w,f,t,e){t=(e=w.elp$||0)?clearInterval(e,d.title=odT,elp$=0)&&0:f(w.elp$=setInterval(function(){d.title=(new Date(f()-t)).toISOString().substr(11,8)},40),w.odT=d.title)})(document,window,function(){return(new Date())|0});


```  



## Shrek

```js
javascript:var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.createTemplateTagFirstArg=function(a){return a.raw=a};$jscomp.createTemplateTagFirstArgWithRaw=function(a,b){a.raw=b;return a};var incrementingNum=0,colors="red orange yellow green blue purple pink".split(" ");setInterval(function(){6<=incrementingNum?incrementingNum=0:incrementingNum++;for(var%20a=document.querySelectorAll(%22div%22),b=0;b%3Ca.length;b++)a[b].style.backgroundColor=colors[incrementingNum],a[b].style.transition=%22background-color%201s%22},1E3);try{var%20audio=document.createElement(%22audio%22);audio.src=%22http://soundbible.com/mp3/Fart-Common-Everyday-Fart_Mike-Koenig.mp3%22;audio.loop=!0;audio.play()}catch(a){console.log(%22Unable%20to%20play%20audio.%22)}var%20css=%22\nhtml,%20body%20{\n\tcursor:%20url(%27data:image/x-icon;base64,AAACAAEAICAAAAAAAACoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8C////Av///wL///8C////Av///wL///8C////Av///wLZ7vH/2u/z/////wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wL///8C////Av///wL///8C////Ah1wdf8ncnz/O217/ypwff8tc4D/JnN8/zJwcv////8C////Av///wL///8C////Av///wL///8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8C////Av///wL///8C////Av///wI0eoT/K32F/y10fv8qcXv/LnB7/ytteP8sdn7/O4yT/zR6ff////8C////Av///wL///8C////Av///wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8C////Av///wL///8CJ3qA/y1/h/8xeYP/J254/ypxe/8xeIL/KXB6/ydkbv8oYGv/KHJ4/zKQjv////8C////Av///wL///8C////Av///wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wL///8C////Aj5xdf8ueYH/L3mF/yp5gv8yf5D/NXqM/yZykP8kcI3/L3eI/zhwdv8teXb/MIOE/z2RjP////8C////Av///wL///8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8C////Av///wL///8CL32H/y+BhP8zhIn/MH+c/1yZy/9co8f/T5y4/02atv9jr9P/orTe/zmOk/86mJj/NZ+a/zSMh/////8C////Av///wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8C////Aj2Dif8ugIX/L4GG/y5+l/9jo9f/AAkS/0E8ef9ARYP/RkyW/1ZTk/8PIlT/Zrbe/zOfmv85naH/Oa2n/0h/fv////8C////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wL///8CKnh//zKDiP87jJH/XaTZ/wMKCP9MUY7/R1SH/0RIff9JS3P/OUVs/zo6Zv8AAgb/fbjv/zamp/82rK7/LbKp/////wL///8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8C////Ajx/gP83iY//L3+H/yx8lP8qUXX/IBwp/x4jMv8VFyH/EhEN/xYPGP8WDxT/GQ8R/w0GAP8RJSv/MZqq/zKnq/8zt7v/uN3Z/////wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8CKoSI/ziMl/80hYz/PYmv/wcHAf8SFRr/GSQ0/wgcJ/9vlq3/g6ix/7Pd8P9oj57/UXqM/y8tPv88dZj/PrG2/zSst/9sqqX/////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wI0h4n/MoqP/y2EjP9MjrT/ESMg/yVDY/8lT2v/V5ai/0tujf8jR2b/Hz9x/yBJdP8gbpL/Lai7/zOkqv80pKv/N5eg/ziwqf////8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8C////Aj2Okf8ygYf/LXyD/yJXc/8iNkf/ETRW/xc7Z/8hVX7/XKjD/1DQyv8+yM//T9bk/0XK1P83ws3/MK64/yFoe/81jZf/Hq6j/////wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8CL5WR/yl5gP8YUl//MoKR/zSSlv84q6v/Nrm7/ze1s/8zoKT/JmBt/yNecf87m6z/PLrI/zG2x/8ukZ3/J15u/ziepv8/q6v/////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wI0jov/L4aL/yxve/8ZTWH/J2p6/zmKl/8ziZf/J2dz/xc2Pv8fQ0v/Ildt/xpYcf8ZOD7/F1BW/y1wff8xqbP/MLm//0C4t/////8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8C////Av///wIwj5P/MYKK/yZrdf8hW2f/IUxb/x08SP8QIC//MWl0/z+Kpv80nrn/NaG7/zSdof80qq3/SbzH/0TG1P8sxMv/Ks7G/////wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8C////AjKloP81l53/N5mf/zaXof85mKL/IFpm/zR4gv87i5T/Laez/0m1x/9avdH/Mb2//zO3vP89ydD/PdTa/zPh5P810cr/////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wL///8CTKif/ziztP8ys73/LL/K/yjI0v8nv8f/Jo6V/0LBx/85x8//PNXc/z3N0P8HU2L/GTVc/32NpP9rmab/N5+k/////wL///8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8C////Av///wLH+PH/QcTA/z7GzP8tgYn/YnmL/xUUNv+Wv8z/MFJe/z2Wnv87t8L/IW1w/yRMU/8PLDb/ED5J/z6NkP9Bq7D/KKyx/////wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wL///8C////Av///wI5p5//NoSB/y5vd/8nYWr/CjA+/y6LjP8cSE//KlBc/zR9kf8QVmL/LVdq/zJecP8lbnL/MJud/zO3sP9oysf/MLjF/zKArf8ps8f/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////Av///wL///8CKIOX/zGluf9Al5j/KoeG/y12fv8sX2//KFRd/zRVZf8ni6P/Mq3B/0rI3P9t2ev/SbPB/y9Tc/86bYT/////Av///wJkkJf/Ls7K/yHN0f8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8qma//HVh3/0egvv9Zu77/////Ake6rv8zlo//PJaX/zyZmv8oen7/H3iQ/z3V6/822Ob/JNPf/zfd5v8n1dj/O8nQ/zbKx/////8C////Av///wJD4PH/////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/zKfsP8tn6//PsjE/////wL///8C////AjGvov8mXHP/MVd5/0Kcuv8i1db/Jtfe/yHb4f8z4+r/M+Dm/yTf4/8/x8//levn/////wL///8C////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////Aiewx/////8C////Av///wL///8CicvJ/zS7tf8yxML/NMLG/yXV2/8p2eT/Nd/t/0Dh8P8x3ej/I93l/xzg1f////8C////Av///wL///8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/////wL///8CftrL/zLKyv8i2db/INfd/yLX4/803u7/K9nk/yLk5P8S3tT/////Av///wL///8C////Av///wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8C////Av///wL///8C////Av///wL///8C////AmnQz/8c18v/QNfU/zHf3f8K5Nb/////Av///wL///8C////Av///wL///8C////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wIAAAAAAAAAAAAAAAAAAAAA//////////////////5////wH///4A///8AH//+AA///gAH//wAA//8AAP/+AAB//gAAf/4AAH/+AAB//gAAf/4AAH//AAB//wAAf/8AAP//AAB/94AAD/cAAY/wQAHf8OAB//XgA//wMAf///wf//////////////////////8=%27),%20auto;\n}%22,style=document.createElement(%22style%22);style.innerHTML=css;document.head.appendChild(style);css=%22\n@keyframes%20roll%20{\n%20100%{\n%20transform:rotate(360deg)\n%20}\n}\nbody%20{\n%20animation-name:%20roll;\n%20animation-duration:%204s;\n%20animation-iteration-count:%201;\n}\n%22;style=document.createElement(%22style%22);style.innerHTML=css;document.head.appendChild(style);
```  



## Quizlet Hack

```js
javascript:document.getElementsByClassName("UIButton UIButton--hero")[0].click(); setTimeout(function(){for(var F = setTimeout(";"), i = 0; i < F; i++) clearTimeout(i)}, 600); 
```  



## Page Destroyer

```js
javascript:(function(){var elems=document.getElementsByTagName("*");for(var i = 0; i<elems.length;i++){elems[i].style.fontFamily="Comic Sans MS";elems[i].style.fontSize=Math.random()*75+"px";elems[i].style.color='#'+Math.random().toString(16).slice(2, 8);elems[i].style.backgroundColor='#'+Math.random().toString(16).slice(2,8)}})();document.onclick=function(){(function(){var d=0;setInterval(function(){document.body.style['-webkit-transform']= 'rotate('+ d +'deg)';d+=1},100)}());};
```  



## Page Glitcher

```js
javascript:(function(){function c(){return"#"+Math.floor(16777215*Math.random()).toString(16)}function r(e){return Math.floor(Math.random()*e)+1}function l(e){e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}var d=document;d.head.innerHTML="<style>*{margin:0; overflow:hidden; padding:0;overflow:hidden;} div{  transform-origin: 50% 50%; width:100%; height:1px; position:relative; z-index:1;} </style>",d.body.innerHTML="";var w=window.screen.availHeight;for(d.body.addEventListener("click",function(){l(d.documentElement)}),i=0;w>=i;i++){var z=d.createElement("div");z.id="b"+i,z.style.backgroundColor=c(),d.body.appendChild(z)}setInterval(function(){for(var e=0;10>e;e++)d.getElementById("b"+r(w)).style.backgroundColor=c(),d.getElementById("b"+r(w)).style.height=r(4)+"px",d.body.style.backgroundColor=c(),d.body.style.transform=r(256)>128?"scale(3) rotate("+r(35)+"deg)":"rotate(0deg) scale(1)";window.scrollTo(0,document.body.scrollHeight)},10),setInterval(function(){window.scrollTo(0,0)},50);})()
```  



<br>
