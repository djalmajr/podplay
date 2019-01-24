export default () =>
  ("onwheel" in document && "wheel") ||
  ("onmousewheel" in document && "mousewheel") ||
  "MozMousePixelScroll";
