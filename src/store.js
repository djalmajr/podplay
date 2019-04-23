import Player from "./controllers/player.js";
import Playlist from "./controllers/playlist.js";
import notify from "./helpers/notify.js";
import bind from "./helpers/bind.js";
import mock from "./mock.js";

let _player;
let _playlist;
let _render;

const DOC_TITLE = document.title;

const _settings = {
  buffered: true,
  changeDocTitle: true,
  confirmClose: true,
  skipTime: 15,
  notification: true,
  volume: 0.7,
};

const _changeDocumentTitle = title => {
  if (_settings.changeDocTitle) {
    document.title = title || DOC_TITLE;
  }
};

// function listHandler(evt) {
//   evt.preventDefault();

//   if (evt.target.matches(".pl-list__title")) {
//     var current = parseInt(evt.target.closest(".pl-list").getAttribute("data-track"), 10);
//     if (index !== current) {
//       index = current;
//       play(current);
//     } else {
//       playToggle();
//     }
//   } else {
//     if (!!evt.target.closest(".pl-list__remove")) {
//       var parentEl = evt.target.closest(".pl-list");
//       var isDel = parseInt(parentEl.getAttribute("data-track"), 10);

//       playList.splice(isDel, 1);
//       parentEl.closest(".pl-ul").removeChild(parentEl);

//       plLi = pl.querySelectorAll("li");

//       [].forEach.call(plLi, function(el, i) {
//         el.setAttribute("data-track", i);
//       });

//       if (!audio.paused) {
//         if (isDel === index) {
//           play(index);
//         }
//       } else {
//         if (isEmptyList()) {
//           clearAll();
//         } else {
//           if (isDel === index) {
//             if (isDel > playList.length - 1) {
//               index -= 1;
//             }
//             audio.src = playList[index].file;
//             trackTitle.innerHTML = playList[index].title;
//             progressBar.style.width = 0;
//           }
//         }
//       }
//       if (isDel < index) {
//         index--;
//       }
//     }
//   }
// }

export default {
  init(render) {
    _render = render;

    _player = new Player(_settings);
    _playlist = new Playlist(mock);

    bind.call(this, render);

    if (_settings.confirmClose) {
      window.addEventListener("beforeunload", this.handleUnload, false);
    }

    _player.onUpdate(render);
    _player.onEnd(this.handleEnd);
    _player.onError(this.handleError);
  },

  // Handlers

  handleEnd() {
    const len = _playlist.tracks.length;

    _player.pause();

    if (len === 0) {
      return;
    }

    // if (index === len - 1) {
    //   if (_player.repeat) {
    //     play(0);
    //   }
    // } else {
    //   play(index + 1);
    // }
  },

  handleError(evt) {
    const errors = {
      "1": "MEDIA_ERR_ABORTED",
      "2": "MEDIA_ERR_NETWORK",
      "3": "MEDIA_ERR_DECODE",
      "4": "MEDIA_ERR_SRC_NOT_SUPPORTED",
    };

    _player.pause();
    _changeDocumentTitle();

    notify("Houston we have a problem", {
      body: errors[evt.target.error.code],
      icon: "http://bibotalk.com/wp-content/uploads/2015/04/favicon_144.png",
    });
  },

  handleUnload(evt) {
    if (_player.playing) {
      evt.returnValue = "Music still playing!";
      return evt.returnValue;
    }
  },

  // Getters

  get isEmptyList() {
    return _playlist.tracks.length === 0;
  },

  get playing() {
    return _player.playing;
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

  get preload() {
    return _settings.buffered ? _player.preload : this.progress;
  },

  get progress() {
    return _player.progress;
  },

  get seeking() {
    return _player.seeking;
  },

  get skipTime() {
    return _settings.skipTime;
  },

  get volume() {
    return _player.volume;
  },

  // Actions

  changeProgress(evt) {
    _player.changeProgress(evt);
  },

  changeVolume(evt) {
    _player.changeVolume(evt);
  },

  playPause(evt) {
    evt.preventDefault();

    if (_player.playing) {
      _changeDocumentTitle();
      _player.pause();
      return;
    }

    const track = mock.tracks[0];

    _changeDocumentTitle(track.title);
    _player.play(track);
  },

  forward(evt) {
    evt.preventDefault();
    _player.forward(_settings.skipTime);
  },

  rewind(evt) {
    evt.preventDefault();
    _player.rewind(_settings.skipTime);
  },

  setProgress(evt) {
    _player.setProgress(evt, _render);
  },

  setVolume(evt) {
    _player.setVolume(evt);
  },
};
