/*
 * @module storj-analytics
 */

'use strict';

const config = require('./lib/config');
const Analytics = require('./lib/analytics');

module.exports = new Analytics(config.key, config.options);
