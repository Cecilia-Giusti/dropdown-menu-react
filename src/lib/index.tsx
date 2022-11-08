import { DropdownMenuProps, optionObjectInt } from "./types/types";

const DropdownMenu = ({ name, options, customClass }: DropdownMenuProps) => {
  if (typeof options[0] === "string") {
    const optionsSort = options.sort();
    return (
      <select name={name} id={name}>
        {optionsSort.map((option) => {
          let optionString = option as string;
          return customClass ? (
            <option
              className={customClass}
              key={optionString}
              id={optionString}
            >
              {optionString}
            </option>
          ) : (
            <option key={optionString} id={optionString}>
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
      <select name={name} id={name}>
        {optionsSort.map((option) => {
          return customClass ? (
            <option className={customClass} key={option.name} id={option.name}>
              {option.name}
            </option>
          ) : (
            <option key={option.name} id={option.name}>
              {option.name}
            </option>
          );
        })}
      </select>
    );
  }
};

export { DropdownMenu };
