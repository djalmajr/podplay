import { html } from "lighterhtml";
import store from "../store.js";
import "./playlist.css";

const renderTrack = (track, idx) => html`
  <li class="pl-list" data-track=${idx}>
    <div class="pl-list__track">
      <div class="pl-list__icon"></div>
      <div class="pl-list__eq">
        <div class="eq">
          <div class="eq__bar"></div>
          <div class="eq__bar"></div>
          <div class="eq__bar"></div>
        </div>
      </div>
    </div>
    <div class="pl-list__title">${track.title}</div>
    <button class="pl-list__remove">
      <svg
        fill="#000000"
        height="20"
        viewBox="0 0 24 24"
        width="20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
        ></path>
        <path d="M0 0h24v24H0z" fill="none"></path>
      </svg>
    </button>
  </li>
`;

export default () => html`
  <div class="pl-container" id="pl">
    <ul class="pl-ul">
      ${store.tracks.map(renderTrack)}
    </ul>
  </div>
`;
