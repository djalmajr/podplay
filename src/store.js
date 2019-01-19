import Player from "./controllers/player";
import Playlist from "./controllers/playlist";
import bind from "./helpers/bind";
import mock from "./mock";

let _player, _playlist;

const _settings = {
  buffered: true,
  changeDocTitle: true,
  confirmClose: true,
  notification: true,
};

const _beforeUnload = evt => {
  if (_player.isPlaying) {
    evt.returnValue = "Music still playing!";
    return evt.returnValue;
  }
};

export default {
  init(render) {
    _player = new Player();
    _playlist = new Playlist(mock);
    // Object.assign(_settings, options);

    if (_settings.confirmClose) {
      window.addEventListener("beforeunload", _beforeUnload, false);
    }

    bind.call(this, render);
  },

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

  // Actions

  playPause() {
    if (_player.isPlaying) {
      _player.pause();
      return;
    }

    _player.play(mock.tracks[0]);
  },
};
