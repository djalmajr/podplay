import { html } from "lighterhtml";
import TopBar from "./topbar.js";
import Playlist from "./playlist.js";
import Player from "./player.js";
import Navigation from "./navigation.js";
import "./app.css";

export default () => html`
  ${TopBar()} ${Playlist()} ${Player()} ${Navigation()}
`;
