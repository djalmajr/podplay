import store from "../store.js";
import "./playback.css";

export default render => render`
  <div class="player__item player__item--playback">
    <button class="player__controls player__controls--prev">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#333" width="24" height="24" viewBox="0 0 24 24">
        <path d="M9.516 12l8.484-6v12zM6 6h2.016v12h-2.016v-12z"></path>
      </svg>
    </button>
    <button
      class="player__controls player__controls--toggle"
      onclick=${() => store.playToggle()}
    >
      <svg class="icon-play" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#333" width="36" height="36" viewBox="0 0 36 36" data-play="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z" data-pause="M 12,26 16.33,26 16.33,10 12,10 z M 20.66,26 25,26 25,10 20.66,10 z">
        <path d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path>
      </svg>
    </button>
    <button class="player__controls player__controls--next">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#333" width="24" height="24" viewBox="0 0 24 24">
        <path d="M15.984 6h2.016v12h-2.016v-12zM6 18v-12l8.484 6z"></path>
      </svg>
    </button>
  </div>
`;
