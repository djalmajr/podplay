import { render } from "lighterhtml";
import store from "./store.js";
import App from "./views/app.js";

const wrapper = document.querySelector("#__wrapper__");

store.init(() => render(wrapper, App));

if (module.hot) {
  module.hot.accept("./views/app.js", () => {
    const NextApp = require("./views/app.js").default;
    wrapper.innerHTML = "";
    wrapper.appendChild(NextApp());
  });
}
