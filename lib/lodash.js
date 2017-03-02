/* global window */

var lodash;

if (typeof require === "function") {
  try {
    lodash = {};

    lodash.has = require('lodash/has');
    lodash.each = require('lodash/each');
    lodash.constant = require('lodash/constant');
    lodash.isUndefined = require('lodash/isUndefined');
    lodash.filter = require('lodash/filter');
    lodash.isFunction = require('lodash/isFunction');
    lodash.keys = require('lodash/keys');
    lodash.values = require('lodash/values');
    lodash.bind = require('lodash/bind');
    lodash.isEmpty = require('lodash/isEmpty');
    lodash.union = require('lodash/union');
    lodash.isArray = require('lodash/isArray');
    lodash.pick = require('lodash/pick');
    lodash.mapValues = require('lodash/mapValues');
    lodash.merge = require('lodash/merge');
    lodash.defaults = require('lodash/defaults');
    lodash.uniqueId = require('lodash/uniqueId');
    lodash.max = require('lodash/max');
    lodash.min = require('lodash/min');
    lodash.reduce = require('lodash/reduce');
    lodash.map = require('lodash/map');
    lodash.find = require('lodash/find');
    lodash.range = require('lodash/range');
    lodash.flatten = require('lodash/flatten');
    lodash.zipObject = require('lodash/zipObject');
    lodash.sortBy = require('lodash/sortBy');
    lodash.cloneDeep = require('lodash/cloneDeep');
    lodash.last = require('lodash/last');

    // lodash = require("lodash");
  } catch (e) {}
}

if (!lodash) {
  lodash = window._;
}

module.exports = lodash;
