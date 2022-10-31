import React from "react";

/**
 * Module
 * @function
 * @param {Array} props.options - options of dropdown
 * @return {JSX.Element[]}
 */
const DropdownMenu = (props: {
  options: Array<any>;
  customClass?: string;
}): JSX.Element[] => {
  if (Array.isArray(props.options) && typeof props.options[0] === "string") {
    const optionsSort = props.options.sort();
    return optionsSort.map((option) => {
      return props.customClass ? (
        <option className={props.customClass} key={option}>
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
        <option className={props.customClass} key={option.name}>
          {option.name}
        </option>
      ) : (
        <option key={option.name}>{option.name}</option>
      );
    });
  }
};

export { DropdownMenu };
