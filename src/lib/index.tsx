import React from "react";
import { DropdownMenuProps, optionObjectInt } from "./types";

/** */
const DropdownMenu = ({
  options,
  customClass,
}: DropdownMenuProps): JSX.Element[] => {
  if (typeof options[0] === "string") {
    const optionsSort = options.sort();
    return optionsSort.map((option) => {
      let optionString = option as string;
      return customClass ? (
        <option className={customClass} key={optionString}>
          {optionString}
        </option>
      ) : (
        <option key={optionString}>{optionString}</option>
      );
    });
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
    return optionsSort.map((option) => {
      return customClass ? (
        <option className={customClass} key={option.name}>
          {option.name}
        </option>
      ) : (
        <option key={option.name}>{option.name}</option>
      );
    });
  }
};

export { DropdownMenu };
