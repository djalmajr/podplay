import { bind, wire } from "hyperhtml";
import store from "./store";
import "./helpers/polyfills";

const appWire = wire();
const html = bind(document.querySelector("#__wrapper__"));
const getApp = () => require("./views/app").default;
const render = App => html`${App(appWire)}`; // prettier-ignore

store.init(() => render(getApp()));

if (module.hot) {
  module.hot.accept("./views/app", () => render(getApp()));
}
