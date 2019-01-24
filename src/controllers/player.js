import barSize from "../helpers/bar-size";
import wheel from "../helpers/wheel";

const DOC_TITLE = document.title;

let _audio;
let _seekingVol = false;
let _isPlaying = false;
let _rightClick = false;

const _settings = {
  buffered: true,
  volume: 0.7,
};

const _mediaError = {
  "1": "MEDIA_ERR_ABORTED",
  "2": "MEDIA_ERR_NETWORK",
  "3": "MEDIA_ERR_DECODE",
  "4": "MEDIA_ERR_SRC_NOT_SUPPORTED",
};

const _handleError = evt => {
  // if (_isEmpty) {
  //   return;
  // }

  _audio.pause();
  // _curTime = -1;
  // _durTime = -1;
  _isPlaying = false;
  // _changeDocumentTitle();

  throw new Error("Houston we have a problem: " + _mediaError[evt.target.error.code]);
};

const _changeDocTitle = title => {
  if (_settings.canChangeTitle) {
    if (title) {
      document.title = title;
    } else {
      document.title = DOC_TITLE;
    }
  }
};

const _seekingFalse = () => {
  _seekingVol = false;
};

export default class {
  constructor(options = {}) {
    Object.assign(_settings, options);

    _audio = new Audio();
    _audio.volume = _settings.volume;
    _audio.preload = "auto";

    _audio.addEventListener("error", _handleError, false);
    // _audio.addEventListener("timeupdate", _timeUpdate, false);
    // _audio.addEventListener("ended", _doEnd, false);

    document.addEventListener("mouseup", _seekingFalse, false);
  }

  // Getters

  get isPlaying() {
    return _isPlaying;
  }

  get volume() {
    return _audio.volume;
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
