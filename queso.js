'use strict';

function stringify (query, amp) {
  return Object.keys(query).reduce(pairs, '');
  function pairs (q, key) {
    var prefix = amp !== true && q.length === 0 ? '?' : '&';
    var left = q + prefix + key;
    var value = query[key];
    if (value === true) {
      return left;
    }
    var encoded = encodeURIComponent(value);
    return left + '=' + encoded;
  }
}

module.exports = {
  stringify: stringify
};
