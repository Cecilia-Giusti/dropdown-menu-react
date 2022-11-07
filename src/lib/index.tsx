import React from "react";
import {
  DropdownMenuProps,
  optionComponentInt,
  optionObjectInt,
} from "./types";

const OptionComponent = (props: optionComponentInt) => {
  return <option {...props}>{props.id}</option>;
};

const DropdownMenu = ({ name, options, customClass }: DropdownMenuProps) => {
  if (typeof options[0] === "string") {
    const optionsSort = options.sort();
    return (
      <select name={name} id={name}>
        {optionsSort.map((option) => {
          let optionString = option as string;
          return customClass ? (
            <OptionComponent
              className={customClass}
              key={optionString}
              id={optionString}
            />
          ) : (
            <OptionComponent key={optionString} id={optionString} />
          );
        })}
      </select>
    );
  } else {
    const optionsObject = options as Array<optionObjectInt>;
    const optionsSort = optionsObject.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }

      return 0;
    });
    return (
      <select name={name} id={name}>
        {optionsSort.map((option) => {
          return customClass ? (
            <OptionComponent
              className={customClass}
              key={option.name}
              id={option.name}
            />
          ) : (
            <OptionComponent key={option.name} id={option.name} />
          );
        })}
      </select>
    );
  }
};

export { DropdownMenu };
