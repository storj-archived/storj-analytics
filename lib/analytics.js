const Analytics = require('analytics-node');

class StorjAnalytics extends Analytics {
  constructor(key, options) {
    super(key, options);
  }

  track(dnt, msg, fn) {
    if (dnt) {
      return false;
    }
    super.track(msg, fn);
  }

  identify(dnt, msg, fn) {
    if (dnt) {
      return false;
    }
    if (!msg.traits) {
      msg.traits = {};
    }
    msg.traits.email = msg.userId + '@user.storj.io';
    super.identify(msg, fn);
  }
}

module.exports = StorjAnalytics;
