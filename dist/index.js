import React from "react";
const DropdownMenu = ({
  name,
  options,
  customClass
}) => {
  if (typeof options[0] === "string") {
    const optionsSort = options.sort();
    return /*#__PURE__*/React.createElement("select", {
      name: name,
      id: name
    }, optionsSort.map(option => {
      let optionString = option;
      return customClass ? /*#__PURE__*/React.createElement("option", {
        className: customClass,
        key: optionString,
        id: optionString
      }, optionString) : /*#__PURE__*/React.createElement("option", {
        key: optionString,
        id: optionString
      }, optionString);
    }));
  } else {
    const optionsObject = options;
    const optionsSort = optionsObject.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    return /*#__PURE__*/React.createElement("select", {
      name: name,
      id: name
    }, optionsSort.map(option => {
      return customClass ? /*#__PURE__*/React.createElement("option", {
        className: customClass,
        key: option.name,
        id: option.name
      }, option.name) : /*#__PURE__*/React.createElement("option", {
        key: option.name,
        id: option.name
      }, option.name);
    }));
  }
};
export default DropdownMenu;