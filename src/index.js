import { render } from "lighterhtml";
import store from "./store";
import App from "./views/app";

const wrapper = document.querySelector("#__wrapper__");

store.init(() => render(wrapper, App));

if (module.hot) {
  module.hot.accept("./views/app", () => {
    const NextApp = require("./views/app").default;
    wrapper.innerHTML = "";
    wrapper.appendChild(NextApp());
  });
}
