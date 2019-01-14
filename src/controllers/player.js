const DOC_TITLE = document.title;

let _audio;

const _settings = {
  autoPlay: false,
  buffered: true,
  volume: 0.1,
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
  // _isPlaying = false;
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

export default {
  init(options = {}) {
    Object.assign(_settings, options);

    _audio = new Audio();
    _audio.volume = _settings.volume;
    _audio.preload = "auto";

    _audio.addEventListener("error", _handleError, false);
    // _audio.addEventListener("timeupdate", _timeUpdate, false);
    // _audio.addEventListener("ended", _doEnd, false);
  },

  // Getters

  get volume() {
    return _audio.volume;
  },

  // Actions
};
