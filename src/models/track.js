const _settings = {
  autoPlay: false,
  buffered: true,
  changeDocTitle: true,
  confirmClose: true,
  notification: true,
  playList: [],
  volume: 0.1,
};

class PodAudio {
  constructor(options) {}

  isFirstTrack(index) {
    return index === 0;
  }

  isLastTrack(index) {
    return index >= this.tracks.length - 1;
  }

  trackUrlAtIndex(index) {
    return this.tracks.length >= index ? this.tracks[index].url : null;
  }
}

export default PodAudio;
