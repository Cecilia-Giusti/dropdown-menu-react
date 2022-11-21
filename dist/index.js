import React from "react";
export const optionsSortOject = optionsObject => {
  return optionsObject.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
};
const DropdownMenu = ({
  name,
  options,
  customClassSelect,
  customClassOption,
  getValue
}) => {
  if (typeof options[0] === "string") {
    const optionsSort = options.sort();
    return /*#__PURE__*/React.createElement("select", {
      name: name,
      id: name,
      className: `${customClassSelect ? ` ${customClassSelect}` : ""}`,
      "data-testid": name,
      onChange: e => {
        getValue(e.target.value);
      }
    }, /*#__PURE__*/React.createElement("option", {
      id: `${name}__optionChoose`,
      "data-testid": `${name}__optionChoose`,
      className: `${customClassOption ? ` ${customClassOption}` : ""}`,
      value: ""
    }, "Choose an option"), optionsSort.map(option => {
      let optionString = option;
      return /*#__PURE__*/React.createElement("option", {
        className: `${customClassOption ? ` ${customClassOption}` : ""}`,
        key: optionString,
        id: optionString,
        "data-testid": optionString,
        value: optionString
      }, optionString);
    }));
  } else {
    const optionsObject = options;
    const optionsSort = optionsSortOject(optionsObject);
    return /*#__PURE__*/React.createElement("select", {
      name: name,
      id: name,
      className: `${customClassSelect ? ` ${customClassSelect}` : ""}`,
      "data-testid": name,
      onChange: e => {
        getValue(e.target.value);
      }
    }, /*#__PURE__*/React.createElement("option", {
      id: `${name}__optionChoose`,
      "data-testid": `${name}__optionChoose`,
      className: `${customClassOption ? ` ${customClassOption}` : ""}`,
      value: ""
    }, "Choose an option"), optionsSort.map(option => {
      return /*#__PURE__*/React.createElement("option", {
        className: `${customClassOption ? ` ${customClassOption}` : ""}`,
        key: option.name,
        id: option.name,
        "data-testid": option.name,
        value: option.name
      }, option.name);
    }));
  }
};
export { DropdownMenu };