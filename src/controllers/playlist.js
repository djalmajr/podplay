import bind from "../helpers/bind";

let _index, _isPlaying, _title, _tracks;

const _validate = () => !!_tracks.length;

const _update = () => {
  // if (_currentTrackUrl) {
  //   _audio.src = _currentTrackUrl;
  //   _audio[_status]();
  // } else {
  //   _audio.pause();
  // }
};

export default {
  init({ title, tracks = [] }) {
    _title = title;
    _tracks = tracks;

    bind.call(this, _validate, { before: true });
    bind.call(this, _update);

    this.reset();
  },

  // Getters

  get index() {
    return _index;
  },

  get isLast() {
    return _index === _tracks.length - 1;
  },

  get isPlaying() {
    return _isPlaying;
  },

  get title() {
    return _title;
  },

  get tracks() {
    return _tracks;
  },

  get trackUrl() {
    return (_tracks[_index] || {}).url;
  },

  // Actions

  changeTrack(index) {
    _index = index;
  },

  nextTrack() {
    _index = this.isLast ? 0 : _index + 1;
  },

  prevTrack() {
    _index = _index === 0 ? this.lastIndex : _index - 1;
  },

  reset() {
    _index = 0;
    _isPlaying = false;
  },

  toggle() {
    _isPlaying = !_isPlaying;
  },
};
