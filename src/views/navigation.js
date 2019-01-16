import { html } from "lighterhtml";
import "./navigation.css";

export default () => html`
  <div class="navigation">
    <i class="icon ion-md-mic active"></i> <i class="icon ion-ios-folder-open"></i>
    <i class="icon ion-md-star"></i> <i class="icon ion-ios-search"></i>
    <i class="icon ion-md-settings"></i>
  </div>
`;
