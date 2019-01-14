import player from "./controllers/player.js";
import playlist from "./controllers/playlist.js";
import bind from "./helpers/bind.js";
import mock from "./mock.js";

// let _player, _playlist;

const _settings = {
  autoPlay: false,
  buffered: true,
  changeDocTitle: true,
  confirmClose: true,
  notification: true,
};

const _beforeUnload = evt => {
  if (player.isPlaying) {
    evt.returnValue = "Music still playing!";
    return evt.returnValue;
  }
};

export default {
  init(render) {
    // Object.assign(_settings, options);

    if (_settings.confirmClose) {
      window.addEventListener("beforeunload", _beforeUnload, false);
    }

    bind.call(this, render);
  },

  // Getters

  get isEmptyList() {
    return playlist.length === 0;
  },

  get tracks() {
    return mock.tracks;
  },

  // Actions

  // addToPlaylist(album) {
  //   if (this.isEmptyList) {
  //     return;
  //   }

  //   if (_audio.paused) {
  //     if (_audio.currentTime === 0) {
  //       notify(playList[index].title, {
  //         icon: playList[index].icon,
  //         body: "Now playing",
  //       });
  //     }
  //     changeDocumentTitle(playList[index].title);

  //     _audio.play();

  //     playBtn.classList.add("is-playing");
  //     playSvgPath.setAttribute("d", playSvg.getAttribute("data-pause"));
  //   } else {
  //     changeDocumentTitle();
  //     _audio.pause();
  //     playBtn.classList.remove("is-playing");
  //     playSvgPath.setAttribute("d", playSvg.getAttribute("data-play"));
  //   }

  //   plActive();
  // },
};
