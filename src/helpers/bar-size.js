import wheel from "./wheel.js";

export default evt => {
  const target = evt.currentTarget;
  const isVol = target.classList.contains("volume");
  const query = `.${isVol ? "volume" : "progress"}-bar`;
  const bar = target.querySelector(query);

  if (!isVol) {
    const offset = evt.clientX - bar.offset().left + window.pageXOffset;
    return Math.round((offset * 100) / target.offsetWidth);
  }

  let value = parseInt(bar.css("height"), 10);

  if (evt.type === wheel()) {
    const delta = evt.deltaY || evt.detail || -evt.wheelDelta;
    value = delta > 0 ? value - 10 : value + 10;
  } else {
    const node = bar.parentNode;
    const offset = node.offset().top + node.offsetHeight - window.pageYOffset;
    value = Math.round(offset - evt.clientY);
  }

  return (value > 100 && 100) || (value > 0 && value) || 0;
};
