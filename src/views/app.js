import { html } from "lighterhtml";
import TopBar from "./topbar";
import Playlist from "./playlist";
import Player from "./player";
import Navigation from "./navigation";
import "./app.css";

// prettier-ignore
export default () => html`
  ${TopBar()}
  ${Playlist()}
  ${Player()}
  ${Navigation()}
`;
