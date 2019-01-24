Element.prototype.offset = function() {
  const el = this.getBoundingClientRect();

  return {
    top: el.top + (window.pageYOffset || document.documentElement.scrollTop),
    left: el.left + (window.pageXOffset || document.documentElement.scrollLeft),
  };
};

Element.prototype.css = function(attr) {
  if (typeof attr === "string") {
    return getComputedStyle(this, "")[attr];
  } else if (typeof attr === "object") {
    for (let name in attr) {
      if (this.style[name] !== undefined) {
        this.style[name] = attr[name];
      }
    }
  }
};

// matches polyfill
(function(Proto) {
  Proto.matches =
    Proto.matches ||
    Proto.matchesSelector ||
    Proto.webkitMatchesSelector ||
    Proto.msMatchesSelector ||
    function(selector) {
      let node = this,
        nodes = (node.parentNode || node.document).querySelectorAll(selector),
        i = -1;
      while (nodes[++i] && nodes[i] != node);
      return !!nodes[i];
    };
})(Element.prototype);

// closest polyfill
(function(Proto) {
  Proto.closest =
    Proto.closest ||
    function(selector) {
      let el = this;
      while (el.matches && !el.matches(selector)) el = el.parentNode;
      return el.matches ? el : null;
    };
})(Element.prototype);
