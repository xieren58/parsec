"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _slicedToArray = require("babel-runtime/helpers/sliced-to-array")["default"];

var _Object$defineProperty = require("babel-runtime/core-js/object/define-property")["default"];

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var _parsebool = require("parsebool");

var _parsebool2 = _interopRequireDefault(_parsebool);

var Parsec = (function () {
  function Parsec(_ref) {
    var _ref$operandsKey = _ref.operandsKey;
    var operandsKey = _ref$operandsKey === undefined ? "_" : _ref$operandsKey;
    var _ref$noFlags = _ref.noFlags;
    var noFlags = _ref$noFlags === undefined ? true : _ref$noFlags;
    var _ref$sliceIndex = _ref.sliceIndex;
    var sliceIndex = _ref$sliceIndex === undefined ? 2 : _ref$sliceIndex;

    _classCallCheck(this, Parsec);

    this._endOfOpts = false;
    /** @type {String} */
    this.operandsKey = operandsKey;
    /** @type {Boolean} */
    this.noFlags = noFlags;
    /** @type {Number} */
    this.sliceIndex = sliceIndex;
  }

  _createClass(Parsec, [{
    key: "entries",

    /**
      @param {Array} args
      @param {String} operandsKey
      @return {{ key, value }}
    */
    value: _regeneratorRuntime.mark(function entries(args) {
      var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _step$value, curr, next, value;

      return _regeneratorRuntime.wrap(function entries$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            context$2$0.prev = 3;
            _iterator = _getIterator(this.tokens(args));

          case 5:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              context$2$0.next = 23;
              break;
            }

            _step$value = _step.value;
            curr = _step$value.curr;
            next = _step$value.next;
            value = _step$value.value;

            if (!curr.isBare) {
              context$2$0.next = 17;
              break;
            }

            if (!this.isEndOfOpts(curr.token)) {
              context$2$0.next = 13;
              break;
            }

            return context$2$0.abrupt("continue", 20);

          case 13:
            context$2$0.next = 15;
            return { key: this.operandsKey, value: curr.token };

          case 15:
            context$2$0.next = 20;
            break;

          case 17:
            if (this.noFlags && _parsebool2["default"].isBool(value) && curr.isNoFlag) {
              curr.token = curr.noKey;
              value = _parsebool2["default"].not(value);
            }
            context$2$0.next = 20;
            return { key: curr.token, value: value };

          case 20:
            _iteratorNormalCompletion = true;
            context$2$0.next = 5;
            break;

          case 23:
            context$2$0.next = 29;
            break;

          case 25:
            context$2$0.prev = 25;
            context$2$0.t0 = context$2$0["catch"](3);
            _didIteratorError = true;
            _iteratorError = context$2$0.t0;

          case 29:
            context$2$0.prev = 29;
            context$2$0.prev = 30;

            if (!_iteratorNormalCompletion && _iterator["return"]) {
              _iterator["return"]();
            }

          case 32:
            context$2$0.prev = 32;

            if (!_didIteratorError) {
              context$2$0.next = 35;
              break;
            }

            throw _iteratorError;

          case 35:
            return context$2$0.finish(32);

          case 36:
            return context$2$0.finish(29);

          case 37:
          case "end":
            return context$2$0.stop();
        }
      }, entries, this, [[3, 25, 29, 37], [30,, 32, 36]]);
    })
  }, {
    key: "tokens",

    /**
      @param {Array} args
      @return {{ curr, next, value }}
    */
    value: _regeneratorRuntime.mark(function tokens(args) {
      var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _step2$value, prev, curr, next;

      return _regeneratorRuntime.wrap(function tokens$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _iteratorError2 = undefined;
            context$2$0.prev = 3;
            _iterator2 = _getIterator(this.tuples(this.map(args)));

          case 5:
            if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
              context$2$0.next = 31;
              break;
            }

            _step2$value = _step2.value;
            prev = _step2$value.prev;
            curr = _step2$value.curr;
            next = _step2$value.next;

            if (!(curr === undefined)) {
              context$2$0.next = 12;
              break;
            }

            return context$2$0.abrupt("continue", 28);

          case 12:
            if (!curr.isLong) {
              context$2$0.next = 17;
              break;
            }

            context$2$0.next = 15;
            return {
              prev: prev, curr: curr,
              value: curr.value !== undefined ? curr.value : next !== undefined && next.isBare ? next.token : true
            };

          case 15:
            context$2$0.next = 28;
            break;

          case 17:
            if (!curr.isShort) {
              context$2$0.next = 21;
              break;
            }

            return context$2$0.delegateYield(this.shorts(this.tuples(curr.tokens, next)), "t1", 19);

          case 19:
            context$2$0.next = 28;
            break;

          case 21:
            if (!(prev !== undefined)) {
              context$2$0.next = 26;
              break;
            }

            if (!(prev.isLong && prev.value === undefined)) {
              context$2$0.next = 24;
              break;
            }

            return context$2$0.abrupt("continue", 28);

          case 24:
            if (!(prev.isShort && isNaN(prev.tokens.pop()))) {
              context$2$0.next = 26;
              break;
            }

            return context$2$0.abrupt("continue", 28);

          case 26:
            context$2$0.next = 28;
            return { prev: prev, curr: curr };

          case 28:
            _iteratorNormalCompletion2 = true;
            context$2$0.next = 5;
            break;

          case 31:
            context$2$0.next = 37;
            break;

          case 33:
            context$2$0.prev = 33;
            context$2$0.t2 = context$2$0["catch"](3);
            _didIteratorError2 = true;
            _iteratorError2 = context$2$0.t2;

          case 37:
            context$2$0.prev = 37;
            context$2$0.prev = 38;

            if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
              _iterator2["return"]();
            }

          case 40:
            context$2$0.prev = 40;

            if (!_didIteratorError2) {
              context$2$0.next = 43;
              break;
            }

            throw _iteratorError2;

          case 43:
            return context$2$0.finish(40);

          case 44:
            return context$2$0.finish(37);

          case 45:
          case "end":
            return context$2$0.stop();
        }
      }, tokens, this, [[3, 33, 37, 45], [38,, 40, 44]]);
    })
  }, {
    key: "shorts",

    /**
      @param {Token} *iterator
      @return {{ curr: {Token}, value }}
    */
    value: _regeneratorRuntime.mark(function shorts(iterator) {
      var _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, _step3$value, curr, next, last;

      return _regeneratorRuntime.wrap(function shorts$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            _iteratorNormalCompletion3 = true;
            _didIteratorError3 = false;
            _iteratorError3 = undefined;
            context$2$0.prev = 3;
            _iterator3 = _getIterator(iterator);

          case 5:
            if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
              context$2$0.next = 17;
              break;
            }

            _step3$value = _step3.value;
            curr = _step3$value.curr;
            next = _step3$value.next;
            last = _step3$value.last;

            if (isNaN(curr)) {
              context$2$0.next = 12;
              break;
            }

            return context$2$0.abrupt("continue", 14);

          case 12:
            context$2$0.next = 14;
            return {
              curr: { token: curr },
              value: next === undefined && last !== undefined && last.isBare && !this.isEndOfOpts(last.token) ? last.token : !isNaN(next) ? next : true
            };

          case 14:
            _iteratorNormalCompletion3 = true;
            context$2$0.next = 5;
            break;

          case 17:
            context$2$0.next = 23;
            break;

          case 19:
            context$2$0.prev = 19;
            context$2$0.t3 = context$2$0["catch"](3);
            _didIteratorError3 = true;
            _iteratorError3 = context$2$0.t3;

          case 23:
            context$2$0.prev = 23;
            context$2$0.prev = 24;

            if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
              _iterator3["return"]();
            }

          case 26:
            context$2$0.prev = 26;

            if (!_didIteratorError3) {
              context$2$0.next = 29;
              break;
            }

            throw _iteratorError3;

          case 29:
            return context$2$0.finish(26);

          case 30:
            return context$2$0.finish(23);

          case 31:
          case "end":
            return context$2$0.stop();
        }
      }, shorts, this, [[3, 19, 23, 31], [24,, 26, 30]]);
    })
  }, {
    key: "map",

    /**
      @param {Array} args
      @return {{Token[]}}
    */
    value: function map(args) {
      var _this = this;

      return args.map(function (token) {
        if (!_this._endOfOpts) {
          _this._endOfOpts = _this.isEndOfOpts(token);

          if (/^-[a-z]/i.test(token)) {
            var TOKENS = /([+-]?(\.?\d+\d+)?)|([a-z])/ig;
            return {
              isShort: true,
              tokens: token.slice(1).split(TOKENS).filter(function (_) {
                return _;
              })
            };
          }

          if (/^--[a-z]/i.test(token)) {
            return (function (_ref2) {
              var _ref22 = _slicedToArray(_ref2, 2);

              var key = _ref22[0];
              var value = _ref22[1];
              return {
                isLong: true,
                key: key, value: value, token: key.slice(2),
                isNoFlag: /^--no-([^-\n]{1}.*$)/.test(key),
                noKey: key.replace(/^--no-([^-\n]{1}.*$)/, "$1")
              };
            })((function (pair) {
              return [pair.shift(), pair[0]];
            })(token.split("=")));
          }
        }

        return { token: token, isBare: token !== undefined };
      });
    }
  }, {
    key: "tuples",

    /**
      @param {Array|String} list List to iterate.
      @param {Object} [last] Define to use as the last value.
      @param {Object} [prev] Define to use as the first prev value.
      @param {Object} [curr] Define to use as the first curr value.
      @return { prev, curr, next } for each item in a list.
    */
    value: _regeneratorRuntime.mark(function tuples(list, last, prev, curr) {
      var _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, next;

      return _regeneratorRuntime.wrap(function tuples$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            _iteratorNormalCompletion4 = true;
            _didIteratorError4 = false;
            _iteratorError4 = undefined;
            context$2$0.prev = 3;
            _iterator4 = _getIterator(list);

          case 5:
            if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
              context$2$0.next = 15;
              break;
            }

            next = _step4.value;

            if (!(curr !== undefined)) {
              context$2$0.next = 10;
              break;
            }

            context$2$0.next = 10;
            return { prev: prev, curr: curr, next: next };

          case 10:
            prev = curr;
            curr = next;

          case 12:
            _iteratorNormalCompletion4 = true;
            context$2$0.next = 5;
            break;

          case 15:
            context$2$0.next = 21;
            break;

          case 17:
            context$2$0.prev = 17;
            context$2$0.t4 = context$2$0["catch"](3);
            _didIteratorError4 = true;
            _iteratorError4 = context$2$0.t4;

          case 21:
            context$2$0.prev = 21;
            context$2$0.prev = 22;

            if (!_iteratorNormalCompletion4 && _iterator4["return"]) {
              _iterator4["return"]();
            }

          case 24:
            context$2$0.prev = 24;

            if (!_didIteratorError4) {
              context$2$0.next = 27;
              break;
            }

            throw _iteratorError4;

          case 27:
            return context$2$0.finish(24);

          case 28:
            return context$2$0.finish(21);

          case 29:
            context$2$0.next = 31;
            return { prev: prev, curr: curr, last: last };

          case 31:
          case "end":
            return context$2$0.stop();
        }
      }, tuples, this, [[3, 17, 21, 29], [22,, 24, 28]]);
    })
  }, {
    key: "isEndOfOpts",

    /**
      @param {String} token
    */
    value: function isEndOfOpts(token) {
      return /^--[-]*$/.test(token);
    }
  }], [{
    key: "parse",

    /**
      @param {String[]} args
      @param {Object} opts
      @param {Parsec} $ Instance of Parsec
     */
    value: function parse(args) {
      var opts = arguments[1] === undefined ? {} : arguments[1];
      var $ = arguments[2] === undefined ? new Parsec(opts) : arguments[2];
      return (function () {
        return (function (contains) {
          var _this2 = this;

          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = undefined;

          try {
            for (var _iterator5 = _getIterator($.entries(args.slice($.sliceIndex))), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              var _step5$value = _step5.value;
              var key = _step5$value.key;
              var value = _step5$value.value;

              if (this[key] === undefined) {
                this[key] = value;
              } else if (!contains(this[key], value)) {
                this[key] = [].concat(this[key], value);
              }
            }
          } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion5 && _iterator5["return"]) {
                _iterator5["return"]();
              }
            } finally {
              if (_didIteratorError5) {
                throw _iteratorError5;
              }
            }
          }

          /**
            @param {String|Array} keys
            @param {Object} opts Object describing option mappings.
           */
          this.options = function (keys, opts) {
            keys = Array.isArray(keys) ? keys : [keys, keys.charAt(0)];
            (function (value) {
              keys.forEach(function (key) {
                return _this2[key] = value !== undefined ? value : opts !== undefined ? opts["default"] : value;
              });
            })(_this2[keys.filter(function (key) {
              return _this2[key] !== undefined;
            })]);
            return _this2;
          };
          return this;
        }).call({}, function (k, v) {
          return k === v || Array.isArray(k) && ~k.indexOf(v);
        });
      })();
    }
  }]);

  return Parsec;
})();

exports["default"] = Parsec;
module.exports = exports["default"];