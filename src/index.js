import { bind, wire } from "hyperhtml";
import store from "./store.js";

const appWire = wire();
const html = bind(document.querySelector("#__wrapper__"));

const render = () => {
  const App = require("./views/app.js").default;
  return html`${App(appWire)}`;
}

store.init(render);

if (module.hot) {
  module.hot.accept("./views/app.js", render);
}
