import React from "react";

/**
 * Module
 * @function
 * @param {Array} options - options of dropdown
 * @returns {HTMLOptionElement}
 */
const DropdownMenu = ({
  options
}) => {
  if (Array.isArray(options) && typeof options[0] === "string") {
    const optionsSort = options.sort();
    return optionsSort.map(option => {
      return /*#__PURE__*/React.createElement("option", {
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
      return /*#__PURE__*/React.createElement("option", {
        key: option.name
      }, option.name);
    });
  }
};
export { DropdownMenu };