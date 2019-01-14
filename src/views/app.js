import { wire } from "hyperhtml";
import Playback from "./playback.js";
import Playlist from "./playlist.js";
import Settings from "./settings.js";
import Track from "./track.js";
import "./app.css";

const playbackWire = wire();
const playlistWire = wire();
const settingsWire = wire();
const trackWire = wire();

export default render => render`
  ${Playlist(playlistWire)}
  <div class="player" id="player">
    <div class="player__inner">
      ${Playback(playbackWire)}
      ${Track(trackWire)}
      ${Settings(settingsWire)}
    </div>
  </div>
  <div>
    starring
  </div>
`;
