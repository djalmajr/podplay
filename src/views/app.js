import { wire } from "hyperhtml";
import TopBar from "./topbar";
import Playlist from "./playlist";
import Player from "./player";
import Navigation from "./navigation";
import "./app.css";

const topbarWire = wire();
const playlistWire = wire();
const playerWire = wire();
const navigationWire = wire();

export default html => html`
  ${TopBar(topbarWire)}
  ${Playlist(playlistWire)}
  ${Player(playerWire)}
  ${Navigation(navigationWire)}
`;
