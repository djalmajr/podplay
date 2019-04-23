import barSize from "../helpers/bar-size.js";
import wheel from "../helpers/wheel.js";
import notify from "../helpers/notify.js";

let _audio;
let _progress = 0;
let _repeat = false;
let _seeking = false;
let _seekingVol = false;
let _playing = false;
let _rightClick = false;

const _seekingFalse = () => {
  if (_seeking && !_rightClick && _audio.readyState !== 0) {
    _audio.currentTime = _audio.duration * (_progress / 100);
  }

  _progress = 0;
  _seeking = false;
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

  get playing() {
    return _playing;
  }

  get repeat() {
    return _repeat;
  }

  get seeking() {
    return _seeking;
  }

  get buffered() {
    return _audio.buffered;
  }

  get currentTime() {
    return _audio.currentTime || 0;
  }

  get duration() {
    return _audio.duration || 0;
  }

  get preload() {
    if (!this.playing) {
      return 0;
    }

    const time = _audio.buffered.length ? _audio.buffered.end(0) : _audio.currentTime;

    return Math.round((time * 100) / _audio.duration);
  }

  get progress() {
    return _seeking ? _progress : Math.round((this.currentTime * 100) / this.duration);
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

  changeProgress(evt) {
    _rightClick = evt.which === 3;
    _seeking = true;
    this.setProgress(evt);
  }

  changeVolume(evt) {
    _rightClick = evt.which === 3;
    _seekingVol = true;
    this.setVolume(evt);
  }

  play(track) {
    _playing = true;

    if (track && track.url !== _audio.src) {
      _audio.src = track.url;
      notify(track.title, { icon: track.image, body: "Now playing" });
    }

    if (_audio.currentTime === _audio.duration) {
      _audio.currentTime = 0;
      notify(track.title, { icon: track.image, body: "Now playing" });
    }

    _audio.play();
  }

  pause() {
    _playing = false;
    _audio.pause();
  }

  forward(secs = 15) {
    const time = _audio.currentTime + secs;

    _audio.currentTime = time > _audio.duration ? _audio.duration : time;
  }

  rewind(secs = 15) {
    const time = _audio.currentTime - secs;

    _audio.currentTime = time < 0 ? 0 : time;
  }

  setProgress(evt, callback) {
    evt.preventDefault();

    if (_seeking && !_rightClick && _audio.readyState !== 0) {
      _progress = barSize(evt);
      callback && callback(_progress);
    }
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
