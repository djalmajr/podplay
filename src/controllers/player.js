import barSize from "../helpers/bar-size";
import wheel from "../helpers/wheel";

let _audio;
// let _seeking = false;
let _seekingVol = false;
let _isPlaying = false;
let _rightClick = false;

const _seekingFalse = () => {
  _seekingVol = false;
};

export default class {
  constructor(options = {}) {
    _audio = new Audio();
    _audio.volume = options.volume;
    _audio.preload = "auto";

    document.addEventListener("mouseup", _seekingFalse, false);
  }

  // Getters

  get isPlaying() {
    return _isPlaying;
  }

  get buffered() {
    return _audio.buffered;
  }

  get currentTime() {
    return _audio.currentTime;
  }

  get duration() {
    return _audio.duration;
  }

  get volume() {
    return _audio.volume;
  }

  // Events

  onUpdate(callback) {
    _audio.addEventListener("timeupdate", callback, false);
  }

  onEnd(callback) {
    _audio.addEventListener("ended", callback, false);
  }

  onError(callback) {
    _audio.addEventListener("error", callback, false);
  }

  // Actions

  changeVolume(evt) {
    _rightClick = evt.which === 3;
    _seekingVol = true;
    this.setVolume(evt);
  }

  play(track) {
    _isPlaying = true;

    if (track) {
      _audio.src = track.url;
    }

    _audio.play();
  }

  pause() {
    _isPlaying = false;
    _audio.pause();
  }

  setVolume(evt) {
    evt.preventDefault();

    if ((_seekingVol && !_rightClick) || evt.type === wheel()) {
      const value = barSize(evt) / 100;

      if (value <= 0) {
        _audio.volume = 0;
        _audio.muted = true;
      } else {
        _audio.muted && (_audio.muted = false);
        _audio.volume = value;
      }
    }
  }
}
