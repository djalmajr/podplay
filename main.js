!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=7)}([function(t,e){t.exports=hyperHTML},function(t,e,r){},function(t,e,r){},function(t,e,r){},function(t,e,r){},function(t,e,r){},function(t,e){var r;Element.prototype.offset=function(){const t=this.getBoundingClientRect();return{top:t.top+(window.pageYOffset||document.documentElement.scrollTop),left:t.left+(window.pageXOffset||document.documentElement.scrollLeft)}},Element.prototype.css=function(t){if("string"==typeof t)return getComputedStyle(this,"")[t];if("object"==typeof t)for(let e in t)void 0!==this.style[e]&&(this.style[e]=t[e])},(r=Element.prototype).matches=r.matches||r.matchesSelector||r.webkitMatchesSelector||r.msMatchesSelector||function(t){let e=this,r=(e.parentNode||e.document).querySelectorAll(t),n=-1;for(;r[++n]&&r[n]!=e;);return!!r[n]},function(t){t.closest=t.closest||function(t){let e=this;for(;e.matches&&!e.matches(t);)e=e.parentNode;return e.matches?e:null}}(Element.prototype)},function(t,e,r){"use strict";r.r(e);var n=r(0),o=(r(1),()=>("onwheel"in document?"wheel":"onmousewheel"in document&&"mousewheel")||"MozMousePixelScroll"),s=t=>{const e=t.currentTarget,r=e.classList.contains("volume"),n=`.${r?"volume":"progress"}-bar`,s=e.querySelector(n);if(!r){const r=t.clientX-s.offset().left+window.pageXOffset;return Math.round(100*r/e.offsetWidth)}let a=parseInt(s.css("height"),10);if(t.type===o()){a=(t.deltaY||t.detail||-t.wheelDelta)>0?a-10:a+10}else{const e=s.parentNode,r=e.offset().top+e.offsetHeight-window.pageYOffset;a=Math.round(r-t.clientY)}return(a>100?100:a>0&&a)||0};function a(t,e){const r=new Notification(t.substr(0,110),e);setTimeout(r.close.bind(r),5e3)}var i=function(t,e){"Notification"in window&&("granted"!==Notification.permission?Notification.requestPermission(function(r){"granted"===r&&a(t,e)}):a(t,e))};let l,c=0,p=!1,d=!1,u=!1,m=!1;const h=()=>{p&&!m&&0!==l.readyState&&(l.currentTime=l.duration*(c/100)),c=0,p=!1,d=!1};const g={before:!1,regex:/^(_|init|is|get).*/g};var f=function(t,e={}){const r=Object.assign({},g,e),n=Object.keys(this).filter(t=>"function"==typeof this[t]).filter(t=>!t.match(r.regex));for(const e of n)this[e]=(()=>{const n=this[e];return r.before?(...e)=>!!t()&&n(...e):(...e)=>!n(...e)&&t()})();t()};let v,y,w;const b=()=>!!w.length,M=()=>{};var k={title:"My Playlist",tracks:[{title:"Hitmans",description:"Muito bem (3x), o seu podcast semanal de teologia está no ar. Nesse episódio Bibo, Will e André invadem as praças da Grécia…",image:"http://bibotalk.com/wp-content/uploads/2018/12/fde60post-360x200.png",url:"http://incompetech.com/music/royalty-free/mp3-royaltyfree/Hitman.mp3"},{title:"Dreamer",description:"Muito bem (3x), o seu podcast semanal de teologia está no ar. Nesse episódio Bibo, Will e André invadem as praças da Grécia…",image:"http://bibotalk.com/wp-content/uploads/2018/12/fde60post-360x200.png",url:"http://incompetech.com/music/royalty-free/mp3-royaltyfree/Dreamer.mp3"},{title:"District Four",description:"Muito bem (3x), o seu podcast semanal de teologia está no ar. Nesse episódio Bibo, Will e André invadem as praças da Grécia…",image:"http://bibotalk.com/wp-content/uploads/2018/12/fde60post-360x200.png",url:"http://incompetech.com/music/royalty-free/mp3-royaltyfree/District%20Four.mp3"},{title:"Christmas Rap",description:"Muito bem (3x), o seu podcast semanal de teologia está no ar. Nesse episódio Bibo, Will e André invadem as praças da Grécia…",image:"http://bibotalk.com/wp-content/uploads/2018/12/fde60post-360x200.png",url:"http://incompetech.com/music/royalty-free/mp3-royaltyfree/Christmas%20Rap.mp3"},{title:"Rocket Power",description:"Muito bem (3x), o seu podcast semanal de teologia está no ar. Nesse episódio Bibo, Will e André invadem as praças da Grécia…",image:"http://bibotalk.com/wp-content/uploads/2018/12/fde60post-360x200.png",url:"http://incompetech.com/music/royalty-free/mp3-royaltyfree/Rocket%20Power.mp3"}]};let x,$,T;const E=document.title,O={buffered:!0,changeDocTitle:!0,confirmClose:!0,skipTime:15,notification:!0,volume:.7},P=t=>{O.changeDocTitle&&(document.title=t||E)};var _={init(t){T=t,x=new class{constructor(t={}){(l=new Audio).volume=t.volume,l.preload="auto",document.addEventListener("mouseup",h,!1)}get playing(){return u}get repeat(){return!1}get seeking(){return p}get buffered(){return l.buffered}get currentTime(){return l.currentTime||0}get duration(){return l.duration||0}get preload(){if(!this.playing)return 0;const t=l.buffered.length?l.buffered.end(0):l.currentTime;return Math.round(100*t/l.duration)}get progress(){return p?c:Math.round(100*this.currentTime/this.duration)}get volume(){return l.volume}onUpdate(t){l.addEventListener("timeupdate",t,!1)}onEnd(t){l.addEventListener("ended",t,!1)}onError(t){l.addEventListener("error",t,!1)}changeProgress(t){m=3===t.which,p=!0,this.setProgress(t)}changeVolume(t){m=3===t.which,d=!0,this.setVolume(t)}play(t){u=!0,t&&t.url!==l.src&&(l.src=t.url,i(t.title,{icon:t.image,body:"Now playing"})),l.currentTime===l.duration&&(l.currentTime=0,i(t.title,{icon:t.image,body:"Now playing"})),l.play()}pause(){u=!1,l.pause()}forward(t=15){const e=l.currentTime+t;l.currentTime=e>l.duration?l.duration:e}rewind(t=15){const e=l.currentTime-t;l.currentTime=e<0?0:e}setProgress(t,e){t.preventDefault(),p&&!m&&0!==l.readyState&&(c=s(t),e&&e(c))}setVolume(t){if(t.preventDefault(),d&&!m||t.type===o()){const e=s(t)/100;e<=0?(l.volume=0,l.muted=!0):(l.muted&&(l.muted=!1),l.volume=e)}}}(O),$=new class{constructor({title:t,tracks:e=[]}={}){y=t,w=e,f.call(this,b,{before:!0}),f.call(this,M),this.reset()}get index(){return v}get isLast(){return v===w.length-1}get title(){return y}get tracks(){return w}get trackUrl(){return(w[v]||{}).url}changeTrack(t){v=t}nextTrack(){v=this.isLast?0:v+1}prevTrack(){v=0===v?this.lastIndex:v-1}reset(){v=0}}(k),f.call(this,t),O.confirmClose&&window.addEventListener("beforeunload",this.handleUnload,!1),x.onUpdate(t),x.onEnd(this.handleEnd),x.onError(this.handleError)},handleEnd(){$.tracks.length;x.pause()},handleError(t){x.pause(),P(),i("Houston we have a problem",{body:{1:"MEDIA_ERR_ABORTED",2:"MEDIA_ERR_NETWORK",3:"MEDIA_ERR_DECODE",4:"MEDIA_ERR_SRC_NOT_SUPPORTED"}[t.target.error.code],icon:"http://bibotalk.com/wp-content/uploads/2015/04/favicon_144.png"})},handleUnload(t){if(x.playing)return t.returnValue="Music still playing!",t.returnValue},get isEmptyList(){return 0===$.tracks.length},get playing(){return x.playing},get tracks(){return $.tracks},get currentTime(){const t=Math.floor(x.currentTime/60),e=Math.floor(x.currentTime-60*t);return`${t}:${e<10?"0"+e:e}`},get duration(){const t=Math.floor(x.duration/60),e=Math.floor(x.duration-60*t);return`${t}:${e<10?"0"+e:e}`},get preload(){return O.buffered?x.preload:this.progress},get progress(){return x.progress},get seeking(){return x.seeking},get skipTime(){return O.skipTime},get volume(){return x.volume},changeProgress(t){x.changeProgress(t)},changeVolume(t){x.changeVolume(t)},playPause(t){if(t.preventDefault(),x.playing)return P(),void x.pause();const e=k.tracks[0];P(e.title),x.play(e)},forward(t){t.preventDefault(),x.forward(O.skipTime)},rewind(t){t.preventDefault(),x.rewind(O.skipTime)},setProgress(t){x.setProgress(t,T)},setVolume(t){x.setVolume(t)}};r(2);const q=(t,e)=>Object(n.wire)(t,":playlist-track")`
  <li class=${`playlist-item ${0===e?"is-active":""}`} data-track=${e}>
    <div class="playlist-item-track">
      <img src="http://bibotalk.com/wp-content/uploads/2018/12/fde60post-360x200.png" />
      <div class="playlist-item-icon"></div>
      <div class="playlist-item-eq">
        <div class="eq">
          <div class="eq-bar"></div>
          <div class="eq-bar"></div>
          <div class="eq-bar"></div>
        </div>
      </div>
    </div>
    <div class="playlist-item-info">
      <div class="playlist-item-title">${t.title}</div>
      <div class="playlist-item-desc">${t.description}</div>
    </div>
  </li>
`;r(3);r(4),r(5);const S=Object(n.wire)(),D=Object(n.wire)(),j=Object(n.wire)(),R=Object(n.wire)();var N=t=>t`
  ${(t=>t`
  <div class="topbar">
    <i class="icon ion-md-arrow-back"></i> <span class="topbar-title">Os Outros</span>
    <i class="icon ion-ios-more"></i>
  </div>
`)(S)}
  ${(t=>t`
  <ul class="playlist">
    ${_.tracks.map(q)}
  </ul>
`)(D)}
  ${(t=>{const e={width:`calc(100% - ${_.playing?5:4} * 45px)`},r={height:`${100*_.volume}%`},n={width:`${_.preload}%`},o={width:`${_.progress}%`},s=_.playing?"M 12,26 16.33,26 16.33,10 12,10 z M 20.66,26 25,26 25,10 20.66,10 z":"M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z",a=_.volume?"M14.016 3.234q3.047 0.656 5.016 3.117t1.969 5.648-1.969 5.648-5.016 3.117v-2.063q2.203-0.656 3.586-2.484t1.383-4.219-1.383-4.219-3.586-2.484v-2.063zM16.5 12q0 2.813-2.484 4.031v-8.063q2.484 1.219 2.484 4.031zM3 9h3.984l5.016-5.016v16.031l-5.016-5.016h-3.984v-6z":"M12 3.984v4.219l-2.109-2.109zM4.266 3l16.734 16.734-1.266 1.266-2.063-2.063q-1.734 1.359-3.656 1.828v-2.063q1.172-0.328 2.25-1.172l-4.266-4.266v6.75l-5.016-5.016h-3.984v-6h4.734l-4.734-4.734zM18.984 12q0-2.391-1.383-4.219t-3.586-2.484v-2.063q3.047 0.656 5.016 3.117t1.969 5.648q0 2.25-1.031 4.172l-1.5-1.547q0.516-1.266 0.516-2.625zM16.5 12q0 0.422-0.047 0.609l-2.438-2.438v-2.203q2.484 1.219 2.484 4.031z",i=["progress-bar"].concat(_.playing?"is-playing":[]).concat(_.seeking?"is-active":[]).join(" ");return t`
    <div class="player">
      <div
        class="progress"
        onmousedown=${_.changeProgress}
        onmousemove=${_.setProgress}
      >
        <div class=${i} style=${o} />
        <div class="progress-preload" style=${n} />
      </div>
      <div class="player-inner">
        <div class="player-playback">
          <img
            class="player-img"
            src="http://bibotalk.com/wp-content/uploads/2018/12/fde60post-360x200.png"
          />
          <button class=${`player-controls${_.playing?" hidden":""}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
            >
              <path
                d="M238.049,237.084l4.834,4.833a.683.683,0,1,1-.966.967l-4.833-4.833-4.833,4.833a.683.683,0,1,1-.967-.966l4.833-4.833-4.833-4.833a.683.683,0,1,1,.966-.967l4.833,4.833,4.833-4.833a.683.683,0,1,1,.967.966l-4.833,4.833Z"
                transform="translate(-231.083 -231.084)"
              />
            </svg>
          </button>
          <button
            class="player-controls player-controls--toggle"
            onclick=${_.playPause}
          >
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="36"
              height="36"
              viewBox="0 0 36 36"
            >
              <path d=${s}></path>
            </svg>
          </button>
        </div>
        <div class="player-info" style=${e}>
          <div class="player-info-title">233 - Os Gregos e Troianos Juntos</div>
          <div class="player-info-time">
            <span class="player-info-time-current">${_.currentTime}</span>
            <span> / </span>
            <span class="player-info-time-duration">${_.duration}</span>
          </div>
        </div>
        <div class="player-settings">
          <button
            class=${`player-controls${_.playing?"":" hidden"}`}
            onclick=${_.rewind}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="21.798"
              viewBox="0 0 28 23.798"
            >
              <g transform="translate(-207 -560)">
                <path
                  d="M24.537,105.886A11.9,11.9,0,0,0,4.225,114.3v1.81l-3-3a.7.7,0,1,0-.99.99l4.2,4.2a.7.7,0,0,0,.991,0l4.2-4.2a.7.7,0,1,0-.99-.99l-3,3V114.3a10.5,10.5,0,1,1,10.5,10.5.7.7,0,1,0,0,1.4,11.9,11.9,0,0,0,8.413-20.312Z"
                  transform="translate(206.974 457.6)"
                />
                <text
                  font-size="11"
                  font-family="OpenSans, Open Sans"
                  transform="translate(217.464 576.016)"
                >
                  <tspan x="0" y="0">${_.skipTime}</tspan>
                </text>
              </g>
            </svg>
          </button>
          <button
            class=${`player-controls${_.playing?"":" hidden"}`}
            onclick=${_.forward}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="22.798"
              viewBox="0 0 28 23.798"
            >
              <g transform="translate(-241 -560)">
                <path
                  d="M3.488,105.886A11.9,11.9,0,0,1,23.8,114.3v1.81l3-3a.7.7,0,1,1,.99.99l-4.2,4.2a.7.7,0,0,1-.991,0l-4.2-4.2a.7.7,0,0,1,.99-.99l3,3V114.3a10.5,10.5,0,1,0-10.5,10.5.7.7,0,1,1,0,1.4,11.9,11.9,0,0,1-8.413-20.313Z"
                  transform="translate(241.001 457.6)"
                />
                <text
                  font-size="11"
                  font-family="OpenSans, Open Sans"
                  transform="translate(245.211 576.11)"
                >
                  <tspan x="0" y="0">${_.skipTime}</tspan>
                </text>
              </g>
            </svg>
          </button>
          <div class="player-controls volume-container">
            <button class="player-controls volume-btn">
              <svg
                class="icon-volume"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                fill="#333"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d=${a} />
              </svg>
            </button>
            <div
              class="volume"
              onmousedown=${_.changeVolume}
              onmousemove=${_.setVolume}
              onwheel=${_.setVolume}
            >
              <div class="volume-track">
                <div class="volume-bar" style=${r} />
              </div>
            </div>
          </div>
          <button class="player-controls player-controls--playlist">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21.4"
              height="23.599"
              viewBox="0 0 21.4 23.599"
            >
              <g transform="translate(-96.3 -52.414)">
                <path
                  d="M117.074,52.414h-19.9a1.008,1.008,0,0,0-.876.9v9.808a.751.751,0,1,0,1.5,0v-9.2h18.4V72.408h-9.261a.754.754,0,0,0,0,1.509h10.137c.415,0,.626-.189.626-.606V53.317C117.7,52.9,117.489,52.414,117.074,52.414Z"
                  transform="translate(0 0)"
                />
                <path
                  d="M423.372,228.673h7.876a.358.358,0,1,0,0-.716h-7.876a.358.358,0,0,0,0,.716Z"
                  transform="translate(-318.046 -171.03)"
                />
                <path
                  d="M247.829,228.673h1.432a.358.358,0,0,0,0-.716h-1.432a.358.358,0,1,0,0,.716Z"
                  transform="translate(-147.271 -171.03)"
                />
                <path
                  d="M423.372,374.959h7.876a.358.358,0,1,0,0-.716h-7.876a.358.358,0,0,0,0,.716Z"
                  transform="translate(-318.046 -313.556)"
                />
                <path
                  d="M247.829,374.959h1.432a.358.358,0,0,0,0-.716h-1.432a.358.358,0,1,0,0,.716Z"
                  transform="translate(-147.271 -313.556)"
                />
                <path
                  d="M423.372,521.245h7.876a.358.358,0,1,0,0-.716h-7.876a.358.358,0,1,0,0,.716Z"
                  transform="translate(-318.046 -456.082)"
                />
                <path
                  d="M247.829,521.245h1.432a.358.358,0,0,0,0-.716h-1.432a.358.358,0,1,0,0,.716Z"
                  transform="translate(-147.271 -456.082)"
                />
                <path
                  d="M502.6,666.814h-6.086a.358.358,0,1,0,0,.716H502.6a.358.358,0,0,0,0-.716Z"
                  transform="translate(-389.357 -598.607)"
                />
                <path
                  d="M104.992,563.106l-7.536-4.34a.759.759,0,0,0-.739,0,.777.777,0,0,0-.418.62v8.681a.777.777,0,0,0,.418.62.982.982,0,0,0,.425.1.691.691,0,0,0,.352-.1l7.513-4.341a.711.711,0,0,0,.352-.62A.726.726,0,0,0,104.992,563.106Zm-7.261,3.721v-6.2l5.37,3.1Z"
                  transform="translate(0 -492.769)"
                />
                <path
                  d="M214.253,694.237a.358.358,0,1,0,.4-.6l-2.148-1.432a.358.358,0,1,0-.4.6Z"
                  transform="translate(-112.269 -623.236)"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `})(j)}
  ${(t=>t`
  <div class="navigation">
    <i class="ion-md-mic active"></i>
    <i class="ion-ios-folder-open"></i>
    <i class="ion-md-star"></i>
    <i class="ion-ios-search"></i>
    <i class="ion-md-settings"></i>
  </div>
`)(R)}
`;r(6);const V=Object(n.wire)(),A=Object(n.bind)(document.querySelector("#__wrapper__"));_.init(()=>A`${N(V)}`)}]);