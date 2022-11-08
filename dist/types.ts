export interface DropdownMenuProps {
  name: string;
  options: Array<string | optionObjectInt>;
  customClass?: string;
}

export interface optionObjectInt {
  name: string;
}

export interface optionComponentInt {
  className?: string;
  key: string;
  id: string;
}
