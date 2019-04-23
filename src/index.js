import store from "./store.js";
import App from "./views/app.js";
import "./helpers/polyfills.js";

const appWire = hyperHTML.wire();
const html = hyperHTML.bind(document.querySelector("#root"));

store.init(() => html`${App(appWire)}`); // prettier-ignore
