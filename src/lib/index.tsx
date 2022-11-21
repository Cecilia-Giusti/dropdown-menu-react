import React from "react";
import { DropdownMenuProps, optionObjectInt } from "./types/types";

export const optionsSortOject = (optionsObject: Array<optionObjectInt>) => {
  return optionsObject.sort(
    (a: { name: string | number }, b: { name: string | number }) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }

      return 0;
    }
  );
};

const DropdownMenu = ({
  name,
  options,
  customClassSelect,
  customClassOption,
  getValue,
}: DropdownMenuProps) => {
  if (typeof options[0] === "string") {
    const optionsSort = options.sort();
    return (
      <select
        name={name}
        id={name}
        className={`${customClassSelect ? ` ${customClassSelect}` : ""}`}
        data-testid={name}
        onChange={(e) => {
          getValue(e.target.value);
        }}
      >
        <option
          id={`${name}__optionChoose`}
          data-testid={`${name}__optionChoose`}
          className={`${customClassOption ? ` ${customClassOption}` : ""}`}
          value=""
        >
          --Please choose an option--
        </option>
        {optionsSort.map((option) => {
          let optionString = option as string;
          return (
            <option
              className={`${customClassOption ? ` ${customClassOption}` : ""}`}
              key={optionString}
              id={optionString}
              data-testid={optionString}
              value={optionString}
            >
              {optionString}
            </option>
          );
        })}
      </select>
    );
  } else {
    const optionsObject = options as Array<optionObjectInt>;

    const optionsSort = optionsSortOject(optionsObject);

    return (
      <select
        name={name}
        id={name}
        className={`${customClassSelect ? ` ${customClassSelect}` : ""}`}
        data-testid={name}
        onChange={(e) => {
          getValue(e.target.value);
        }}
      >
        <option
          id={`${name}__optionChoose`}
          data-testid={`${name}__optionChoose`}
          className={`${customClassOption ? ` ${customClassOption}` : ""}`}
          value=""
        >
          --Please choose an option--
        </option>
        {optionsSort.map((option) => {
          return (
            <option
              className={`${customClassOption ? ` ${customClassOption}` : ""}`}
              key={option.name}
              id={option.name}
              data-testid={option.name}
              value={option.name}
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
