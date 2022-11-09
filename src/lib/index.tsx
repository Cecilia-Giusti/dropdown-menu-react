import React from "react";
import { DropdownMenuProps, optionObjectInt } from "./types/types";

const DropdownMenu = ({
  name,
  options,
  customClassSelect,
  customClassOption,
}: DropdownMenuProps) => {
  if (typeof options[0] === "string") {
    const optionsSort = options.sort();
    return (
      <select
        name={name}
        id={name}
        className={`${customClassSelect ? ` ${customClassSelect}` : ""}`}
        data-testid={name}
      >
        {optionsSort.map((option) => {
          let optionString = option as string;
          return (
            <option
              className={`${customClassOption ? ` ${customClassOption}` : ""}`}
              key={optionString}
              id={optionString}
              data-testid={optionString}
            >
              {optionString}
            </option>
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
      <select
        name={name}
        id={name}
        className={`${customClassSelect ? ` ${customClassSelect}` : ""}`}
        data-testid={name}
      >
        {optionsSort.map((option) => {
          return (
            <option
              className={`${customClassOption ? ` ${customClassOption}` : ""}`}
              key={option.name}
              id={option.name}
              data-testid={customClassOption}
            >
              {option.name}
            </option>
          );
        })}
      </select>
    );
  }
};

export { DropdownMenu };
