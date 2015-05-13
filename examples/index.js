"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

var _libParsec = require("./lib/parsec");

var _libParsec2 = _interopRequireDefault(_libParsec);

console.dir(_libParsec2["default"].parse(process.argv.slice(2)));

console.log(_libParsec2["default"].parse(["-tla"]).options("three").options("letter").options("abbreviation"));

console.log(_libParsec2["default"].parse(["-G"]).options(["G", "g", "great"]).options(["r", "R"], { "default": 8 }));