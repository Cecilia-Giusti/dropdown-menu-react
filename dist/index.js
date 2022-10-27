"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownMenu = void 0;
require("core-js/modules/es.array.sort.js");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Module
 * @function
 * @param {Array} options - options of dropdown
 * @returns {HTMLOptionElement}
 */
const DropdownMenu = _ref => {
  let {
    options
  } = _ref;
  if (Array.isArray(options) && typeof options[0] === "string") {
    const optionsSort = options.sort();
    return optionsSort.map(option => {
      return /*#__PURE__*/_react.default.createElement("option", {
        key: option
      }, option);
    });
  } else {
    const optionsSort = options.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    return optionsSort.map(option => {
      return /*#__PURE__*/_react.default.createElement("option", {
        key: option.name
      }, option.name);
    });
  }
};
exports.DropdownMenu = DropdownMenu;