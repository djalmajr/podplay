import store from "../store";
import "./player.css";

const BTN_SIZE = 45;

export default html => {
  const styles = {
    info: { width: `calc(100% - ${store.isPlaying ? 5 : 4} * ${BTN_SIZE}px)` },
    volumeBar: { height: `${store.volume * 100}%` },
  };

  const playPathSVG = store.isPlaying
    ? "M 12,26 16.33,26 16.33,10 12,10 z M 20.66,26 25,26 25,10 20.66,10 z"
    : "M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z";

  const volumePathSVG = store.volume
    ? "M14.016 3.234q3.047 0.656 5.016 3.117t1.969 5.648-1.969 5.648-5.016 3.117v-2.063q2.203-0.656 3.586-2.484t1.383-4.219-1.383-4.219-3.586-2.484v-2.063zM16.5 12q0 2.813-2.484 4.031v-8.063q2.484 1.219 2.484 4.031zM3 9h3.984l5.016-5.016v16.031l-5.016-5.016h-3.984v-6z"
    : "M12 3.984v4.219l-2.109-2.109zM4.266 3l16.734 16.734-1.266 1.266-2.063-2.063q-1.734 1.359-3.656 1.828v-2.063q1.172-0.328 2.25-1.172l-4.266-4.266v6.75l-5.016-5.016h-3.984v-6h4.734l-4.734-4.734zM18.984 12q0-2.391-1.383-4.219t-3.586-2.484v-2.063q3.047 0.656 5.016 3.117t1.969 5.648q0 2.25-1.031 4.172l-1.5-1.547q0.516-1.266 0.516-2.625zM16.5 12q0 0.422-0.047 0.609l-2.438-2.438v-2.203q2.484 1.219 2.484 4.031z";

  return html`
    <div class="player">
      <div class="progress">
        <div class="progress-bar"></div>
        <div class="progress-preload"></div>
      </div>
      <div class="player-inner">
        <div class="player-playback">
          <img
            class="player-img"
            src="http://bibotalk.com/wp-content/uploads/2018/12/fde60post-360x200.png"
          />
          <button class=${`player-controls${!store.isPlaying ? "" : " h-hide"}`}>
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
            onclick=${() => store.playPause()}
          >
            <svg
              class="icon-play"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="36"
              height="36"
              viewBox="0 0 36 36"
            >
              <path d=${playPathSVG}></path>
            </svg>
          </button>
        </div>
        <div class="player-info" style=${styles.info}>
          <div class="player-info-title">233 - Os Gregos e Troianos Juntos</div>
          <div class="player-info-time">
            <span class="player-info-time--current">23:23</span> <span> / </span>
            <span class="player-info-time--duration">54:54</span>
          </div>
        </div>
        <div class="player-settings">
          <button class=${`player-controls${store.isPlaying ? "" : " h-hide"}`}>
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
                  transform="translate(217.464 576.016)"
                  font-size="11"
                  font-family="OpenSans, Open Sans"
                >
                  <tspan x="0" y="0">15</tspan>
                </text>
              </g>
            </svg>
          </button>
          <button class=${`player-controls${store.isPlaying ? "" : " h-hide"}`}>
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
                  transform="translate(245.211 576.11)"
                  font-size="11"
                  font-family="OpenSans, Open Sans"
                >
                  <tspan x="0" y="0">15</tspan>
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
                <path d=${volumePathSVG} />
              </svg>
            </button>
            <div
              class="volume"
              onmousedown=${store.changeVolume}
              onmousemove=${store.setVolume}
              onwheel=${store.setVolume}
            >
              <div class="volume-track">
                <div class="volume-bar" style=${styles.volumeBar} />
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
  `;
};
