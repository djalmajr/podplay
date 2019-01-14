import "./track.css";

export default render => render`
  <div class="player__item player__item--track">
    <div class="track">
      <div class="track__title">Queue is empty</div>
      <div class="track__time">
        <span class="track__time--current">--</span>
        <span> / </span>
        <span class="track__time--duration">--</span>
      </div>
      <div class="progress-container">
        <div class="progress">
          <div class="progress__bar"></div>
          <div class="progress__preload"></div>
        </div>
      </div>
    </div>
  </div>
`;
