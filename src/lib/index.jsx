import React from "react";

/**
 * Module
 * @function
 * @param {Array} options - options of dropdown
 * @returns {HTMLOptionElement}
 */
const DropdownMenu = (props) => {
  if (Array.isArray(props.options) && typeof props.options[0] === "string") {
    const optionsSort = props.options.sort();
    return optionsSort.map((option) => {
      return props.customClass ? (
        <option class={props.customClass} key={option}>
          {option}
        </option>
      ) : (
        <option key={option}>{option}</option>
      );
    });
  } else {
    const optionsSort = props.options.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }

      return 0;
    });
    return optionsSort.map((option) => {
      return props.customClass ? (
        <option class={props.customClass} key={option.name}>
          {option.name}
        </option>
      ) : (
        <option key={option.name}>{option.name}</option>
      );
    });
  }
};

export { DropdownMenu };
