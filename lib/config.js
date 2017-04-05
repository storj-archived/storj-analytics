const WRITE_KEY = process.env.SEGMENT_WRITE_KEY || 'not a real key';

const devOptions = { flushAt: 1 };
const prodOptions = {};
const OPTIONS = (process.env.NODE_ENV !== 'production') ?
  devOptions : prodOptions;

const config = {
  key: WRITE_KEY,
  options: OPTIONS
};

module.exports = config;
