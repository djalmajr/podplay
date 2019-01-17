import { html } from "lighterhtml";
import store from "../store";
import "./playlist.css";

const renderTrack = (track, idx) => html`
  <li class=${`playlist-item ${idx === 0 ? "is-active" : ""}`} data-track=${idx}>
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
      <div class="playlist-item-title">${track.title}</div>
      <div class="playlist-item-desc">${track.description}</div>
    </div>
  </li>
`;

export default () => html`
  <ul class="playlist">
    ${store.tracks.map(renderTrack)}
  </ul>
`;
