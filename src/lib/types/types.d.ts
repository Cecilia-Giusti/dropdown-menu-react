export interface DropdownMenuProps {
  name: string;
  options: Array<string | optionObjectInt>;
  customClass?: string;
}

export interface optionObjectInt {
  name: string;
}
