const defaults = {
  before: false,
  regex: /^(_|init|is|get).*/g,
};

const bind = function(callback, config = {}) {
  const cfg = Object.assign(defaults, config);
  const methods = Object.keys(this)
    .filter(prop => typeof this[prop] === "function")
    .filter(prop => !prop.match(cfg.regex));

  for (const prop of methods) {
    this[prop] = (() => {
      const method = this[prop];
      return cfg.before
        ? (...args) => callback() && method(...args)
        : (...args) => method(...args) && callback();
    })();
  }

  callback();
};

export default bind;
