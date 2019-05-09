import { bind, wire } from "hyperhtml";
import App from "./views/app";
import store from "./store";
import "./helpers/polyfills";

const appWire = wire();
const html = bind(document.querySelector("#__wrapper__"));
const render = () => html`${App(appWire)}`; // prettier-ignore

store.init(render);

if (module.hot) {
  module.hot.accept("./views/app", render);
}
