import Player from "./controllers/player";
import Playlist from "./controllers/playlist";
import bind from "./helpers/bind";
import mock from "./mock";

let _player, _playlist;

const DOC_TITLE = document.title;

const _settings = {
  buffered: true,
  changeDocTitle: true,
  confirmClose: true,
  notification: true,
  volume: 0.7,
};

const _mediaError = {
  "1": "MEDIA_ERR_ABORTED",
  "2": "MEDIA_ERR_NETWORK",
  "3": "MEDIA_ERR_DECODE",
  "4": "MEDIA_ERR_SRC_NOT_SUPPORTED",
};

const _beforeUnload = evt => {
  if (_player.isPlaying) {
    evt.returnValue = "Music still playing!";
    return evt.returnValue;
  }
};

// const handleError = evt => {
//   _player.pause();

//   throw new Error("Houston we have a problem: " + _mediaError[evt.target.error.code]);
// };

// const handleEnd = () => {
//   if (index === playList.length - 1) {
//     if (!repeating) {
//       audio.pause();
//       plActive();
//       playBtn.classList.remove("is-playing");
//       playSvgPath.setAttribute("d", playSvg.getAttribute("data-play"));
//       return;
//     } else {
//       play(0);
//     }
//   } else {
//     play(index + 1);
//   }
// };

export default {
  init(render) {
    _player = new Player(_settings);
    _playlist = new Playlist(mock);

    if (_settings.confirmClose) {
      window.addEventListener("beforeunload", _beforeUnload, false);
    }

    _player.onUpdate(render);
    _player.onEnd(this.handleEnd);
    _player.onError(this.handleError);

    bind.call(this, render);
  },

  // Handlers

  handleEnd() {},
  handleError() {},
  handleUnload() {},

  // Getters

  get isEmptyList() {
    return _playlist.length === 0;
  },

  get isPlaying() {
    return _player.isPlaying;
  },

  get tracks() {
    return _playlist.tracks;
  },

  get currentTime() {
    const mins = Math.floor(_player.currentTime / 60);
    const secs = Math.floor(_player.currentTime - mins * 60);

    return `${mins}:${secs < 10 ? "0" + secs : secs}`;
  },

  get duration() {
    const mins = Math.floor(_player.duration / 60);
    const secs = Math.floor(_player.duration - mins * 60);

    return `${mins}:${secs < 10 ? "0" + secs : secs}`;
  },

  get progress() {
    if (!this.isPlaying) {
      return 0;
    }

    const time =
      _settings.buffered && _player.buffered.length
        ? _player.buffered.end(0)
        : _player.currentTime;

    return Math.round((time * 100) / _player.duration);
  },

  get volume() {
    return _player.volume;
  },

  // Actions

  changeVolume(evt) {
    _player.changeVolume(evt);
  },

  playPause() {
    if (_player.isPlaying) {
      _player.pause();
      return;
    }

    _player.play(mock.tracks[0]);
  },

  setVolume(evt) {
    _player.setVolume(evt);
  },
};
