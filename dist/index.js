Object.defineProperty(exports, "__esModule", {
  value: true,
});
/**
 * Module
 * @function
 * @param {Array} options - options of dropdown
 * @returns {HTMLOptionElement}
 */
const DropdownMenu = (_ref) => {
  let { options } = _ref;
  if (Array.isArray(options) && typeof options[0] === "string") {
    const optionsSort = options.sort();
    return optionsSort.map((option) => {
      return <option key={option}>{option}</option>;
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
    return optionsSort.map((option) => {
      return <option key={option.name}>{option.name}</option>;
    });
  }
};
const _DropdownMenu = DropdownMenu;
export { _DropdownMenu as DropdownMenu };
