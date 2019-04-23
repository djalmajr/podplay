import TopBar from "./topbar.js";
import Playlist from "./playlist.js";
import Player from "./player.js";
import Navigation from "./navigation.js";

const topbarWire = hyperHTML.wire();
const playlistWire = hyperHTML.wire();
const playerWire = hyperHTML.wire();
const navigationWire = hyperHTML.wire();

// prettier-ignore
export default html => html`
  ${TopBar(topbarWire)}
  ${Playlist(playlistWire)}
  ${Player(playerWire)}
  ${Navigation(navigationWire)}
`;
